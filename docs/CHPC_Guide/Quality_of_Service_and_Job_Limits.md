---
id: Quality_of_Service_and_Job_Limits.md
toplevel: true
title: Quality of Service and Job Limits
---

In SLURM you can set up Quality of Service (QOS) rules to enforce
resource limits (maximum jobs per user, CPUs, runtime, etc.) as well as
scheduling priorities. We use QOS rules to ensure equitable access to
resources among UCGD users. The QOS you wish to use is specified using
the '\--qos' option in your batch submission. In the absence of a
specific '\--qos' option in the batch script, a default is applied.

# Default

Access to UCGD resources (i.e ucgd-rw account/partition) are limited to
UCGD members, and jobs submitted on those resources are limited to a
maximum wall clock of 24 hours. Also users are limited to 28 active jobs
with a total group limit of 42 active jobs (half the nodes). For longer
running jobs, collaborator access to UCGD resources, or access to more
idle resources there are additional QOS's outlined below that can lift
some restriction.



**Example**



```
#!/bin/bash
#SBATCH -t 24:00:00   #time
#SBATCH -N 1          #number of nodes
#SBATCH -A ucgd-rw    #account
#SBATCH -p ucgd-rw    #partition
#SBATCH --qos ucgd-rw #QOS
#SBATCH -J test_job   #job name
```



# Long Running Jobs

Jobs of up to 96 hours (4 days) are allowed on UCGD resources by adding
the \"#SBATCH \--qos ucgd-long-kp\" parameter at the top of your job. A
maximum of 21 jobs can run in this QOS per user and 28 per group (i.e.
one-third of the UCGD nodes). This limitation ensures that long running
jobs do not completely tie up all nodes on the cluster for several days.



**Example**



```
#!/bin/bash
#SBATCH -t 96:00:00        #time
#SBATCH -N 1               #number of nodes
#SBATCH -A ucgd-rw         #account
#SBATCH -p ucgd-rw         #partition
#SBATCH --qos ucgd-long-rw #QOS
#SBATCH -J test_job        #job name
```



# Low Priority Jobs

If a user wishes to submit jobs to all idle UCGD nodes without a cap on
the number of active jobs (either user or group limits), [they can
submit jobs to a low priority QOS (\"#SBATCH \--qos
ucgd-low-rw\")]. With this QOS, your jobs
will always be at the back of the queue compared to other users, and
your job is preemptable to high priority clinical jobs, but the trade
off is you can use all idle resources. Time limit maximum is also lower
than the default QOS (8 hours).



**Example**



```
#!/bin/bash
#SBATCH -t 8:00:00       #time
#SBATCH -N 1              #number of nodes
#SBATCH -A ucgd-rw        #account
#SBATCH -p ucgd-rw        #partition
#SBATCH --qos ucgd-low-rw #QOS
#SBATCH -J test_job       #job name
```



# Collaborator Access

Collaborators can access UCGD resources in a limited fashion, but to do
so they must first be added to the ucgdcollaborator group. Lab managers
can request that individuals be added to the ucgdcollaborator group with
ucgd-guest-rw QOS access by submitting a ticket including the
collaborator's name and UID to the [https://jira.chpc.utah.edu CHPC
Service
Desk](https://jira.chpc.utah.edu%20CHPC%20Service%20Desk).
By adding \" #SBATCH \--qos ucd-guest-kp\" to the top of their batch
scripts, members of the group ucgdcollaborator can submit jobs on up to
7 nodes per user (group limit is 14) with a 24 hour wall clock maximum.
Collaborators may also be given limited (usually Read-Only) access to
files and projects (contact Shawn, Barry, or Carson to modify the access
control lists). As a CHPC user they will have write access to the
general Lustre space at /scratch/mamoth/serial and should do analyses
there rather than on /scratch/ucgd/lustre.



**Example**



```
#!/bin/bash
#SBATCH -t 24:00:00         #time
#SBATCH -N 1                #number of nodes
#SBATCH -A ucgd-rw          #account
#SBATCH -p ucgd-rw          #partition
#SBATCH --qos ucgd-guest-rw #QOS
#SBATCH -J test_job         #job name
```



# [Production Access]

[There are two QOS options that are specifically available to the data
production team: ucgd-prod-rw and ucgd-nicu-rw. An explanation of the
production QOS's is available here for reference purposes only. The
data production pipeline consists of the initial analysis steps that
produce the BAM and VCF files consumed by almost all downstream research
within UCGD. Because this data is the basis of most UCGD research, funds
cluster hardware purchases, and may be urgently needed for clinical
care, jobs in ]these[ QOS's are given a
priority bonus. This higher priority means that production jobs can
advance through the queue faster than default jobs will. However, no
more than 56 nodes (two-thirds of the UCGD nodes) can be active in the
main production QOS (ucgd-prod-rw) at any one time. There is no limit
for the clinical care QOS (ucgd-nicu-rw). The clinical care QOS has the
further ability to ]preempt[ active jobs
in the ucgd-low-rw QOS. This is necessary for critical patient care. The
overall effect of these QOS's is that production jobs will not be
backlogged. Instead, they will jump to the front of the line. The
production QOS is specified by adding \"#SBATCH \--qos ucgd-prod-rw\" or
\"#SBATCH \--qos ucgd-nicu-rw\" to the top of a batch
submission.]



**Example**



```
#!/bin/bash
#SBATCH -t 24:00:00        #time
#SBATCH -N 7               #number of nodes
#SBATCH -A ucgd-rw         #account
#SBATCH -p ucgd-rw         #partition
#SBATCH --qos ucgd-prod-rw #QOS
#SBATCH -J test_job        #job name
```

