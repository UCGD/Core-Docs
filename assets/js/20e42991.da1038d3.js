"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[8360],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"Quality_of_Service_and_Job_Limits.md",toplevel:!0,title:"Quality of Service and Job Limits"},c=void 0,u={unversionedId:"CHPC_Guide/Quality_of_Service_and_Job_Limits.md",id:"CHPC_Guide/Quality_of_Service_and_Job_Limits.md",isDocsHomePage:!1,title:"Quality of Service and Job Limits",description:"In SLURM you can set up Quality of Service (QOS) rules to enforce",source:"@site/docs/CHPC_Guide/Quality_of_Service_and_Job_Limits.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Quality_of_Service_and_Job_Limits.md",permalink:"/docs/CHPC_Guide/Quality_of_Service_and_Job_Limits.md",editUrl:"https://github.com/UCGD/docusaurus/edit/main/website/docs/CHPC_Guide/Quality_of_Service_and_Job_Limits.md",tags:[],version:"current",frontMatter:{id:"Quality_of_Service_and_Job_Limits.md",toplevel:!0,title:"Quality of Service and Job Limits"},sidebar:"tutorialSidebar",previous:{title:"Locally Mount PE Directories",permalink:"/docs/CHPC_Guide/Locally_Mount_PE_Directories"},next:{title:"Rclone and Ceph",permalink:"/docs/CHPC_Guide/Rclone_and_Ceph"}},l=[],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In SLURM you can set up Quality of Service (QOS) rules to enforce\nresource limits (maximum jobs per user, CPUs, runtime, etc.) as well as\nscheduling priorities. We use QOS rules to ensure equitable access to\nresources among UCGD users. The QOS you wish to use is specified using\nthe '","-","-qos' option in your batch submission. In the absence of a\nspecific '","-","-qos' option in the batch script, a default is applied."),(0,i.kt)("h1",{id:"default"},"Default"),(0,i.kt)("p",null,"Access to UCGD resources (i.e ucgd-rw account/partition) are limited to\nUCGD members, and jobs submitted on those resources are limited to a\nmaximum wall clock of 24 hours. Also users are limited to 28 active jobs\nwith a total group limit of 42 active jobs (half the nodes). For longer\nrunning jobs, collaborator access to UCGD resources, or access to more\nidle resources there are additional QOS's outlined below that can lift\nsome restriction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 24:00:00   #time\n#SBATCH -N 1          #number of nodes\n#SBATCH -A ucgd-rw    #account\n#SBATCH -p ucgd-rw    #partition\n#SBATCH --qos ucgd-rw #QOS\n#SBATCH -J test_job   #job name\n")),(0,i.kt)("h1",{id:"long-running-jobs"},"Long Running Jobs"),(0,i.kt)("p",null,'Jobs of up to 96 hours (4 days) are allowed on UCGD resources by adding\nthe \\"#SBATCH ',"-",'-qos ucgd-long-kp\\" parameter at the top of your job. A\nmaximum of 21 jobs can run in this QOS per user and 28 per group (i.e.\none-third of the UCGD nodes). This limitation ensures that long running\njobs do not completely tie up all nodes on the cluster for several days.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 96:00:00        #time\n#SBATCH -N 1               #number of nodes\n#SBATCH -A ucgd-rw         #account\n#SBATCH -p ucgd-rw         #partition\n#SBATCH --qos ucgd-long-rw #QOS\n#SBATCH -J test_job        #job name\n")),(0,i.kt)("h1",{id:"low-priority-jobs"},"Low Priority Jobs"),(0,i.kt)("p",null,"If a user wishes to submit jobs to all idle UCGD nodes without a cap on\nthe number of active jobs (either user or group limits), ",'[they can\nsubmit jobs to a low priority QOS (\\"#SBATCH ',"-",'-qos\nucgd-low-rw\\")]',". With this QOS, your jobs\nwill always be at the back of the queue compared to other users, and\nyour job is preemptable to high priority clinical jobs, but the trade\noff is you can use all idle resources. Time limit maximum is also lower\nthan the default QOS (8 hours)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 8:00:00       #time\n#SBATCH -N 1              #number of nodes\n#SBATCH -A ucgd-rw        #account\n#SBATCH -p ucgd-rw        #partition\n#SBATCH --qos ucgd-low-rw #QOS\n#SBATCH -J test_job       #job name\n")),(0,i.kt)("h1",{id:"collaborator-access"},"Collaborator Access"),(0,i.kt)("p",null,"Collaborators can access UCGD resources in a limited fashion, but to do\nso they must first be added to the ucgdcollaborator group. Lab managers\ncan request that individuals be added to the ucgdcollaborator group with\nucgd-guest-rw QOS access by submitting a ticket including the\ncollaborator's name and UID to the ",(0,i.kt)("a",{parentName:"p",href:"https://jira.chpc.utah.edu%20CHPC%20Service%20Desk"},"https://jira.chpc.utah.edu CHPC\nService\nDesk"),'.\nBy adding \\" #SBATCH ',"-",'-qos ucd-guest-kp\\" to the top of their batch\nscripts, members of the group ucgdcollaborator can submit jobs on up to\n7 nodes per user (group limit is 14) with a 24 hour wall clock maximum.\nCollaborators may also be given limited (usually Read-Only) access to\nfiles and projects (contact Shawn, Barry, or Carson to modify the access\ncontrol lists). As a CHPC user they will have write access to the\ngeneral Lustre space at /scratch/mamoth/serial and should do analyses\nthere rather than on /scratch/ucgd/lustre.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 24:00:00         #time\n#SBATCH -N 1                #number of nodes\n#SBATCH -A ucgd-rw          #account\n#SBATCH -p ucgd-rw          #partition\n#SBATCH --qos ucgd-guest-rw #QOS\n#SBATCH -J test_job         #job name\n")),(0,i.kt)("h1",{id:"production-access"},"[Production Access]"),(0,i.kt)("p",null,"[There are two QOS options that are specifically available to the data\nproduction team: ucgd-prod-rw and ucgd-nicu-rw. An explanation of the\nproduction QOS's is available here for reference purposes only. The\ndata production pipeline consists of the initial analysis steps that\nproduce the BAM and VCF files consumed by almost all downstream research\nwithin UCGD. Because this data is the basis of most UCGD research, funds\ncluster hardware purchases, and may be urgently needed for clinical\ncare, jobs in ]","these","[ QOS's are given a\npriority bonus. This higher priority means that production jobs can\nadvance through the queue faster than default jobs will. However, no\nmore than 56 nodes (two-thirds of the UCGD nodes) can be active in the\nmain production QOS (ucgd-prod-rw) at any one time. There is no limit\nfor the clinical care QOS (ucgd-nicu-rw). The clinical care QOS has the\nfurther ability to ]","preempt","[ active jobs\nin the ucgd-low-rw QOS. This is necessary for critical patient care. The\noverall effect of these QOS's is that production jobs will not be\nbacklogged. Instead, they will jump to the front of the line. The\nproduction QOS is specified by adding \\\"#SBATCH ","-",'-qos ucgd-prod-rw\\" or\n\\"#SBATCH ',"-",'-qos ucgd-nicu-rw\\" to the top of a batch\nsubmission.]'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 24:00:00        #time\n#SBATCH -N 7               #number of nodes\n#SBATCH -A ucgd-rw         #account\n#SBATCH -p ucgd-rw         #partition\n#SBATCH --qos ucgd-prod-rw #QOS\n#SBATCH -J test_job        #job name\n")))}p.isMDXComponent=!0}}]);