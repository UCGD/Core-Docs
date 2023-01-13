# Version 3+

[Technical Document](https://docs.google.com/document/d/1vuGm7ywKmLhwoOGC1-ovweX0BqTvJ_dbCI-ulwFKSl0/edit?usp=sharing)

### Major changes from Version 2:

* Migration to Nextflow's [DSL2](https://www.nextflow.io/docs/latest/dsl2.html) framework, which allows an improved ability to modularize and compartmentalize Nextflow processes and code.
* Nextflow process to occur and remain within the `[IRB]/[PROJECT]/Scratch` location.
* Reference GRCh38 is the default and only reference used.
* Processing based on UCGD `scope_of_work`.


### Scope of Work
Central to processing is the UCGD concept of `scope_of_work` which is defined into the following subtypes and used as Nextflow `-entry` options


| Nextflow entry options |
| -----------------------|
| VAR |
| DGN |
| NEO |
| SV |
| JGT |
| MOSAIC |
| POST_PROCESS |

`VAR` & `DGN` will run all steps of the pipeline, including  `SV`, `JGT`, `MOSAIC` and `POST_PROCESS` steps, however `SV`, `JGT`, `MOSAIC` and `POST_PROCESS` can be run independently if required input files are present.

Other entries can and will be added in the future including `RNA`.


### Directory outlines

The final data locations will remain the same (including read-only permission).

#### Final project directories:

```
./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/UCGD
└── GRCh38
    ├── Analysis
    ├── Data
    │   └── PolishedCrams
    ├── Reports
    │   ├── alignstats
    │   ├── fastp
    │   ├── goleft
    │   ├── mosaic
    │   ├── peddy
    │   └── runlogs
    └── VCF
        ├── Complete
        ├── GVCFs
        ├── Manta
        └── Smoove
``` 



#### Project scratch directory

```
./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/Scratch
├── Analysis
├── BAMs
├── Fastqs
├── nextflow
│   ├── [PROJECT].config
│   ├── ucgd_main.nf
│   ├── ucgd.master.config
│   ├── ucgd_post_params.yaml
│   ├── ucgd_versions.yml
│   ├── modules
│   │   └── local
│   │       ├── alignstats
│   │       │   └── main.nf
│   │       ├── bcftools
│   │       │   ├── concat
│   │       │   │   └── main.nf
│   │       │   ├── merge
│   │       │   │   └── main.nf
│   │       │   ├── stats
│   │       │   │   └── main.nf
│   │       │   └── view
│   │       │       └── main.nf
│   │       ├── fastp
│   │       │   └── main.nf
│   │       ├── fastqforward
│   │       │   ├── bam2gvcf
│   │       │   │   └── main.nf
│   │       │   └── fastq2bam
│   │       │       └── main.nf
│   │       ├── goleft
│   │       │   └── indexcov
│   │       │       └── main.nf
│   │       ├── manta
│   │       │   └── main.nf
│   │       ├── mosaic
│   │       │   ├── api
│   │       │   │   └── main.nf
│   │       │   └── cli
│   │       │       └── main.nf
│   │       ├── multiqc
│   │       │   └── main.nf
│   │       ├── peddy
│   │       │   └── main.nf
│   │       ├── samtools
│   │       │   └── view
│   │       │       └── main.nf
│   │       ├── sentieon
│   │       │   ├── gvcftyper
│   │       │   │   └── main.nf
│   │       │   └── varcal
│   │       │       └── main.nf
│   │       ├── smoove
│   │       │   └── main.nf
│   │       ├── ucgdtools
│   │       │   └── main.nf
│   │       └── vep
│   │           └── main.nf
│   ├── subworkflows
│   │   └── local
│   │       ├── alignment.nf
│   │       ├── annotations.nf
│   │       ├── gvcf_generate.nf
│   │       ├── input_preprocess.nf
│   │       ├── qc_cram.nf
│   │       ├── qc_fastq.nf
│   │       ├── qc_vcf.nf
│   │       └── sentieon_vc.nf
│   └── workflows
│       └── local
│           ├── jgt.nf
│           ├── mosaic.nf
│           ├── sv.nf
│           └── var.nf
└── VCFs
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