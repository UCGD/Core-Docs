"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[2056],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3122:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(3117),a=(t(7294),t(3905));const i={},o="Version 3+",l={unversionedId:"UCGD-Pipeline/version_3",id:"UCGD-Pipeline/version_3",title:"Version 3+",description:"Technical Document",source:"@site/docs/UCGD-Pipeline/version_3.md",sourceDirName:"UCGD-Pipeline",slug:"/UCGD-Pipeline/version_3",permalink:"/Core-Docs/docs/UCGD-Pipeline/version_3",draft:!1,editUrl:"https://github.com/UCGD/Core-Docs/docs/docs/UCGD-Pipeline/version_3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Version 2+",permalink:"/Core-Docs/docs/UCGD-Pipeline/version_2"},next:{title:"Setup",permalink:"/Core-Docs/docs/UCGD-Projects/setup"}},s={},p=[{value:"Scope of Work",id:"scope-of-work",level:3},{value:"Directory outlines",id:"directory-outlines",level:3},{value:"Final project directories:",id:"final-project-directories",level:4},{value:"Project scratch directory",id:"project-scratch-directory",level:4},{value:"Component description",id:"component-description",level:3},{value:"Processing Overview",id:"processing-overview",level:3},{value:"Pipeline DAG visualisation",id:"pipeline-dag-visualisation",level:3},{value:"Version Notes",id:"version-notes",level:3},{value:"<code>Version 3.24.115</code> Update:",id:"version-324115-update",level:5},{value:"Major changes from Version 2:",id:"major-changes-from-version-2",level:4}],c={toc:p},d="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(d,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-3"},"Version 3+"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1vuGm7ywKmLhwoOGC1-ovweX0BqTvJ_dbCI-ulwFKSl0/edit?usp=sharing"},"Technical Document")),(0,a.kt)("h3",{id:"scope-of-work"},"Scope of Work"),(0,a.kt)("p",null,"Central to processing is the UCGD concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"scope_of_work")," which is defined into the following subtypes and used as Nextflow ",(0,a.kt)("inlineCode",{parentName:"p"},"-entry")," options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nextflow entry options"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VAR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DGN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RNA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JGT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MOSAIC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"POST_PROCESS")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VAR")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"DGN")," will run all steps of the pipeline, including  ",(0,a.kt)("inlineCode",{parentName:"p"},"SV"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JGT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSAIC")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"POST_PROCESS")," steps, however ",(0,a.kt)("inlineCode",{parentName:"p"},"SV"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JGT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSAIC")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"POST_PROCESS")," can be run independently if required input files are present."),(0,a.kt)("h3",{id:"directory-outlines"},"Directory outlines"),(0,a.kt)("p",null,"The final data locations will remain the same (including read-only permission)."),(0,a.kt)("h4",{id:"final-project-directories"},"Final project directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/UCGD\n\u2514\u2500\u2500 GRCh38\n    \u251c\u2500\u2500 Analysis\n    \u251c\u2500\u2500 Data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 PolishedCrams\n    \u251c\u2500\u2500 Reports\n    \u2502\xa0\xa0 \u251c\u2500\u2500 alignstats\n    \u2502\xa0\xa0 \u251c\u2500\u2500 fastp\n    \u2502\xa0\xa0 \u251c\u2500\u2500 goleft\n    \u2502\xa0\xa0 \u251c\u2500\u2500 manta\n    \u2502\xa0\xa0 \u251c\u2500\u2500 mosaic\n    \u2502\xa0\xa0 \u251c\u2500\u2500 peddy\n    \u2502\xa0\xa0 \u251c\u2500\u2500 runlogs\n    \u2502\xa0\xa0 \u2514\u2500\u2500 stats\n    \u251c\u2500\u2500 RNASeq\n    \u2502\xa0\xa0 \u251c\u2500\u2500 Data\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Kallisto\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 StarBams\n    \u2502\xa0\xa0 \u2514\u2500\u2500 Reports\n    \u2502\xa0\xa0     \u251c\u2500\u2500 alignstats\n    \u2502\xa0\xa0     \u251c\u2500\u2500 fastp\n    \u2502\xa0\xa0     \u251c\u2500\u2500 kallisto\n    \u2502\xa0\xa0     \u251c\u2500\u2500 leafcutter\n    \u2502\xa0\xa0     \u251c\u2500\u2500 outrider\n    \u2502\xa0\xa0     \u251c\u2500\u2500 rnaqc\n    \u2502\xa0\xa0     \u2514\u2500\u2500 star\n    \u2514\u2500\u2500 VCF\n        \u251c\u2500\u2500 Complete\n        \u251c\u2500\u2500 GVCFs\n        \u251c\u2500\u2500 Manta\n        \u2514\u2500\u2500 Smoove\n")),(0,a.kt)("h4",{id:"project-scratch-directory"},"Project scratch directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./scratch/ucgd/lustre/UCGD_Datahub/IRBs/[IRB]/[PROJECT]/Scratch\n\u251c\u2500\u2500 modules\n\u2502\xa0\xa0 \u2514\u2500\u2500 local\n\u2502\xa0\xa0     \u251c\u2500\u2500 alignstats\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 bcftools\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 concat\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 merge\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 norm\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 stats\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 view\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 fastp\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 fastqforward\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 bam2gvcf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 fastq2bam\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 goleft\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 indexcov\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 kallisto\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 leafcutter\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 bam_to_junc.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 intron_clustering.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 leafcutter_md.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 manta\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 mosaic\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 cli\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 template\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 multiqc\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 outrider\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 outrider.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 peddy\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 qc\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 rnaseqc.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 run_fastqc.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 samtools\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 view\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 sentieon\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 gvcftyper\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 varcal\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 slivar\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 smoove\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 spot\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 spot.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 star\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 generate_star_index.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 merge_counts.nf\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 run_star.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 ucgdtools\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.nf\n\u2502\xa0\xa0     \u2514\u2500\u2500 vep\n\u2502\xa0\xa0         \u2514\u2500\u2500 main.nf\n\u251c\u2500\u2500 subworkflows\n\u2502\xa0\xa0 \u2514\u2500\u2500 local\n\u2502\xa0\xa0     \u251c\u2500\u2500 alignment.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 annotations.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 gvcf_generate.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 input_preprocess.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 qc_cram.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 qc_fastq.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 qc_rna.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 qc_vcf.nf\n\u2502\xa0\xa0     \u251c\u2500\u2500 sentieon_vc.nf\n\u2502\xa0\xa0     \u2514\u2500\u2500 slivar.nf\n\u251c\u2500\u2500 ucgd_main.nf\n\u251c\u2500\u2500 ucgd.master.config\n\u251c\u2500\u2500 ucgd_post_params.yaml\n\u2514\u2500\u2500 workflows\n    \u2514\u2500\u2500 local\n        \u251c\u2500\u2500 jgt.nf\n        \u251c\u2500\u2500 mosaic.nf\n        \u251c\u2500\u2500 neo.nf\n        \u251c\u2500\u2500 project.nf\n        \u251c\u2500\u2500 rna.nf\n        \u251c\u2500\u2500 sv.nf\n        \u2514\u2500\u2500 var.nf\n")),(0,a.kt)("h3",{id:"component-description"},"Component description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nextflow file"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ucgd_main.nf")),(0,a.kt)("td",{parentName:"tr",align:null},"The main entry point script contains all ",(0,a.kt)("inlineCode",{parentName:"td"},"-entry")," options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ucgd.master.config ")),(0,a.kt)("td",{parentName:"tr",align:null},"Contains all templated paths and definitions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ucgd_post_params.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"Parameter file used to define and initiate launching of post processing steps.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ucgd_versions.yml")),(0,a.kt)("td",{parentName:"tr",align:null},"Created by the pipeline post processing.  Will contain all software versions for posterity.")))),(0,a.kt)("h3",{id:"processing-overview"},"Processing Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pipeline Overview",src:t(2621).Z,width:"2490",height:"2460"})),(0,a.kt)("h3",{id:"pipeline-dag-visualisation"},"Pipeline DAG visualisation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DAG",src:t(471).Z,width:"3839",height:"3291"})),(0,a.kt)("h3",{id:"version-notes"},"Version Notes"),(0,a.kt)("h5",{id:"version-324115-update"},(0,a.kt)("inlineCode",{parentName:"h5"},"Version 3.24.115")," Update:"),(0,a.kt)("p",null,"Pipeline has been updated to process using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/deepvariant"},"DeepVariant")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dnanexus-rnd/GLnexus"},"GLnexus"),". Sentieon and NeoSeq processing has been removed and archived.  All NeoSeq modules remain archived.  Neoseq nextflow profile had been moved to ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," for future use."),(0,a.kt)("h4",{id:"major-changes-from-version-2"},"Major changes from Version 2:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Migration to Nextflow's ",(0,a.kt)("a",{parentName:"li",href:"https://www.nextflow.io/docs/latest/dsl2.html"},"DSL2")," framework, which allows an improved ability to modularize and compartmentalize Nextflow processes and code."),(0,a.kt)("li",{parentName:"ul"},"Nextflow process to occur and remain within the ",(0,a.kt)("inlineCode",{parentName:"li"},"[IRB]/[PROJECT]/Scratch")," location."),(0,a.kt)("li",{parentName:"ul"},"Reference GRCh38 is the default and only reference used."),(0,a.kt)("li",{parentName:"ul"},"Processing based on UCGD ",(0,a.kt)("inlineCode",{parentName:"li"},"scope_of_work"),".")))}m.isMDXComponent=!0},2621:function(e,n,t){n.Z=t.p+"assets/images/processing_overview-4774cf6d2c17d0913acd9a45e5b5f736.png"},471:function(e,n,t){n.Z=t.p+"assets/images/version_2_dag-ea3ba60f032fdcb08826c97c91565287.png"}}]);