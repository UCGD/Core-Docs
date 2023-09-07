# Version 3+

[Technical Document](https://docs.google.com/document/d/1vuGm7ywKmLhwoOGC1-ovweX0BqTvJ_dbCI-ulwFKSl0/edit?usp=sharing)

### Scope of Work
Central to processing is the UCGD concept of `scope_of_work` which is defined into the following subtypes and used as Nextflow `-entry` options


| Nextflow entry options |
| -----------------------|
| VAR |
| DGN |
| RNA |
| SV |
| JGT |
| MOSAIC |
| POST_PROCESS |

`VAR` & `DGN` will run all steps of the pipeline, including  `SV`, `JGT`, `MOSAIC` and `POST_PROCESS` steps, however `SV`, `JGT`, `MOSAIC` and `POST_PROCESS` can be run independently if required input files are present.

### Directory outlines

The final data locations will remain the same (including read-only permission).

#### Final project directories:

```
./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/UCGD
└── GRCh38
    ├── Analysis
    ├── Data
    │   └── PolishedCrams
    ├── Reports
    │   ├── alignstats
    │   ├── fastp
    │   ├── goleft
    │   ├── manta
    │   ├── mosaic
    │   ├── peddy
    │   ├── runlogs
    │   └── stats
    ├── RNASeq
    │   ├── Data
    │   │   ├── Kallisto
    │   │   └── StarBams
    │   └── Reports
    │       ├── alignstats
    │       ├── fastp
    │       ├── kallisto
    │       ├── leafcutter
    │       ├── outrider
    │       ├── rnaqc
    │       └── star
    └── VCF
        ├── Complete
        ├── GVCFs
        ├── Manta
        └── Smoove
``` 



#### Project scratch directory

```
./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/Scratch
├── modules
│   └── local
│       ├── alignstats
│       │   └── main.nf
│       ├── bcftools
│       │   ├── concat
│       │   │   └── main.nf
│       │   ├── merge
│       │   │   └── main.nf
│       │   ├── norm
│       │   │   └── main.nf
│       │   ├── stats
│       │   │   └── main.nf
│       │   └── view
│       │       └── main.nf
│       ├── fastp
│       │   └── main.nf
│       ├── fastqforward
│       │   ├── bam2gvcf
│       │   │   └── main.nf
│       │   └── fastq2bam
│       │       └── main.nf
│       ├── goleft
│       │   └── indexcov
│       │       └── main.nf
│       ├── kallisto
│       │   └── main.nf
│       ├── leafcutter
│       │   ├── bam_to_junc.nf
│       │   ├── intron_clustering.nf
│       │   └── leafcutter_md.nf
│       ├── manta
│       │   └── main.nf
│       ├── mosaic
│       │   ├── api
│       │   │   └── main.nf
│       │   ├── cli
│       │   │   └── main.nf
│       │   └── template
│       │       └── main.nf
│       ├── multiqc
│       │   └── main.nf
│       ├── outrider
│       │   └── outrider.nf
│       ├── peddy
│       │   └── main.nf
│       ├── qc
│       │   ├── rnaseqc.nf
│       │   └── run_fastqc.nf
│       ├── samtools
│       │   └── view
│       │       └── main.nf
│       ├── sentieon
│       │   ├── gvcftyper
│       │   │   └── main.nf
│       │   └── varcal
│       │       └── main.nf
│       ├── slivar
│       │   └── main.nf
│       ├── smoove
│       │   └── main.nf
│       ├── spot
│       │   └── spot.nf
│       ├── star
│       │   ├── generate_star_index.nf
│       │   ├── merge_counts.nf
│       │   └── run_star.nf
│       ├── ucgdtools
│       │   └── main.nf
│       └── vep
│           └── main.nf
├── subworkflows
│   └── local
│       ├── alignment.nf
│       ├── annotations.nf
│       ├── gvcf_generate.nf
│       ├── input_preprocess.nf
│       ├── qc_cram.nf
│       ├── qc_fastq.nf
│       ├── qc_rna.nf
│       ├── qc_vcf.nf
│       ├── sentieon_vc.nf
│       └── slivar.nf
├── ucgd_main.nf
├── ucgd.master.config
├── ucgd_post_params.yaml
└── workflows
    └── local
        ├── jgt.nf
        ├── mosaic.nf
        ├── neo.nf
        ├── project.nf
        ├── rna.nf
        ├── sv.nf
        └── var.nf
```

### Component description

| Nextflow file | Description |
|---------------|-------------|
| `ucgd_main.nf`  | The main entry point script contains all `-entry` options. |
| `ucgd.master.config ` | Contains all templated paths and definitions. |
| `ucgd_post_params.yaml` | Parameter file used to define and initiate launching of post processing steps.|
| `ucgd_versions.yml` | Created by the pipeline post processing.  Will contain all software versions for posterity. |

### Processing Overview

![Pipeline Overview](/img/processing_overview.png)

### Pipeline DAG visualisation

![DAG](/img/version_2_dag.png)

### Version Notes


##### `Version 3.24.115` Update:

Pipeline has been updated to process using [DeepVariant](https://github.com/google/deepvariant) and [GLnexus](https://github.com/dnanexus-rnd/GLnexus). Sentieon and NeoSeq processing has been removed and archived.  All NeoSeq modules remain archived.  Neoseq nextflow profile had been moved to `priority` for future use.

#### Major changes from Version 2:

* Migration to Nextflow's [DSL2](https://www.nextflow.io/docs/latest/dsl2.html) framework, which allows an improved ability to modularize and compartmentalize Nextflow processes and code.
* Nextflow process to occur and remain within the `[IRB]/[PROJECT]/Scratch` location.
* Reference GRCh38 is the default and only reference used.
* Processing based on UCGD `scope_of_work`.
