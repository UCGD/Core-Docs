"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[6230],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1090:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"Data_Retirement_Policy",toplevel:!0,title:"Data Retirement Policy"},l=void 0,s={unversionedId:"CHPC_Guide/Data_Retirement_Policy",id:"CHPC_Guide/Data_Retirement_Policy",title:"Data Retirement Policy",description:"New projects are guaranteed one year of data storage as part of recharge",source:"@site/docs/CHPC_Guide/Data_Retirement_Policy.md",sourceDirName:"CHPC_Guide",slug:"/CHPC_Guide/Data_Retirement_Policy",permalink:"/Core-Docs/docs/CHPC_Guide/Data_Retirement_Policy",editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/CHPC_Guide/Data_Retirement_Policy.md",tags:[],version:"current",frontMatter:{id:"Data_Retirement_Policy",toplevel:!0,title:"Data Retirement Policy"},sidebar:"tutorialSidebar",previous:{title:"Documentation Homepage",permalink:"/Core-Docs/docs/Documentation Homepage"},next:{title:"Data Structure and Policies",permalink:"/Core-Docs/docs/CHPC_Guide/Data_Structure_and_Policies"}},d=[{value:"Notification",id:"notification",children:[],level:2},{value:"Actual Implementation",id:"actual-implementation",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"New projects are guaranteed one year of data storage as part of recharge\ncenter billing. This includes a primary copy of all data and analyses on\nUCGD owned Lustre storage and a backup of raw primary data files (CRAM\nfiles) on UCGD owned CEPH storage. If projects require more than one\nyear of storage and backup, then arrangements can be made through the\nrecharge center for additional time. For projects that directly fund the\npurchase of UCGD storage hardware, data storage and backup is guaranteed\nfor the warrantied life of the hardware (generally five years from the\ntime of purchase)."),(0,o.kt)("h2",{id:"notification"},"Notification"),(0,o.kt)("p",null,"A general reminder of data retirement policies will be sent out to all\nUCGD collaborators annually at least 24 hours before major data moves.\nPI's will only be contacted individually when projects are at risk of\nbeing permanently deleted."),(0,o.kt)("h2",{id:"actual-implementation"},"Actual Implementation"),(0,o.kt)("p",null,"It is important to note that there is no guarantee that data will be\narchived beyond what was billed for by the recharge center. However, in\npractice we try to maintain project data for ","~","3 years on Lustre and ","~","5\nyears on CEPH archive space depending on the actual storage needs of\nUCGD."),(0,o.kt)("p",null,"At the end of each year, we move (but not delete) projects on Lustre\nthat are three years old or older to a holding space. When Lustre\napproaches it's storage limits (","~","90% full), all projects in the holding\nspace are synchronized to CEPH archive storage and the Lustre copy is\ndeleted. This means that for data older than three years, the CEPH\narchive copy may be the only copy (there is no backup). Additionally,\nwhen CEPH storage approaches it's limits (","~","90% full), project owners\nwill be individually notified that their data may soon be deleted. Data\nwill then be moved from CEPH archive space into general scratch space at\nCHPC (this will immediately relieve our storage limitations on CEPH).\nCHPC automatically deletes files older than 60 days from scratch space.\nWe will e-mail the PI at 60 days, 30 days, and 2 days to remind them\nthat their data will permanently disappear without action on their part\n(i.e. copying data elsewhere, purchasing additional CEPH space, etc)."),(0,o.kt)("h1",{id:"data-access"},"Data Access"),(0,o.kt)("p",null,"Project data at UCGD is kept on high performance Lustre storage and is\nbacked up to CEPH object storage at the University of Utah Center for\nHigh Performance Computing (CHPC). Project files can be accessed over\nthe web using Mosaic, or they can be accessed via a Linux terminal by\nlogging into the Redwood HIPAA protected environment at CHPC. Data that\nis archived on CEPH object storage cannot be directly accessed by UCGD\ncollaborators, but it can be restored to Lustre space on request."))}p.isMDXComponent=!0}}]);