# Adding software

## Docker: 

UCGD exclusively uses [docker](https://www.docker.com/) to manage all software for production level processing.

In order to add specific tools to the UCGD-Pipeline, we require a
publicly accessible docker image (Nextflow cannot access private docker
repositories at this time).

## Steps to add software or desired processes:

Adding tools to the pipeline is as easy as creating a docker container
with the desired software available as an executable.

1.  Create a Docker container with the desired script/software
    executable via the container command line. i.e. no ENTRYPOINT.
2.  The container must also have the following commands
    **required** by nextflow **awk, date, grep, egrep, ps, sed, tail, tee**.
3.  Supply the desired command's to be run (either by example or SOP)
    by the containerized software which will be executed by nextflow.
4.  Detail list of final files which will be expected to be ready and
    accessible at process completion.  

After we have been supplied with the above listed, the steps will be
added as a automated processes.

## Container Service:

UCGD uses [Dockerhub](https://hub.docker.com/u/srynobio) to store all of our current containers, if you have an issue with publicly accessible containers please contact us.
