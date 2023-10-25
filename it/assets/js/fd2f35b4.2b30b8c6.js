"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[23],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(a),c=l,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||r;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},720:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const r={title:"Amazon S3",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/369?languages=en&filter=basic&value=0",metaTitle:"Amazon S3 Integration Doc | ILLA Cloud",desc:"Learn how to connect and interact with your Amazon S3 API using ILLA Cloud's database integration feature.",tagCategory:"doc_menu_amazon_s3_click",categoryName:"\ud83d\udd28 Integrations",categoryPriority:3,postPriority:1},o=void 0,i={unversionedId:"amazons3",id:"amazons3",title:"Amazon S3",description:"What is Amazon S3?",source:"@site/docs/amazons3.mdx",sourceDirName:".",slug:"/amazons3",permalink:"/it/amazons3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/amazons3.mdx",tags:[],version:"current",frontMatter:{title:"Amazon S3",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/369?languages=en&filter=basic&value=0",metaTitle:"Amazon S3 Integration Doc | ILLA Cloud",desc:"Learn how to connect and interact with your Amazon S3 API using ILLA Cloud's database integration feature.",tagCategory:"doc_menu_amazon_s3_click",categoryName:"\ud83d\udd28 Integrations",categoryPriority:3,postPriority:1},sidebar:"tutorialSidebar",previous:{title:"App editor",permalink:"/it/app-editor"}},p={},d=[{value:"<h2 hidden>What is Amazon S3?</h2>",id:"what-is-amazon-s3",level:2},{value:"Create Amazon S3 API",id:"create-amazon-s3-api",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Amazon S3",id:"configure-amazon-s3",level:3},{value:"Overview",id:"overview",level:4},{value:"List all objects in a bucket",id:"list-all-objects-in-a-bucket",level:4},{value:"Read an object",id:"read-an-object",level:4},{value:"Download an object",id:"download-an-object",level:4},{value:"Delete an object",id:"delete-an-object",level:4},{value:"Delete multiple objects",id:"delete-multiple-objects",level:4},{value:"Upload data",id:"upload-data",level:4},{value:"Upload multiple data",id:"upload-multiple-data",level:4}],m={toc:d},s="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-is-amazon-s3"},(0,l.kt)("h2",{hidden:!0},"What is Amazon S3?")),(0,l.kt)("p",null,"Amazon S3 is a highly scalable and secure cloud storage service offered by Amazon Web Services (AWS). When combined with ILLA Cloud, developers can seamlessly integrate Amazon S3 into their applications, leveraging its robust storage capabilities to store and retrieve data efficiently. ILLA Cloud simplifies the integration process, allowing developers to seamlessly connect to Amazon S3 and utilize its powerful features, such as data encryption, versioning, access controls, and seamless scalability. With the integration of Amazon S3 on ILLA Cloud, developers can enhance their applications with reliable and scalable storage solutions, enabling them to focus on building innovative and data-driven experiences."),(0,l.kt)("h3",{id:"create-amazon-s3-api"},"Create Amazon S3 API"),(0,l.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Resources")),(0,l.kt)("p",null,"Sign in to your Illa account, select ",(0,l.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,l.kt)("p",null,"Select ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Amazon S3"))," from the API list."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,l.kt)("p",null,"Connect to the database with the required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("p",null,"After creating a resource, the ready Amazon S3 will display as shown."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_ex_ready.jpg",alt:"amazon_ex_ready"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Builder")),(0,l.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder on the ",(0,l.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Amazon S3"))," from the database list. Then, connect to the database with the required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,l.kt)("p",null,"Here we need to provide information for connecting to Amazon S3 API."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_config.jpg",alt:"amazon_config"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket name"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier that represents a storage container in Amazon S3. It provides a logical separation for organizing and accessing your files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S3 ACL for uploaded files"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"allows you to define fine-grained access permissions for files within your bucket. It specifies who can perform specific operations, such as reading, writing, or deleting files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"geographical location where your Amazon S3 bucket is stored. It determines the physical location of your data and can impact factors like latency and data transfer costs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom S3 endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"enables you to configure a specific endpoint URL for accessing your Amazon S3 resources. It can be useful for scenarios where you want to use a custom domain or integrate with a CDN (Content Delivery Network).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Access key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"credentials that authenticate your requests to access Amazon S3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret access key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"generated when you create an IAM (Identity and Access Management) user or an AWS (Amazon Web Services) access key pair.")))),(0,l.kt)("h3",{id:"create-actions"},"Create Actions"),(0,l.kt)("p",null,"We have created an Amazon S3 resource, we can add the action by selecting Amazon S3 from the action list and choosing the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_resource_list.jpg",alt:"amazon_resource_list"})),(0,l.kt)("p",null,"Now we have added the Amazon server as an action to our building page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon.jpg",alt:"amazon"})),(0,l.kt)("h3",{id:"configure-amazon-s3"},"Configure Amazon S3"),(0,l.kt)("h4",{id:"overview"},"Overview"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,l.kt)("td",{parentName:"tr",align:null},"list all objects in a bucket, read an object, download an object, delete an object, delete multiple objects, upload data, upload multiple data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket name"),(0,l.kt)("td",{parentName:"tr",align:null},"a unique identifier that represents a storage container in Amazon S3.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,l.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,l.kt)("h4",{id:"list-all-objects-in-a-bucket"},"List all objects in a bucket"),(0,l.kt)("p",null,"retrieve a list of all objects stored within a specific bucket."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prefix to filter results"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"filter the results to include only objects whose key (name) begins with a specific prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specify a character that separates object key hierarchies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Signed URL"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to generate a time-limited URL that provides temporary access to a specific object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Keys"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"limit the maximum number of objects returned in the response")))),(0,l.kt)("p",null,"For example, to get all objects in the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return an array of objects, each including at least one\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"objectKey"),"\xa0property."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_list_all_data1.jpg",alt:"amazon_list_all_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{s31.data}}")," to get all returned data."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_list_all_code1.jpg",alt:"amazon_list_all_code"})),(0,l.kt)("h4",{id:"read-an-object"},"Read an object"),(0,l.kt)("p",null,"retrieve the contents of a specific object stored within a bucket"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the name or path of the object within the bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Signed URL"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a time-limited URL that provides temporary access to a specific object")))),(0,l.kt)("p",null,"For example, to get the content of document '1111.txt', put ",(0,l.kt)("inlineCode",{parentName:"p"},"1111.txt")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Object key")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the content and metadata of a document"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/amazon_read_data1.jpg",alt:"amazon_read_data1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/amazon_read_data2.jpg",alt:"amazon_read_data2"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{s31.data}}")," to get the returned data."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_read_code.jpg",alt:"amazon_read_code"})),(0,l.kt)("h4",{id:"download-an-object"},"Download an object"),(0,l.kt)("p",null,"retrieve the contents of a specific object stored within a bucket"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the name or path of the object within the bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Signed URL"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a time-limited URL that provides temporary access to a specific object")))),(0,l.kt)("p",null,"For example, to download the document '1111.txt', put ",(0,l.kt)("inlineCode",{parentName:"p"},"1111.txt")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Object key")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the content and metadata of a document and download the document to local"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_download_data.jpg",alt:"amazon_read_data1"})),(0,l.kt)("h4",{id:"delete-an-object"},"Delete an object"),(0,l.kt)("p",null,"deletes a single object from an S3 bucket."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the name or path of the object within the bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Signed URL"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a time-limited URL that provides temporary access to a specific object")))),(0,l.kt)("p",null,"For example, to delete the document '1111.txt', put ",(0,l.kt)("inlineCode",{parentName:"p"},"1111.txt")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Object key")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the content and metadata of the deleted document"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_delete_data.jpg",alt:"amazon_delete_data"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_delete_data1.jpg",alt:"amazon_delete_data1"})),(0,l.kt)("h4",{id:"delete-multiple-objects"},"Delete multiple objects"),(0,l.kt)("p",null,"deletes multiple objects simultaneously from an S3 bucket"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object Key"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the name or path of the object within the bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Generate Signed URL"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"generate a time-limited URL that provides temporary access to a specific object")))),(0,l.kt)("p",null,"For example, to delete multiple documents, put ",(0,l.kt)("inlineCode",{parentName:"p"},'{{["images.jpeg", "images-1.png"]}}')," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Object key")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the content and metadata of the deleted documents"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_delete2_data1.jpg",alt:"amazon_delete2_data1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_delete2_data2.jpg",alt:"amazon_delete2_data2"})),(0,l.kt)("h4",{id:"upload-data"},"Upload data"),(0,l.kt)("p",null,"uploading an object into a bucket"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Type"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"MIME type of object you are uploading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upload object name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the name of the object you are uploading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upload data"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the data you want to upload to Amazon S3.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout for uploading a file (Minute)"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"the uploading time in minutes before the uploading process is stopped by a timeout error")))),(0,l.kt)("p",null,"For example, to delete multiple documents, put ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"content type")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"text.txt")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"upload object name")),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"upload data")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the message of whether the document is uploaded successfully"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_upload_data1.jpg",alt:"amazon_upload_data1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_upload_data2.jpg",alt:"amazon_upload_data2"})),(0,l.kt)("h4",{id:"upload-multiple-data"},"Upload multiple data"),(0,l.kt)("p",null,"upload a list of objects into a bucket"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Type"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"MIME type of object you are uploading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upload object name list"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a list of names of the objects you are uploading.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upload data list"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a list of the data you want to upload to Amazon S3.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout for uploading a file (Minute)"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"the uploading time in minutes before the uploading process is stopped by a timeout error")))),(0,l.kt)("p",null,"For example, to delete multiple documents, put ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"content type")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{{['text.txt', 'text2.txt']}}")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"upload object name list")),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"{{['text', 'text2']}}")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"upload data list")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"return the message of whether the documents are uploaded successfully"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_upload_data1.jpg",alt:"amazon_upload_data1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/assemble/amazon_upload_data2.jpg",alt:"amazon_upload_data2"})))}u.isMDXComponent=!0}}]);