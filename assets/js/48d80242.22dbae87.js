"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[6889],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],s={id:"Setup_UCGD_login_environment",toplevel:!0,title:"Setup UCGD login environment"},i=void 0,u={unversionedId:"CHPC_Guide/Setup_UCGD_login_environment",id:"CHPC_Guide/Setup_UCGD_login_environment",isDocsHomePage:!1,title:"Setup UCGD login environment",description:"To get started you must first have an account with CHPC and be logged in",source:"@site/docs/CHPC_Guide/Setup_UCGD_login_environment.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Setup_UCGD_login_environment",permalink:"/Core-Docs/docs/CHPC_Guide/Setup_UCGD_login_environment",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/Setup_UCGD_login_environment.md",tags:[],version:"current",frontMatter:{id:"Setup_UCGD_login_environment",toplevel:!0,title:"Setup UCGD login environment"},sidebar:"tutorialSidebar",previous:{title:"Resource Overview",permalink:"/Core-Docs/docs/CHPC_Guide/Resource Overview"},next:{title:"Submitting and Running Jobs",permalink:"/Core-Docs/docs/CHPC_Guide/Submitting_and_Running_Jobs"}},c=[{value:"Lab Specific Module Setup",id:"lab-specific-module-setup",children:[]},{value:"Environment Changes",id:"environment-changes",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To get started you must first have an account with CHPC and be logged in\nvia a terminal (",(0,l.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/gettingstarted.php"},"See getting started at\nCHPC"),"."),(0,l.kt)("p",null,"If you are part of the Yandell, Marth, or Quinlan labs, your $HOME\ndirectory in the CHPC general environment will be located on the UCGD\nowned Isilon storage space (2TB quota). In the protected environment\n(i.e. Redwood), the home directories are in general space with a 50GB\nquota."),(0,l.kt)("h2",{id:"lab-specific-module-setup"},"Lab Specific Module Setup"),(0,l.kt)("p",null,"CHPC uses a module system to control your environment and load/unload\nsets of programs. We have set up lab specific modules that will make it\neasier to access lab programs and resources."),(0,l.kt)("p",null,"To get going on CHPC, once you are logged into a terminal do the\nfollowing:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standard bash configuration in the general environment (i.e. kingspeak/notchpeak)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp /scratch/ucgd/serial/common/shell_scripts/bashrc ~/.bashrc\ncp /scratch/ucgd/serial/common/shell_scripts/custom.sh ~/.custom.sh\ncp /scratch/ucgd/serial/common/shell_scripts/aliases ~/.aliases\nsource ~/.bashrc\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standard bash configuration in the protected environment (i.e.\nredwood)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/bashrc ~/.bashrc\ncp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/custom.sh ~/.custom.sh\ncp /uufs/chpc.utah.edu/common/PE/proj_UCGD/shell_scripts/aliases ~/.aliases\nsource ~/.bashrc\n")),(0,l.kt)("p",null,"More information about modules and how to set them up at CHPC for non-bash environments can be\nfound ",(0,l.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/software/modules.php"},"here")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/software/modules-advanced.php"},"here")),(0,l.kt)("h2",{id:"environment-changes"},"Environment Changes"),(0,l.kt)("p",null,"There will be several changes made to your environment by the\n'ucgd_env' module that should now be automatically loaded at startup."),(0,l.kt)("p",null,"Changes are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A read only UCGD group shared perl5 library directory will be\npresent for perl modules, as well as a hidden read/write user\nspecific ","~","/.perl5 directory where you will also be able to install\nlocal modules locally via CPAN (See $PERL5LIB environmental\nvariable)."),(0,l.kt)("li",{parentName:"ul"},"There is a template MPI job in $SCRIPTS/template_slurm_batch.sh. It\nis pre-configured to use the ucgd-kp/ucgd-rw accounts. See\n",(0,l.kt)("a",{parentName:"li",href:"/docs/CHPC_Guide/Submitting_and_Running_Jobs"},"RunningJobs at\nCHPC"),"\nfor more info."),(0,l.kt)("li",{parentName:"ul"},"There are a number of convenience scripts that will be loaded into your path")),(0,l.kt)("p",null,"idev ","-","-",">"," convenient launch of interactive shell jobs"),(0,l.kt)("p",null,"srund ","-","-",">"," Allows you to run command line batches like srun but it\ndetaches the job into the queue system"),(0,l.kt)("p",null,"ibrun ","-","-",">"," Use instead of mpiexec to launch MPI based scripts (fixes\nissues with SLURM and certain MPI flavors)"),(0,l.kt)("p",null,"path ","-","-",">"," tells you the full path to any file or directory (soft links\nresolved)"),(0,l.kt)("p",null,"where ","-","-",">"," like 'which', but it tells you all the locations of a\nscript (in descending PATH order)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There will also be several convenience environmental variables set\nup in your shell")),(0,l.kt)("p",null,"$UUID = syntactic sugar for getting your university ID (i.e u0123456)"),(0,l.kt)("p",null,"$COMMON = base directory for UCGD common files (apps, data, etc.)"),(0,l.kt)("p",null,"$APPS = base directory for group application installations (used by\nmodules)"),(0,l.kt)("p",null,"$MODULEFILES = base directory for lua module configuration files"),(0,l.kt)("p",null,"$SCRIPTS = base directory for UCGD template shell scripts and\nenvironment configuration files"),(0,l.kt)("p",null,"$DATA = base directory for shared datasets (GATK bundle, references,\netc.)"),(0,l.kt)("p",null,"$WORK = user specific work directory on UCGD Lustre storage (files are\nunder quota but not deleted - keep important files here)"),(0,l.kt)("p",null,"$REPOSITORY = base directory for the repository of all UCGD results"),(0,l.kt)("p",null,"$SCRATCH = user specific scratch directory on either general or UCGD\nstorage (files are under quota and cleaned out periodically)"),(0,l.kt)("p",null,"$USCRATCH = Base of USTAR Lustre scratch space"),(0,l.kt)("p",null,"$GSCRATCH = Base of CHPC general Lustre scratch space"),(0,l.kt)("p",null,"$TMPDIR = controls temporary directory for applications. It will be set\nto /scratch/local rather than the in memory /tmp"),(0,l.kt)("p",null,"$SQLITE_TMPDIR = controls temporary directory for SQLite. It will be\nset to /scratch/local rather than the in memory /var/tmp"),(0,l.kt)("p",null,"$ASH_BASE = ash URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$EMBER_BASE = ember URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$LONE_BASE = lonepeak URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$KING_BASE = kingspeak URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$NOTCH_BASE = notchpeak URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$REDWOOD_BASE = redwood URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$REDWOOD3_BASE = redwood3 URL (convenient for ssh between clusters)"),(0,l.kt)("p",null,"$TRANSFER_BASE = general environment transfer URL (convenient for ssh\nbetween clusters)"),(0,l.kt)("p",null,"$TRANSFER_BASE = protected environment URL (convenient for ssh between\nclusters)"),(0,l.kt)("p",null,"$ASH = $ASH_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$EMBER = $EMBER_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$LONE = $LONE_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$KING = $KING_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$NOTCH = $NOTCH_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$REDWOOD = $REDWOOD_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$REDWOOD3 = $REDWOOD3_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$TRANSFER = $TRANSFER_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("p",null,"$TRANSFERPE = $TRANSFERPE_BASE plus your $UUID (convenient for scp)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Other convenience variables available in template job\n($SCRIPTS/template_slurm_batch.sh)")),(0,l.kt)("p",null,"$NODES = total number of nodes available to you"),(0,l.kt)("p",null,"$CORES = total number of cores available to you"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Convenient aliases")),(0,l.kt)("p",null,"ash -- calls ssh with your $UUID to log into ash from another cluster"),(0,l.kt)("p",null,"ember -- calls ssh with your $UUID to log into ember from another\ncluster"),(0,l.kt)("p",null,"lone -- calls ssh with your $UUID to log into lonepeak from another\ncluster"),(0,l.kt)("p",null,"king -- calls ssh with your $UUID to log into kingspeak from another\ncluster"),(0,l.kt)("p",null,"notch -- calls ssh with your $UUID to log into notchpeak from another\ncluster"),(0,l.kt)("p",null,"redwood -- calls ssh with your $UUID to log into redwood from another\ncluster"),(0,l.kt)("p",null,"redwood3 -- calls ssh with your $UUID to log into redwood3 from another\ncluster"),(0,l.kt)("p",null,"transfer -- calls ssh with your $UUID to log into general environment\ntransfer node from another cluster"),(0,l.kt)("p",null,"transferpe -- calls ssh with your $UUID to log into protected\nenvironment transfer node from another cluster"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are also several directories under the UCGD shared resource\nspace ($COMMON)")),(0,l.kt)("p",null,"./shell_scripts = this contains scripts that configure your environment\non login and templates for jobs ($SCRIPTS)"),(0,l.kt)("p",null,"./apps = this is where apps are installed globally for UCGD ($APPS)"),(0,l.kt)("p",null,"./modulefiles = this is where apps are configured globally for UCGD\n($MODULEFILES)"),(0,l.kt)("p",null,"./data = Shared datasets used by tools and common analyses ($DATA)"))}d.isMDXComponent=!0}}]);