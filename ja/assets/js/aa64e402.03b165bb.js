"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[370],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(h,o(o({ref:e},d),{},{components:n})):a.createElement(h,o({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},183:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(8028),r=(n(9496),n(9613));const l={title:"Input",metaTitle:"Input Component Doc | ILLA Cloud",desc:"Learn how to use the input component to create and customize text fields for your app in ILLA Cloud.",tagCategory:"doc_menu_input_click",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/335?languages=en&filter=basic&value=0",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1},o=void 0,i={unversionedId:"Build-Apps/Components/Number-inputs/input",id:"Build-Apps/Components/Number-inputs/input",title:"Input",description:"What is Input?",source:"@site/docs/Build-Apps/Components/Number-inputs/input.mdx",sourceDirName:"Build-Apps/Components/Number-inputs",slug:"/Build-Apps/Components/Number-inputs/input",permalink:"/ja/Build-Apps/Components/Number-inputs/input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Build-Apps/Components/Number-inputs/input.mdx",tags:[],version:"current",frontMatter:{title:"Input",metaTitle:"Input Component Doc | ILLA Cloud",desc:"Learn how to use the input component to create and customize text fields for your app in ILLA Cloud.",tagCategory:"doc_menu_input_click",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/335?languages=en&filter=basic&value=0",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1},sidebar:"tutorialSidebar",next:{title:"Appwrite",permalink:"/ja/Build-Apps/Components/appwrite"}},p={},u=[{value:"<h2 hidden>What is Input?</h2>",id:"what-is-input",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3}],d={toc:u},m="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-input"},(0,r.kt)("h2",{hidden:!0},"What is Input?")),(0,r.kt)("p",null,"Text Input component is a user interface element that allows users to enter and edit text in a form or input field."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caption"),(0,r.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show character count"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not the character count of the input is displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the left of the input field, often used to provide additional context or instructions to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Suffix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the right of the input field, often used to provide additional information or feedback to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Required field"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a regular expression pattern that the user's input must match in order to be considered valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max length"),(0,r.kt)("td",{parentName:"tr",align:null},"set the maximum number of characters that can be entered into the input field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min Length"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the minimum number of characters that the user must enter into the input field in order for the input to be considered valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,r.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setValue"))),(0,r.kt)("p",null,"To set the input value, for example, {{'value1'}}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValue"))),(0,r.kt)("p",null,"To clear the value of the selected component "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"focus"))),(0,r.kt)("p",null,"When the focus method is called, the input field will be highlighted and ready for the user to start typing without the need for the user to click on the input field"),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("p",null,"Input component support listening to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," event of other components using built-in event system. Set it up by following these example steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an event trigger to the component that you want to listen to. For example, if you want to listen to the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"onChange"))," event of a Radio Group component, you would add an event handler to that Radio Group component."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Input"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SetValue"))," action and select the appropriate value for the input component. This will be the value that the input component has and will update when the event is triggered."),(0,r.kt)("li",{parentName:"ol"},"Save the event trigger settings and repeat the process for any other components that you want to listen to.")),(0,r.kt)("p",null,"Once you've set up the event triggers, the input component will automatically update whenever the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"onChange"))," event is triggered on the other components. This allows you to create dynamic interfaces that respond to user input in real-time, making it easier for users to navigate and interact with your application."),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user changes the selected input value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user moves the mouse cursor on the input component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blur"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user is done inputting value and quit from focusing on the cascader component")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"user input value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formDataKey"),(0,r.kt)("td",{parentName:"tr",align:null},"the Form Data Key of input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"position of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"the value of maximum length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLength"),(0,r.kt)("td",{parentName:"tr",align:null},"the value of minimum length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefixText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of the text prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suffixText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of the text suffix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex"),(0,r.kt)("td",{parentName:"tr",align:null},"regular expression of input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showCharacterCount"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate whether the character count of input is displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of tooltip text")))),(0,r.kt)("p",null,"Example: {{input1.value}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Below are some examples for customizing input component."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prefix:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/input_prefix.png",alt:"input_prefix"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suffix:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/input_suffix.png",alt:"input_suffix"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tooltip:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/input_tooltip.png",alt:"input_tooltip"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pattern:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/input_pattern.png",alt:"input_pattern"})))}s.isMDXComponent=!0}}]);