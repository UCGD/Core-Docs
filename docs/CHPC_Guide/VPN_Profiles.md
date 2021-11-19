---
id: VPN_Profiles
toplevel: true
title: VPN Profiles
---

VPN profiles to make it easier to use Cisco AnyConnect with EIHG and
UofU VPN. Profiles add servers to convenient drop down menu items in
AnyConnect, so you don't have to remember the VPN server addresses.

## Step-by-step guide (Mac OSX)

1.  First install AnyConnect if you don't already have it (Go to
    <https://gw.genetics.utah.edu/CACHE/stc/2/index.html> to do this).

2.  Then open the
    attached [profiles.tgz](/attachments/5963998/5963999.tgz) files in a
    terminal window and copy the XML profiles to the AnyConnect profiles
    directory

    :::
    :::
    ```
    tar -zxvf profiles.tgz
    cd profiles
    sudo cp EIHG.xml UofU.xml /opt/cisco/anyconnect/profile/
    sudo chmod 644 /opt/cisco/anyconnect/profile/*.xml
    ```
    :::
    :::

3.  [Open AnyConnect and try to connect to EIHG or UofU
    VPN.]
    ![](/attachments/5963998/5964226.png)

For additional information on AnyConnect and CHPC access please
review [this](https://uofu.service-now.com/it?id=uu_kb_article&sys_id=3cf34fa5d5558900023cf36e22818368)
page.

If you are installing on Mac OX Big Sur and running into "Extension Blocked"
issue, [this](https://www.youtube.com/watch?v=nA92mMv8bTA)
video offers helpful instructions on what to do.
