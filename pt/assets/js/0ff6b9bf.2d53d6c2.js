"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2961],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(8028),o=(a(9496),a(9613));const s={title:"Supabase DB",description:"Connect to Supabase instance and show Supabase DB data on components"},i="Supabase DB",r={unversionedId:"supabase",id:"supabase",title:"Supabase DB",description:"Connect to Supabase instance and show Supabase DB data on components",source:"@site/docs/supabase.mdx",sourceDirName:".",slug:"/supabase",permalink:"/pt/supabase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/supabase.mdx",tags:[],version:"current",frontMatter:{title:"Supabase DB",description:"Connect to Supabase instance and show Supabase DB data on components"}},l={},p=[{value:"Step 1: Set up your Back end on Supabase",id:"step-1-set-up-your-back-end-on-supabase",level:3},{value:"Step 2: Build UI on ILLA Cloud",id:"step-2-build-ui-on-illa-cloud",level:3},{value:"Step 3: Connect to Supabase and config CRUD",id:"step-3-connect-to-supabase-and-config-crud",level:3},{value:"Step 4: Show data on components",id:"step-4-show-data-on-components",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supabase-db"},"Supabase DB"),(0,o.kt)("p",null,"Supabase is an open-source Firebase alternative that allows developers to build real-time web and mobile applications. It provides many of the same features as Firebase, such as real-time databases, user authentication, and hosting, but with the added benefits of being open-source and providing a SQL API. This allows developers to use their existing SQL knowledge and tools, making it easy to integrate with other systems. Additionally, Supabase provides a more flexible and customizable platform than Firebase, which can be more restrictive regarding data modeling and usage."),(0,o.kt)("p",null,"This tutorial outlines the process of creating an Admin Panel using ILLA Builder and Supabase in a few simple steps. ILLA is a low-code platform for developers that enables the rapid development and deployment of internal tools. It allows for creating pages by dragging and dropping UI components, connecting to any database or API, and writing JavaScript. To learn more about Supabase, visit their website at ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com/"},"https://supabase.com/"),". Let's begin!"),(0,o.kt)("h3",{id:"step-1-set-up-your-back-end-on-supabase"},"Step 1: Set up your Back end on Supabase"),(0,o.kt)("p",null,"On the ",(0,o.kt)("a",{parentName:"p",href:"https://app.supabase.com/projects"},"Supabase dashboard"),", click ",(0,o.kt)("inlineCode",{parentName:"p"},"New project")," and set the name to adminPanel."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase1.png",alt:""}),(0,o.kt)("p",null,"Create a new table by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a new table")," ."),(0,o.kt)("p",null,"Supabase offers a variety of options for populating tables with data, including writing queries, creating schemas through a user interface, and uploading CSV files."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase2.png",alt:""}),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase3.png",alt:""}),(0,o.kt)("p",null,"Fill out the info in the table. The database is now set up."),(0,o.kt)("h3",{id:"step-2-build-ui-on-illa-cloud"},"Step 2: Build UI on ILLA Cloud"),(0,o.kt)("p",null,"On ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.illacloud.com"},"ILLA Cloud"),", click Create New to create a new application."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase4.png",alt:""}),(0,o.kt)("p",null,"Drag components from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Insert")," panel to the canvas."),(0,o.kt)("p",null,"Select the components on the canvas and configure the property on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Inspect")," panel."),(0,o.kt)("p",null,"As seen in the below screenshot, we have built a simple admin panel."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase5.png",alt:""}),(0,o.kt)("h3",{id:"step-3-connect-to-supabase-and-config-crud"},"Step 3: Connect to Supabase and config CRUD"),(0,o.kt)("p",null,"Note down the database connection information under ",(0,o.kt)("a",{parentName:"p",href:"https://app.supabase.com/project/hdcfnsxpwwgboqomdrhp/settings/database"},"Project Settings")," in Supabase."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase6.png",alt:""}),(0,o.kt)("p",null,"In the Action List, click ",(0,o.kt)("inlineCode",{parentName:"p"},"+ New")," and select Supabase DB."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase7.png",alt:""}),(0,o.kt)("p",null,"Fill out the form to connect to your Supabase instance. Test connection and save resource."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase8.png",alt:""}),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Action")," to create an action with the Supabase resource and config your CRUD."),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase9.png",alt:""}),(0,o.kt)("p",null,"Use {{ to get the front-end input data. The following is an example of the User Management page in the Admin Panel."),(0,o.kt)("p",null,"Search for a user by the name inputted in input1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'SELECT *\nFROM user\nWHERE name = "{{input1.value}}"\n;\n')),(0,o.kt)("p",null,"Update user data. Update user information when id matches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'UPDATE user\nSET name = "{{input3.value}}"\n, email = "{{input4.value}}"\nWHERE id="{{input2.value}}"\n;\n')),(0,o.kt)("p",null,"Insert user data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'INSERT INTO user VALUES("{{input5.value}}","{{input6.value}}","{{input7.value}}");\n')),(0,o.kt)("p",null,"Delete a user by id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'DELETE FROM user WHERE id = "{{input2.value}}";\n')),(0,o.kt)("h3",{id:"step-4-show-data-on-components"},"Step 4: Show data on components"),(0,o.kt)("p",null,"Configure the properties of components with {{ . For example:"),(0,o.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/supabase10.png",alt:""}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://supabase.com/"},"Supabase official website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase"},"Supabase GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://supabase.com/docs"},"Supabase documentation"))))}d.isMDXComponent=!0}}]);