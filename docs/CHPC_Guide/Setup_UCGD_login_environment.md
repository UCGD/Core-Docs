---
id: Setup_UCGD_login_environment
toplevel: true
title: Setup UCGD login environment
---

To get started you must first have an account with CHPC and be logged in
via a terminal ([See getting started at
CHPC](https://www.chpc.utah.edu/documentation/gettingstarted.php).

If you are part of the Yandell, Marth, or Quinlan labs, your $HOME
directory in the CHPC general environment will be located on the UCGD
owned Isilon storage space (2TB quota). In the protected environment
(i.e. Redwood), the home directories are in general space with a 50GB
quota.


## Lab Specific Module Setup

CHPC uses a module system to control your environment and load/unload
sets of programs. We have set up lab specific modules that will make it
easier to access lab programs and resources.

To get going on CHPC, once you are logged into a terminal do the
following:


**Standard bash configuration in the general environment (i.e. kingspeak/notchpeak)**

```
cp /scratch/ucgd/serial/common/shell_scripts/bashrc ~/.bashrc
cp /scratch/ucgd/serial/common/shell_scripts/custom.sh ~/.custom.sh
cp /scratch/ucgd/serial/common/shell_scripts/aliases ~/.aliases
source ~/.bashrc
```


**Standard bash configuration in the protected environment (i.e.
redwood)**

```
cp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/bashrc ~/.bashrc
cp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/custom.sh ~/.custom.sh
cp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/aliases ~/.aliases
source ~/.bashrc
```

More information about modules and how to set them up at CHPC for non-bash environments can be
found [here](https://www.chpc.utah.edu/documentation/software/modules.php) and
[here](https://www.chpc.utah.edu/documentation/software/modules-advanced.php)


## Environment Changes

There will be several changes made to your environment by the
'ucgd_env' module that should now be automatically loaded at startup.

Changes are as follows:

- A read only UCGD group shared perl5 library directory will be
  present for perl modules, as well as a hidden read/write user
  specific \~/.perl5 directory where you will also be able to install
  local modules locally via CPAN (See $PERL5LIB environmental
  variable).
- There is a template MPI job in $SCRIPTS/template_slurm_batch.sh. It
  is pre-configured to use the ucgd-kp/ucgd-rw accounts. See
  [RunningJobs at
  CHPC](/docs/CHPC_Guide/Submitting_and_Running_Jobs)
  for more info.
- There are a number of convenience scripts that will be loaded into your path

idev \--\> convenient launch of interactive shell jobs

srund \--\> Allows you to run command line batches like srun but it
detaches the job into the queue system

ibrun \--\> Use instead of mpiexec to launch MPI based scripts (fixes
issues with SLURM and certain MPI flavors)

path \--\> tells you the full path to any file or directory (soft links
resolved)

where \--\> like 'which', but it tells you all the locations of a
script (in descending PATH order)

- There will also be several convenience environmental variables set
  up in your shell

$UUID = syntactic sugar for getting your university ID (i.e u0123456)

$COMMON = base directory for UCGD common files (apps, data, etc.)

$APPS = base directory for group application installations (used by
modules)

$MODULEFILES = base directory for lua module configuration files

$SCRIPTS = base directory for UCGD template shell scripts and
environment configuration files

$DATA = base directory for shared datasets (GATK bundle, references,
etc.)

$WORK = user specific work directory on UCGD Lustre storage (files are
under quota but not deleted - keep important files here)

$REPOSITORY = base directory for the repository of all UCGD results

$SCRATCH = user specific scratch directory on either general or UCGD
storage (files are under quota and cleaned out periodically)

$USCRATCH = Base of USTAR Lustre scratch space

$GSCRATCH = Base of CHPC general Lustre scratch space

$TMPDIR = controls temporary directory for applications. It will be set
to /scratch/local rather than the in memory /tmp

$SQLITE_TMPDIR = controls temporary directory for SQLite. It will be
set to /scratch/local rather than the in memory /var/tmp

$ASH_BASE = ash URL (convenient for ssh between clusters)

$EMBER_BASE = ember URL (convenient for ssh between clusters)

$LONE_BASE = lonepeak URL (convenient for ssh between clusters)

$KING_BASE = kingspeak URL (convenient for ssh between clusters)

$NOTCH_BASE = notchpeak URL (convenient for ssh between clusters)

$REDWOOD_BASE = redwood URL (convenient for ssh between clusters)

$REDWOOD3_BASE = redwood3 URL (convenient for ssh between clusters)

$TRANSFER_BASE = general environment transfer URL (convenient for ssh
between clusters)

$TRANSFER_BASE = protected environment URL (convenient for ssh between
clusters)

$ASH = $ASH_BASE plus your $UUID (convenient for scp)

$EMBER = $EMBER_BASE plus your $UUID (convenient for scp)

$LONE = $LONE_BASE plus your $UUID (convenient for scp)

$KING = $KING_BASE plus your $UUID (convenient for scp)

$NOTCH = $NOTCH_BASE plus your $UUID (convenient for scp)

$REDWOOD = $REDWOOD_BASE plus your $UUID (convenient for scp)

$REDWOOD3 = $REDWOOD3_BASE plus your $UUID (convenient for scp)

$TRANSFER = $TRANSFER_BASE plus your $UUID (convenient for scp)

$TRANSFERPE = $TRANSFERPE_BASE plus your $UUID (convenient for scp)

- Other convenience variables available in template job
  ($SCRIPTS/template_slurm_batch.sh)

$NODES = total number of nodes available to you

$CORES = total number of cores available to you

- Convenient aliases

ash -- calls ssh with your $UUID to log into ash from another cluster

ember -- calls ssh with your $UUID to log into ember from another
cluster

lone -- calls ssh with your $UUID to log into lonepeak from another
cluster

king -- calls ssh with your $UUID to log into kingspeak from another
cluster

notch -- calls ssh with your $UUID to log into notchpeak from another
cluster

redwood -- calls ssh with your $UUID to log into redwood from another
cluster

redwood3 -- calls ssh with your $UUID to log into redwood3 from another
cluster

transfer -- calls ssh with your $UUID to log into general environment
transfer node from another cluster

transferpe -- calls ssh with your $UUID to log into protected
environment transfer node from another cluster

- There are also several directories under the UCGD shared resource
  space ($COMMON)

./shell_scripts = this contains scripts that configure your environment
on login and templates for jobs ($SCRIPTS)

./apps = this is where apps are installed globally for UCGD ($APPS)

./modulefiles = this is where apps are configured globally for UCGD
($MODULEFILES)

./data = Shared datasets used by tools and common analyses ($DATA)
