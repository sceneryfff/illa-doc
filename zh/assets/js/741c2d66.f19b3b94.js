"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[6207],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,k=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const i={title:"Appwrite",description:"Learn how to connect and interact with Appwrite database using ILLA Cloud."},r="Appwrite",p={unversionedId:"appwrite",id:"appwrite",title:"Appwrite",description:"Learn how to connect and interact with Appwrite database using ILLA Cloud.",source:"@site/docs/appwrite.mdx",sourceDirName:".",slug:"/appwrite",permalink:"/zh/appwrite",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/appwrite.mdx",tags:[],version:"current",frontMatter:{title:"Appwrite",description:"Learn how to connect and interact with Appwrite database using ILLA Cloud."}},o={},d=[{value:"Set up your Back end on Appwrite",id:"set-up-your-back-end-on-appwrite",level:3},{value:"Create Appwrite",id:"create-appwrite",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Appwrite",id:"configure-appwrite",level:3},{value:"Overview",id:"overview",level:4},{value:"Create a document",id:"create-a-document",level:4},{value:"Get a document",id:"get-a-document",level:4},{value:"Update a document",id:"update-a-document",level:4},{value:"Delete a document",id:"delete-a-document",level:4},{value:"List document",id:"list-document",level:4}],c={toc:d},u="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"appwrite"},"Appwrite"),(0,l.kt)("p",null,"Appwrite in Illa is a database integration that allows you to connect and interact with a Appwrite database. Appwrite is a popular open-source relational database management system that is known for its speed, reliability, and ease of use."),(0,l.kt)("p",null,"With the Appwrite integration in Illa, you can query, insert, update, and delete data from a Appwrite database using SQL commands. You can also create custom SQL queries and run them within Illa. This makes it easy to build data-driven applications and dashboards that display real-time data from a Appwrite database."),(0,l.kt)("p",null,"This tutorial outlines the process of creating an Admin Panel using ILLA Builder and Appwrite in a few simple steps. ILLA is a low-code platform for developers that enables the rapid development and deployment of internal tools. It allows for creating pages by dragging and dropping UI components, connecting to any database or API, and writing JavaScript. To learn more about Appwrite, visit their website at ",(0,l.kt)("a",{parentName:"p",href:"https://Appwrite.io/"},"https://Appwrite.io/")," Let\u2019s begin!"),(0,l.kt)("h3",{id:"set-up-your-back-end-on-appwrite"},"Set up your Back end on Appwrite"),(0,l.kt)("p",null,"After signing into your Appwrite account, on the Appwrite dashboard, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create project")," and set the name to ",(0,l.kt)("inlineCode",{parentName:"p"},"First Project"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_create_project.png",alt:"app_create_project"})),(0,l.kt)("p",null,"Then we can navigate to the project page. Appwrite provides multiple platforms for building your app as well as integrations."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_platforms.png",alt:"app_platforms"})),(0,l.kt)("p",null,"Here we choose Web App as an example."),(0,l.kt)("p",null,"After creating our Web app project, we may go to the database page since we only use Appwrite as a database integration so far."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_dahsboard.png",alt:"app_dashboard"})),(0,l.kt)("p",null,"Then we may create database and create collections within the database"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_create_database.png",alt:"app_create_database"}),"\nFrom here we may create attributes and data in the collection."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_create_data.png",alt:"app_create_data"})),(0,l.kt)("p",null,"In order to retrieve documents by attributes, we need to make corresponding indexes for each attributes."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_create_index.png",alt:"app_create_index"})),(0,l.kt)("p",null,"This database is now ready for you to integrate with Illa."),(0,l.kt)("h3",{id:"create-appwrite"},"Create Appwrite"),(0,l.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Resources")),(0,l.kt)("p",null,"Sign into your Illa account, select ",(0,l.kt)("inlineCode",{parentName:"p"},"Resources")," on the top of the page, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create New")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,l.kt)("p",null,"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Appwrite")," from the database list."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,l.kt)("p",null,"Connect to the database with the required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Test Connection")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Save Resources"),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("p",null,"After creating a resource, the ready Appwrite will display as shown."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_ex_ready.png",alt:"app_ex_ready"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Builder")),(0,l.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,l.kt)("inlineCode",{parentName:"p"},"App")," page, and navigate to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Action List")," at the bottom of the page. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"new"),", then select ",(0,l.kt)("inlineCode",{parentName:"p"},"Appwrite")," from the database list. Then, connect to the database with required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Test Connection")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Save Resources"),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,l.kt)("p",null,"Here we need to provide information for connecting to Appwrite database."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_config.png",alt:"app_config"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Host"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"unique identifier assigned to each database created within Appwrite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"unique identifier that represents your entire Appwrite project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a secret token that serves as a form of authentication when making API requests to the Appwrite server")))),(0,l.kt)("p",null,"To find the required ",(0,l.kt)("inlineCode",{parentName:"p"},"Host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Database ID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Project ID"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"API key")," in Appwrite, we first go to the ",(0,l.kt)("inlineCode",{parentName:"p"},"setting")," button at the bottom left corner of the project page."),(0,l.kt)("p",null,"Copying the ",(0,l.kt)("inlineCode",{parentName:"p"},"project ID")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"project ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"API Endpoint")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"Host")," in the Appwrite configuration in Illa."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_setting.png",alt:"app_setting"})),(0,l.kt)("p",null,"Then we may click the ",(0,l.kt)("inlineCode",{parentName:"p"},"View API Keys")," button on the same page. If you have not created an API for this project, click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create API Key")," button and select only ",(0,l.kt)("inlineCode",{parentName:"p"},"Database")," folder since that\u2019s what we will be using from Appwrite."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_api_key.png",alt:"app_api_key"})),(0,l.kt)("p",null,"Copy the ",(0,l.kt)("inlineCode",{parentName:"p"},"API Key Secret")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"API key")," in Illa configuration. It can be copied for these two spots."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_key_secret.png",alt:"app_key_secret"})),(0,l.kt)("p",null,"What we have left is the ",(0,l.kt)("inlineCode",{parentName:"p"},"Database ID")," which we can find in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Database")," Page. Copying it and paste it at the Appwrite Configuration in Illa."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_database.png",alt:"app_database"})),(0,l.kt)("p",null,"The final product should look something like this."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_final_config.png",alt:"app_final_config"})),(0,l.kt)("h3",{id:"create-actions"},"Create Actions"),(0,l.kt)("p",null,"We have created a Appwrite resource, we can add the action by selecting Appwrite from action list and choosing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Create action")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_resource_list.png",alt:"app_resource_list"})),(0,l.kt)("p",null,"Now we have added the Appwrite server as an action to our building page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app.png",alt:"app"})),(0,l.kt)("h3",{id:"configure-appwrite"},"Configure Appwrite"),(0,l.kt)("h4",{id:"overview"},"Overview"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a document, Get a document, Update a document, Delete a document, List documents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to a database collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,l.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,l.kt)("h4",{id:"create-a-document"},"Create a document"),(0,l.kt)("p",null,"create a new document in a collection"),(0,l.kt)("p",null," Input "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to a database collection document")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"an object containing the fields and values of the new document.")))),(0,l.kt)("p",null,"For example, to create a new document in a collection with two fields - ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),", you can use 1 as ",(0,l.kt)("inlineCode",{parentName:"p"},"document ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},'{{ {"Name": "David", "Age": 18}}}')," for ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,l.kt)("p",null," Output "),(0,l.kt)("p",null,"a response object that includes the ID of the newly created document, as well as additional metadata such as the date and time of creation."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_create_code.png",alt:"app_create_code"})),(0,l.kt)("h4",{id:"get-a-document"},"Get a document"),(0,l.kt)("p",null,"retrieve a specific document from a collection in the database"),(0,l.kt)("p",null," Input "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to a database collection document")))),(0,l.kt)("p",null,"For example, we can get the document with id ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("p",null," Output "),(0,l.kt)("p",null,"a response object that includes the data of the requested document"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_get_data.png",alt:"app_get_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{Appwrite1.data}}")," to get all returned value."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_get_code.png",alt:"app_get_code"})),(0,l.kt)("h4",{id:"update-a-document"},"Update a document"),(0,l.kt)("p",null,"update the data of an existing document in a collection."),(0,l.kt)("p",null," Input "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to a database collection document")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"An object containing the updated fields and values that you want to assign to the document.")))),(0,l.kt)("p",null,"For example, to update a document in a collection using the ",(0,l.kt)("inlineCode",{parentName:"p"},"updateDocument")," method, you can put ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," for document id and ",(0,l.kt)("inlineCode",{parentName:"p"},'{{{"Name":"Fred"}}}')," for data."),(0,l.kt)("p",null," Output "),(0,l.kt)("p",null,"a response object that includes the data of the requested document"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_update_data.png",alt:"app_update)data"})),(0,l.kt)("h4",{id:"delete-a-document"},"Delete a document"),(0,l.kt)("p",null,"delete a specific document from a collection in the database"),(0,l.kt)("p",null," Input "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to a database collection document")))),(0,l.kt)("p",null,"For example, we can delete the document with id ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("p",null," Output "),(0,l.kt)("p",null,"a response object that confirms the successful deletion of the document."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_delete_data.png",alt:"app_delete_data"})),(0,l.kt)("h4",{id:"list-document"},"List document"),(0,l.kt)("p",null,"retrieve multiple documents from a collection in the database"),(0,l.kt)("p",null," Input "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"define conditions to filter the documents based on specific fields and values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Order by"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the field by which the resulting documents should be sorted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"restrict the number of documents returned in the result set")))),(0,l.kt)("p",null,"For example, to list all the documents with Name = James."),(0,l.kt)("p",null," Output "),(0,l.kt)("p",null,"An array of documents that satisfy the filter."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/app_list_data.png",alt:"app_list_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{Appwrite1.data[0].documents}}")," to get returned value."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/app_list_code.png",alt:"app_list_code"})))}s.isMDXComponent=!0}}]);