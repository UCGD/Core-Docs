---
id: Resource Overview
toplevel: true
title: Resource Overview
---

[Node Specifications]

### Interactive Login nodes

-   redwood4.chpc.utah.edu
    -   Dell R815 Server
    -   64 cores per node
    -   AMD Opteron Processor 6380
    -   512 GB of RAM
-   redwood9.chpc.utah.edu
    -   Dell R815 Server
    -   64 cores per node
    -   AMD Opteron Processor 6380
    -   512 GB of RAM
-   redwood3.chpc.utah.edu (recharge center use only)\
    -   Dell R730 Server
    -   40 cores per node
    -   Intel Xeon Gold 6148
    -   768 GB of RAM
-   redwood6.chpc.utah.edu (recharge center use only)
    -   Dell R730 Server
    -   40 cores per node
    -   Intel Xeon E5-2698 v4
    -   768 GB of RAM

### Job Submissions Nodes

-   28 Dell R630 Servers (non-interactive nodes)
    -   20 cores per node
    -   Intel(R) Xeon(R) CPU E5-2670 v2 @ 2.50GHz
    -   128 GB of RAM
-   [28 Dell R430 Servers (non-interactive
    nodes)]
    -   24 cores per node
    -   Intel(R) Xeon(R) CPU E5-2680 v3 @ 2.50GHz
    -   128 GB of RAM
-   [28 Dell R440 Servers (non-interactive
    nodes)]
    -   32 cores per node
    -   Intel(R) Xeon(R) Gold 6130 CPU @ 2.10GHz
    -   128 GB of RAM

# Node Access

-   Login to nodes (Note: require [multi-factor
    authentication](https://www.chpc.utah.edu/documentation/software/duo.php))
  
    ```
    ssh <UID>@redwood4.chpc.utah.edu #interactive/login node 1
    ssh <UID>@kingspeak19.chpc.utah.edu #interactive/login node 2
    ```

-   Interactive access to job submission nodes (from login node):

    ```
    srun --pty -A ucgd-rw -p ucgd-rw -t 01:00:00 -N 1 /bin/bash #standard SLURM command
    idev -A ucgd-rw #alternate convenience command
    ```

# Storage Specifications

### [DDN Lustre (protected environment)]

-   1 PB (usable)
-   2 MDS (virtualized), 4 OSS, 14 OST
-   /scratch/ucgd/lustre\
    -   Data \$REPOSITORY and recharge center processing location
    -   Read only access for all non-recharge center work

### Intel Lustre (protected environment)

-   1.7 PB (usable)

-   2 MDS, 4 OSS, 48 OST

-   /scratch/ucgd/lustre-work

    -   User \$SCRATCH and \$WORK directories located here (SCRATCH is
        cleaned periodically)
    -   600TB and 200 million files group hardlimit quota
    -   200TB and 50 million file user hardlimit quota

### Isilon (general environment)

-   390 TB (usable)
-   $HOME directories (Yandell, Marth, and Quinlan lab members)
    -   Snapshots enabled (once per hour for 24 hours and once per day
        for a week)
    -   Smart quota\'s enabed\
        *Advisory: 0.9TB *
        *Softlimit: 1.0TB *
        *Hardlimit: 2.0TB *
        *GracePeriod: 7 Days*
-   /uufs/chpc.utah.edu/common/home/yandell-ucgdstor
    -   Accessible to group yandell
    -   Hardlimit quota set at 100TB
-   /uufs/chpc.utah.edu/common/home/marth-ucgdstor
    -   Accessible to group marth
    -   Hardlimit quota set at 100TB
-   /uufs/chpc.utah.edu/common/home/quinlan-ucgdstor
    -   Accessible to group quinlan
    -   Hardlimit quota set at 100TB

### NFS (general environment)

-   175 TB (usable)
-   /scratch/ucgd/serial
-   UCGD work and archive space
