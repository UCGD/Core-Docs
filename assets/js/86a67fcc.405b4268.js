"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[6133],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6655:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const l={},i="Setup",o={unversionedId:"UCGD-Projects/setup",id:"UCGD-Projects/setup",title:"Setup",description:"We have updated the UCGD project request system to allow users to generate projects as needed without first interacting or contacting UCGD.  Multiple project types can be requested, all of which will be covered below.",source:"@site/docs/UCGD-Projects/setup.md",sourceDirName:"UCGD-Projects",slug:"/UCGD-Projects/setup",permalink:"/Core-Docs/docs/UCGD-Projects/setup",draft:!1,editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/UCGD-Projects/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Version 3+",permalink:"/Core-Docs/docs/UCGD-Pipeline/version_3"}},p={},s=[{value:"Project Request Outline",id:"project-request-outline",level:2},{value:"Project Types (scope of work)",id:"project-types-scope-of-work",level:2},{value:"Project Request Fields",id:"project-request-fields",level:2},{value:"Manifest Files",id:"manifest-files",level:2}],d={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"We have updated the UCGD project request system to allow users to generate projects as needed without first interacting or contacting UCGD.  Multiple project types can be requested, all of which will be covered below."),(0,r.kt)("h2",{id:"project-request-outline"},"Project Request Outline"),(0,r.kt)("p",null,"This guide will provide a brief outline of UCGD project creation steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill out a ",(0,r.kt)("a",{parentName:"li",href:"https://redcap01.brisc.utah.edu/ccts/redcap/surveys/?s=XEWFAREJ4NRTP947"},"UCGD Project request")," providing ",(0,r.kt)("strong",{parentName:"li"},"all required fields and manifests"),"."),(0,r.kt)("li",{parentName:"ul"},"Projects can be saved and returned to at any time using the ",(0,r.kt)("inlineCode",{parentName:"li"},"Save & Return Later")," option at the bottom of the screen (This can be helpful when completing manifest or collecting unknown required fields)."),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"Samples and people manifest"),", complete and upload to submit a project (allows project creation)."),(0,r.kt)("li",{parentName:"ul"},"Mosaic created project will contain a globus endpoint link to allow users to upload data as needed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Data File Source")," does not need to be completed to submit a project, but ",(0,r.kt)("strong",{parentName:"li"},"processing will be paused")," until this manifest is provided (based on ",(0,r.kt)("inlineCode",{parentName:"li"},"scope of work"),")."),(0,r.kt)("li",{parentName:"ul"},"Request page, sample/people/data manifest will be validated and errors or missing information will pause processing and issue email requests to project submitter to rectify discovered issues.")),(0,r.kt)("h2",{id:"project-types-scope-of-work"},"Project Types (scope of work)"),(0,r.kt)("p",null,"Description of the available project scope types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scope of work"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VAR"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard variant calling"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard WES/WGS processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VRC"),(0,r.kt)("td",{parentName:"tr",align:null},"Variant recalling / Re-Joint genotyping"),(0,r.kt)("td",{parentName:"tr",align:null},"Recall variants to a different reference or re-joint genotype with different parameters and/or prior files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JGT"),(0,r.kt)("td",{parentName:"tr",align:null},"Joint genotyping"),(0,r.kt)("td",{parentName:"tr",align:null},"From a given selection of GVCF files, variant call to a Final VCF file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ANL"),(0,r.kt)("td",{parentName:"tr",align:null},"Data analysis only"),(0,r.kt)("td",{parentName:"tr",align:null},"Only perform data analysis from previously generated data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STG"),(0,r.kt)("td",{parentName:"tr",align:null},"Data storage only"),(0,r.kt)("td",{parentName:"tr",align:null},"Store genomic data, no processing by UCGD to occur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SEQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequencing only"),(0,r.kt)("td",{parentName:"tr",align:null},"Facilitate sequence transfer to Utah resources or act as middleman.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MOS"),(0,r.kt)("td",{parentName:"tr",align:null},"Mosaic project only"),(0,r.kt)("td",{parentName:"tr",align:null},"Only generate a Mosaic project. Future processing from this project will not occur without a new project being generated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DGN"),(0,r.kt)("td",{parentName:"tr",align:null},"Diagnostic project"),(0,r.kt)("td",{parentName:"tr",align:null},"Use to process diagnostic process or reprocessing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RNA"),(0,r.kt)("td",{parentName:"tr",align:null},"RNA-Seq project"),(0,r.kt)("td",{parentName:"tr",align:null},"Request RNA-Seq processing.")))),(0,r.kt)("h2",{id:"project-request-fields"},"Project Request Fields"),(0,r.kt)("p",null,"Below is a description of each of the current UCGD project fields, please refer to this list if question arise while completing a request."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Today's Date"),(0,r.kt)("td",{parentName:"tr",align:null},"This will auto populate for record keeping and update requests."),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scope of work"),(0,r.kt)("td",{parentName:"tr",align:null},"Currently we have six different scopes available. Described above."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mosaic project already exist"),(0,r.kt)("td",{parentName:"tr",align:null},"If you have created a prior project in Mosaic change selection here."),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Existing Mosaic Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name used for your current Mosaic project."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mosaic Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Mosaic Project ID (found in URL)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UCGD Analyst"),(0,r.kt)("td",{parentName:"tr",align:null},"The UCGD Core analyst assisting you or conducting your analysis. Select Unknown to auto assign an analyst to your project."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project descriptive term"),(0,r.kt)("td",{parentName:"tr",align:null},"Two word limit describing your project (only letters allowed)."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Family type"),(0,r.kt)("td",{parentName:"tr",align:null},"Project relationship type."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kindred ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Known Kindred id of Neoseq case."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phenotype description"),(0,r.kt)("td",{parentName:"tr",align:null},"Full text description of known pheotype."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Project description"),(0,r.kt)("td",{parentName:"tr",align:null},"Free form text description of your project."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Will this project include data analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"If there is analysis to be performed by a UCGD core analyst, specify here."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phenotype"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of Phenotypic terms. Ontology based terms preferred."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI First Name"),(0,r.kt)("td",{parentName:"tr",align:null},"First name of the project PI"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI Last Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Last name of the project PI"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI uNID"),(0,r.kt)("td",{parentName:"tr",align:null},"University uNID of the project PI, or 'external' if not a member of the University of Utah."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI Email"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the project PI"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PI Phone Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the project PI"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IRB Number"),(0,r.kt)("td",{parentName:"tr",align:null},"IRB governing project funding and controlled access. Enter 'exempt' if the project is not governed by an IRB."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IRB Institution"),(0,r.kt)("td",{parentName:"tr",align:null},"Institution governing the IRB"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variant Calling Framework"),(0,r.kt)("td",{parentName:"tr",align:null},"Currently DeepVariant or DeepVariant (GATK). GATK version runs DeepVariant with GATK based parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sequence design"),(0,r.kt)("td",{parentName:"tr",align:null},"Data type used in project processing."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sequence library preparation (PCR-free / PCR-based)"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence library preparation"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sequence source"),(0,r.kt)("td",{parentName:"tr",align:null},"Where sample","[s]"," sequencing was conducted"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tissue source: were any of your samples derived from saliva?"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows pipeline adjustment if the sequence was from a saliva based source."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Which human genome based reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Notes"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text for users to add any additional project notes as needed."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Have you filled out a work authorization form?"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization form are required for Core services."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Which account/s to bill?"),(0,r.kt)("td",{parentName:"tr",align:null},"List of one or more accounts to bill services rendered."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submitter is PI of project"),(0,r.kt)("td",{parentName:"tr",align:null},"If the project is not being requested by the PI, additional information on who is requesting the project."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submitter First Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The first name of the submitter."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submitter Last Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The last name of the submitter."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submitter uNID"),(0,r.kt)("td",{parentName:"tr",align:null},"The U of U UNID of the submitter."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submitter Email"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid email of the submitter."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gene Set Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to build a gene set viewable in Mosaic."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gene Set Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the user generated gene set"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gene Set"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma Separated list of known gene ids."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Previous Project/s"),(0,r.kt)("td",{parentName:"tr",align:null},"List of previous UCGD project names when JGT scope of work is requested."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Samples and people manifest"),(0,r.kt)("td",{parentName:"tr",align:null},"Main sample manifest to download and complete for each sample to process and user to be added to Mosaic."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Samples and people manifest upload"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload of the above manifests for project processing."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data file Manifest"),(0,r.kt)("td",{parentName:"tr",align:null},"Sample ID to file mapping (file can include path to any readable locations within the CHPC protected environment).  Projects can be generated without this file, but processing will pause until a valid data file manifest is given."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h2",{id:"manifest-files"},"Manifest Files"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"sample"),", ",(0,r.kt)("strong",{parentName:"p"},"people")," and ",(0,r.kt)("strong",{parentName:"p"},"data")," manifests are all required for processing. "),(0,r.kt)("p",null,"For detailed instructions and requirements, please download each manifest and refer to the ",(0,r.kt)("strong",{parentName:"p"},"Notes")," sheet."))}m.isMDXComponent=!0}}]);