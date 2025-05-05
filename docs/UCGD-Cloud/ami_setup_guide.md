# AMI Setup Guide

This guide walks you through setting up a fresh Amazon Machine Image (AMI) environment based on the provided setup script.

**This AMI is designed to run on a preconfigured `AWS ParallelCluster CloudFormation` setup [here](https://docs.aws.amazon.com/parallelcluster/latest/ug/cloudformation-v3.html
), is AWS's detailed guide for setup.**

---

## Prerequisites

- Amazon Linux AMI instance (m5.xlarge is suggested).
- Internet access
- Sufficient permissions to install packages and configure the system
- Select parallelcluster VPC setup.
- Select `Key pair (login)` for created AWS user.
- `Configure storage` suggested: 30 GiB.
---

## Step-by-Step Setup Instructions

These steps can be run by downloading or copying the `headnode-startup.sh` [script](https://github.com/UCGD/UCGD-Cloud/blob/master/cloud/headnode-setup.sh), or they can be done independently by following each step below.


### 1. Environment Variable Setup

Define and persist key environment variables:

```bash
echo "export DATA=/common" >> $HOME/.bashrc
echo "export DATAHUB=/common" >> $HOME/.bashrc
echo "export WORK=/common" >> $HOME/.bashrc
echo "export APPS=$HOME/code" >> $HOME/.bashrc
echo "export USERS=/home" >> $HOME/.bashrc

mkdir -p $HOME/code
```

Reload your `.bashrc` or re-login for changes to take effect after install complete.

### 2. Install Miniconda & AWS CLI

Install Miniconda for Python and use Conda to install AWS CLI:

```bash
cd $HOME
sudo yum install -y bzip2 wget
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh -b -f -p $HOME/miniconda

export PATH="$HOME/miniconda/bin:$PATH"
echo "export PATH=\$HOME/miniconda/bin:\$PATH" >> $HOME/.bashrc

conda install -c conda-forge -y awscli
rm Miniconda3-latest-Linux-x86_64.sh
```

Verify installations:

```bash
which python
python --version
which pip
aws --version
```

### 3. Install Python Packages

Install required Python libraries:

```bash
python -m pip install pyfiglet requests boto3 vcfpy argparse biopython
```

### 4. Install Amazon Corretto 17 (Java)

Install Amazon's JDK for Java applications:

```bash
wget -O corretto-17.rpm https://corretto.aws/downloads/latest/amazon-corretto-17-x64-linux-jdk.rpm
sudo yum localinstall -y corretto-17.rpm
rm corretto-17.rpm

JAVA_PATH=$(dirname $(dirname $(readlink -f $(which java))))
export JAVA_HOME=$JAVA_PATH
export PATH=$JAVA_HOME/bin:$PATH

echo "export JAVA_HOME=$JAVA_HOME" >> $HOME/.bashrc
echo "export PATH=\$JAVA_HOME/bin:\$PATH" >> $HOME/.bashrc

java -version
```

### 5. System Update and Install Software

Detect OS and install necessary packages:

```bash
sudo yum install -y vim git docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

### 6. AWS CLI Configuration

Configure AWS CLI:

```bash
aws configure
```

Test AWS connection:

```bash
aws s3 ls
```

### 7. UCGD Configuration

Create a location for the needed master config file:

```bash
mkdir -p /home/ec2-user/.config/master
touch /home/ec2-user/.config/master/master.config
```
**You will need to update this `master.config` file with your Mosaic login credentials.**

### 8. Install Nextflow and Plugins

Install Nextflow and its AWS plugin:

```bash
curl -s https://get.nextflow.io | bash
sudo mv nextflow $APPS
sudo chmod +x $APPS/nextflow

echo "export PATH=$APPS:\$PATH" >> $HOME/.bashrc

$APPS/nextflow plugin install nf-amazon
```

### 9. Clone UCGD Repositories

Clone the required repositories with confirmation prompts:

```bash
# Clone UCGD-Cloud
https://github.com/UCGD/UCGD-Cloud.git

# Clone ucgd_utils
https://github.com/UCGD/ucgd_utils.git
```

Repos will be cloned to `$APPS` (`$HOME/code`).

### 10. Set File Permissions and Create Symlinks

Make scripts executable and globally available:

```bash
# UCGD-Cloud scripts
sudo chmod -R +x $APPS/UCGD-Cloud/src/*
sudo chmod -R +x $APPS/UCGD-Cloud/cloud/*.sh
sudo ln -s $APPS/UCGD-Cloud/src/*.py /usr/bin/

# Key shell scripts
ln -sf $APPS/UCGD-Cloud/cloud/calypso.sh
ln -sf $APPS/UCGD-Cloud/cloud/docker-login.sh
ln -sf $APPS/UCGD-Cloud/cloud/variant-caller.sh

# UCGD-Utils
sudo chmod -R +x /home/ec2-user/code/ucgd_utils/perl/script/*
sudo ln -sf /home/ec2-user/code/ucgd_utils/perl/script/generate_shards.sh /usr/bin/
sudo ln -sf /home/ec2-user/code/ucgd_utils/bin/all_prep.pl /usr/bin/
```

### 11. Docker Login Script Setup

Append Docker login to shell startup:

```bash
echo "bash /home/ec2-user/docker-login.sh" >> ~/.bash_profile
```

---

## Final Checks

- **Reload the shell session** or source your `.bashrc` and `.bash_profile`.
- **Test Nextflow**, **AWS CLI**, **Docker**, and **Python tools**.

---

## Notes

- Ensure you have added the Mosaic API credentials manually.
- Use `sudo` carefully when managing permissions.
- AWS credentials must be configured with correct IAM policies.
- Ensure Docker permissions (re-login after adding to Docker group).
- This completed image will be used by `pcluster create-image` to build the needed pcluster environment.

---
