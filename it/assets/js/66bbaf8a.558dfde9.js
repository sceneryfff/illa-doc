"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[4756],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(8028),i=(n(9496),n(9613));const o={title:"Hugging Face Endpoint",description:"Learn how to use Hugging Face Endpoint in ILLA"},r="Hugging Face Endpoint",l={unversionedId:"hugging-face-endpoint",id:"hugging-face-endpoint",title:"Hugging Face Endpoint",description:"Learn how to use Hugging Face Endpoint in ILLA",source:"@site/docs/hugging-face-endpoint.mdx",sourceDirName:".",slug:"/hugging-face-endpoint",permalink:"/it/hugging-face-endpoint",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hugging-face-endpoint.mdx",tags:[],version:"current",frontMatter:{title:"Hugging Face Endpoint",description:"Learn how to use Hugging Face Endpoint in ILLA"}},c={},p=[{value:"Create Hugging Face endpoint resource",id:"create-hugging-face-endpoint-resource",level:3},{value:"Configure connection information",id:"configure-connection-information",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure actions",id:"configure-actions",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1: Build the front-end interface with components",id:"step-1-build-the-front-end-interface-with-components",level:4},{value:"Step 2: Add a Hugging Face resource",id:"step-2-add-a-hugging-face-resource",level:4},{value:"Step 3: Configure an Action",id:"step-3-configure-an-action",level:4},{value:"Step 4: Connect the components and actions",id:"step-4-connect-the-components-and-actions",level:4}],u={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hugging-face-endpoint"},"Hugging Face Endpoint"),(0,i.kt)("p",null,"With Hugging Face Inference Endpoints, you can easily deploy Transformers, Diffusers or any model on dedicated, fully managed infrastructure. ",(0,i.kt)("a",{parentName:"p",href:"https://ui.endpoints.huggingface.co/new"},"Click here")," to create an endpoint. "),(0,i.kt)("h3",{id:"create-hugging-face-endpoint-resource"},"Create Hugging Face endpoint resource"),(0,i.kt)("p",null,"There are two ways to add a Hugging Face Endpoint resource. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"ILLA Builder")," >> Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources")," tab >> Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create New")," >> Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Hugging Face Endpoint")," >> Configure the connection information and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save Resource")),(0,i.kt)("li",{parentName:"ol"},"Enter the edit page >> click ",(0,i.kt)("inlineCode",{parentName:"li"},"+ New")," in the action list >> Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Hugging Face Endpoint")," >> Configure the connection information or click ",(0,i.kt)("inlineCode",{parentName:"li"},"+ New Resource")," to add new connection information")),(0,i.kt)("h3",{id:"configure-connection-information"},"Configure connection information"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Define a resource name that will be used for display in ILLA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Endpoint URL"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"create Endpoint here: ",(0,i.kt)("a",{parentName:"td",href:"https://ui.endpoints.huggingface.co/new"},"https://ui.endpoints.huggingface.co/new")," and get the URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Token"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The organization token. You can get it in ",(0,i.kt)("a",{parentName:"td",href:"https://huggingface.co/settings/tokens"},"https://huggingface.co/settings/tokens"),".")))),(0,i.kt)("h3",{id:"create-actions"},"Create Actions"),(0,i.kt)("p",null,"Enter the edit page >> click ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New")," in the action list >> Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Hugging Face Endpoint")," >> Choose an existing resource or add a new resource"),(0,i.kt)("h3",{id:"configure-actions"},"Configure actions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter type"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameter type of your Endpoint. For example, if your Endpoint needs an text input, choose fill in \u201cinputs\u201d parameter with text. If your Endpoint needs an JSON input, choose fill in \u201cinputs\u201d parameter with JSON or key-value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter your parameter. Use {{ componentName.value }} to use data of components.")))),(0,i.kt)("h3",{id:"use-case"},"Use case"),(0,i.kt)("p",null,"We have deployed ",(0,i.kt)("inlineCode",{parentName:"p"},"openai/whisper-base")," which gets an audio file input and converts into text. It is suitable for meeting minutes, podcasts to text, etc.  Next we will introduce how to use this model to build an application in ILLA Cloud."),(0,i.kt)("h4",{id:"step-1-build-the-front-end-interface-with-components"},"Step 1: Build the front-end interface with components"),(0,i.kt)("p",null,"We have built an interface using the components such as file upload and button, as follows."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf1.png",alt:""}),(0,i.kt)("h4",{id:"step-2-add-a-hugging-face-resource"},"Step 2: Add a Hugging Face resource"),(0,i.kt)("p",null,"Fill in the fields shown below to finish the resource configuration. ",(0,i.kt)("a",{parentName:"p",href:"https://ui.endpoints.huggingface.co/new"},"Create an Endpoint")," and get the Endpoint URL. And get the organization API token in ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/settings/tokens"},"profile settings"),". "),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf2.png",alt:""}),(0,i.kt)("h4",{id:"step-3-configure-an-action"},"Step 3: Configure an Action"),(0,i.kt)("p",null,"Select a parameter type first. Take ",(0,i.kt)("inlineCode",{parentName:"p"},"openai/whisper-base")," as an example, this model requires binary file input so we change the parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"Binary"),"."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf3.png",alt:""}),(0,i.kt)("p",null,"Set the binary to be passed to the model as the file data uploaded from the file upload component. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"{{upload1.value[0]}}")),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf4.png",alt:""}),(0,i.kt)("h4",{id:"step-4-connect-the-components-and-actions"},"Step 4: Connect the components and actions"),(0,i.kt)("p",null,"Add an event handler to the button to trigger the action run when the button is clicked. And set the value of text component to {{whisper.data","[0]",".text}} to display the convert result on text component. "),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf5.png",alt:""}),(0,i.kt)("p",null,"After the above steps are configured, the application is created and the running results are as follows."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/connect/hf6.gif",alt:""}))}s.isMDXComponent=!0}}]);