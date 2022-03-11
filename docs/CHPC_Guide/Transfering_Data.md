---
id: Transfering_Data
toplevel: true
title: Transfering Data
---

The protected environment sits behind a separate firewall from the CHPC
general environment. As a result moving data in and out of the PE can be
difficult. You can only access the PE from within the university
network, so it is better to pull data from the PE than to push data to
the PE. If you have to push (i.e. send data from outside the university
network). Stage the data on UCGD resource int he general environment
(i.e. /scratch/ucgd/serial or /scratch/general/lustre), then pull the
data into the PE as a secondary process.

# Transfer Nodes

Most nodes inside the PE have only a 1 Gb/s connection to the internet;
however, there are 3 special transfer nodes with 40 Gb/s connections to
the internet. Always log into the transfer nodes when pulling data into
the PE.



    ssh u0123456@pe-dtn01.chpc.utah.edu
    ssh u0123456@pe-dtn02.chpc.utah.edu
    ssh u0123456@pe-dtn03.chpc.utah.edu



You can use one of the above or
use [pe-dtn.chpc.utah.edu](http://pe-dtn.chpc.utah.edu),
and it it will round-robin between the three servers.

The general environment has a similar issue with only a few nodes having
fast internet connections. So also use those transfer nodes when
transferring to/from the general environment (including when
transferring between PE and general environments).



    ssh u0123456@airplane01-dmz.chpc.utah.edu
    ssh u0123456@airplane02-dmz.chpc.utah.edu
    ssh u0123456@airplane03-dmz.chpc.utah.edu
    ssh u0123456@airplane04-dmz.chpc.utah.edu



See [CHPC Data Transfer Services](https://www.chpc.utah.edu/documentation/data_services.php)
for more info on transfer nodes.
