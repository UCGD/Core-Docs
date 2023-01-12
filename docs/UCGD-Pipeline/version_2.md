# Version 2+

### Overview

The UCGD-Pipeline will automatically detect projects set to `queued` in the UCGD database, and process them to completion.  Once completed it will upload the project to the [UCGD version of Mosaic](https://mosaic.chpc.utah.edu/#/projects) for access and review.

### Project setup

As of version 2.13.77+ all projects are expected to be setup using the [UCGD REDCap Project page](https://redcap.link/ucgd)

### Automated description

All project processing will run on an automatic hourly cron check, but the following gives a detailed description of actions the `UCGD-Pipeline` performs.

*Currently still available as a separate branch of the UCGDPipeline github repository []. As of Jan, 2023, Version 2 is the only method available to process GRCh37 projects.*
