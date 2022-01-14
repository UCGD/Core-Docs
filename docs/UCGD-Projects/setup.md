# Setup

We have updated the UCGD project request system to allow users to generate projects as needed without first interacting with UCGD.  Multiple project types can be requested, all of which will be covered below.

## Project Request Outline:

This guide will provide an breaf outline of UCGD project creation steps:

* Fill out a [UCGD Project request](https://redcap01.brisc.utah.edu/ccts/redcap/surveys/?s=XEWFAREJ4NRTP947) providing **all required fields and manifests**.
* Projects can be saved and returned to at any time using the `Save & Return Later` option at the bottom of the screen (This can be helpful when completing manifest or collecting unknown required fields).
* Download the `Samples and people manifest`, complete and upload to submit a project (allows project creation).
* Mosaic created project will contain a globus endpoint link to allow users to upload data as needed.
* `Data File Source` does not need to be completed to submit a project, but **processing will be paused** until this manifest is provided (based on `scope of work`).
* Request page, sample/people/data manifest will be validated and errors or missing information will pause processing and issue email requests to project submitter to rectify discovered issues.


## Project Request Fields:


| Request Field | Description | Required | Scope Available |
| --------------|-------------|-----------|-----------------|
| Date  | This will auto populate for record keeping and update requests. | Default |All |
| UCGD Analyst  | The UCGD Core analyst assisting you or conducting your analysis. Select Unknown to have UCGD assign an analyst to you. | Yes | All |
| Project description | Free text description of your project. | No | All |
| Scope of work | Currently we have six different scopes available. Described below |Yes||
| Project descriptive term | UCGD will assign an auto generated project name but this name will be added to Mosaic to allow owner specificity. | No | All |
| Mosaic Project Name | A users given name for a Mosaic only project (MOS) | Yes (MOS ) | MOS |
| Will this project include data analysis? | If there is analysis to be performed by a UCGD core analyst, specify here. |Yes| Varied |
| Genomic Backgrounds | Which UCGD background set to use based on access. | Yes | Varied |
| Phenotype | Comma separated list of Phenotypic terms. Ontology based terms preferred. | Yes | All |
| PI First Name | First name of the project PI | Yes | All |
| PI Last Name | Last name of the project PI | Yes | All |
| PI uNID | University uNID of the project PI, or 'external' if not a member of the University of Utah. | Yes | All |
| PI Email | Email of the project PI | Yes | All |
| PI Phone Number | Phone number of the project PI | No | All |
| IRB Number | IRB governing project funding and controled access. | Yes | All|
| IRB Institution | Institution governing the IRB | No | All |
| Variant Calling Framework | Currently only 'Sentieon' is available, but more will be added in time. | Yes | All |
| Sequence design | Data type used in project processing. | Yes | All |
| Sequence library preparation (PCR-free / PCR-based) | Sequence library preparation | Yes | Varied |
| Sequence source | Where sequencing was conducted | No | Varied |
| Tissue source: were any of your samples derived from saliva? | Allows pipeline adjustment if the sequence was from a saliva based source. | Yes | Varied |
| Reference | Which human genome based reference | Yes | All |
| Project Notes | Free text for users to add any additional project notes. | No | All |
| Have you filled out a work authorization form? | Authorization form are required for Core services. | Yes | All |
| Which account/s to bill? | List of one or more accounts to bill services rendered. | Yes | All|
| Submitter is PI of project? | If the project is not being requested by the PI, additional information on who is requesting the project. | Yes | All |
| Gene Set Name | Allows users to build a gene set viewable in Mosaic. | No | All |
| Samples and people manifest | Main sample manifest to download and complete for each sample to process and user to be added to Mosaic. |||
| Samples and people manifest upload | Upload of the above manifests for project processing. | Yes | All |
| Data file Manifest | Sample ID to file mapping (file can include path to any readable locations within the CHPC protected environment).  Projects can be generated without this file, but processing will pause until a valid data file manifest is given. | Yes | All |

## Project Types (scope of work):

Description of the available project scope types.

| Scope of work | Name | Description |
| --------------|------| -------------|
| VAR | Standard variant calling | Standard WES/WGS processing.|
| VRC | Variant recalling / Re-Joint genotyping | Recall variants to a different reference or re-joint genotype with different paramater and/or prior files. |
| JGT | Joint genotyping | From a given selection of GVCF files, variant call to a Final VCF file. |
| ANL | Data analysis only | Only perform data analysis from previously generated data. |
| STG | Data storage only | Store genomic data, no processing by UCGD to occur. |
| SEQ | Sequencing only | Facilitate sequence tranfer to Utah resorces or act as middleman. |
| MOS | Mosaic project only | Only generate a Mosaic project. Future processing from this project will not occur without a new project being generated. |
| NEO | NeoSeq project only | This selection is only for current members of the NeoSeq collaboration. |
