---
id: Rclone_and_Ceph
toplevel: true
title: Rclone and Ceph
---

UCGD data is archived on Ceph object storage inside the protected
environment. Data access in Ceph is compatible with S3 API\'s. A
convenient way to access Ceph archived data at CHPC is to use Rclone, a
parallelized tool similar to rsync that also supports S3 type storage.

See [CHPC Rclone
Documentation](https://www.chpc.utah.edu/documentation/software/rclone.php)
for more info on how to setup and use Rclone.

# How to access UCGD Ceph

Just as with AWS S3 storage, you will need an access_key_id and
a secret_access_key to access UCGD archive space. Contact Shawn, Barry,
or Carson to get these values.

After setting up Rclone according to CHPC\'s documentation, there will
be a configuration file stored in \~/.config/rclone/rclone.conf. You can
manually edit this file as needed.



**\~/.config/rclone/rclone.conf contents**



```
[ucgd-ceph]
type = s3
env_auth = false
access_key_id = ABABABABABABABABABAB
secret_access_key = ab01ab01ab01ab01ab01ab01ab01ab01ab01ab01
region =
endpoint = https://elm-rgw01.int.chpc.utah.edu
location_constraint =
acl = private
server_side_encryption =
storage_class =
```



[Only the PolishedBams directory is archived for each UCGD recharge
center project and can be found in the bucket named \'Repository\'. Data
structure under the bucket will be identical to the lustre Repository
space. Each project will also have a file named .rclone.contents that
contains metadata attributes (file permissions, timestamps, softlinks)
that allow data to be restored to it\'s original state from the archive
as needed.]



**Example rclone command line**



```
$ rclone ls ucgd-ceph:Repository | head -n 10
4516 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/.rclone.contents
4482572182 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X10_120418_SN1117_0088_BD0YWPACXX_6_1.txt.gz
4448246578 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X10_120418_SN1117_0088_BD0YWPACXX_6_2.txt.gz
4032853461 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X11_120418_SN1117_0088_BD0YWPACXX_6_1.txt.gz
3989190731 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X11_120418_SN1117_0088_BD0YWPACXX_6_2.txt.gz
5058696326 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X12_120418_SN1117_0088_BD0YWPACXX_6_1.txt.gz
4991040899 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X12_120418_SN1117_0088_BD0YWPACXX_6_2.txt.gz
5207347767 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X1_120418_SN1117_0088_BD0YWPACXX_4_1.txt.gz
5130096431 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X1_120418_SN1117_0088_BD0YWPACXX_4_2.txt.gz
3346976703 AnalysisData/2014/A21/2014-05-12_9032R_PHC_Exome_Grant/UGP/Data/Primary_Data/9032X2_120418_SN1117_0088_BD0YWPACXX_4_1.txt.gz
```
