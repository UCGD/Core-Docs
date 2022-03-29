# Setup

We have updated the UCGD project request system to allow users to generate projects as needed without first interacting or contacting UCGD.  Multiple project types can be requested, all of which will be covered below.

## Project Request Outline

This guide will provide a brief outline of UCGD project creation steps:

* Fill out a [UCGD Project request](https://redcap01.brisc.utah.edu/ccts/redcap/surveys/?s=XEWFAREJ4NRTP947) providing **all required fields and manifests**.
* Projects can be saved and returned to at any time using the `Save & Return Later` option at the bottom of the screen (This can be helpful when completing manifest or collecting unknown required fields).
* Download the `Samples and people manifest`, complete and upload to submit a project (allows project creation).
* Mosaic created project will contain a globus endpoint link to allow users to upload data as needed.
* `Data File Source` does not need to be completed to submit a project, but **processing will be paused** until this manifest is provided (based on `scope of work`).
* Request page, sample/people/data manifest will be validated and errors or missing information will pause processing and issue email requests to project submitter to rectify discovered issues.

## Project Types (scope of work)

Description of the available project scope types.

| Scope of work | Name | Description |
| --------------|------| -------------|
| VAR | Standard variant calling | Standard WES/WGS processing.|
| VRC | Variant recalling / Re-Joint genotyping | Recall variants to a different reference or re-joint genotype with different parameters and/or prior files. |
| JGT | Joint genotyping | From a given selection of GVCF files, variant call to a Final VCF file. |
| ANL | Data analysis only | Only perform data analysis from previously generated data. |
| STG | Data storage only | Store genomic data, no processing by UCGD to occur. |
| SEQ | Sequencing only | Facilitate sequence transfer to Utah resources or act as middleman. |
| MOS | Mosaic project only | Only generate a Mosaic project. Future processing from this project will not occur without a new project being generated. |
| NEO | NeoSeq project only | This selection is only for current members of the NeoSeq collaboration. |

## Project Request Fields

Below is a description of each of the current UCGD project fields, please refer to this list if question arise while completing a request.

| Request Field | Description | Required |
| --------------|-------------|-----------|
| Today's Date  | This will auto populate for record keeping and update requests. | Default |
| Scope of work | Currently we have six different scopes available. Described above. |Yes|
| UCGD Analyst  | The UCGD Core analyst assisting you or conducting your analysis. Select Unknown to auto assign an analyst to your project. | Yes |
| Project descriptive term | Two word limit describing your project (only letters allowed). | Yes |
| Full Project description | Free form text description of your project. | No |
| PI First Name | First name of the project PI | Yes |
| PI Last Name | Last name of the project PI | Yes |
| PI uNID | University uNID of the project PI, or 'external' if not a member of the University of Utah. | Yes |
| PI Email | Email of the project PI | Yes |
| PI Phone Number | Phone number of the project PI | No |
| IRB Number | IRB governing project funding and controlled access. Enter 'exempt' if the project is not governed by an IRB. | Yes |
| IRB Institution | Institution governing the IRB | No |
| Reference | Which human genome based reference | Yes |
| Project Notes | Free text for users to add any additional project notes as needed. | No |
| Will this project include data analysis? | If there is analysis to be performed by a UCGD core analyst, specify here. | Yes |
| Genomic Backgrounds | Which UCGD background set to use based on access. | Yes |
| Phenotype | Comma separated list of Phenotypic terms. Ontology based terms preferred. | Yes |
| Variant Calling Framework | Currently only 'Sentieon' is available, but more will be added in time. | Yes |
| Sequence design | Data type used in project processing. | Yes |
| Sequence library preparation (PCR-free / PCR-based) | Sequence library preparation | Yes |
| Sequence source | Where sample[s] sequencing was conducted | No |
| Tissue source: were any of your samples derived from saliva? | Allows pipeline adjustment if the sequence was from a saliva based source. | Yes |
| Have you filled out a work authorization form? | Authorization form are required for Core services. | Yes |
| Which account/s to bill? | List of one or more accounts to bill services rendered. | Yes |
| Submitter is PI of project? | If the project is not being requested by the PI, additional information on who is requesting the project. | Yes |
| Submitter First Name | The first name of the submitter. | Yes |
| Submitter Last Name | The last name of the submitter. | Yes |
| Submitter uNID | The U of U UNID of the submitter. | Yes |
| Submitter Email | Valid email of the submitter. | Yes |
| Gene Set Name | Allows users to build a gene set viewable in Mosaic. | No |
| Gene Set Description | Description of the user generated gene set | Yes | 
| Gene Set | Comma Separated list of known gene ids. | Yes |
| Previous Project/s | List of previous UCGD project names when JGT scope of work is requested. | Yes |
| Samples and people manifest | Main sample manifest to download and complete for each sample to process and user to be added to Mosaic. | Yes |
| Samples and people manifest upload | Upload of the above manifests for project processing. | Yes |
| Data file Manifest | Sample ID to file mapping (file can include path to any readable locations within the CHPC protected environment).  Projects can be generated without this file, but processing will pause until a valid data file manifest is given. | Yes |

## Manifest Files

The **sample**, **people** and **data** manifests are all required for processing. 

For detailed instructions and requirements, please download each manifest and refer to the **Notes** sheet. 