"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[3742],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"Locally_Mount_PE_Directories",toplevel:!0,title:"Locally Mount PE Directories"},u=void 0,l={unversionedId:"CHPC_Guide/Locally_Mount_PE_Directories",id:"CHPC_Guide/Locally_Mount_PE_Directories",isDocsHomePage:!1,title:"Locally Mount PE Directories",description:"It is often convenient to mount directories in the CHPC protected environment",source:"@site/docs/CHPC_Guide/Locally_Mount_PE_Directories.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Locally_Mount_PE_Directories",permalink:"/Core-Docs/docs/CHPC_Guide/Locally_Mount_PE_Directories",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/Locally_Mount_PE_Directories.md",tags:[],version:"current",frontMatter:{id:"Locally_Mount_PE_Directories",toplevel:!0,title:"Locally Mount PE Directories"},sidebar:"tutorialSidebar",previous:{title:"Globus",permalink:"/Core-Docs/docs/CHPC_Guide/Globus"},next:{title:"Quality of Service and Job Limits",permalink:"/Core-Docs/docs/CHPC_Guide/Quality_of_Service_and_Job_Limits.md"}},c=[],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is often convenient to mount directories in the CHPC protected environment\nso they appear as local directories on a local computer. Unfortunately CHPC does\nnot have Samba available for the PE. But there is a workaround for Mac users to\ndo this over SSH instead."),(0,a.kt)("h1",{id:"mac-osx"},"MAC OSX"),(0,a.kt)("p",null,"These instructions are for Mac OSX, but you can also do local mounts on\nLinux. Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libfuse/libfuse"},"Libfuse"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libfuse/sshfs"},"sshfs")," for Linux\ninstead of the links given below. How to install these tools is an\nexercise for the user. You can also still use the same ssh_mount script\ngiven below. Linux mounts will be under the /mnt directory."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First install these two tools on your Mac (Fuse and SSHFS)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/osxfuse/osxfuse"},"https://github.com/osxfuse/osxfuse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/osxfuse/sshfs"},"https://github.com/osxfuse/sshfs")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next place the script ",(0,a.kt)("a",{parentName:"p",href:"/attachments/5963960/5964228"},"ssh_mount (click to download)"),"\nin the /usr/local/bin/ directory on your Mac and make the file executable\n(chmod +x /usr/local/bin/ssh_mount).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can then use the ssh_mount script to mount directories from\nRedWood over SSH. They will appear in your Finder window or under\n/Volumes on the command line."),(0,a.kt)("p",{parentName:"li"}," Usage:\nssh_mount ",(0,a.kt)("a",{parentName:"p",href:"mailto:login@server:path"},"login@server:path"),"\nssh_mount ",(0,a.kt)("a",{parentName:"p",href:"mailto:login@server:path"},"login@server:path")," <user:group>"),(0,a.kt)("p",{parentName:"li"}," Example:\nsudo ssh_mount ",(0,a.kt)("a",{parentName:"p",href:"mailto:u0123456@kingspeak.chpc.utah.edu"},"u0123456@kingspeak.chpc.utah.edu"),":/scratch/ucgd\nsudo ssh_mount ",(0,a.kt)("a",{parentName:"p",href:"mailto:u0123456@kingspeak.chpc.utah.edu"},"u0123456@kingspeak.chpc.utah.edu"),":/scratch/ucgd john:staff"),(0,a.kt)("p",{parentName:"li"}," Description:\nScript to mount CHPC directories over SSH on OSX and Linux using SSHF.\nYou will need to run as root or via sudo to create the mount. You must\nsupply the server and path to mount along with ID mappings to collapse\nthe user:group from the server side (i.e. provide the local user and\ngroup on your Mac that you want thing to map to). The new mount will\nshow up in the Finder window and under the /Volumes folder on your Mac.\nOn Linux the mount will appear under the /mnt folder. Soflinks on the\nserver will also be collapsed and will be displayed locally as real\nfiles rather than softlinks."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7615).Z})),(0,a.kt)("h1",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Linux mounting (tested on Ubuntu 18.04):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install sshfs on your local machine using apt: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt install sshfs")),(0,a.kt)("li",{parentName:"ol"},"Make mounting dir (here or elsewhere): ",(0,a.kt)("inlineCode",{parentName:"li"},"mkdir mount")),(0,a.kt)("li",{parentName:"ol"},"Connect to PE using\nsshfs: ",(0,a.kt)("inlineCode",{parentName:"li"},"sshfs u0123456@redwood.chpc.utah.edu:/scratch/ucgd/lustre/UCGD_Datahub/Repository/AnalysisData mount"))),(0,a.kt)("h1",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Direct mounts through Windows (i.e. mapping a network drive) won\\'t work\nin the PE due to the need for Duo 2-factor authentication\\\nSee\n",(0,a.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/data_services.php#Direct_mounts"},"https://www.chpc.utah.edu/documentation/data_services.php#Direct_mounts"),"\n",">"," Mounting with SSHFS ",">"," sshfs on Windows"),(0,a.kt)("p",null,"The only 3rd party sshfs client that supports Duo 2FA is ",(0,a.kt)("a",{parentName:"p",href:"https://www.nsoftware.com/sftp/drive/"},"SFTP Net\nDrive")),(0,a.kt)("p",null,"Install\nProfile ",">"," New Profile"),(0,a.kt)("p",null,"Name: Redwood\nServer (Host name):\n",(0,a.kt)("a",{parentName:"p",href:"http://redwood.chpc.utah.edu"},"redwood.chpc.utah.edu"),"\nUsername: \\<uNID",">","\\\nAuthentication: Keyboard-interactive\\\n(Choose a Drive Letter)"),(0,a.kt)("p",null,"1st prompt: enter password\\\n2nd prompt: enter 1 to push a request to Duo 2FA"),(0,a.kt)("p",null,"Advanced ",">"," Drive ",">",' \\"Root folder on the Server\\"\nChoose path to mount, e.g. your Home, Redwood root, /scratch/ucgd, etc.\nCreate multiple profiles for different paths, e.g. Redwood_Home,\nRedwood_Datahub, etc.'))}d.isMDXComponent=!0},7615:function(e,t,n){t.Z=n.p+"assets/images/5964231-ac56665649e1ffcf3918e74b77bab85a.png"}}]);