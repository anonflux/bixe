"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="What is BiXE?",l={unversionedId:"intro",id:"intro",title:"What is BiXE?",description:"BiXE is a fast and lightweight, framework agnostic, redux-like state management solution.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/bixe/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Tutorial - Basics",permalink:"/bixe/docs/category/tutorial---basics"}},s={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-bixe"},"What is BiXE?"),(0,r.kt)("p",null,"BiXE is a fast and lightweight, framework agnostic, redux-like state management solution."),(0,r.kt)("p",null,"It allows you to write your business logic once, and reuse it in any JavaScript or TypeScript application, regardless of whether it is a front-end application or a back-end application. It was written and designed FOR the developer; DX is a first-class concept. "),(0,r.kt)("p",null,"BiXE eliminates cruft, and alleviates common pain points associated with other well-known redux-like solutions."),(0,r.kt)("p",null,"Some benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stores can be scoped/grouped easily, and actions can target a specific group/scope or all"),(0,r.kt)("li",{parentName:"ol"},"Testing is as easy as mocking 2 arguments and testing individual functions"),(0,r.kt)("li",{parentName:"ol"},"No side effects, just a clean call site"),(0,r.kt)("li",{parentName:"ol"},"Dispatched actions and store interactions may be diagrammed and understood at a glance"),(0,r.kt)("li",{parentName:"ol"},"Asynchrony is a first-class concept; no need to jump through hoops or get creative")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,r.kt)("p",null,"Or ",(0,r.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,r.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,r.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,r.kt)("p",null,"Generate a new Docusaurus site using the ",(0,r.kt)("strong",{parentName:"p"},"classic template"),"."),(0,r.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,r.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,r.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,r.kt)("h2",{id:"start-your-site"},"Start your site"),(0,r.kt)("p",null,"Run the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,r.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."))}d.isMDXComponent=!0}}]);