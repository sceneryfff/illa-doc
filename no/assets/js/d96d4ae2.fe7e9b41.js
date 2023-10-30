"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2471],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(8028),r=(a(9496),a(9613));const l={title:"Elastic Search",description:"Use ILLA Cloud to connect and interact with your Elastic Search data."},i="Elastic Search",o={unversionedId:"elastic-search",id:"elastic-search",title:"Elastic Search",description:"Use ILLA Cloud to connect and interact with your Elastic Search data.",source:"@site/docs/elastic-search.mdx",sourceDirName:".",slug:"/elastic-search",permalink:"/no/elastic-search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/elastic-search.mdx",tags:[],version:"current",frontMatter:{title:"Elastic Search",description:"Use ILLA Cloud to connect and interact with your Elastic Search data."}},p={},d=[{value:"Create Elastic Search",id:"create-elastic-search",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Elastic Search",id:"configure-elastic-search",level:3},{value:"Overview",id:"overview",level:4},{value:"insert a document",id:"insert-a-document",level:4},{value:"update a document",id:"update-a-document",level:4},{value:"Search",id:"search",level:4},{value:"get a document",id:"get-a-document",level:4},{value:"delete a document",id:"delete-a-document",level:4}],s={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elastic-search"},"Elastic Search"),(0,r.kt)("p",null,"Elastic search is a distributed, RESTful search and analytics engine that is commonly used to index and search large volumes of data. In Illa, you can use the Elasticsearch data source to connect to Elasticsearch instances and perform queries and aggregations on your data."),(0,r.kt)("h3",{id:"create-elastic-search"},"Create Elastic Search"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign into your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Elastic Search"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready Elastic Search will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ela_ex_ready.png",alt:"ela_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Elastic Search"))," from the database list. Then, connect to the database with required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to Elastic Search database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ela_config.png",alt:"ela_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the Elastic Search server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL options"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"decides how high a secure SSL TCP/IP connection is prioritized while negotiating with the server.")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created an Elastic Search resource, we can add the action by selecting Elastic Search from action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ela_resource_list.png",alt:"ela_resource_list"})),(0,r.kt)("p",null,"Now we have added the Elastic Search server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ela.png",alt:"ela"})),(0,r.kt)("h3",{id:"configure-elastic-search"},"Configure Elastic Search"),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,r.kt)("td",{parentName:"tr",align:null},"search, get a document, insert a document, update a document, delete a document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,r.kt)("h4",{id:"insert-a-document"},"insert a document"),(0,r.kt)("p",null,"sending an HTTP PUT request to the Elasticsearch cluster with a JSON document that contains the data to be inserted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a JSON document that contains the data to be inserted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the index where the document should be inserted")))),(0,r.kt)("p",null,"For example, to insert ",(0,r.kt)("inlineCode",{parentName:"p"},"value1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value3")," into ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field1")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field2")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field3"))," into our Elastic search database, put the code snippet below into the ",(0,r.kt)("inlineCode",{parentName:"p"},"**Body"),(0,r.kt)("strong",{parentName:"p"}," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"insert2")," for "),(0,r.kt)("inlineCode",{parentName:"p"},"Index"),"*","*","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "field1": "value1",\n    "field2": "value2",\n    "field3": "value3"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Output ")),(0,r.kt)("p",null,"Success message of whether the document is inserted successfully and information of the inserted document."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_insert_data.png",alt:"ela_insert_data"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{insert.data}}")," to get the message."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_insert_code.png",alt:"ela_insert_code"})),(0,r.kt)("h4",{id:"update-a-document"},"update a document"),(0,r.kt)("p",null,"sending an HTTP ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"POST"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PUT"))," request to the Elasticsearch cluster with the ID of the document that should be updated, and a JSON document that specifies the changes to be made."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The new value to be assigned to the field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the index where the document is stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the document.")))),(0,r.kt)("p",null,"For example, to update ",(0,r.kt)("inlineCode",{parentName:"p"},"value1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value3")," for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field1")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field2")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"field3"))," into our Elastic search database, put the code snippet below into the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Body,"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"insert2")," for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Index"))," , and copy-paste the document ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Id"))," from the insert message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{"doc":{\n    "field1": "value11",\n    "field2": "value2",\n    "field3": "value3"\n}}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Output ")),(0,r.kt)("p",null,"Success message of whether the document is updated successfully and information of the updated document."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_update_data.jpg",alt:"ela_update_data"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{update.data}}")," to get the message."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_update_code.jpg",alt:"ela_update_code"})),(0,r.kt)("h4",{id:"search"},"Search"),(0,r.kt)("p",null,"query and retrieve documents from an index"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the search query that is used to match documents in an index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the name of the index or indices that should be searched")))),(0,r.kt)("p",null,"For example, to search the database to find documents with key-value pair ",(0,r.kt)("inlineCode",{parentName:"p"},'"field1": "value1"'),", put the code snippet below into the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Query")," .")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n    "query": {\n        "match": {\n            "field1": "value1"\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Output ")),(0,r.kt)("p",null,"Success message with the number of hits/documents it finds that matches the query and the info for every hit."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_search_data.jpg",alt:"ela_search_data"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{search.data}}")," to get the message."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_search_code.jpg",alt:"ela_search_code"})),(0,r.kt)("h4",{id:"get-a-document"},"get a document"),(0,r.kt)("p",null,"sending an HTTP ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GET"))," request to the Elasticsearch cluster with the ID of the document that should be retrieved."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the index where the document is stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the document.")))),(0,r.kt)("p",null,"For example, to get the document info for the document we just updated, put ",(0,r.kt)("inlineCode",{parentName:"p"},"insert2")," for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Index")),", and copy-paste the document ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Id"))," from the updated message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Output ")),(0,r.kt)("p",null,"returns the document with the specified ID, or a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"404 Not Found"))," error if the document does not exist."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_get_data.jpg",alt:"ela_get_data"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{get.data}}")," to get the message."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_get_code.jpg",alt:"ela_get_code"})),(0,r.kt)("h4",{id:"delete-a-document"},"delete a document"),(0,r.kt)("p",null,"sending an HTTP DELETE request to the Elasticsearch cluster with the ID of the document that should be deleted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the index where the document is stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the document.")))),(0,r.kt)("p",null,"For example, to delete document, put ",(0,r.kt)("inlineCode",{parentName:"p"},"insert2")," for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Index"),",")," and copy-paste the document ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Id"))," from the updated message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Output ")),(0,r.kt)("p",null,"returns the document with the specified ID, or a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"404 Not Found"))," error if the document does not exist."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/ela_delete_data.jpg",alt:"ela_delete_data"})))}u.isMDXComponent=!0}}]);