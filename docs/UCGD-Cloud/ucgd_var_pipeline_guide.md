# VAR Pipeline Guide

This guide provides step-by-step instructions for setting up and running the UCGD VAR pipeline. Each input parameter for Nextflow execution is explained in detail.

---

## Prerequisites

- Access to AWS S3 buckets.
- Access to the Mosaic server.
- Access to reference FASTA and BED files.
- Access to the EC2 environment with necessary permissions.

---

## Step-by-Step Instructions

If you decide not to use the given `variant-caller.sh` script here are explanation of each prompt:

### 1. Start the Script

Run the script to initiate the setup.

### 2. Provide Required Inputs

You will be prompted to enter the following inputs interactively:

#### a. **Source File Path**
- **Prompt**: `Enter path to source file (e.g. s3://...):`
- **Description**: Full path to the source file for input.
- **Example**: `s3://your-bucket/source_files_ids.txt`

#### b. **Complete Path**
- **Prompt**: `Enter complete path (e.g. s3://...):`
- **Description**: S3 path where final output files will be stored.
- **Example**: `s3://your-bucket/`

#### c. **Mosaic Project ID**
- **Prompt**: `Enter Mosaic Project ID:`
- **Description**: Unique identifier for the Mosaic project.
- **Example**: `1685`

#### d. **Project Name**
- **Prompt**: `Enter Project Name:`
- **Description**: Human-readable project name.
- **Example**: `M1685-Project`

#### e. **Mosaic Config Server**
- **Prompt**: `Enter Mosaic config server:`
- **Description**: Mosaic server configuration URL or IP.
- **Example**: `ucgd-mosaic`

#### f. **Reference Masked FASTA**
- **Prompt**: `Enter reference masked FASTA path (alignment step):`
- **Description**: Path to the masked reference FASTA for alignment.
- **Example**: `/common/Reference/[build]/*_MASKED.fasta`

#### g. **Reference FASTA**
- **Prompt**: `Enter reference FASTA path (CRAM generation step):`
- **Description**: Path to the full reference FASTA used for CRAM generation.
- **Example**: `/common/Reference/[build]/*_.fasta`

#### h. **Align Seed Value**
- **Prompt**: `Enter align seed value (e.g. 19):`
- **Description**: Align seed value for alignment step.
- **Example**: `19`

#### i. **PCR Library Type**
- **Prompt**: `Enter PCR library type (e.g. pcr/nopcr):`
- **Description**: Specify the type of PCR library.
- **Example**: `nopcr`

#### j. **Glnexus YAML Path**
- **Prompt**: `Enter Glnexus YAML path (Deepvariant yaml):`
- **Description**: Path to Glnexus configuration YAML file.
- **Example**: `/common/Deepvariant/`

#### k. **Region BED File**
- **Prompt**: `Enter region BED file path:`
- **Description**: Path to the BED file defining regions of interest.
- **Example**: `/common/Regions/[build]`

---

## Directory Setup

1. **Work Directory**
   - Path: `/common/nextflow/$MOSAIC_PROJECT_ID`
   - Created and permissioned the needed EFS directory for Nextflow execution.

2. **Processing Directory**
   - Named: `[M]$MOSAIC_PROJECT_ID`
   - Contains the linked UCGD-Cloud codebase.

---

## Nextflow Command Construction

The following *required* parameters are assembled into a Nextflow command, but can be used to run an ad hoc process as needed:

- `--source_file`: Source input file path.
- `--complete`: Path for final outputs.
- `--mosaic_project_id`: Mosaic project identifier.
- `--mosaic_server`: Mosaic server config file name.
- `--project`: Project name.
- `--reference_masked`: Masked reference FASTA.
- `--align_seed`: Alignment seed value.
- `--pcrLibrary`: PCR library type.
- `--reference`: Full reference FASTA.
- `--glnexus_yaml`: Glnexus configuration file.
- `--regionBeds`: BED file for regions.
- `-w`: Work directory.
- `-profile cloud`: Execute using cloud profile.
- `-resume`: Resume from previous runs.

---

## Execution Confirmation

- Review the generated Nextflow command.
- Confirm execution by typing `yes`.

If confirmed:
- Logs into Docker.
- Executes the Nextflow pipeline.
- Monitors execution and reports success or failure.

If not confirmed:
- Cancels the command execution.

---

## Important Notes

- **File Validation**: Ensure all paths exist and are accessible.
- **Permissions**: Ensure necessary AWS and EC2 permissions.
- **Consistency**: Validate consistency of reference files and project setup.
- **EFS**: After process completion, you must remember to delete your `/common/nextflow/M[project]` directory, or you will incure `AWS EFS` charges.

---
