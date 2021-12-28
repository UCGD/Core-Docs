# Introduction

The UCGD-Pipeline is our fully automated WGS/WES processing pipeline which at a high-level does the following:

* Is fully automated from project creation to file availability.
* Accepts input files of BAM/CRAM/Fastq or a combination of each.
* Utilizes multiple modern QC tools.
* Uses [Sentieon](https://www.sentieon.com) based software following
    GATK best practice approach.
* Processes using [Nextflow](https://www.nextflow.io), a DSL workflows
    language, and utilizes CHPC HPC compute resources.
* Uses container ([Docker](https://www.docker.com/) &
    [Singularity](https://sylabs.io/docs/)) based software for all processing.
* Can use any number of background files for joint-genotyping.

