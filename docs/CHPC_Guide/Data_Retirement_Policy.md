---
id: Data_Retirement_Policy
toplevel: true
title: Data Retirement Policy
---

New projects are guaranteed one year of data storage as part of recharge
center billing. This includes a primary copy of all data and analyses on
UCGD-owned Lustre storage and a backup of raw primary data files (CRAM
files) on UCGD-owned Ceph storage. If projects require more than one
year of storage and backup, then arrangements can be made through the
recharge center for additional time. For projects that directly fund the
purchase of UCGD storage hardware, data storage and backup is guaranteed
for the warrantied life of the hardware (generally five years from the
time of purchase).

## Notification

A general reminder of data retirement policies will be sent out to all
UCGD collaborators annually at least 24 hours before major data moves.
PIs will only be contacted individually when projects are at risk of
being permanently deleted.

## Actual Implementation

It is important to note that there is no guarantee that data will be
archived beyond what was billed for by the recharge center. However, in
practice we try to maintain project data for \~3 years on Lustre and \~5
years on Ceph archive space depending on the actual storage needs of
UCGD.

At the end of each year, we move (but do not delete) projects on Lustre
that are three years old or older to a holding space. When Lustre
approaches its storage limits (\~90% full), all projects in the holding
space are synchronized to Ceph archive storage and the Lustre copy is
deleted. This means that for data older than three years, the Ceph
archive copy may be the only copy (there is no backup). Additionally,
when Ceph storage approaches its limits (\~90% full), project owners
will be individually notified that their data may soon be deleted. Data
will then be moved from Ceph archive space into general scratch space at
CHPC (this will immediately relieve our storage limitations on Ceph).
CHPC automatically deletes files older than 60 days from scratch space.
We will e-mail the PI at 60 days, 30 days, and 2 days to remind them
that their data will permanently disappear without action on their part
(e.g., copying data elsewhere, purchasing additional Ceph space, etc.).

## Data Access

Project data at UCGD is kept on high performance Lustre storage and is
backed up to Ceph object storage at the University of Utah Center for
High Performance Computing (CHPC). Project files can be accessed over
the web using Mosaic, or they can be accessed via a Linux terminal by
logging into the Redwood HIPAA protected environment at CHPC. Data that
is archived on Ceph object storage cannot be directly accessed by UCGD
collaborators, but it can be restored to Lustre space on request.
