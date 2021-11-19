"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[2349],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6781:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"Transfering_Data",toplevel:!0,title:"Transfering Data"},c=void 0,u={unversionedId:"CHPC_Guide/Transfering_Data",id:"CHPC_Guide/Transfering_Data",isDocsHomePage:!1,title:"Transfering Data",description:"The protected environment sits behind a separate firewall from the CHPC",source:"@site/docs/CHPC_Guide/Transfering_Data.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Transfering_Data",permalink:"/Core-Docs/docs/CHPC_Guide/Transfering_Data",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/Transfering_Data.md",tags:[],version:"current",frontMatter:{id:"Transfering_Data",toplevel:!0,title:"Transfering Data"},sidebar:"tutorialSidebar",previous:{title:"Submitting and Running Jobs",permalink:"/Core-Docs/docs/CHPC_Guide/Submitting_and_Running_Jobs"},next:{title:"VPN Profiles",permalink:"/Core-Docs/docs/CHPC_Guide/VPN_Profiles"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The protected environment sits behind a separate firewall from the CHPC\ngeneral environment. As a result moving data in and out of the PE can be\ndifficult. You can only access the PE from within the university\nnetwork, so it is better to pull data from the PE than to push data to\nthe PE. If you have to push (i.e. send data from outside the university\nnetwork). Stage the data on UCGD resource int he general environment\n(i.e. /scratch/ucgd/serial or /scratch/general/lustre), then pull the\ndata into the PE as a secondary process."),(0,o.kt)("h1",{id:"transfer-nodes"},"Transfer Nodes"),(0,o.kt)("p",null,"Most nodes inside the PE have only a 1 Gb/s connection to the internet;\nhowever, there are 3 special transfer nodes with 40 Gb/s connections to\nthe internet. Always log into the transfer nodes when pulling data into\nthe PE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh u0123456@pe-dtn01.chpc.utah.edu\nssh u0123456@pe-dtn02.chpc.utah.edu\nssh u0123456@pe-dtn03.chpc.utah.edu\n")),(0,o.kt)("p",null,"You can use one of the above or\nuse ",(0,o.kt)("a",{parentName:"p",href:"http://pe-dtn.chpc.utah.edu"},"pe-dtn.chpc.utah.edu"),",\nand it it will round-robin between the three servers."),(0,o.kt)("p",null,"The general environment has a similar issue with only a few nodes having\nfast internet connections. So also use those transfer nodes when\ntransferring to/from the general environment (including when\ntransferring between PE and general environments)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh u0123456@airplane01-dmz.chpc.utah.edu\nssh u0123456@airplane02-dmz.chpc.utah.edu\nssh u0123456@airplane03-dmz.chpc.utah.edu\nssh u0123456@airplane04-dmz.chpc.utah.edu\n")),(0,o.kt)("p",null,"[See ][CHPC Data Transfer\nServices]","(",(0,o.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/data_services.php)%5B"},"https://www.chpc.utah.edu/documentation/data_services.php)["),"\nfor more info on transfer nodes.]"))}d.isMDXComponent=!0}}]);