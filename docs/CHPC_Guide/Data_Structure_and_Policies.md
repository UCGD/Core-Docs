---
id: Data_Structure_and_Policies
toplevel: true
title: Data Structure and Policies
---

## UCGD Directory Structure

- $COMMON is a non-lustre directory for shared applications and data

        /uufs/chpc.utah.edu/common/PE/proj_UCGD/
          or
        /uufs/chpc.utah.edu/common/PE/proj_UCGDCollab/
        ├──apps
        ├──modulefiles
        ├──data
        ├──lustre_ACLs
        └──shell_scripts

    apps - Installed applications and modules.<br/>
    modulefiles - Configuration files for application in apps (used by lmod).<br/>
    data - Shared datasets used by apps (i.e. GATK Bundles)<br/>
    lustre_ACLs - ACL scripts applied to lustre<br/>
    shell_scripts - Template scripts for jobs, prelaunch/postlaunch scripts, and environmental scripts (bashrc, bash_profile, etc).


- Recharge Center Lustre

        /scratch/ucgd/lustre/
        ├──common
        │   └──data #synced with …/proj_UCGD/common/data
        ├──Purgatory
        ├──UCGD_Analysis
        ├──UCGD_Processing
        ├──UCGD_Datahub
        │   └──Repository
        └──work
            └──proj_UCGD
                └──u0123456

    common/data - Fast IO sync of $COMMON/data<br/>
    Purgatory - Holding place for data waiting to be deleted (see if anyone complains before emptying the trash)<br/>
    UCGD_Analysis - Project directories for UCGD analysts<br/>
    UCGD_Processing - Working directory for data download and pipeline processing<br/>
    UCGD_Datahub - Final storage location of data. Served up by Gnomex.


- UCGD legacy Lustre

        /scratch/ucgd/lustre-work/
        ├──marth
        │   └──u0123456
        ├──quinlan
        │   └──u0123456
        └──yandell
            └──u0123456

    marth, quinlan, yandell - Each lab in the UCGD gets a group work directory with a hard quota of 600TB and 200 million files (200TB and 50 million file user limit)<br/>
    temp - An unlimited work location for temporary files and data. Will be cleaned aggressively.


- Isilon (general environment)

        /uufs/chpc.utah.edu/common/home/
        ├── marth-ucgdstor
        ├── quinlan-ucgdstor
        └── yandell-ucgdstor

marth, quinlan, yandell - Each lab in the UCGD gets a group work directory with 100TB of storage.


- UCGD Serial (general environment)

        /scratch/ucgd/serial/

Space is currently being used by the UCGD-SRC group as a temporary storage space as we finalize other storage options. 175 TB of storage.

Contact Carson Holt if you have questions about this space.


## CEPH Storage

The CEPH object storage is used to archive data in UCGD_Datahub under
PolishedBams directories. AS long as result files are lossless, they
function as an archive of the original Primary_Data files. You can
access CEPH archives using rclone.

See documentation on how to setup and use Rclone:
[CHPC Documentation on Rclone](https://www.chpc.utah.edu/documentation/software/rclone.php)


## UCGD_Datahub Repository Policies

1. No softlinks in Primary_Data or Project_Setup unless it's to another
   Primary_Data or PolishedBams file directory.
2. No softlinks in PolishedBams unless it's to another PolishedBams
   file.
3. No Primary or Polished data should be inside ExternalData unless
   it's a softlink.
4. PolishedBams and not Primary_Data is what gets backed up
   (Primary_Data is considered a temporary directory).
5. 3 months after Billing, Primary_Data and Project_Setup get deleted
   after meeting the following criteria.
   1. All files in PolishedBams have been lossless validated
   2. All PolishedBam files have been backed up to CEPH storage
   3. Immutable bit is set on PolishedBams
6. PolishedBams are always CRAM and not BAM.
7. 3 years after billing project is retired and all data removed.
