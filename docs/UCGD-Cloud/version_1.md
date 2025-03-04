# Pipeline

### Introduction

This first version of the AWS UCGD-Cloud Pipeline is designed for variant reannotation of existing VCF data files using the Mosaic Calypso pipeline. It is not an independent pipeline and is build using our existing [UCGD-Pipeline](https://github.com/UCGD/UCGD-Pipeline) software base.

To process data in the cloud, `pcluster` is used to build the AWS infrastructure. An AMI startup script provisions the necessary `EC2` compute instance, and the same AMI is used to create a `pcluster` image for the `AWS CloudFormation` stack via `pcluster create-cluster`.

This configuration closely aligns with our current CHPC setup, though modifications to both Nextflow processes and configuration files are required.

## Configuration and Startup

### IAM

Following AWS best practices, create a unique IAM user with the necessary permissions to use `AWS ParallelCluster`. Refer to the [official documentation](https://docs.aws.amazon.com/parallelcluster/latest/ug/iam-roles-in-parallelcluster-v3.html) for an overview of required permissions (of importance is IAM:PassRole).

### VPC and Subnets

For optimal security and performance, use a public VPC and subnet for head node access and a private VPC and subnet for compute nodes.

### pcluster

In our implementation, a simple `t2.micro` instance stores the `pcluster` configuration files, initiates the `AWS CloudFormation` stack, and provides easy access to the head node via `pcluster ssh`. This instance can be left running or started as needed.

Additionally, two versions of the `pcluster create-cluster` configuration file are available:

- [One](https://github.com/UCGD/UCGD-Pipeline/blob/master/cloud/ucgd-cluster-demand.config) designed for `ONDEMAND` compute nodes  
- [One](https://github.com/UCGD/UCGD-Pipeline/blob/master/cloud/ucgd-cluster-spot.config) optimized for `SPOT` instances  

### pcluster Configuration

For ease of `nextflow` startup, our `pcluster` configuration ensures a minimum of one compute node running when the cluster starts, with a maximum of 20 nodes available for processing. 

***While idle, a HeadNode and a ComputeNode will remain running.***

Key configurations:

```
* CapacityType: Supports both ONDEMAND and SPOT instances (listed above).
* HeadNode InstanceType: m5.large.
* ComputeNode InstanceType: m5zn.3xlarge.
* SharedStorage: EFS, providing elastic storage that scales as needed for genomic processing.
```

***During testing, the `m5.large` node was selected as smaller options did not allow the AMI build process enough memory to complete.***

AWS `pcluster` documentation can be found [here](https://docs.aws.amazon.com/parallelcluster/latest/ug/cluster-configuration-file-v3.html).  

UCGD `pcluster` configuration files for both image creation and `AWS CloudFormation` can be found [here](https://github.com/UCGD/UCGD-Pipeline/tree/master/cloud).

### ECR

Most `nextflow` processes use `Docker` images stored in `AWS ECR`. The following containers are currently in use:

```
ucgd/bcftools
ucgd/calypso
ucgd/calypso-slivar
ucgd/multiqc
```

Reviewing each of the Nextflow processes and the [ucgd.cloud.config](https://github.com/UCGD/UCGD-Pipeline/blob/master/ucgd.cloud.config) configuration file will allow you to correctly build the images as needed. Additional software required for processing is built into the AMI instance and is noted in the configuration files as `withLabel: localterm`.

### EFS

After testing, an EFS drive was selected for its cost, elasticity, and ability to be correctly shared across compute nodes.

All of the directories therein contain required background data and will be updated as needed.

The Nextflow processing directory is called `nextflow`. This directory will be where data is stored and processed. Each individual directory within should be deleted upon process completion to reduce EFS costs. Processing directories are named after the original Mosaic project by default, allowing ease of discovery when issues arise.

## Nextflow

A Nextflow helper script has been created and will be available on the HeadNode. When launched, it will ask a series of questions needed to correctly process.

***It is recommended to run this process in a screen session.***

```
$> ./calypso.sh

Enter VCF file S3 path:
Enter S3 path for final VCF files:
Enter Mosaic Project ID:
Enter Genomic Reference to use (GRCh38/GRCh37)
Run as singleton? (true/false)
```

The script will take the collected inputs and create a Nextflow command, then it will ask if you would like to run the displayed command.

A Mosaic processing directory will be created, both on the HeadNode and within the `/common/nextflow` directory where processing output will occur.

Other scripts will be available on the HeadNode. Here is a brief description of the scripts that will be used and their intended functions:

```
$> docker-login.sh
# This script will be run at cluster creation and each Nextflow process. It allows correct docker login and ECR access on the compute node.

$> docker-purge.sh
# This script is used as needed to clean up any Docker builds on the HeadNode or elsewhere.

$> HeadNode-setup.sh
# This is the main script used to build the AMI image that pcluster will use, as well as all HeadNodes and compute nodes.
```

