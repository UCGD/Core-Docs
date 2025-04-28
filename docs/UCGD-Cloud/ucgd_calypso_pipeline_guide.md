# Calypso Re-Annotation Pipeline Guide

This guide provides step-by-step instructions for setting up and running the UCGD Calypso re-annotation pipeline, or to run Nextflow as needed independent of the created bash script. Each input parameter for Nextflow execution is explained in detail.

---

## Prerequisites

- Access to AWS S3 buckets.
- Access to the Mosaic server.
- Basic understanding of genomic references (GRCh38/GRCh37).
- Access to the EC2 environment with necessary permissions.

---

## Step-by-Step Instructions

If you not decide to use the given `calypso.sh` script here are explanations of each prompt:

### 1. Start the Script

Run the script to initiate the setup.

### 2. Provide Required Inputs

You will be prompted to enter the following inputs interactively:

#### a. **VCF File Path**
- **Prompt**: `Enter S3 path including VCF file:`
- **Description**: Full S3 path where your input VCF file is located.
- **Example**: `s3://your-bucket/input.vcf`

#### b. **Final VCF Path**
- **Prompt**: `Enter S3 path for final VCF files:`
- **Description**: S3 path where the output/final VCF files will be stored.
- **Example**: `s3://your-bucket/`

#### c. **Mosaic Project ID**
- **Prompt**: `Enter Mosaic Project ID:`
- **Description**: Unique project identifier in Mosaic.
- **Example**: `1685`

#### d. **Project Name**
- **Prompt**: `Enter Project name:`
- **Description**: Human-readable name for the project.
- **Example**: `M1685-Project`

#### e. **Mosaic Config Server**
- **Prompt**: `Enter Mosaic config server:`
- **Description**: URL or IP address of the Mosaic server configuration.
- **Example**: `ucgd-mosaic`

#### f. **Genomic Reference**
- **Prompt**: `Enter Genomic Reference to use (GRCh38/GRCh37)`
- **Description**: Choose the genomic reference build.
- **Options**: `GRCh38` or `GRCh37`

#### g. **Run as Singleton**
- **Prompt**: `Run as singleton? (true/false)`
- **Description**: Indicates whether to process samples as singletons.
- **Options**: `true` or `false`

---

## Directory Setup

1. **Work Directory**
   - Path: `/common/nextflow/$MOSAIC_PROJECT_ID`
   - Created and permissioned the needed EFS directory for Nextflow execution.

2. **Processing Directory**
   - Named: `[M]$MOSAIC_PROJECT_ID`
   - Contains the linked Nextflow output.

---

## Nextflow Command Construction

The following *required* parameters are assembled into a Nextflow command, but can be used to run an ad hoc process as needed:

- `--vcf`: Path to input VCF.
- `--complete`: Path for final VCF output.
- `--mosaic_project_id`: Mosaic project identifier.
- `--mosaic_server`: Mosaic server config file name.
- `--project`: Project name.
- `--genome`: Genomic reference (GRCh38/GRCh37).
- `-params-file`: Pipeline parameters file.
- `--singleton`: Whether processing as singleton.
- `-w`: Work directory.
- `-profile cloud`: Execute using cloud profile.
- `-with-trace`: Enable tracing.
- `-resume`: Resume from existing checkpoints.

---

## Execution Confirmation

- Review the generated Nextflow command.
- Confirm execution by typing `yes`.

If confirmed:
- Logs into Docker.
- Executes Nextflow pipeline.
- Monitors execution and reports success or failure.

If not confirmed:
- Cancels the command execution.

---

## Important Notes

- **Permissions**: Ensure necessary AWS and EC2 permissions.
- **Storage**: Validate available storage on EFS and S3.
- **Reference Genome**: Consistency between input VCF and selected reference.
- **EFS**: After process completion, you must remember to delete your `/common/nextflow/M[project]` directory, or you will incure `AWS EFS` charges.

---
