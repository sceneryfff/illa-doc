"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[9302],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(8028),i=(n(9496),n(9613));const o={title:"Hugging Face API",description:"Learn how to use Hugging Face API in ILLA"},l="Hugging Face API",r={unversionedId:"hugging-face-api",id:"hugging-face-api",title:"Hugging Face API",description:"Learn how to use Hugging Face API in ILLA",source:"@site/docs/hugging-face-api.mdx",sourceDirName:".",slug:"/hugging-face-api",permalink:"/ja/hugging-face-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hugging-face-api.mdx",tags:[],version:"current",frontMatter:{title:"Hugging Face API",description:"Learn how to use Hugging Face API in ILLA"}},s={},p=[{value:"What you can do with Hugging Face in ILLA Builder",id:"what-you-can-do-with-hugging-face-in-illa-builder",level:3},{value:"Configure Hugging Face API resource",id:"configure-hugging-face-api-resource",level:3},{value:"Configure Action",id:"configure-action",level:3},{value:"Usecase 1",id:"usecase-1",level:2},{value:"Step 1: Build UI with components on ILLA Builder",id:"step-1-build-ui-with-components-on-illa-builder",level:3},{value:"Step 2: Create a Hugging Face Resource and config the Actions",id:"step-2-create-a-hugging-face-resource-and-config-the-actions",level:3},{value:"Step 3: Connect actions to components",id:"step-3-connect-actions-to-components",level:3},{value:"Demo",id:"demo",level:3},{value:"Usecase 2",id:"usecase-2",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hugging-face-api"},"Hugging Face API"),(0,i.kt)("p",null,"Hugging Face is the Github of the machine learning community, with hundreds of thousands of pre-trained models and 10,000 datasets currently available. You can freely access models and datasets shared by other industry experts or host and deploy your models on Hugging Face."),(0,i.kt)("p",null,"Some examples of models available in the Hugging Face library include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"BERT (Bidirectional Encoder Representations from Transformers): BERT is a transformer-based model developed by Google for various NLP tasks. It has achieved state-of-the-art results in language understanding and machine translation tasks."),(0,i.kt)("li",{parentName:"ol"},"GPT (Generative Pre-training Transformer): GPT is another transformer-based model developed by OpenAI. It is primarily used for language generation tasks, such as translation and text summarization."),(0,i.kt)("li",{parentName:"ol"},"RoBERTa (Robustly Optimized BERT): RoBERTa is an extension of the BERT model that was developed to improve BERT's performance on various NLP tasks."),(0,i.kt)("li",{parentName:"ol"},"XLNet (eXtraordinary LanguageNet): XLNet is a transformer-based model developed by Google that is designed to improve the performance of transformer models on language understanding tasks."),(0,i.kt)("li",{parentName:"ol"},"ALBERT (A Lite BERT): ALBERT is a version of the BERT model that was developed to be more efficient and faster to train while maintaining good performance on NLP tasks.")),(0,i.kt)("h3",{id:"what-you-can-do-with-hugging-face-in-illa-builder"},"What you can do with Hugging Face in ILLA Builder"),(0,i.kt)("p",null,"In Hugging Face, over 130,000 machine-learning models are available through the public API, which you can use and test for free at ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/models"},"https://huggingface.co/models"),". In addition, if you need a solution for production scenarios, you can use Hugging Face's Inference Endpoints, which can be deployed and accessed at ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/inference-endpoints/index"},"https://huggingface.co/docs/inference-endpoints/index"),"."),(0,i.kt)("p",null,"ILLA Builder provides dozens of commonly used front-end components, allowing you to build different front-end interfaces based on your specific needs quickly. At the same time, ILLA offers a connection to Hugging Face, allowing you to quickly connect to the API, send requests, and receive returned data. By connecting the API and front-end components, you can implement the requirement that users can enter content through the front end and submit it to the API. The API returns the generated content to be displayed on the front end."),(0,i.kt)("h3",{id:"configure-hugging-face-api-resource"},"Configure Hugging Face API resource"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Define a resource name that will be used for display in ILLA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Token"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The user access or API token. You can get it in ",(0,i.kt)("a",{parentName:"td",href:"https://huggingface.co/settings/tokens"},"https://huggingface.co/settings/tokens"),".")))),(0,i.kt)("h3",{id:"configure-action"},"Configure Action"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Model ID"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Search for models: ",(0,i.kt)("a",{parentName:"td",href:"https://huggingface.co/models"},"https://huggingface.co/models"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter type"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameter type of your endpoint. For example, if your endpoint needs an text input, choose fill in \u201cinputs\u201d parameter with text. If your endpoint needs an JSON input, choose fill in \u201cinputs\u201d parameter with JSON or key-value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter your parameter. Use {{ componentName.value }} to use data of components.")))),(0,i.kt)("h1",{id:"how-to-use-hugging-face-in-illa-builder"},"How to use Hugging Face in ILLA Builder"),(0,i.kt)("h2",{id:"usecase-1"},"Usecase 1"),(0,i.kt)("h3",{id:"step-1-build-ui-with-components-on-illa-builder"},"Step 1: Build UI with components on ILLA Builder"),(0,i.kt)("p",null,"Here we will demonstrate how to build a simple text that input text prompt and a text question to output a text answer. "),(0,i.kt)("p",null,'You need two textarea components labeled as "Enter the original text" and "Enter the question here", and button component labeled as "Run", and a text area component labeled as "Anwer" for output text. The following image is an example as described above.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi1.png",alt:"hfapi"})),(0,i.kt)("h3",{id:"step-2-create-a-hugging-face-resource-and-config-the-actions"},"Step 2: Create a Hugging Face Resource and config the Actions"),(0,i.kt)("p",null,"Click + New in the action list and select Hugging Face Inference API."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi2.png",alt:"hfapi2"})),(0,i.kt)("p",null,"Fill in the form to connect to your Hugging Face:"),(0,i.kt)("p",null,"Name: The name that will be displayed in ILLA"),(0,i.kt)("p",null,"Token: Get in your Hugging Face ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/settings/tokens"},"profile settings")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi3.png",alt:"hfapi3"})),(0,i.kt)("p",null,"Confirm the model information in Hugging Face before configuring the actions:"),(0,i.kt)("p",null,"Select a model in ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/models"},"Hugging Face Model Page")),(0,i.kt)("p",null,"Let\u2019s use\xa0",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/deepset/roberta-base-squad2"},"deepset/roberta-base-squad2")," as an example. Enter the detail page > click Deploy > Click Inference API"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi4.png",alt:"hfapi4"})),(0,i.kt)("p",null,"The parameters after ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cinputs\u201d")," is what you should fill in ILLA. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi5.png",alt:"hfapi5"})),(0,i.kt)("p",null,"In ILLA Builder, we should fill in the Model ID and Parameter. Taking the above model as an example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cinputs\u201d")," is a key-value pair, so we can fill in it with key-value or JSON. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi6.png",alt:"hfapi6"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi7.png",alt:"hfapi7"})),(0,i.kt)("p",null,"And we also support the text input and binary input which can meet all Hugging Face Inference API connections."),(0,i.kt)("h3",{id:"step-3-connect-actions-to-components"},"Step 3: Connect actions to components"),(0,i.kt)("p",null,"To pass the user's front-end input to the API, you can use {{ to retrieve data inputted in the component. For example, input2 is the component to input the question and input1 is the component to input context, we can fill ",(0,i.kt)("inlineCode",{parentName:"p"},"question")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," in key, and fill ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ input.value }}")," in value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n"question": {{input2.value}},\n"context": {{input1.value}}\n}\n')),(0,i.kt)("p",null,"Before displaying the output data of the Action in the front-end component, we should confirm which field the output of different models is placed in. Still taking ",(0,i.kt)("inlineCode",{parentName:"p"},"deepset/roberta-base-squad2")," as an example, the results are as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi8.png",alt:"hfapi8"})),(0,i.kt)("p",null,"So we can get the answer with ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ textQuestion.data[0].answer }}"),"(the ",(0,i.kt)("inlineCode",{parentName:"p"},"textQuestion")," is the name of the action). "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi9.png",alt:"hfapi9"})),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi10.gif",alt:"hfapi10"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/connect/hfapi11.gif",alt:"hfapi11"})),(0,i.kt)("h2",{id:"usecase-2"},"Usecase 2"),(0,i.kt)("p",null,"Here we will demonstrate how to use the Stable diffusion model thorugh the Hugging Face API in Illa Cloud."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1: Building a Front-end Interface")),(0,i.kt)("p",null,"We construct a front-end interface by utilizing a drag-and-drop approach to place essential components such as input fields, buttons, images, and more. After adjusting the styles of the components, we obtain the following complete webpage."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_layout.png",alt:"hugging_layout"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2: Creating Resources and Actions")),(0,i.kt)("p",null,"We establish resources and actions by utilizing the Hugging Face Inference API to connect to the Stable Diffusion model. Two models can be utilized: ",(0,i.kt)("inlineCode",{parentName:"p"},"runwayml/stable-diffusion-v1-5")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stabilityai/stable-diffusion-2-1"),"."),(0,i.kt)("p",null,'Choose the "Hugging Face Inference API" for this purpose.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/action_list.png",alt:"action_list"})),(0,i.kt)("p",null,"Provide a name for this resource and enter your token from the Hugging Face platform."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_config.png",alt:"hugging_config"})),(0,i.kt)("p",null,"In the Action configuration panel, please enter the Model ID and Parameter. We will retrieve the selected model from radioGroup1, so fill in the Model ID as \xa0",(0,i.kt)("inlineCode",{parentName:"p"},"{{radioGroup1.value}}")," . For the input, since it is obtained from the input field, fill in the parameter as ",(0,i.kt)("inlineCode",{parentName:"p"},"{{input1.value}}"),". The configuration should be as shown in the following image."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_demo.png",alt:"hugging_demo"})),(0,i.kt)("p",null,'We attempt to input "A mecha robot in a favela in expressionist style" in the ',(0,i.kt)("inlineCode",{parentName:"p"},"input")," component and run the Action. The resulting execution is as follows. From the left panel, you can observe the available data that can be called, including ",(0,i.kt)("inlineCode",{parentName:"p"},"base64binary")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dataURI"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_output.png",alt:"hugging_output"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3: Displaying Data on Components")),(0,i.kt)("p",null,"To display the image obtained from Step 2, we modify the Image source of the image component to ",(0,i.kt)("inlineCode",{parentName:"p"},"{{generateInput.fileData.dataURI}}"),". This will enable us to show the generated image."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_display.png",alt:"hugging_display"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4: Running the Action with Components")),(0,i.kt)("p",null,"To run the action created in Step 2 when the button component is clicked, add an event handler to the button component."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/hugging_event_config.png",alt:"hugging_event_config"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5: Testing")),(0,i.kt)("p",null,"Following the previous four steps, you can utilize additional components and data sources to complete other tasks and build a more comprehensive tool. For example, you can use other models to assist in generating prompts or store prompts in localStorage or a database. Let's take a look at the complete outcome when all the steps are implemented."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.youtube.com/watch?v=SwAry_jIXns",alt:"hugging_test"})),(0,i.kt)("p",null,"Now you may play around with it! Try other cutting-edge models that is provided by Hugging face through this API. There are more to explore, such as stable diffusion anime models download, training an artist style, sampling method for realistic images. You can do much more!"))}d.isMDXComponent=!0}}]);