"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[2958],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(b,i(i({ref:n},l),{},{components:t})):o.createElement(b,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4199:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"Submitting_and_Running_Jobs",toplevel:!0,title:"Submitting and Running Jobs"},u=void 0,c={unversionedId:"CHPC_Guide/Submitting_and_Running_Jobs",id:"CHPC_Guide/Submitting_and_Running_Jobs",isDocsHomePage:!1,title:"Submitting and Running Jobs",description:"[Batch File Basics]",source:"@site/docs/CHPC_Guide/Submitting_and_Running_Jobs.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Submitting_and_Running_Jobs",permalink:"/Core-Docs/docs/CHPC_Guide/Submitting_and_Running_Jobs",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/Submitting_and_Running_Jobs.md",tags:[],version:"current",frontMatter:{id:"Submitting_and_Running_Jobs",toplevel:!0,title:"Submitting and Running Jobs"},sidebar:"tutorialSidebar",previous:{title:"Setup UCGD login environment",permalink:"/Core-Docs/docs/CHPC_Guide/Setup_UCGD_login_environment"},next:{title:"Transfering Data",permalink:"/Core-Docs/docs/CHPC_Guide/Transfering_Data"}},l=[],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[Batch File Basics]"),(0,a.kt)("p",null,"CHPC uses the SLURM queue manager. Jobs are submitted to the clusters\nusing the sbatch command together with a batch file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A template batch file can be found here ","-","-",">","\n\\$SCRIPTS/template_slurm_batch.sh")),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/software/slurm.php"},"CHPC's documentation on how to build and submit a batch\nscript in\nSLURM")),(0,a.kt)("p",null,"Jobs at CHPC must be submitted using an account and a partition. ","[There\nare several clusters at CHPC each with specific accounts and associated\npartitions available (some are only available to specific\nlabs).]"),(0,a.kt)("p",null,"+----------------+----------------+----------------+----------------+\n| Redwood        | Notchpeak      | Kingspeak      | Ash Cluster    |\n| Cluster        | Cluster        | Cluster        |                |\n+----------------+----------------+----------------+----------------+\n| ::: table-wrap | ::: table-wrap | ::: table-wrap | ::: table-wrap |\n|                |   ----         |   ----         |   ----------   |\n| -------------  | --------- ---- | --------- ---- | ---- --------- |\n| -------------- | -------------- | -------------- | -------------- |\n| -------------- | -------------- | -------------- |   Accounts     |\n|   Account      |   Account      |   Account      |        Associa |\n| s      Associa | s      Associa | s      Associa | ted Partitions |\n| ted Partitions | ted Partitions | ted Partitions |   smithp-gue   |\n|   ucgd-rw      |   ya           |   ya           | st   ash-guest |\n|        ucgd-rw | ndell       no | ndell       ki |   ----------   |\n|   marth-rw     | tchpeak, notch | ngspeak, kings | ---- --------- |\n|       marth-rw | peak-freecycle | peak-freecycle | -------------- |\n|   quinlan-rw   |   ma           |   ma           | :::            |\n|     quinlan-rw | rth         no | rth         ki |                |\n|   yandell      | tchpeak, notch | ngspeak, kings |                |\n|   redwood, red | peak-freecycle | peak-freecycle |                |\n| wood-freecycle |   qu           |   qu           |                |\n|   marth        | inlan       no | inlan       ki |                |\n|   redwood, red | tchpeak, notch | ngspeak, kings |                |\n| wood-freecycle | peak-freecycle | peak-freecycle |                |\n|   quinlan      |   o            |   o            |                |\n|   redwood, red | wner-guest   n | wner-guest   k |                |\n| wood-freecycle | otchpeak-guest | ingspeak-guest |                |\n|                |   ----         |   ----         |                |\n|  owner-guest   | --------- ---- | --------- ---- |                |\n|  redwood-guest | -------------- | -------------- |                |\n|                | -------------- | -------------- |                |\n| -------------  | :::            | :::            |                |\n| -------------- |                |                |                |\n| -------------- |                |                |                |\n| :::            |                |                |                |\n+----------------+----------------+----------------+----------------+"),(0,a.kt)("p",null,"[Partitions named for the cluster (i.e. redwood, notchpeak, and\nkingspeak) are only available if you were given a CPU-hour allocation\nafter submitting a project proposal to CHPC. These jobs run on nodes\nowned directly by CHPC. The similarly named 'freecycle' partitions,\nhowever, are available to anyone, but 'freecycle' jobs will only run\non idle nodes and will be preempted if resources are requested by any\nother users with available CPU-hour allocation. The 'guest' partitions\nrun on idle machines owned by other labs (not CHPC owned machines). They\nare also preemptable, but tend to be more idle than the 'freecycle'\npartition.]"),(0,a.kt)("p",null,"[Please only use the ucgd-rw account for UCGD related jobs. If you want\nto submit non-UCGD jobs, please use\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/policies/2.1GeneralHPCClusterPolicies.php#Pol2.1.4"},"owner-guest"),' account\nto make your jobs preemtable. You can also use SLURM\'s feature\nspecifier tag (-C option) and exclude tag (-x option) to request or\nexclude certain sets of nodes in a job request. You can also use the\nstring \\"c20\\", \\"c24\\", or \\"c32\\" together with the specifier tag (-C\noption) to request only nodes with 20, 24, or 32 CPUs respectively (use\n\'sinfo -o %f\' command to see all available features that can be\nspecified).\\\n]'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH -t 24:00:00        #time\n#SBATCH -N 1               #number of nodes\n#SBATCH -A owner-guest     #account\n#SBATCH -p redwood-guest   #partition\n#SBATCH -J test_job        #job name\n#SBATCH -C hci,c32         #feature specifier\n#sbatch -x rw[040-071     ]#node exclusion\n")),(0,a.kt)("p",null,"[Interactive Jobs]"),(0,a.kt)("p",null,"[Jobs submitted via sbatch will be non-interactive, i.e. you won't have\nan attached terminal. To get an interactive session you can use the\n'srun' command, but it requires quite a few options, so we created the\n'idev' command to make it easier to generate interactive development\njobs (note that XSEDE resources also have an idev command which ours is\nbased off of):]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage:\n     idev [OPTIONS]\n\nOptions:\n     -A     <STRING>   Sets account name (default: smithp-guest)\n     -M     <STRING>   Sets cluster name (default: ash)\n     -m     <INT>      Sets time in minutes (default: 60, max: 4360)\n     -n     <INT>      Sets number of nodes (default: 1)\n     -p     <INT>      Sets number of procs (use instead of -n)\n     -C     <STRING>   features to use as node filter (see man sbatch)\n     -x     <STRING>   Exclude specific nodes (see man sbatch)\n     -help|?           Displays this help message\n")),(0,a.kt)("p",null,"[The default account/partition for idev will be your lab account. If you\nwant to alter idev's default settings, copy the\n/scratch/ucgd/lustre/ugpuser/shell/idevrc file to ","~","/idevrc and edit\nit's contents (Note: this is identical to how you would edit idev\ndefaults on XSEDE resources).]"))}p.isMDXComponent=!0}}]);