---
id: Submitting_and_Running_Jobs
toplevel: true
title: Submitting and Running Jobs
---

[Batch File Basics]

CHPC uses the SLURM queue manager. Jobs are submitted to the clusters
using the sbatch command together with a batch file.

-   A template batch file can be found here \--\>
    \$SCRIPTS/template_slurm_batch.sh

Please see [CHPC's documentation on how to build and submit a batch
script in
SLURM](https://www.chpc.utah.edu/documentation/software/slurm.php)


Jobs at CHPC must be submitted using an account and a partition. [There
are several clusters at CHPC each with specific accounts and associated
partitions available (some are only available to specific
labs).]


+----------------+----------------+----------------+----------------+
| Redwood        | Notchpeak      | Kingspeak      | Ash Cluster    |
| Cluster        | Cluster        | Cluster        |                |
+----------------+----------------+----------------+----------------+
| ::: table-wrap | ::: table-wrap | ::: table-wrap | ::: table-wrap |
|                |   ----         |   ----         |   ----------   |
| -------------  | --------- ---- | --------- ---- | ---- --------- |
| -------------- | -------------- | -------------- | -------------- |
| -------------- | -------------- | -------------- |   Accounts     |
|   Account      |   Account      |   Account      |        Associa |
| s      Associa | s      Associa | s      Associa | ted Partitions |
| ted Partitions | ted Partitions | ted Partitions |   smithp-gue   |
|   ucgd-rw      |   ya           |   ya           | st   ash-guest |
|        ucgd-rw | ndell       no | ndell       ki |   ----------   |
|   marth-rw     | tchpeak, notch | ngspeak, kings | ---- --------- |
|       marth-rw | peak-freecycle | peak-freecycle | -------------- |
|   quinlan-rw   |   ma           |   ma           | :::            |
|     quinlan-rw | rth         no | rth         ki |                |
|   yandell      | tchpeak, notch | ngspeak, kings |                |
|   redwood, red | peak-freecycle | peak-freecycle |                |
| wood-freecycle |   qu           |   qu           |                |
|   marth        | inlan       no | inlan       ki |                |
|   redwood, red | tchpeak, notch | ngspeak, kings |                |
| wood-freecycle | peak-freecycle | peak-freecycle |                |
|   quinlan      |   o            |   o            |                |
|   redwood, red | wner-guest   n | wner-guest   k |                |
| wood-freecycle | otchpeak-guest | ingspeak-guest |                |
|                |   ----         |   ----         |                |
|  owner-guest   | --------- ---- | --------- ---- |                |
|  redwood-guest | -------------- | -------------- |                |
|                | -------------- | -------------- |                |
| -------------  | :::            | :::            |                |
| -------------- |                |                |                |
| -------------- |                |                |                |
| :::            |                |                |                |
+----------------+----------------+----------------+----------------+


[Partitions named for the cluster (i.e. redwood, notchpeak, and
kingspeak) are only available if you were given a CPU-hour allocation
after submitting a project proposal to CHPC. These jobs run on nodes
owned directly by CHPC. The similarly named 'freecycle' partitions,
however, are available to anyone, but 'freecycle' jobs will only run
on idle nodes and will be preempted if resources are requested by any
other users with available CPU-hour allocation. The 'guest' partitions
run on idle machines owned by other labs (not CHPC owned machines). They
are also preemptable, but tend to be more idle than the 'freecycle'
partition.]

[Please only use the ucgd-rw account for UCGD related jobs. If you want
to submit non-UCGD jobs, please use
the [owner-guest](https://www.chpc.utah.edu/documentation/policies/2.1GeneralHPCClusterPolicies.php#Pol2.1.4) account
to make your jobs preemtable. You can also use SLURM's feature
specifier tag (-C option) and exclude tag (-x option) to request or
exclude certain sets of nodes in a job request. You can also use the
string \"c20\", \"c24\", or \"c32\" together with the specifier tag (-C
option) to request only nodes with 20, 24, or 32 CPUs respectively (use
'sinfo -o %f' command to see all available features that can be
specified).\
]



**Example**



```
#!/bin/bash
#SBATCH -t 24:00:00        #time
#SBATCH -N 1               #number of nodes
#SBATCH -A owner-guest     #account
#SBATCH -p redwood-guest   #partition
#SBATCH -J test_job        #job name
#SBATCH -C hci,c32         #feature specifier
#sbatch -x rw[040-071     ]#node exclusion
```



[Interactive Jobs]

[Jobs submitted via sbatch will be non-interactive, i.e. you won't have
an attached terminal. To get an interactive session you can use the
'srun' command, but it requires quite a few options, so we created the
'idev' command to make it easier to generate interactive development
jobs (note that XSEDE resources also have an idev command which ours is
based off of):]



    Usage:
         idev [OPTIONS]

    Options:
         -A     <STRING>   Sets account name (default: smithp-guest)
         -M     <STRING>   Sets cluster name (default: ash)
         -m     <INT>      Sets time in minutes (default: 60, max: 4360)
         -n     <INT>      Sets number of nodes (default: 1)
         -p     <INT>      Sets number of procs (use instead of -n)
         -C     <STRING>   features to use as node filter (see man sbatch)
         -x     <STRING>   Exclude specific nodes (see man sbatch)
         -help|?           Displays this help message



[The default account/partition for idev will be your lab account. If you
want to alter idev's default settings, copy the
/scratch/ucgd/lustre/ugpuser/shell/idevrc file to \~/idevrc and edit
it's contents (Note: this is identical to how you would edit idev
defaults on XSEDE resources).]
