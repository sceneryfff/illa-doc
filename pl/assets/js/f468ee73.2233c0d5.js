"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[9757],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const o={title:"Event handler",description:"Event handlers are an integral part of refining your internal tool usage logic"},i="Event handler",l={unversionedId:"event-handler",id:"event-handler",title:"Event handler",description:"Event handlers are an integral part of refining your internal tool usage logic",source:"@site/docs/event-handler.mdx",sourceDirName:".",slug:"/event-handler",permalink:"/pl/event-handler",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/event-handler.mdx",tags:[],version:"current",frontMatter:{title:"Event handler",description:"Event handlers are an integral part of refining your internal tool usage logic"}},s={},c=[{value:"Event handlers",id:"event-handlers",level:3},{value:"Edit submit handler",id:"edit-submit-handler",level:3},{value:"Temporary states",id:"temporary-states",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-handler"},"Event handler"),(0,a.kt)("p",null,"Event handlers are an integral part of refining your internal tool usage logic. Any insert or action that responds to a user action has its own events that may be triggered, such as a button insert with a 'click' event, a text input box with a 'submit' event, the success of an action, and so on. Event handlers help users to trigger pre-defined instructions when events occur: you can react to a single event occurrence, or you can set up multiple event handlers and set them up as workflows to do more complex work."),(0,a.kt)("p",null,"After the event you set has occurred, the event handler can help you perform a variety of actions: control action statements, control inserts, run scripts and more. You can also add more detailed JavaScript trigger conditions on top of the trigger conditions."),(0,a.kt)("img",{alt:"event-handler",src:"https://cdn.illacloud.com/official-website/img/official-site/event-handler-01.png"}),(0,a.kt)("h3",{id:"event-handlers"},"Event handlers"),(0,a.kt)("p",null,"In event handlers, you can set the outcome of the event based on whether the query results fail or not. You can complete the trigger logic by setting the query failure condition in the Response tab."),(0,a.kt)("img",{alt:"event-handler",src:"https://cdn.illacloud.com/official-website/img/official-site/event-handler-02.png"}),(0,a.kt)("h3",{id:"edit-submit-handler"},"Edit submit handler"),(0,a.kt)("p",null,"We set a trigger condition for each interactive insert, and you can select an event in the handler's action list as the trigger condition. For example, you could set 'Submit' as the trigger condition in the event handler for the data entry box, which automatically inserts the input into the database when the user 'submits' the input, thus implementing a simple data insertion function."),(0,a.kt)("img",{alt:"event-handler",src:"https://cdn.illacloud.com/official-website/img/official-site/event-handler-03.png"}),(0,a.kt)("h3",{id:"temporary-states"},"Temporary states"),(0,a.kt)("p",null,"When processing data, you may encounter situations where the processed data is not called up immediately. For this reason, we have set up temporary states to store intermediate states for data processing. You can choose to set a temporary state in the response event options of event handlers and click on Create new state to store the current data in the temporary state, which can be placed for any property."),(0,a.kt)("p",null,"Outside the project editor, you can also store data by {{tempState1.setValue(data)}} or call data by {{tempState1.value}}."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The values in the temporary state will be cleared when the project is restarted, and you will need to store the values locally or in the cloud to ensure the integrity of the data.")))}p.isMDXComponent=!0}}]);