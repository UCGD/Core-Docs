"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[7420],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"VPN_Profiles",toplevel:!0,title:"VPN Profiles"},s=void 0,l={unversionedId:"CHPC_Guide/VPN_Profiles",id:"CHPC_Guide/VPN_Profiles",title:"VPN Profiles",description:"VPN profiles to make it easier to use Cisco AnyConnect with EIHG and",source:"@site/docs/CHPC_Guide/VPN_Profiles.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/VPN_Profiles",permalink:"/Core-Docs/docs/CHPC_Guide/VPN_Profiles",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/VPN_Profiles.md",tags:[],version:"current",frontMatter:{id:"VPN_Profiles",toplevel:!0,title:"VPN Profiles"},sidebar:"tutorialSidebar",previous:{title:"Transfering Data",permalink:"/Core-Docs/docs/CHPC_Guide/Transfering_Data"},next:{title:"iTerm Configuration",permalink:"/Core-Docs/docs/CHPC_Guide/iTerm_Configuration"}},p=[{value:"Step-by-step guide (Mac OSX)",id:"step-by-step-guide-mac-osx",children:[],level:2}],u={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VPN profiles to make it easier to use Cisco AnyConnect with EIHG and\nUofU VPN. Profiles add servers to convenient drop down menu items in\nAnyConnect, so you don't have to remember the VPN server addresses."),(0,i.kt)("h2",{id:"step-by-step-guide-mac-osx"},"Step-by-step guide (Mac OSX)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First install AnyConnect if you don't already have it (Go to\n",(0,i.kt)("a",{parentName:"p",href:"https://gw.genetics.utah.edu/CACHE/stc/2/index.html"},"https://gw.genetics.utah.edu/CACHE/stc/2/index.html")," to do this).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then open the\nattached ",(0,i.kt)("a",{target:"_blank",href:n(3322).Z},"profiles.tgz")," files in a\nterminal window and copy the XML profiles to the AnyConnect profiles\ndirectory"),(0,i.kt)("p",{parentName:"li"},":::\n:::"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"tar -zxvf profiles.tgz\ncd profiles\nsudo cp EIHG.xml UofU.xml /opt/cisco/anyconnect/profile/\nsudo chmod 644 /opt/cisco/anyconnect/profile/*.xml\n")),(0,i.kt)("p",{parentName:"li"},":::\n:::")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Open AnyConnect and try to connect to EIHG or UofU\nVPN.]","\n",(0,i.kt)("img",{src:n(2758).Z})))),(0,i.kt)("p",null,"For additional information on AnyConnect and CHPC access please\nreview ",(0,i.kt)("a",{parentName:"p",href:"https://uofu.service-now.com/it?id=uu_kb_article&sys_id=3cf34fa5d5558900023cf36e22818368"},"this"),"\npage."),(0,i.kt)("p",null,'If you are installing on Mac OX Big Sur and running into "Extension Blocked"\nissue, ',(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=nA92mMv8bTA"},"this"),"\nvideo offers helpful instructions on what to do."))}f.isMDXComponent=!0},3322:function(e,t,n){t.Z=n.p+"assets/files/5963999-31a95e8ed296c7ca0425e75df1320554.tgz"},2758:function(e,t,n){t.Z=n.p+"assets/images/5964226-357a1b40c03e8baaa09f8d827849511b.png"}}]);