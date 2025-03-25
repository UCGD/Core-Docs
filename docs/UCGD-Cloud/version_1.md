# Pipeline

### Introduction

This first version of the AWS UCGD-Cloud Pipeline is designed for variant reannotation of existing VCF data files using the Mosaic Calypso pipeline. It is an independent pipeline and is built using our existing [UCGD-Pipeline](https://github.com/UCGD/UCGD-Pipeline) software base.

To process data in the cloud, `pcluster` is used to build the AWS infrastructure. An AMI startup script provisions the necessary `EC2` compute instance, and the same AMI is used to create a `pcluster` image for the `AWS CloudFormation` stack via `pcluster create-cluster`.

This configuration closely aligns with our current CHPC setup, though modifications to both Nextflow processes and configuration files are required.

## AWS setup and pcluster configuration

### IAM User Setup for AWS ParallelCluster

To follow AWS best practices, create a dedicated IAM user with the appropriate permissions for using `AWS ParallelCluster`:

- Review the [official AWS documentation](https://docs.aws.amazon.com/parallelcluster/latest/ug/iam-roles-in-parallelcluster-v3.html) for an overview of the necessary IAM permissions. Pay special attention to the `iam:PassRole` permission.
- For detailed guidance on configuring permissions specific to your compute environment and needs, see the [ParallelCluster configuration section](https://docs.aws.amazon.com/parallelcluster/latest/ug/iam-roles-in-parallelcluster-v3.html#iam-roles-in-parallelcluster-v3-params-for-iam).
- AWS offers a good starting point to test correct `pcluster` configuration [policies](https://docs.aws.amazon.com/parallelcluster/latest/ug/iam-roles-in-parallelcluster-v3.html#iam-roles-in-parallelcluster-v3-base-user-policy).

### VPC and Subnets

For optimal security and performance, use:

- Public VPC and subnet for head node access.
- Private VPC and subnet for compute nodes.
- Please review detailed instructions for creating both private and public [VPC](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html) and [Subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) needed for your compute environment.

### pcluster

For our implementation, a simple `t2.micro` instance stores the `pcluster` configuration files, initiates the `AWS CloudFormation` stack, and provides easy access to the head node via `pcluster ssh` command. This instance can be left running or started as needed.

***While idle, a HeadNode and a ComputeNode will remain running.***

Additionally, two versions of the `pcluster create-cluster` configuration file are available and are constantly evolving:

```
Region: us-west-2
Image:
  Os: alinux2023
HeadNode:
  InstanceType: m5a.xlarge
  Networking:
    SubnetId: subnet-<PUBLIC SUBNET>
  Ssh:
    KeyName: <IAM ACCESS KEYS>
  LocalStorage:
    RootVolume:
      Size: 150
  Image:
    CustomAmi: <UCGD SPECIFIC AMI>
Scheduling:
  Scheduler: slurm
  SlurmQueues:
    - Name: ucgd-standard
      ComputeResources:
        - Name: m5-3large
          Instances:
            - InstanceType: m5a.2xlarge
          MinCount: 1
          MaxCount: 10
      CapacityType: ONDEMAND
      Networking:
        SubnetIds:
          - subnet-<PRIVATE SUBNET>
      Image:
        CustomAmi: <UCGD SPECIFIC AMI>
    - Name: ucgd-24xlarge
      ComputeResources:
        - Name: ucgd-xlarge
          Instances:
            - InstanceType: m7i.8xlarge
          MinCount: 0
          MaxCount: 10
      CapacityType: ONDEMAND
      Networking:
        SubnetIds:
          - subnet-<PRIVATE SUBNET>
      Image:
        CustomAmi: <UCGD SPECIFIC AMI>
SharedStorage:
  - Name: UCGDEFS
    StorageType: Efs
    MountDir: /common
    EfsSettings:
      FileSystemId: <EFS ID>
```

Below is an example of an addition added to the above configuration file when requesting AWS SPOT instances.

```
    - Name: ucgd-24xlarge
      ComputeResources:
        - Name: ucgd-xlarge
          Instances:
            - InstanceType: m5n.24xlarge
          MinCount: 0
          MaxCount: 10
      CapacityType: SPOT
      AllocationStrategy: price-capacity-optimized
      Networking:
        SubnetIds:
          - subnet-0f780c14d0d08f90f
      Image:
        CustomAmi: ami-0714acd72001c3e34
```

***Additionally, the UCGD specific AMI can be supplied or built using the supplied `ucgd-cluster-setup.sh` script.***

### Key configurations:

```
* CapacityType: Supports both ONDEMAND and SPOT instances (listed above).
* HeadNode InstanceType: m5.large (suggested).
* ComputeNode InstanceType: should and can change based on compute type.
* SharedStorage: EFS, providing elastic storage that scales as needed for genomic processing.
```

***During testing, the `m5.large` node was selected as smaller options did not allow the AMI build process enough memory to complete.***

### ECR

Most `nextflow` processes use `Docker` images stored in `AWS ECR`. The following containers are currently in use:

```
ucgd/bcftools
ucgd/calypso
ucgd/calypso-slivar
ucgd/fqf
ucgd/glnexus
ucgd/ucgd_utils
```

### EFS

After testing, an [EFS](https://aws.amazon.com/efs/) drive was selected for its cost, elasticity, and ability to be correctly shared across compute nodes.

Directories therein will contain required background data and can/will be updated as needed.

The Nextflow processing directory is called `nextflow`. This directory will be where data is stored and processed. Each individual directory within should be deleted upon process completion to reduce EFS costs. Processing directories are named after the original Mosaic project by default, allowing ease of discovery when issues arise.

This is an example overview of the current directory structure used under `/common`:

```
/common
├── Calypso
├── GFF3
│   ├── GRCh37
│   └── GRCh38
├── Reference
│   ├── GRCh37
│   ├── GRCh38
│   └── homo_sapiens
│       └── GRCh38
├── Regions
│   ├── GRCh37
│   └── GRCh38
├── nextflow
│   └── [MOSAIC ID]
├── tools
└── vep_data
    └── homo_sapiens
        ├── 113_GRCh37
        └── 113_GRCh38
```

## Nextflow

A Nextflow helper script has been created and will be available on the HeadNode. When launched, it will ask a series of questions needed to correctly process.

***It is recommended to run this process in a screen session.***

```
Example of running a re-annotation, helper script will change when full pipeline is implemented.
$> ./calypso.sh

Enter VCF file S3 path:
Enter S3 path for final VCF files:
Enter Mosaic Project ID:
Enter Genomic Reference to use (GRCh38/GRCh37)
Run as singleton? (true/false)
```

The script will take the collected inputs and create a Nextflow command, then it will ask if you would like to run the displayed command.

The following steps will occur:

- A Mosaic processing directory will be created on the headnode.
- A Nextflow processing directory will be created on the EFS drive `/common/nextflow/[MOSAIC ID]` where processing output will result.

Other scripts will be available on the HeadNode. Here is a brief description of the scripts that will be used and their intended functions:

```
These scripts will be subject to change once the full pipeline is implemented, but are here for a brief overview.

$> docker-login.sh
# This script will be run at cluster creation and each Nextflow process. It allows correct docker login and ECR access on the compute node.

$> docker-purge.sh
# This script is used as needed to clean up any Docker builds on the HeadNode or elsewhere.

$> HeadNode-setup.sh
# This is the main script used to build the AMI image that pcluster will use, as well as all HeadNodes and compute nodes.
```

