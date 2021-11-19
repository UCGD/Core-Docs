---
id: Locally_Mount_PE_Directories
toplevel: true
title: Locally Mount PE Directories
---

It is often convenient to mount directories in the CHPC protected environment
so they appear as local directories on a local computer. Unfortunately CHPC does
not have Samba available for the PE. But there is a workaround for Mac users to
do this over SSH instead.

# MAC OSX

These instructions are for Mac OSX, but you can also do local mounts on
Linux. Use [Libfuse](https://github.com/libfuse/libfuse)
and [sshfs](https://github.com/libfuse/sshfs) for Linux
instead of the links given below. How to install these tools is an
exercise for the user. You can also still use the same ssh_mount script
given below. Linux mounts will be under the /mnt directory.

1. First install these two tools on your Mac (Fuse and SSHFS).
   - <https://github.com/osxfuse/osxfuse>
   - <https://github.com/osxfuse/sshfs>

2. Next place the script [ssh_mount (click to download)](/attachments/5963960/5964228)
   in the /usr/local/bin/ directory on your Mac and make the file executable
   (chmod +x /usr/local/bin/ssh_mount).

3. You can then use the ssh_mount script to mount directories from
   RedWood over SSH. They will appear in your Finder window or under
   /Volumes on the command line.

    Usage:
         ssh_mount <login@server:path>
         ssh_mount <login@server:path> <user:group>

    Example:
         sudo ssh_mount u0123456@kingspeak.chpc.utah.edu:/scratch/ucgd
         sudo ssh_mount u0123456@kingspeak.chpc.utah.edu:/scratch/ucgd john:staff

    Description:
         Script to mount CHPC directories over SSH on OSX and Linux using SSHF.
         You will need to run as root or via sudo to create the mount. You must
         supply the server and path to mount along with ID mappings to collapse
         the user:group from the server side (i.e. provide the local user and
         group on your Mac that you want thing to map to). The new mount will
         show up in the Finder window and under the /Volumes folder on your Mac.
         On Linux the mount will appear under the /mnt folder. Soflinks on the
         server will also be collapsed and will be displayed locally as real
         files rather than softlinks.


![](/attachments/5963960/5964231.png)


# Linux 

Linux mounting (tested on Ubuntu 18.04):

1. Install sshfs on your local machine using apt: `sudo apt install sshfs`
2. Make mounting dir (here or elsewhere): `mkdir mount`
3. Connect to PE using
   sshfs: `sshfs u0123456@redwood.chpc.utah.edu:/scratch/ucgd/lustre/UCGD_Datahub/Repository/AnalysisData mount`


# Windows 

Direct mounts through Windows (i.e. mapping a network drive) won\'t work
in the PE due to the need for Duo 2-factor authentication\
See
<https://www.chpc.utah.edu/documentation/data_services.php#Direct_mounts>
\> Mounting with SSHFS \> sshfs on Windows

The only 3rd party sshfs client that supports Duo 2FA is [SFTP Net
Drive](https://www.nsoftware.com/sftp/drive/)

Install
Profile \> New Profile

Name: Redwood
Server (Host name):
[redwood.chpc.utah.edu](http://redwood.chpc.utah.edu)
Username: \<uNID\>\
Authentication: Keyboard-interactive\
(Choose a Drive Letter)

1st prompt: enter password\
2nd prompt: enter 1 to push a request to Duo 2FA

Advanced \> Drive \> \"Root folder on the Server\"
Choose path to mount, e.g. your Home, Redwood root, /scratch/ucgd, etc.
Create multiple profiles for different paths, e.g. Redwood_Home,
Redwood_Datahub, etc.
