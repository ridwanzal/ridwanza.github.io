import{r as t,j as a,a as e,L as b,b as T,S as C,F as v,u as A,G as E,c as D,R as I,d as R,m as x,e as F,B as M,f as z,g as u,h as B}from"./vendor.38279d46.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function d(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(n){if(n.ep)return;n.ep=!0;const l=d(n);fetch(n.href,l)}})();const j=""+new URL("github-black.3fb593ee.svg",import.meta.url).href,P=""+new URL("logo.4e8782f2.png",import.meta.url).href;function U(){const[c,s]=t.exports.useState(!1),[d,h]=t.exports.useState(!1);function n(){document.body.classList.toggle("dark"),s(o=>!o)}const l=()=>{console.log(d),h(!d)},r=[{name:"About",link:"/about",addClass:"item"},{name:"Designs",link:"/designs",addClass:"item"},{name:"Projects",link:"/projects",addClass:"item"},{name:"Articles",link:"/articles",addClass:"item"},{name:"Blog",link:"/blog",addClass:"item"}];return a("div",{className:"nav-container",children:[e("div",{className:"nav nav-desktop",children:e("div",{className:"wrapper",children:a("ul",{className:"nav-list",children:[e("li",{className:"item logoname",children:a(b,{to:"/",children:[e("img",{className:"main-logo",src:P,alt:"",width:"20"}),"\xA0RIDWANZAL"]})}),r&&r.map(({name:i,link:o,addClass:m})=>e("li",{className:m,children:e(b,{to:o,children:i})},i)),a("li",{className:"item right",children:[e("div",{className:"button-switch",children:e("button",{className:"dark-mode-btn",onClick:n,children:c?"Light \u263C":"Dark \u263E"})}),a("a",{href:"https://github.com/ridwanzal",target:"_blank",children:[e("img",{className:"icon-github svg",src:j}),"Github"]})]})]})})}),a("div",{className:"nav nav-mobile",children:[a("div",{className:"logo",children:[e(b,{to:"/",children:"RIDWANZAL"}),e("button",{className:"menu bi-justify-right",onClick:l,children:""})]}),e("ul",{className:`nav-list-mobile ${d?"show":"hide"}`,children:r&&r.map(({name:i,link:o,addClass:m})=>e("li",{className:m,children:e(b,{to:o,children:i})},i))})]})]})}function W(){return e("div",{className:"masthead-container green",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner topbottom masthead-container--content",children:a("div",{className:"content left",children:[e("h3",{children:"Hello there, welcome to my page"}),e("h1",{children:"Software Engineer who works around fullstack development, but works as professional Front-End Developer."}),e("p",{children:"I live in Indonesia, working remotely from home. I work for Digital Agency Company called Fairtech Technology, Ltd, located in Singapore, Jakarta and Makassar, been working here for almost 3 years. Help company, personal and community to build their digital product."}),e("div",{className:"social-list",children:a("div",{className:"social-list--item",children:[a("a",{className:"btn yellow outline light",href:"https://www.linkedin.com/in/mridwanzalbina/",target:"_blank",children:[e("i",{className:"icon-ln    bi bi-linkedin"}),"\xA0\xA0Linkedin"]}),a("a",{className:"btn yellow outline light",href:"https://instagram.com/ridwanzal",target:"_blank",children:[e("i",{className:"icon-ig bi bi-instagram"}),"\xA0\xA0Instagram"]}),a("a",{className:"btn yellow outline light",href:"https://www.behance.net/ridwanzal",target:"_blank",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-behance",viewBox:"0 0 16 16",children:e("path",{d:"M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"})}),"\xA0\xA0Behance"]})]})})]})})})})}function G(){let c=new Date().getFullYear();return console.log(c),c}const H=""+new URL("vite.4a748afd.svg",import.meta.url).href;function g(){return t.exports.useState(null),e("div",{className:"footer-container",children:e("div",{className:"wrapper",children:a("div",{className:"footer-content",children:[a("div",{className:"left",children:["@",G()," M. Ridwan Zalbina. All rights reserved"]}),a("div",{className:"right",children:[e("img",{height:"16",src:H}),"\xA0\xA0 Build with React + Vite"]})]})})})}const L=""+new URL("helping.904e4081.svg",import.meta.url).href;function _(){return e("div",{className:"section-general gray",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:a("div",{className:"wrapper-content",children:[e("h3",{children:"Professional journey"}),a("div",{className:"section-expert--background",children:[a("ul",{className:"section-expert--list",children:[e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Fullstack Developer (2016 - 2019)"}),e("small",{children:"Easysoft Indonesia | PT easySoft Indonesia - Jakarta"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Lead Engineer | Co-Founder (2018 - 2020)"}),e("small",{children:"Scafol Indonesia | PT Aplikasi Konstruksi Global - Palembang"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Advisor (2020 - 2022)"}),e("small",{children:"Dezainla | Marcodigitalpartner - Palembang"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Web Developer (2021)"}),e("small",{children:"Universitas Sriwijaya"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Techical Advisor (2021 - 2022)"}),e("small",{children:"Ezkop Indonesia - Jakarta"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Advisor - (2022)"}),e("small",{children:"PT KAI (Balai Yasa Lahat)"})]})}),e("li",{children:a("div",{className:"section-expert--list-item",children:[e("div",{children:"Front End Developer (2020 - Present)"}),e("small",{children:"Fairtech Pte, Ltd. - Singapore"})]})})]}),a("div",{className:"image-helping-wraps",children:[e("img",{className:"image-helping",src:L}),e(T.exports.LazyLoadImage,{className:"image-helping",alt:"",src:L})]})]})]})})})})}function q(){return e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:e("div",{className:"section-contact--background",children:a("div",{className:"section-contact--content",children:[e("div",{className:"left",children:e("h3",{className:"light",children:"Let's create your stunning digital products now !"})}),e("div",{className:"right",children:e("a",{className:"btn yellow outline light",href:"https://wa.me/6281919992000",target:"_blank",children:"Send me a message"})})]})})})})})})}function J(){return e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:a("div",{className:"wrapper-content",children:[e("h3",{children:"What i will do for you?"}),e("div",{className:"section-service",children:a("ul",{className:"section-service--list",children:[e("li",{className:"item",children:a("div",{className:"card",children:[e("i",{className:"bi bi-layers"}),e("span",{children:"Web Development"})]})}),e("li",{className:"item",children:a("div",{className:"card",children:[e("i",{className:"bi bi-phone"}),e("span",{children:"Mobile App/ PWA "})]})}),e("li",{className:"item",children:a("div",{className:"card",children:[e("i",{className:"bi bi-layout-text-sidebar"}),e("span",{children:"UI/ UX Design"})]})}),e("li",{className:"item",children:a("div",{className:"card",children:[e("i",{className:"bi bi-mouse3"}),e("span",{children:"Static & Wordpress Site"})]})}),e("li",{className:"item",children:a("div",{className:"card",children:[e("i",{className:"bi bi-layout-sidebar"}),e("span",{children:"Web Slicing"})]})}),e("li",{className:"item",children:a("div",{className:"card last",children:[e("i",{className:"bi bi-ui-radios-grid"}),e("span",{children:"Brand Identity Design"})]})})]})})]})})})})}function O(){return a("div",{children:[a("main",{className:"section",children:[e(W,{}),e(_,{}),e(J,{}),e(q,{}),e(g,{})]}),e("footer",{})]})}function $(){const[c,s]=t.exports.useState(null),[d,h]=t.exports.useState(!0),[n,l]=t.exports.useState(null);return t.exports.useEffect(()=>{fetch("https://dev.to/api/articles/").then(r=>{if(!r.ok)throw new Error(`This is an HTTP error: The status is ${r.status}`);return r.json()}).then(r=>{s(r),l(null)}).catch(r=>{l(r.message),s(null)}).finally(()=>{h(!1)})},[]),a("div",{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:a("div",{className:"section-service",children:[e("h3",{children:"Dev to feed"}),d&&e("div",{children:e(C,{count:1,height:30,duration:10})}),n&&e("div",{children:`There is a problem fetching the post data - ${n}`}),e("ul",{className:"section-service--list",children:c&&c.map(({id:r,title:i,url:o})=>e("li",{className:"item",children:e("span",{className:"card card-shadow padding-big",children:e("a",{className:"title block",href:o,target:"_blank",children:i})})},r))})]})})})})}),e(g,{})]})}function Z(){return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:a("div",{className:"center",children:[e("h3",{children:"Page still in progress"}),e("p",{className:"incoming",children:"Coming soon"}),e("p",{children:"Thank you so much for visiting this page. We still working on it. Stay tune."})]})})})})}),e(g,{})]})}function V(){return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:a("div",{className:"center",children:[e("h3",{children:"Page still in progress"}),e("p",{className:"incoming",children:"Coming soon"}),e("p",{children:"Thank you so much for visiting this page. We still working on it. Stay tune."})]})})})})}),e(g,{})]})}function K(){return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:e("h3",{children:"Under construction"})})})})}),e(g,{})]})}function Y(){const[c,s]=t.exports.useState({}),[d,h]=t.exports.useState(!1),n=A();let l=[{credential:"ridwanzal",password:123},{credential:"aryan",password:123}],r={credential:"Invalid credential",password:"Wrong password"};const i=function(m){if(m===c.name)return e("div",{className:"error",children:c.message})};return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:a("form",{onSubmit:m=>{m.preventDefault();let{credential:N,password:w}=document.forms[0],p=l.find(y=>y.credential===N.value);p?p.password.toString()===w.value.toString()?(h(!0),n("/about")):s({name:"password",message:r.password}):s({name:"credential",message:r.credential})},className:"wrapper-content",children:[e("h3",{children:"Login"}),a("div",{className:"form-g",children:[e("input",{className:"form-in",name:"credential",placeholder:"Email/username",required:!0}),i("credential")]}),e("br",{}),a("div",{className:"form-g",children:[e("input",{className:"form-in",name:"password",placeholder:"Password",required:!0}),i("password")]}),e("input",{type:"submit",className:"btn default outline light",value:"Submit"})]})})})}),e(g,{})]})}function X(){return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:a("div",{className:"wrapper-content",children:[e("h3",{children:"Page Not Found"}),e("a",{href:"/",children:"Go back"})]})})})}),e(g,{})]})}function Q(){return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content wrapper-content--contain",children:a("div",{className:"content-small contain-wrap half",children:[e("h3",{children:"About me"}),e("p",{children:'Hello there, my name is M. Ridwan Zalbina, people call me "Edo" or "Ridwan", Software Engineer who works around fullstack development, but works as professional Front-End Developer. Really passionate to learn everything about technology: software engineering, visual design and information security.'}),e("h3",{children:"Work"}),e("p",{children:"I'm currently working on Digital Agency Company called Fairtech Technology, Ltd, located in Singapore, Jakarta and Makassar."}),e("h3",{children:"Technology Stack & Experiences"}),a("ul",{children:[e("li",{children:"Javascript Technology - Fundamentals & Current Trends"}),e("li",{children:"Git, Subversion and Mercurial"}),e("li",{children:"Mastering CSS & Frontend Architecture for web development"}),e("li",{children:"Familiar with almost CSS Preprocessors SCSS/SASS, LESS, Compass, CSS-Crush, Stylus-lang, PostCSS"}),e("li",{children:"Familiar with templating engine : twig, handlebars, mustache, pug, ejs, dOT, and Jade"}),e("li",{children:"Familiar with Cutting-edge Javascript Framework & Library such as: Node, Vue, React, Svelte | Next, Nuxt and NestJS"}),e("li",{children:"Familiar with frontend tooling like Vite for rapid web development"}),e("li",{children:"PHP Native & MVC Framework such as: CodeIgniter and Laravel."}),e("li",{children:"Python for data processing and API."}),e("li",{children:"Java & Kotlin for native Android development."}),e("li",{children:"Currently develop react-native app for mobile"}),e("li",{children:"Generate static content web using task runner / module bundler / build tool / package management tool such as : Webpack, Grunt, Gulp, npm, Browserify, Babel, Requirejs, Parcel"}),e("li",{children:"Familiar with UNIX/Linux Environment to deploy and maintain web & mobile application, also familiar with container such as: docker"}),e("li",{children:"Focusing on clean code, conducting best practice as much as possible"}),e("li",{children:"Being a product designer as side hustle, helping company deal with product design, familiar with : Figma, Sketch, Zeplin, Invision for web and mobile app designs"}),e("li",{children:"Experience more than 10 years on logo, advertisment, promotional content."})]}),e("h3",{children:"Github Calendar"}),e(E,{username:"ridwanzal",transformData:!0,hideTotalCount:!0,hideColorLegend:!0})]})})})})}),e(g,{})]})}function ee(){const[c,s]=t.exports.useState(null),[d,h]=t.exports.useState(!0),[n,l]=t.exports.useState(null),r="https://rwzapi.mrpbylt.com/";return t.exports.useEffect(()=>{fetch(r+"/blog").then(i=>{if(!i.ok)throw new Error(`This is an HTTP error: The status is ${i.status}`);return i.json()}).then(i=>{s(i),l(null)}).catch(i=>{l(i.message),s(null)}).finally(()=>{h(!1)})},[]),a("div",{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:a("div",{className:"wrapper-content",children:[e("h3",{children:"Blog"}),d&&e("div",{children:e(C,{count:1,height:30,duration:10})}),n&&e("div",{children:`There is a problem fetching the post data - ${n}`}),e("div",{className:"section-service",children:e("ul",{className:"section-service--list",children:c&&c.map(({id:i,title:o,content:m,createdAt:N})=>e("li",{"data-mh":!0,className:"item",children:a("span",{className:"card card-shadow padding-big",children:[e(b,{className:"title block",to:"/blog/"+i,children:o}),e("div",{className:"date",children:N})]})},i))})})]})})})}),e(g,{})]})}function ae(){const d=D().pathname.split("/"),h=d[d.length-1],[n,l]=t.exports.useState(null),r="https://rwzapi.mrpbylt.com/";return t.exports.useEffect(()=>{fetch(r+"/blog/"+h).then(i=>(i.ok||console.log(i.status),i.json())).then(i=>{l(i),console.log(i),i[0].tags.split(",").map(function(o){console.log(o)})})},[]),a("div",{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content wrapper-content--contain flex",children:n&&n.map(({id:i,title:o,content:m,createdAt:N,tags:w})=>a("div",{className:"flex",children:[a("div",{className:"content-small contain-wrap",keys:i,children:[e("br",{}),e("div",{className:"blog-tags",children:w.split(",").map(function(p){return e("div",{children:p})})}),a("div",{className:"mt-2",children:[e("img",{className:"main-logo",src:P,alt:"",width:"20"}),"\xA0 M. Ridwan Zalbina | ",N]}),e(I,{children:m,remarkPlugins:[R]})]}),e("div",{className:"content-small contain-wrap contain-wrap--small",children:e("h3",{children:"Recent Post"})})]}))})})})}),e(g,{})]})}function ie(){const c="https://rwzapi.mrpbylt.com/",[s,d]=t.exports.useState(""),[h,n]=t.exports.useState(""),[l,r]=t.exports.useState(""),[i,o]=t.exports.useState({}),m=A();function N(p){p.preventDefault();let y=s,k=h,S=l;y.toString().trim()===""&&o({name:"title"}),k.toString().trim()===""&&o({name:"content"}),S.toString().trim()===""&&o({name:"tags"}),fetch(c+"/blog",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({title:y,content:k,tags:S})}).then(f=>f.json()).then(f=>{console.log(f),console.log(f.affectedRows),f.affectedRows===1&&m("/blog/")}).catch(f=>{console.error(f)})}function w(p){if(p===i.name)return e(v,{children:e("div",{className:"error",children:"Mohon diisi"})})}return a(v,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-blog-add",children:a("form",{onSubmit:N,className:"wrapper-content",children:[a("div",{className:"form-g",children:[e("label",{className:"display-block",children:"Title:"}),e("input",{className:"form-in",type:"text",name:"",value:s,placeholder:"Buat judul artikel",onChange:p=>d(p.target.value),required:!0}),w("title")]}),a("div",{className:"form-g",children:[e("label",{className:"display-block",children:"Tags:"}),e("textarea",{rows:"5",className:"form-in",name:"",onChange:p=>r(p.target.value),required:!0,children:l})]}),a("div",{className:"form-g",children:[e("label",{className:"display-block",children:"Content:"}),e(x,{value:h,onChange:n,previewOptions:{rehypePlugins:[[F]]},required:!0}),e("div",{className:"form-md",children:e(x.Markdown,{source:h,style:{whiteSpace:"pre-wrap"}})}),w("content")]}),e("input",{type:"submit",className:"btn default outline light",value:"Submit"})]})})})})}),e(g,{})]})}function ne(){return a("div",{children:[e("main",{className:"section",children:a(M,{children:[e(U,{}),a(z,{children:[e(u,{path:"/articles",element:e($,{})}),e(u,{path:"/projects",element:e(V,{})}),e(u,{path:"/designs",element:e(Z,{})}),e(u,{path:"/contact",element:e(K,{})}),e(u,{path:"/login",element:e(Y,{})}),e(u,{path:"/about",element:e(Q,{})}),e(u,{path:"/blog",element:e(ee,{})}),e(u,{path:"/blog/:id",element:e(ae,{})}),e(u,{path:"*",element:e(X,{})}),e(u,{path:"/blog/add",element:e(ie,{})}),e(u,{path:"/",element:e(O,{})})]})]})}),e("footer",{})]})}B.createRoot(document.getElementById("root")).render(e(v,{children:e(ne,{})}));
