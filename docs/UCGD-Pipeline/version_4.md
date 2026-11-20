# Version 4+

## Introduction

This major update to the current UCGD Pipeline code base revolves around the move from REDCap to Mosaic as the central point for project creation and management; fundamental backend pipeline processing code will remain the same at this time. Please refer to past updates to better understand pipeline processing steps and procedures.

## Steps Overview

1. The user creates a project in [Mosaic](https://mosaic.chpc.utah.edu/#/projects).
2. Mosaic will send `project_created` activity_type to UCGD AWS endpoint.
3. UCGD Lambda and SQS will parse and process `new_project` information.
4. UCGD will monitor and assign project attribute tasks based on information given.
5. UCGD will assign and process projects based on given `scope_of_work`.

### AWS Gateway API (webhook)

| AWS Gateway APIs | Lambda | SQS | Notes |
|------------------|--------|-----|-------|
| prod\_ucgd_api| activity_update | activity_update*  | API auto-trigger Lambda function | 
| dev\_ucgd_api | dev\_activity\_update | dev\_activity_update*  | API auto-trigger Lambda function used for development |

*`(dev_)activity_update` Lambda code needs to be modified for production at line 12 `dev_env = True/False` to move to production.

### AWS Lambda

| Lambda Function | Tasks |
|-----------------|-------|
| activity_process | `New project:` add data path, add globus link, add default roles, updates status to new_project. `User activities:` parses and adds to user_add or user_remove. |
| activity_update | Splits based on which Mosaic `activity_type` is given. Activity types currently used: new project, user add or remove, task completed, attributes given, or catchall. The request is parsed and added to appropriate SQS.|
| dev\_activity_process | Same as above but for development. |
| dev\_activity_update | Same as above but for development. |

### Processing Queues

The SQS queues a project can be in, and the meaning and actions of each.

| Processing Queues | Actions | End Queue |
|-------------------|---------|-----------|
| new_project       | Mosaic: sends new project to UCGD webhook. UCGD: Adds default attributes, builds CHPC directory space, adds default CORE users, adds extra.acl file, creates ubox space, adds sample tsv file. | `built_projects` |
| built_projects | Checks current attributes and tasks, and checks for a sample file upload. Checks all attributes and tasks for correctness and resets tasks as needed (currently only checks attributes that have `predefined_values`). | `queued_projects` |
| queued_projects | Double-checks attributes and tasks on each run. Waits until the user `submits for processing`. Once submitted will build project Nextflow files and `sample_file_manifest` from received sample data. Will add it to the appropriate processing queue. Status changed to `processing`. | `SOW`* | 
| processing_projects | Runs and monitors Nextflow processing, then adds the project to the complete_projects queue. | `complete_projects` |

*scope of work (SOW).

### AWS SQS

| Queue | Notes |
|-------|-------|
| activity_update | Starting queue, automatic input from API and Lambda function. |
| activity\_update_dl | Dead letter queue for activity_update. |
| new_projects | Post activity_update queue. Held until `switchboard.py` code calls to it. |
| built_projects | Queue for projects that have been built and are waiting for all attributes to be validated and tasks to be completed. |
| catchall | Current hold for all other Mosaic activity types that are not currently used. |
| complete_projects | Processing is complete; held for review, etc. |
| processing | Project is currently processing. |
| queued_projects | Project is waiting to process, held for missing/incorrect attribute or project owner did not request processing to launch. |
| task_complete | Allows for task validation and reposting as needed. |
| user_add | Mosaic activity type launched when a new user is added to Mosaic project. |
| user_remove | Mosaic activity type launched when a user is removed from Mosaic project. |
| VAR | Scope of work queue (below).|
| VRC | Scope of work queue (below). |
| JGT | Scope of work queue (below). |
| MOSAIC | Scope of work queue (below). |
| POST_PROCESS | Scope of work queue (below). |
| RNA | Scope of work queue (below). |

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
| POST_PROCESS | Runs post-VCF analysis, e.g., VEP or Calypso |
| MOSAIC | Mosaic processing and project updating |

### Development notes

Here is a list of steps to move the codebase and AWS from a development to production environment.

| Task | Steps |
|------|-------|
| Update from AWS lambda dev to production. | Download (as a zip) the Lambda dev codebase and upload it to the production version, changing `dev_env = True` to `dev_env = False`
| Update Pipeline code on CHPC | When running the codebase on the command line, add the `--prod` option to all/most `src` code. | 
| Nextflow ucgd.master.config file. | Remove the comment on line 115 of ucgd.master.config to allow the `ext.args = "--prod"` line (profiles -> standard -> withLabel: localterm) to run production version. |

