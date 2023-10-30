"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1545],{9613:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(8028),r=(a(9496),a(9613));const l={title:"Airtable",description:"Learn how to connect your Airtable API to ILLA Cloud and create apps that can query, manipulate, and display data"},i="Airtable",o={unversionedId:"airtable",id:"airtable",title:"Airtable",description:"Learn how to connect your Airtable API to ILLA Cloud and create apps that can query, manipulate, and display data",source:"@site/docs/airtable.mdx",sourceDirName:".",slug:"/airtable",permalink:"/ja/airtable",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/airtable.mdx",tags:[],version:"current",frontMatter:{title:"Airtable",description:"Learn how to connect your Airtable API to ILLA Cloud and create apps that can query, manipulate, and display data"}},p={},d=[{value:"Set up your Back end on Airtable",id:"set-up-your-back-end-on-airtable",level:3},{value:"Create Airtable in ILLA Cloud",id:"create-airtable-in-illa-cloud",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Airtable",id:"configure-airtable",level:3},{value:"List Records",id:"list-records",level:4},{value:"Get Record",id:"get-record",level:4},{value:"Create Records",id:"create-records",level:4},{value:"Update Record",id:"update-record",level:4},{value:"Update Multiple Records",id:"update-multiple-records",level:4},{value:"Delete Record",id:"delete-record",level:4},{value:"Delete Multiple Records",id:"delete-multiple-records",level:4}],c={toc:d},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"airtable"},"Airtable"),(0,r.kt)("p",null,"Airtable is a popular cloud-based relational database and spreadsheet platform that combines the simplicity of a spreadsheet with the complexity of a traditional database. It allows users to create and organize structured data in a user-friendly interface, making it useful for various tasks such as project management, content planning, and data collection."),(0,r.kt)("h3",{id:"set-up-your-back-end-on-airtable"},"Set up your Back end on Airtable"),(0,r.kt)("p",null,"Create an account on ",(0,r.kt)("inlineCode",{parentName:"p"},"Airtable")," and create your base according to your need."),(0,r.kt)("p",null,"In order to connect your base to ILLA Cloud, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"developer hub"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_developer_hub.png",alt:"air_developer_hub"})),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Personal Access Token")," page, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create new Token"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_create_new.jpeg",alt:"air_create_new"})),(0,r.kt)("p",null,"This will open configuration options for the PAT that you are creating."),(0,r.kt)("p",null,"First name the PAT, then choose the scopes you'd like this PAT to have access to. Finally, choose what level of access this PAT will have."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_new_token.jpeg",alt:"air_new_token"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"create token"))," button, we now have a PAT ready to connect."),(0,r.kt)("h3",{id:"create-airtable-in-illa-cloud"},"Create Airtable in ILLA Cloud"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign in to your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," at the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Airtable"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/action_list_3.jpeg",alt:"action_list_3"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below. In this case, fill in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Personal Access Token"))," we copied from ",(0,r.kt)("inlineCode",{parentName:"p"},"Airtable")," and paste it into ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Access Token"))," in the configuration."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources"))," to ","*","*","*","*","create a resource."),(0,r.kt)("p",null,"The ready ",(0,r.kt)("inlineCode",{parentName:"p"},"Airtable")," will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_ex_ready.jpeg",alt:"air_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign in to your Illa account, create a project in Illa Builder on the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Airtable"))," from the database list. Then, connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to the Airtable API."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_config.jpeg",alt:"air_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access token"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a piece of information that grants a third-party application or service permission to access your Airtable account's data and perform actions on your behalf")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created an Airtable resource, we can add the action by selecting Airtable from the action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air_resource_list.jpeg",alt:"air_resource_list"})),(0,r.kt)("p",null,"Now we have added the Airtable API as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/air.jpeg",alt:"air"})),(0,r.kt)("h3",{id:"configure-airtable"},"Configure Airtable"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base ID"),(0,r.kt)("td",{parentName:"tr",align:null},'a unique identifier for your Airtable database. You can get the base ID from your base URL. It is usually a string starting with "app".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table name"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the specific table within the chosen base that you want to interact with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,r.kt)("td",{parentName:"tr",align:null},"what type of operation your integration will perform on the specified table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,r.kt)("h4",{id:"list-records"},"List Records"),(0,r.kt)("p",null,"retrieves a list of records from a specified table in Airtable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"organize and display records based on specific criteria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Fields refer to the columns within your Airtable table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filter by formula"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"define a formula that filters the records you want to retrieve or interact with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"the order in which records are presented or retrieved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max records"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of records your integration fetches or interacts with in a single request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Page size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"often used in scenarios where data needs to be retrieved in multiple batches (pages)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offset"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the starting point for retrieving records in a specific page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cell format"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"how data is displayed within a specific field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"ensures that date and time calculations and presentations are accurate and consistent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User location"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"tailor the integration output based on the user's geographical location or preferences")))),(0,r.kt)("h4",{id:"get-record"},"Get Record"),(0,r.kt)("p",null,"fetches a specific record from a table by providing the unique record ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record ID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to each individual record")))),(0,r.kt)("h4",{id:"create-records"},"Create Records"),(0,r.kt)("p",null,"add new records to a table in Airtable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Records"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a part of the API payload that you provide when you want to add new records to a specific table")))),(0,r.kt)("h4",{id:"update-record"},"Update Record"),(0,r.kt)("p",null,"modify the values of fields within a single record"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record ID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to each individual record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Records"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a part of the API payload that you provide when you want to add new records to a specific table")))),(0,r.kt)("h4",{id:"update-multiple-records"},"Update Multiple Records"),(0,r.kt)("p",null,"modify fields in multiple records at once"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Records"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a part of the API payload that you provide when you want to add new records to a specific table")))),(0,r.kt)("h4",{id:"delete-record"},"Delete Record"),(0,r.kt)("p",null,"delete a specific record from a table by providing its record ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record ID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to each individual record")))),(0,r.kt)("h4",{id:"delete-multiple-records"},"Delete Multiple Records"),(0,r.kt)("p",null,"delete a specific record from a table by providing its record ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")))}s.isMDXComponent=!0}}]);