"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[1507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"FastX_CHPC_Desktop",toplevel:!0,title:"FastX (CHPC Desktop)"},c=void 0,u={unversionedId:"CHPC_Guide/FastX_CHPC_Desktop",id:"CHPC_Guide/FastX_CHPC_Desktop",isDocsHomePage:!1,title:"FastX (CHPC Desktop)",description:"FastX is a utility you can use to get a remote desktop on CHPC's",source:"@site/docs/CHPC_Guide/FastX_CHPC_Desktop.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/FastX_CHPC_Desktop",permalink:"/Core-Docs/docs/CHPC_Guide/FastX_CHPC_Desktop",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/FastX_CHPC_Desktop.md",tags:[],version:"current",frontMatter:{id:"FastX_CHPC_Desktop",toplevel:!0,title:"FastX (CHPC Desktop)"},sidebar:"tutorialSidebar",previous:{title:"Development and Productivity",permalink:"/Core-Docs/docs/CHPC_Guide/Development_and_Productivity"},next:{title:"Getting Started at CHPC",permalink:"/Core-Docs/docs/CHPC_Guide/Getting_Started_at_CHPC"}},p=[],l={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FastX is a utility you can use to get a remote desktop on CHPC's\ninteractive nodes. CHPC has ",(0,a.kt)("a",{parentName:"p",href:"https://www.chpc.utah.edu/documentation/software/fastx2.php#utwc"},"instructions\nhere"),"."),(0,a.kt)("p",null,"To get setup on Redwood, use one of the following links (authenticate\nwith CHPC credentials). You must be on campus, using EIHG VPN (Full\nTunnel), or Campus VPN."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redwood3.chpc.utah.edu:3443"},"https://redwood3.chpc.utah.edu:3443")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redwood6.chpc.utah.edu:3443"},"https://redwood6.chpc.utah.edu:3443"))),(0,a.kt)("p",null,"You will see the following login page:\n",(0,a.kt)("img",{src:n(921).Z})),(0,a.kt)("p",null,"Once logged in, click on 'Desktop Client' in the bottom right corner of your screen:\n",(0,a.kt)("img",{src:n(7017).Z})),(0,a.kt)("p",null,"Then download and install the client for your operating system (on Mac\nthis is done by simply dragging the downloaded file to your '",(0,a.kt)("em",{parentName:"p"},"Applications"),"' folder):\n",(0,a.kt)("img",{src:n(9192).Z})),(0,a.kt)("p",null,"Once installed, open FastX and click the '",(0,a.kt)("em",{parentName:"p"},"+"),"' in the top right hand corner, then select '",(0,a.kt)("em",{parentName:"p"},"SSH"),"':\n",(0,a.kt)("img",{src:n(8969).Z})),(0,a.kt)("p",null,"You can then add configurations for UCGD servers such as redwood3 or redwood6:\n",(0,a.kt)("img",{src:n(7350).Z})),(0,a.kt)("p",null,"Once setup, you will be asked to authenticate with your CHPC credentials (including Duo authentication):\n",(0,a.kt)("img",{src:n(287).Z})),(0,a.kt)("p",null,"Once authenticated, click the '",(0,a.kt)("em",{parentName:"p"},"+"),"' in the top right hand corner. You\ncan then choose a desktop style to launch:\n",(0,a.kt)("img",{src:n(6256).Z})),(0,a.kt)("p",null,"Your new desktop can be used to access things like web browsers or other\ninteractive tools directly on CHPC nodes:\n",(0,a.kt)("img",{src:n(5584).Z})))}d.isMDXComponent=!0},921:function(e,t,n){t.Z=n.p+"assets/images/13829030-0ea1d51efdbfcf312e902d2a247d24c3.png"},7017:function(e,t,n){t.Z=n.p+"assets/images/13829031-212eef82a996594f31a081db6c40e420.png"},9192:function(e,t,n){t.Z=n.p+"assets/images/13829032-c59e8ea065af849d6405808ea498595e.png"},8969:function(e,t,n){t.Z=n.p+"assets/images/13829033-518361e4a1bbcf639461753a5f9cf104.png"},7350:function(e,t,n){t.Z=n.p+"assets/images/13829034-34a02e97ab0866ae5de322c19a6c9f29.png"},287:function(e,t,n){t.Z=n.p+"assets/images/13829035-9ac74bb189a28f3ea61dda6bd2e7ed67.png"},6256:function(e,t,n){t.Z=n.p+"assets/images/13829036-46e146faae12981aa7f489a64f308b7d.png"},5584:function(e,t,n){t.Z=n.p+"assets/images/13829037-1c13ac45656984b05f21c0cbf7098de1.png"}}]);