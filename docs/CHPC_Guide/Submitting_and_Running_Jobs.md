# Submitting and Running Jobs

CHPC uses the SLURM queue manager. Jobs are submitted to the clusters using the sbatch command together with a batch file.

*   A template batch file can be found here: `$SCRIPTS/template_slurm_batch.sh`

Please see [CHPC's documentation on how to build and submit a batch script in SLURM](https://www.chpc.utah.edu/documentation/software/slurm.php).

## CHPC Clusters

Jobs at CHPC must be submitted using an account and a partition. There are several clusters at CHPC each with specific accounts and associated partitions available (some are only available to specific labs).

### Redwood Cluster
| Accounts | Associated Partitions |
| ---------| ----------------------|
| ucgd-rw	| ucgd-rw |
| marth-rw | marth-rw |
| quinlan-rw	| quinlan-rw |
| yandell	| redwood, redwood-freecycle |
| marth	| redwood, redwood-freecycle |
| quinlan	| redwood, redwood-freecycle |
| owner-guest | redwood-guest |

### Notchpeak Cluster
| Accounts	| Associated Partitions |
| ---------| ----------------------|
| yandell	| notchpeak, notchpeak-freecycle|
| marth	| notchpeak, notchpeak-freecycle|
| quinlan	| notchpeak, notchpeak-freecycle|
| owner-guest	| notchpeak-guest|
  
### Kingspeak Cluster
|Accounts | Associated  Partitions |
| ---------| ----------------------|
|yandell	| kingspeak, kingspeak-freecycle|
|marth	| kingspeak, kingspeak-freecycle|
|quinlan | kingspeak, kingspeak-freecycle|
|owner-guest	| kingspeak-guest|
 
### Ash Cluster
| Accounts	| Associated Partitions |
| ---------| ----------------------|
| smithp-guest | 	ash-guest |


Partitions named for the cluster (i.e. redwood, notchpeak, and kingspeak) are only available if you were given a CPU-hour allocation after submitting a project proposal to CHPC. These jobs run on nodes owned directly by CHPC. The similarly named `freecycle` partitions, however, are available to anyone, but `freecycle` jobs will only run on idle nodes and will be preempted if resources are requested by any other users with available CPU-hour allocation. The `guest` partitions run on idle machines owned by other labs (not CHPC owned machines). They are also preemptable, but tend to be more idle than the `freecycle` partition.

Please only use the `ucgd-rw` account for UCGD related jobs. If you want to submit non-UCGD jobs, please use [owner-guest](https://www.chpc.utah.edu/documentation/policies/2.1GeneralHPCClusterPolicies.php#Pol2.1.4) account to make your jobs preemtable. You can also use SLURM's feature specifier tag (-C option) and exclude tag (-x option) to request or exclude certain sets of nodes in a job request. You can also use the string "c20", "c24", or "c32" together with the specifier tag (-C option) to request only nodes with 20, 24, or 32 CPUs respectively (use `sinfo -o %f` command to see all available features that can be specified).

### Example:
```
#!/bin/bash
#SBATCH -t 24:00:00        #time
#SBATCH -N 1               #number of nodes
#SBATCH -A owner-guest     #account
#SBATCH -p redwood-guest   #partition
#SBATCH -J test_job        #job name
#SBATCH -C hci,c32         #feature specifier
#sbatch -x rw[040-071]     #node exclusion
```

## Interactive Jobs

Jobs submitted via sbatch will be non-interactive, i.e. you won't have an attached terminal. To get an interactive session you can use the `srun` command, but it requires quite a few options, so we created the `idev` command to make it easier to generate interactive development jobs (note that XSEDE resources also have an idev command which ours is based off of)

```
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
```