"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={},l="iTerm Configuration",i={unversionedId:"CHPC_Guide/iTerm_Configuration",id:"CHPC_Guide/iTerm_Configuration",title:"iTerm Configuration",description:"iTerm is a replacement for the OSX Terminal. It works on Macs with macOS",source:"@site/docs/CHPC_Guide/iTerm_Configuration.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/iTerm_Configuration",permalink:"/Core-Docs/docs/CHPC_Guide/iTerm_Configuration",draft:!1,editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/iTerm_Configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VPN Profiles",permalink:"/Core-Docs/docs/CHPC_Guide/VPN_Profiles"},next:{title:"1000 Genomes Phase 3 WGS",permalink:"/Core-Docs/docs/Public-Datasets/1000G"}},s={},u=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Key Remapping",id:"key-remapping",level:2},{value:"Shell Integration",id:"shell-integration",level:2},{value:"Profile Switching",id:"profile-switching",level:2},{value:"Triggers",id:"triggers",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iterm-configuration"},"iTerm Configuration"),(0,a.kt)("p",null,"iTerm is a replacement for the OSX Terminal. It works on Macs with macOS\n10.10 or newer. It includes many features the increase productivity."),(0,a.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://iterm2.com/index.html"},"Download")," and install iTerm"),(0,a.kt)("h2",{id:"key-remapping"},"Key Remapping"),(0,a.kt)("p",null,"If you are accustomed to keyboard shortcuts in Linux such as \u2387\u2192 or \u2303\u2192\nthen you may find they do not have the behavior desired in iTerm. You\ncan remap keyboard shortcuts under iTerm2 \u2192 Preferences \u2192 Profiles \u2192\nDefault \u2192 Keys."),(0,a.kt)("p",null,"A few convenient changes are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key Combination"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2387\u2192"),(0,a.kt)("td",{parentName:"tr",align:null},"Esc + f"),(0,a.kt)("td",{parentName:"tr",align:null},"Forward jump words on Linux command line and in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2387\u2190"),(0,a.kt)("td",{parentName:"tr",align:null},"Esc + b"),(0,a.kt)("td",{parentName:"tr",align:null},"Reverse jump words on Linux command line and in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2303\u2192"),(0,a.kt)("td",{parentName:"tr",align:null},"Esc + f"),(0,a.kt)("td",{parentName:"tr",align:null},"Forward jump words on Linux command line and in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2303\u2190"),(0,a.kt)("td",{parentName:"tr",align:null},"Esc + b"),(0,a.kt)("td",{parentName:"tr",align:null},"Reverse jump words on Linux command line and in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2387\u2191"),(0,a.kt)("td",{parentName:"tr",align:null},"0x1b 0x5b",(0,a.kt)("br",null),"0x41 0x1b",(0,a.kt)("br",null),"0x5b 0x41",(0,a.kt)("br",null),"0x1b 0x5b",(0,a.kt)("br",null),"0x41 0x1b",(0,a.kt)("br",null),"0x5b 0x41",(0,a.kt)("br",null),"0x1b 0x5b",(0,a.kt)("br",null),"0x41 0x1b",(0,a.kt)("br",null),"0x5b 0x41"),(0,a.kt)("td",{parentName:"tr",align:null},"Jump up 5 lines in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2387\u2193"),(0,a.kt)("td",{parentName:"tr",align:null},"0x1b 0x5b",(0,a.kt)("br",null),"0x42 0x1b",(0,a.kt)("br",null),"0x5b 0x42",(0,a.kt)("br",null),"0x1b 0x5b",(0,a.kt)("br",null),"0x42 0x1b",(0,a.kt)("br",null),"0x5b 0x42",(0,a.kt)("br",null),"0x1b 0x5b",(0,a.kt)("br",null),"0x42 0x1b",(0,a.kt)("br",null),"0x5b 0x42"),(0,a.kt)("td",{parentName:"tr",align:null},"Jump down 5 lines in Emacs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2387Del\u2192",(0,a.kt)("br",null),"(same as fn+delete)"),(0,a.kt)("td",{parentName:"tr",align:null},"Esc + d"),(0,a.kt)("td",{parentName:"tr",align:null},"Forward delete button. Deletes character to the right of the cursor")))),(0,a.kt)("h2",{id:"shell-integration"},"Shell Integration"),(0,a.kt)("p",null,"Shell integration allows for convenience features like command history\ntracking, auto-identification of URLs, click to SCP files, and much\nmore. It functions through a simple bash script created in your home\ndirectory (","~","/.iterm2_shell_integration.bash). You will need to install\nit on your local machine and each server you wish to have enhanced iTerm\nfeatures enabled on."),(0,a.kt)("p",null,"To install:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open iTerm."),(0,a.kt)("li",{parentName:"ol"},"Click on 'iTerm2' in the menubar."),(0,a.kt)("li",{parentName:"ol"},"Select 'Install Shell Integration'."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Install Shell Integration & Utilities' button."),(0,a.kt)("li",{parentName:"ol"},"After doing this on your local machine, log into any servers you\ncommonly work on and repeat the install steps.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For 'click to SCP', iterm uses the hostname supplied by the server and\nruns SCP in the background, but CHPC servers do not return the same\nhostname as you use for SCP (try 'hostname -f' on kingspeak for\nexample and you will see it does not match the expected URL). To get\n'click to SCP' to work on CHPC servers, make the following edit\nto ","~","/.iterm2_shell_integration.bash in you CHPC home directory. Look\nfor a block of code starting around line 480 (or search for the string\n'","#"," If hostname -f') and replace the block of code with the following:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'# If hostname -f is slow on your system, set iterm2_hostname before sourcing this script.\nif [ -z "${iterm2_hostname:-}" ]; then\n  iterm2_hostname=$(hostname -f 2>/dev/null)\n  # some flavors of BSD (i.e. NetBSD and OpenBSD) don\'t have the -f option\n  if [ $? -ne 0 ]; then\n    iterm2_hostname=$(hostname)\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*\\.wasatch\\.peaks$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/wasatch\\.peaks$/chpc.utah.edu/\')\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*ipoib\\.privatearch\\.arches$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/ipoib\\.privatearch\\.arches$/chpc.utah.edu/\')\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*int\\.chpc\\.utah\\.edu$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/int\\.chpc\\.utah\\.edu$/chpc.utah.edu/\')\n  fi\nfi\n'))),(0,a.kt)("h2",{id:"profile-switching"},"Profile Switching"),(0,a.kt)("p",null,"If you commonly switch between logins (root, ucgd-peuser, etc.), you can\nautomatically switch the layout of the terminal (i.e. colors) to make it\nmore obvious that you have switched to a different user. Logging out of\nthat user will return the terminal to its default configuration.\nSwitching profiles provides a visual cue that helps keep you from\naccidentally continuing work as a super-user. Accidentally doing 'rm\n-rf /' as a super-user, for example, because you forgot to log out of\nroot can have drastic consequences. If you have been given access to any\nof the UCGD super-users at CHPC (ugpuser, ucgd-peuser, ucgd-pepipeline,\nor ucgd-peanalysis), then you need to setup profile switching."),(0,a.kt)("p",null,"To setup:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open iTerm."),(0,a.kt)("li",{parentName:"ol"},"Click 'iTerm2' on the menu bar,"),(0,a.kt)("li",{parentName:"ol"},"Click 'Preferences'."),(0,a.kt)("li",{parentName:"ol"},"Select the 'Profiles' button in the panel."),(0,a.kt)("li",{parentName:"ol"},"Use the '+' button to add a new profile."),(0,a.kt)("li",{parentName:"ol"},"Set the 'Name' of the profile to something like 'super user'."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Colors' button for the profile."),(0,a.kt)("li",{parentName:"ol"},"Select 'Color Presets' and choose a theme different than your\ndefault color scheme (i.e. you can choose 'Light Background' if\nyou use a dark color background on your default terminal)."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Advanced' button for the profile."),(0,a.kt)("li",{parentName:"ol"},"Scroll to the bottom where it says 'Automatic Profile Switching'\nand click the '+' button."),(0,a.kt)("li",{parentName:"ol"},"We now want to create a regular expression (i.e. text match) that\nwill be used to enable the profile. An example would be 'root@' or\n'ucgd-peuser@'. This will match the username portion of your\nterminal prompt (i.e. your terminal prompt may look like this\n'","[","ucgd-peuser\\@kingspeak36:","~","]","\\$').")),(0,a.kt)("p",null,"Once setup, you should switch to the user identified by the regular\nexpression in step 10, and the terminal layout should automatically\nchange."),(0,a.kt)("p",null,"Before Profile Switch\n",(0,a.kt)("img",{src:n(594).Z,width:"665",height:"427"})),(0,a.kt)("p",null,"After Profile Switch\n",(0,a.kt)("img",{src:n(9322).Z,width:"665",height:"427"})),(0,a.kt)("h2",{id:"triggers"},"Triggers"),(0,a.kt)("p",null,"Triggers allow you to program context specific actions that will occur\nautomatically, i.e. open a program or write text whenever the terminal\nmatches a given regular expression. Convenient triggers include\nautomatically opening the password manager whenever ssh asks for a\npassword, or you can auto-select 'Duo Push' to your cellphone whenever\ntwo factor authentication is asked for."),(0,a.kt)("p",null,"To setup:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open iTerm."),(0,a.kt)("li",{parentName:"ol"},"Click 'Window' on the menu bar,"),(0,a.kt)("li",{parentName:"ol"},"Select 'Password Manager'"),(0,a.kt)("li",{parentName:"ol"},"Use the '+' button to add passwords for servers or accounts you\ncommonly log into."),(0,a.kt)("li",{parentName:"ol"},"Close the password manager."),(0,a.kt)("li",{parentName:"ol"},"Click 'iTerm2' on the menu bar,"),(0,a.kt)("li",{parentName:"ol"},"Click 'Preferences'."),(0,a.kt)("li",{parentName:"ol"},"Select the 'Profiles' button in the panel."),(0,a.kt)("li",{parentName:"ol"},"Select the 'Default' profile."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Advanced' button for the profile."),(0,a.kt)("li",{parentName:"ol"},"At the top there will be a section labeled 'Triggers'. Click the\n'Edit' button under 'Triggers'."),(0,a.kt)("li",{parentName:"ol"},"[Click the '+' button to add a new trigger, and fill out the\nfollowing 3\ntriggers.]")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Regular Expression"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Instant"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"^(P","|","p)assword","\\","s","*",":","\\","s","*","\\$"),(0,a.kt)("td",{parentName:"tr",align:null},"Open Password Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"<Select account",">"),(0,a.kt)("td",{parentName:"tr",align:null},"checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"^","\\","[","sudo","\\","]","\\","s(P","|","p)assword","\\","sfor","\\","su0045039","\\","s","*","\\",":","\\","s","*","\\$"),(0,a.kt)("td",{parentName:"tr",align:null},"Open Password Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"<Select account",">"),(0,a.kt)("td",{parentName:"tr",align:null},"checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"^Passcode","\\","sor","\\","soption","\\","s","\\","(1","\\","-1","\\",")","\\",":","\\","s","*","\\$"),(0,a.kt)("td",{parentName:"tr",align:null},"Send Text"),(0,a.kt)("td",{parentName:"tr",align:null},"1","\\","n"),(0,a.kt)("td",{parentName:"tr",align:null},"checked")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8528).Z,width:"1030",height:"682"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may have to fully exit iTerm and restart it for triggers and entries\nin the password manager to take effect.")))}p.isMDXComponent=!0},594:function(e,t,n){t.Z=n.p+"assets/images/5964061-33dc4dd92c99e3f78d3e9ff8768ec980.png"},9322:function(e,t,n){t.Z=n.p+"assets/images/5964062-9831525f0bddcb47e597e934ddd32632.png"},8528:function(e,t,n){t.Z=n.p+"assets/images/5964085-5af79ebe5a18a09e871f34e9d80162ab.png"}}]);