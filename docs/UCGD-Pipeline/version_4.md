# Version 4+

## Introduction

This major update to the current UCGD Pipeline code base revolves around the move from REDCap to Mosaic as the centerpoint for project creation and management; fundamental backend pipeline processing code will remain the same at this time. Please refer to past updates to better understand pipeline processing steps and procedures.  

## Steps Overview.

1. User will create project in [Mosaic](https://mosaic.chpc.utah.edu/#/projects).
2. Mosaic will send `project_created` activity_type to UCGD AWS endpoint.
3. UCGD Lambda and SQS will parse and process `new_project` information.
4. UCGD will monitor and assign project attribute tasks based on information given.
5. UCGD will assign and process projects based on given `scope_of_work`.

### AWS Gateway API (webhook)

| AWS Gateway APIs | Lambda | SQS | Notes |
|------------------|--------|-----|-------|
| prod\_ucgd_api| activity_update | activity_update*  | API auto-trigger Lambda function | 
| dev\_ucgd_api | dev\_activity\_update | dev\_activity_update*  | API auto-trigger Lambda function used for development |

*`(dev_)activity_update` lambda code need to be modified for production at line 12 `dev_env = True/False` to move to production.

### AWS Lambda

| Lambda Function | Tasks |
|-----------------|-------|
| activity_process | `New project:` add data path, add globus link, add default roles, updates status to new_project. `User activities:` parses and adds to user_add or user_remove. |
| activity_update | Splits based on which Mosaic `activity_type` is given. Currently only `activity_type` used: new project, user add or remove, task completed, attributes given or catchall.  Request is parsed and added to appropriate SQS.|
| dev\_activity_process | Same as above but for development. |
| dev\_activity_update | Same as above but for development. |

### Processing Queues

Different SQS the project can be in and meaning and actions of each.

| Processing Queues | Actions | End Queue |
|-------------------|---------|-----------|
| new_project       | Mosaic: sends new project to UCGD webhook. UCGD: Adds default attributes, builds CHPC directory space, adds default CORE users, adds extra.acl file, creates ubox space, adds sample tsv file. | `built_projects` |
| built_projects | Checks current attributes, check current tasks, check for sample file upload. Checks and reset all attributes, tasks for correctness and reset tasks as needed (currently only check attributes which have `predefined_values`. | `queued_projects` |
| queued_projects | Will double check attributes and tasks each time run. Waits until the user `submits for processing`. Once submitted will build project Nextflow files and `sample_file_manifest` from received sample data. Will add it to the appropriate processing queue. Status changed to `processing`. | `SOW`* | 
| processing_projects | Runs and monitor nextflow processing will add to appropriate secondary queue complete_projects | `complete_projects` |

*scope of work (SOW).

### AWS SQS

| Queue | Notes |
|-------|-------|
| activity_update | Starting queue, automatic input from API and Lambda function. |
| activity\_update_dl | Dead letter queue for activity_update. |
| new_projects | Post activity_update queue. Held until `switchboard.py` code calls to it. |
| built_projects | Queue for project that have been build and are waiting for all attribute to be validated and tasks to be completed. |
| catchall | Current hold for all other Mosaic activity type that are not used atm. |
| complete_projects | Processing is complete held for review, etc. |
| processing | Project is currently processing. |
| queued_projects | Project is waiting to process, held for missing/incorrect attribute or project owner did not request processing to launch. |
| task_complete | Allows for task validation and reposting as needed. |
| user_add | Mosaic activity type launch when new user is added to Mosaic project. |
| user_remove | Mosaic activity type launch when user is removed from Mosaic project. |
| VAR | Scope of work queue (below).|
| VRC | Scope of work queue (below)|
| JGT | Scope of work queue (below)|
| MOSAIC | Scope of work queue (below)|
| POST_PROCESS | Scope of work queue (below)|
| RNA | Scope of work queue (below)|

### Scope Of Work

| Scope of Work | Name |
|---------------|------|
| VAR | Standard variant calling |
| VRC | Variant recalling / Re-Joint genotyping |
| JGT | Joint genotyping |
| ANL | Data analysis only |
| STG | Data storage only |
| SEQ | Sequencing only |
| DGN | Diagnostic (Runs VAR) |
| RNA | RNA-Seq project |
| POST_PROCESS | Runs post VCF analysis, i.e. VEP or Calypso |
| MOSAIC | Mosaic processing and project updating |

### Development notes

Here are a list of steps to take to move codebase and AWS from a development to production environment.

| Task | Steps |
|------|-------|
| Update from AWS lambda dev to production. | Download (as zip) all lambda dev code base, and upload to the production version. Changing the `dev_env = True` to `dev_env = False`
| Update Pipeline code on CHPC | When running code base on the commandline add the `--prod` option to all/most `src` code. | 
| Nextflow ucgd.master.config file. | Remove the comment on line 115 of ucgd.master.config to allow the `ext.args = "--prod"` line (profiles -> standard -> withLabel: localterm) to run production version. |

