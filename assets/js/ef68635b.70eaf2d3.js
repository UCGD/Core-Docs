"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="iTerm Configuration",u={unversionedId:"CHPC_Guide/iTerm_Configuration",id:"CHPC_Guide/iTerm_Configuration",isDocsHomePage:!1,title:"iTerm Configuration",description:"iTerm is a replacement for the OSX Terminal. It works on Macs with macOS",source:"@site/docs/CHPC_Guide/iTerm_Configuration.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/iTerm_Configuration",permalink:"/Core-Docs/docs/CHPC_Guide/iTerm_Configuration",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/iTerm_Configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VPN Profiles",permalink:"/Core-Docs/docs/CHPC_Guide/VPN_Profiles"},next:{title:"Adding software",permalink:"/Core-Docs/docs/UCGD-Pipeline/additional_software"}},c=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Key Remapping",id:"key-remapping",children:[]},{value:"Shell Integration",id:"shell-integration",children:[]},{value:"Profile Switching",id:"profile-switching",children:[]},{value:"Triggers",id:"triggers",children:[]}],m={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iterm-configuration"},"iTerm Configuration"),(0,o.kt)("p",null,"iTerm is a replacement for the OSX Terminal. It works on Macs with macOS\n10.10 or newer. It includes many features the increase productivity."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://iterm2.com/index.html"},"Download")," and install iTerm"),(0,o.kt)("h2",{id:"key-remapping"},"Key Remapping"),(0,o.kt)("p",null,"If you are accustomed to keyboard shortcuts in Linux such as \u2387\u2192 or \u2303\u2192\nthen you may find they do not have the behavior desired in iTerm. You\ncan remap keyboard shortcuts under iTerm2 \u2192 Preferences \u2192 Profiles \u2192\nDefault \u2192 Keys."),(0,o.kt)("p",null,"A few convenient changes are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key Combination"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2387\u2192"),(0,o.kt)("td",{parentName:"tr",align:null},"Esc + f"),(0,o.kt)("td",{parentName:"tr",align:null},"Forward jump words on Linux command line and in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2387\u2190"),(0,o.kt)("td",{parentName:"tr",align:null},"Esc + b"),(0,o.kt)("td",{parentName:"tr",align:null},"Reverse jump words on Linux command line and in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2303\u2192"),(0,o.kt)("td",{parentName:"tr",align:null},"Esc + f"),(0,o.kt)("td",{parentName:"tr",align:null},"Forward jump words on Linux command line and in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2303\u2190"),(0,o.kt)("td",{parentName:"tr",align:null},"Esc + b"),(0,o.kt)("td",{parentName:"tr",align:null},"Reverse jump words on Linux command line and in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2387\u2191"),(0,o.kt)("td",{parentName:"tr",align:null},"0x1b 0x5b",(0,o.kt)("br",null),"0x41 0x1b",(0,o.kt)("br",null),"0x5b 0x41",(0,o.kt)("br",null),"0x1b 0x5b",(0,o.kt)("br",null),"0x41 0x1b",(0,o.kt)("br",null),"0x5b 0x41",(0,o.kt)("br",null),"0x1b 0x5b",(0,o.kt)("br",null),"0x41 0x1b",(0,o.kt)("br",null),"0x5b 0x41"),(0,o.kt)("td",{parentName:"tr",align:null},"Jump up 5 lines in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2387\u2193"),(0,o.kt)("td",{parentName:"tr",align:null},"0x1b 0x5b",(0,o.kt)("br",null),"0x42 0x1b",(0,o.kt)("br",null),"0x5b 0x42",(0,o.kt)("br",null),"0x1b 0x5b",(0,o.kt)("br",null),"0x42 0x1b",(0,o.kt)("br",null),"0x5b 0x42",(0,o.kt)("br",null),"0x1b 0x5b",(0,o.kt)("br",null),"0x42 0x1b",(0,o.kt)("br",null),"0x5b 0x42"),(0,o.kt)("td",{parentName:"tr",align:null},"Jump down 5 lines in Emacs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2387Del\u2192",(0,o.kt)("br",null),"(same as fn+delete)"),(0,o.kt)("td",{parentName:"tr",align:null},"Esc + d"),(0,o.kt)("td",{parentName:"tr",align:null},"Forward delete button. Deletes character to the right of the cursor")))),(0,o.kt)("h2",{id:"shell-integration"},"Shell Integration"),(0,o.kt)("p",null,"Shell integration allows for convenience features like command history\ntracking, auto-identification of URLs, click to SCP files, and much\nmore. It functions through a simple bash script created in your home\ndirectory (","~","/.iterm2_shell_integration.bash). You will need to install\nit on your local machine and each server you wish to have enhanced iTerm\nfeatures enabled on."),(0,o.kt)("p",null,"To install:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open iTerm."),(0,o.kt)("li",{parentName:"ol"},"Click on 'iTerm2' in the menubar."),(0,o.kt)("li",{parentName:"ol"},"Select 'Install Shell Integration'."),(0,o.kt)("li",{parentName:"ol"},"Click the 'Install Shell Integration & Utilities' button."),(0,o.kt)("li",{parentName:"ol"},"After doing this on your local machine, log into any servers you\ncommonly work on and repeat the install steps.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For 'click to SCP', iterm uses the hostname supplied by the server and\nruns SCP in the background, but CHPC servers do not return the same\nhostname as you use for SCP (try 'hostname -f' on kingspeak for\nexample and you will see it does not match the expected URL). To get\n'click to SCP' to work on CHPC servers, make the following edit\nto ","~","/.iterm2_shell_integration.bash in you CHPC home directory. Look\nfor a block of code starting around line 480 (or search for the string\n'","#"," If hostname -f') and replace the block of code with the following:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'# If hostname -f is slow on your system, set iterm2_hostname before sourcing this script.\nif [ -z "${iterm2_hostname:-}" ]; then\n  iterm2_hostname=$(hostname -f 2>/dev/null)\n  # some flavors of BSD (i.e. NetBSD and OpenBSD) don\'t have the -f option\n  if [ $? -ne 0 ]; then\n    iterm2_hostname=$(hostname)\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*\\.wasatch\\.peaks$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/wasatch\\.peaks$/chpc.utah.edu/\')\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*ipoib\\.privatearch\\.arches$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/ipoib\\.privatearch\\.arches$/chpc.utah.edu/\')\n  fi\n  if [[ "$iterm2_hostname" =~  ^.*int\\.chpc\\.utah\\.edu$ ]]; then\n    iterm2_hostname=$(echo $iterm2_hostname | perl -pe \'s/int\\.chpc\\.utah\\.edu$/chpc.utah.edu/\')\n  fi\nfi\n')))),(0,o.kt)("h2",{id:"profile-switching"},"Profile Switching"),(0,o.kt)("p",null,"If you commonly switch between logins (root, ucgd-peuser, etc.), you can\nautomatically switch the layout of the terminal (i.e. colors) to make it\nmore obvious that you have switched to a different user. Logging out of\nthat user will return the terminal to its default configuration.\nSwitching profiles provides a visual cue that helps keep you from\naccidentally continuing work as a super-user. Accidentally doing 'rm\n-rf /' as a super-user, for example, because you forgot to log out of\nroot can have drastic consequences. If you have been given access to any\nof the UCGD super-users at CHPC (ugpuser, ucgd-peuser, ucgd-pepipeline,\nor ucgd-peanalysis), then you need to setup profile switching."),(0,o.kt)("p",null,"To setup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open iTerm."),(0,o.kt)("li",{parentName:"ol"},"Click 'iTerm2' on the menu bar,"),(0,o.kt)("li",{parentName:"ol"},"Click 'Preferences'."),(0,o.kt)("li",{parentName:"ol"},"Select the 'Profiles' button in the panel."),(0,o.kt)("li",{parentName:"ol"},"Use the '+' button to add a new profile."),(0,o.kt)("li",{parentName:"ol"},"Set the 'Name' of the profile to something like 'super user'."),(0,o.kt)("li",{parentName:"ol"},"Click the 'Colors' button for the profile."),(0,o.kt)("li",{parentName:"ol"},"Select 'Color Presets' and choose a theme different than your\ndefault color scheme (i.e. you can choose 'Light Background' if\nyou use a dark color background on your default terminal)."),(0,o.kt)("li",{parentName:"ol"},"Click the 'Advanced' button for the profile."),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom where it says 'Automatic Profile Switching'\nand click the '+' button."),(0,o.kt)("li",{parentName:"ol"},"We now want to create a regular expression (i.e. text match) that\nwill be used to enable the profile. An example would be 'root@' or\n'ucgd-peuser@'. This will match the username portion of your\nterminal prompt (i.e. your terminal prompt may look like this\n'","[","ucgd-peuser\\@kingspeak36:","~","]","\\$').")),(0,o.kt)("p",null,"Once setup, you should switch to the user identified by the regular\nexpression in step 10, and the terminal layout should automatically\nchange."),(0,o.kt)("p",null,"Before Profile Switch\n",(0,o.kt)("img",{src:n(7679).Z})),(0,o.kt)("p",null,"After Profile Switch\n",(0,o.kt)("img",{src:n(8542).Z})),(0,o.kt)("h2",{id:"triggers"},"Triggers"),(0,o.kt)("p",null,"Triggers allow you to program context specific actions that will occur\nautomatically, i.e. open a program or write text whenever the terminal\nmatches a given regular expression. Convenient triggers include\nautomatically opening the password manager whenever ssh asks for a\npassword, or you can auto-select 'Duo Push' to your cellphone whenever\ntwo factor authentication is asked for."),(0,o.kt)("p",null,"To setup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open iTerm."),(0,o.kt)("li",{parentName:"ol"},"Click 'Window' on the menu bar,"),(0,o.kt)("li",{parentName:"ol"},"Select 'Password Manager'"),(0,o.kt)("li",{parentName:"ol"},"Use the '+' button to add passwords for servers or accounts you\ncommonly log into."),(0,o.kt)("li",{parentName:"ol"},"Close the password manager."),(0,o.kt)("li",{parentName:"ol"},"Click 'iTerm2' on the menu bar,"),(0,o.kt)("li",{parentName:"ol"},"Click 'Preferences'."),(0,o.kt)("li",{parentName:"ol"},"Select the 'Profiles' button in the panel."),(0,o.kt)("li",{parentName:"ol"},"Select the 'Default' profile."),(0,o.kt)("li",{parentName:"ol"},"Click the 'Advanced' button for the profile."),(0,o.kt)("li",{parentName:"ol"},"At the top there will be a section labeled 'Triggers'. Click the\n'Edit' button under 'Triggers'."),(0,o.kt)("li",{parentName:"ol"},"[Click the '+' button to add a new trigger, and fill out the\nfollowing 3\ntriggers.]")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Regular Expression"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Instant"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"^(P","|","p)assword","\\","s","*",":","\\","s","*","\\$"),(0,o.kt)("td",{parentName:"tr",align:null},"Open Password Manager"),(0,o.kt)("td",{parentName:"tr",align:null},"<Select account",">"),(0,o.kt)("td",{parentName:"tr",align:null},"checked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"^","\\","[","sudo","\\","]","\\","s(P","|","p)assword","\\","sfor","\\","su0045039","\\","s","*","\\",":","\\","s","*","\\$"),(0,o.kt)("td",{parentName:"tr",align:null},"Open Password Manager"),(0,o.kt)("td",{parentName:"tr",align:null},"<Select account",">"),(0,o.kt)("td",{parentName:"tr",align:null},"checked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"^Passcode","\\","sor","\\","soption","\\","s","\\","(1","\\","-1","\\",")","\\",":","\\","s","*","\\$"),(0,o.kt)("td",{parentName:"tr",align:null},"Send Text"),(0,o.kt)("td",{parentName:"tr",align:null},"1","\\","n"),(0,o.kt)("td",{parentName:"tr",align:null},"checked")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1628).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may have to fully exit iTerm and restart it for triggers and entries\nin the password manager to take effect."))))}p.isMDXComponent=!0},7679:function(e,t,n){t.Z=n.p+"assets/images/5964061-33dc4dd92c99e3f78d3e9ff8768ec980.png"},8542:function(e,t,n){t.Z=n.p+"assets/images/5964062-9831525f0bddcb47e597e934ddd32632.png"},1628:function(e,t,n){t.Z=n.p+"assets/images/5964085-5af79ebe5a18a09e871f34e9d80162ab.png"}}]);