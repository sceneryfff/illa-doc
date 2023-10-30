"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2896],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(8028),r=(n(9496),n(9613));const o={title:"Neon",description:"Connect your Neon database to ILLA Cloud and create apps that can query, manipulate, and display data. This guide will show you how."},l="Neon",i={unversionedId:"neon",id:"neon",title:"Neon",description:"Connect your Neon database to ILLA Cloud and create apps that can query, manipulate, and display data. This guide will show you how.",source:"@site/docs/neon.mdx",sourceDirName:".",slug:"/neon",permalink:"/fi/neon",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/neon.mdx",tags:[],version:"current",frontMatter:{title:"Neon",description:"Connect your Neon database to ILLA Cloud and create apps that can query, manipulate, and display data. This guide will show you how."}},s={},p=[{value:"Set up your Back end on Neon",id:"set-up-your-back-end-on-neon",level:3},{value:"Create Neon",id:"create-neon",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Neon",id:"configure-neon",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"neon"},"Neon"),(0,r.kt)("p",null,"Neon in Illa is a database integration that allows you to connect and interact with a Neon database. Neon is a popular open-source relational database management system that is known for its speed, reliability, and ease of use."),(0,r.kt)("p",null,"With the Neon integration in Illa, you can query, insert, update, and delete data from a Neon database using SQL commands. You can also create custom SQL queries and run them within Illa. This makes it easy to build data-driven applications and dashboards that display real-time data from a Neon database."),(0,r.kt)("p",null,"This tutorial outlines the process of creating an Admin Panel using ILLA Builder and Neon in a few simple steps. ILLA is a low-code platform for developers that enables the rapid development and deployment of internal tools. It allows for creating pages by dragging and dropping UI components, connecting to any database or API, and writing JavaScript. To learn more about Neon, visit their website at ",(0,r.kt)("a",{parentName:"p",href:"https://neon.tech/"},"https://neon.tech/")," Let's begin!"),(0,r.kt)("h3",{id:"set-up-your-back-end-on-neon"},"Set up your Back end on Neon"),(0,r.kt)("p",null,"On the Neon dashboard, click ",(0,r.kt)("inlineCode",{parentName:"p"},"New project")," and set the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"adminPanel"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_create_project.png",alt:"neon_create_project"})),(0,r.kt)("p",null,"Then we can navigate to the project page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_create_project_1.png",alt:"neon_create_project_1"})),(0,r.kt)("p",null,"Importing data through sample SQL queries."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_create_sql.png",alt:"neon_create_sql"})),(0,r.kt)("p",null,"We now have sample database set up."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_sample_data.png",alt:"neon_sample_data"})),(0,r.kt)("h3",{id:"create-neon"},"Create Neon"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign into your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Neon"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below. "),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready Neon will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_ex_ready.png",alt:"neon_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Neon"))," from the database list. Then, connect to the database with required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to Neon database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_config.png",alt:"neon_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a configuration setting that is used to specify the details of a connection to an external data source, such as a database or API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '5432'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the Neon server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")))),(0,r.kt)("p",null,"There are two ways to fill in the information for configuring Neon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parsing given connection string")),(0,r.kt)("p",null,"In Neon project page, scrolling done, we have a given connection string in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Direct Connection")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_connection.png",alt:"neon_connection"})),(0,r.kt)("p",null,"Note: Tapping the blur shows the hidden numbers, then we may copy it."),(0,r.kt)("p",null,"After pasting the string into the connection string text area in configuration, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parse")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_parsing.png",alt:"neon_parsing"})),(0,r.kt)("p",null,"We have all the information filled out automatically for us."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_parse_done.png",alt:"neon_parse_done"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manually Fill out the information.")),(0,r.kt)("p",null,"We can also find required information from the project page and manually fill them in to the configuration in Illa. "),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created a Neon resource, we can add the action by selecting Neon from action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon_resource_list.png",alt:"neon_resource_list"})),(0,r.kt)("p",null," Now we have added the Neon server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/neon.png",alt:"neon"})),(0,r.kt)("h3",{id:"configure-neon"},"Configure Neon"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL query"),(0,r.kt)("td",{parentName:"tr",align:null},"sql commands to fetch (select), insert, update, delete data from database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users ORDER BY lastname;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users\n\n    (firstname, lastname, email)\n\nVALUES\n\n    (\n\n        {{ NewUser.data.firstNameInput }},\n\n        {{ NewUser.data.lastNameInput }},\n\n        {{ NewUser.data.emailInput }}\n\n    );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE users\n  SET firstname = '{{form1.updatedProfile.first }}'\n  WHERE id = {{ form1.updatedProfile.uid }};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM users WHERE id = {{ form1.updatedProfile.uid }};\n")))}d.isMDXComponent=!0}}]);