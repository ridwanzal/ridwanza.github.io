import{r as o,j as i,a as e,L as c,F as p,G as N,B as f,R as w,b as d,c as b}from"./vendor.81930b6f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const k=""+new URL("github-black.3fb593ee.svg",import.meta.url).href,y=""+new URL("logo.4e8782f2.png",import.meta.url).href;function S(){const[r,t]=o.exports.useState(!1),[s,m]=o.exports.useState(!1);function n(){document.body.classList.toggle("dark"),t(g=>!g)}const a=()=>{console.log(s),m(!s)},l=[{name:"About",link:"/about",addClass:"item"},{name:"Designs",link:"/designs",addClass:"item"},{name:"Projects",link:"/projects",addClass:"item"},{name:"Articles",link:"/articles",addClass:"item"}];return i("div",{className:"nav-container",children:[e("div",{className:"nav nav-desktop",children:e("div",{className:"wrapper",children:i("ul",{className:"nav-list",children:[e("li",{className:"item logoname",children:i(c,{to:"/",children:[e("img",{className:"main-logo",src:y,alt:"",width:"20"}),"\xA0RIDWANZAL"]})}),l&&l.map(({name:u,link:g,addClass:v})=>e("li",{className:v,children:e(c,{to:g,children:u})},u)),i("li",{className:"item right",children:[e("div",{className:"button-switch",children:e("button",{className:"dark-mode-btn",onClick:n,children:r?"Light \u263C":"Dark \u263E"})}),i("a",{href:"https://github.com/ridwanzal",target:"_blank",children:[e("img",{className:"icon-github svg",src:k}),"Github"]})]})]})})}),i("div",{className:"nav nav-mobile",children:[i("div",{className:"logo",children:[e(c,{to:"/",children:"RIDWANZAL"}),e("button",{className:"menu bi-justify-right",onClick:a,children:""})]}),i("ul",{className:`nav-list-mobile ${s?"show":"hide"}`,children:[e("li",{className:"item",children:e(c,{to:"/about",children:"About"})}),e("li",{className:"item",children:e(c,{to:"/designs",children:"Design"})}),e("li",{className:"item",children:e(c,{to:"/projects",children:"Projects"})}),e("li",{className:"item",children:e(c,{to:"/news",children:"Articles"})})]})]})]})}function x(){return e("div",{className:"masthead-container",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner topbottom masthead-container--content",children:i("div",{className:"content left",children:[e("p",{children:"Hello there, welcome to my page"}),e("h1",{children:"Software Engineer who works around fullstack development, but works as professional Front-End Developer."}),e("p",{children:"I live in Indonesia, working remotely from home. I work for Digital Agency Company called Fairtech Technology, Ltd, located in Singapore, Jakarta and Makassar, been working here for almost 3 years. Help lot of company to build their digital products."}),e("div",{className:"social-list",children:i("div",{className:"social-list--item",children:[i("a",{className:"btn default outline light",href:"https://www.linkedin.com/in/mridwanzalbina/",target:"_blank",children:[e("i",{className:"icon-ln    bi bi-linkedin"}),"\xA0\xA0Linkedin"]}),i("a",{className:"btn default outline light",href:"https://instagram.com/ridwanzal",target:"_blank",children:[e("i",{className:"icon-ig bi bi-instagram"}),"\xA0\xA0Instagram"]}),i("a",{className:"btn default outline light",href:"https://www.behance.net/ridwanzal",target:"_blank",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-behance",viewBox:"0 0 16 16",children:e("path",{d:"M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"})}),"\xA0\xA0Behance"]})]})})]})})})})}function A(){let r=new Date().getFullYear();return console.log(r),r}function h(){return o.exports.useState(null),e("div",{className:"footer-container",children:e("div",{className:"wrapper",children:i("div",{className:"footer-content",children:[i("div",{className:"left",children:["@",A()," M. Ridwan Zalbina. All rights reserved"]}),i("div",{className:"right",children:[e("img",{height:"16",src:"./vite.svg"}),"\xA0\xA0 Build with React + Vite"]})]})})})}const C=""+new URL("helping.6c662166.png",import.meta.url).href;function L(){return e("div",{className:"section-general gray",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:i("div",{className:"wrapper-content",children:[e("h3",{children:"Professional journey"}),i("div",{className:"section-expert--background",children:[i("ul",{className:"section-expert--list",children:[e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Fullstack Developer (2016 - 2019)"}),e("small",{children:"Easysoft Indonesia | PT easySoft Indonesia - Jakarta"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Lead Engineer | Co-Founder (2018 - 2020)"}),e("small",{children:"Scafol Indonesia | PT Aplikasi Konstruksi Global - Palembang"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Advisor (2020 - 2022)"}),e("small",{children:"Dezainla | Marcodigitalpartner - Palembang"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Web Developer (2021)"}),e("small",{children:"Universitas Sriwijaya"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Techical Advisor (2021 - 2022)"}),e("small",{children:"Ezkop Indonesia - Jakarta"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Technical Advisor - (2022)"}),e("small",{children:"PT KAI (Balai Yasa Lahat)"})]})}),e("li",{children:i("div",{className:"section-expert--list-item",children:[e("div",{children:"Front End Developer (2020 - Present)"}),e("small",{children:"Fairtech Pte, Ltd. - Singapore"})]})})]}),e("div",{className:"image-helping-wraps",children:e("img",{className:"image-helping",src:C})})]})]})})})})}function P(){return e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:e("div",{className:"section-contact--background",children:i("div",{className:"section-contact--content",children:[e("div",{className:"left",children:e("h3",{className:"light",children:"Let's create your stunning digital products now !"})}),e("div",{className:"right",children:e("a",{className:"btn yellow outline light",href:"https://wa.me/6281919992000",target:"_blank",children:"Send me a message"})})]})})})})})})}function F(){return e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:i("div",{className:"wrapper-content",children:[e("h3",{children:"What i will do for you?"}),e("div",{className:"section-service",children:i("ul",{className:"section-service--list",children:[e("li",{className:"item",children:i("div",{className:"card",children:[e("i",{className:"bi bi-layers"}),e("span",{children:"Web Development"})]})}),e("li",{className:"item",children:i("div",{className:"card",children:[e("i",{className:"bi bi-phone"}),e("span",{children:"Mobile App/ PWA "})]})}),e("li",{className:"item",children:i("div",{className:"card",children:[e("i",{className:"bi bi-layout-text-sidebar"}),e("span",{children:"UI/ UX Design"})]})}),e("li",{className:"item",children:i("div",{className:"card",children:[e("i",{className:"bi bi-mouse3"}),e("span",{children:"Static & Wordpress Site"})]})}),e("li",{className:"item",children:i("div",{className:"card",children:[e("i",{className:"bi bi-layout-sidebar"}),e("span",{children:"Web Slicing"})]})}),e("li",{className:"item",children:i("div",{className:"card last",children:[e("i",{className:"bi bi-ui-radios-grid"}),e("span",{children:"Brand Identity Design"})]})})]})})]})})})})}function D(){return i("div",{children:[i("main",{className:"section",children:[e(x,{}),e(L,{}),e(F,{}),e(P,{}),e(h,{})]}),e("footer",{})]})}function E(){const[r,t]=o.exports.useState(null),[s,m]=o.exports.useState(!0),[n,a]=o.exports.useState(null);return o.exports.useEffect(()=>{fetch("https://dev.to/api/articles/").then(l=>{if(!l.ok)throw new Error(`This is an HTTP error: The status is ${l.status}`);return l.json()}).then(l=>{t(l),a(null)}).catch(l=>{a(l.message),t(null)}).finally(()=>{m(!1)})},[]),i("div",{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:i("div",{className:"section-news",children:[e("h3",{children:"Dev to feed"}),s&&e("div",{children:"A moment please..."}),n&&e("div",{children:`There is a problem fetching the post data - ${n}`}),e("ul",{children:r&&r.map(({id:l,title:u,url:g})=>e("li",{children:e("a",{href:g,target:"_blank",children:u})},l))})]})})})})}),e(h,{})]})}function I(){return i(p,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:i("div",{className:"center",children:[e("h3",{children:"Page still in progress"}),e("p",{className:"incoming",children:"Coming soon"}),e("p",{children:"Thank you so much for visiting this page. We still working on it. Stay tune."})]})})})})}),e(h,{})]})}function T(){return i(p,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:i("div",{className:"center",children:[e("h3",{children:"Page still in progress"}),e("p",{className:"incoming",children:"Coming soon"}),e("p",{children:"Thank you so much for visiting this page. We still working on it. Stay tune."})]})})})})}),e(h,{})]})}function M(){return i(p,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:e("div",{className:"wrapper-content",children:e("h3",{children:"Under construction"})})})})}),e(h,{})]})}function R(){return i(p,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:i("div",{className:"wrapper-content",children:[e("h3",{children:"Login"}),e("div",{className:"form-g",children:e("input",{className:"form-in",placeholder:"Email/username"})}),e("br",{}),e("div",{className:"form-g",children:e("input",{className:"form-in",placeholder:"Password"})}),e("br",{}),e("button",{type:"submit",className:"btn default outline light",children:"Login"})]})})})}),e(h,{})]})}function j(){return i(p,{children:[e("div",{className:"section-general",children:e("div",{className:"wrapper",children:e("div",{className:"wrapper-inner",children:i("div",{className:"wrapper-content",children:[e("h3",{children:"About me"}),e("p",{children:'Hello there, my name is M. Ridwan Zalbina, people call me "Edo" or "Ridwan", Software Engineer who works around fullstack development, but works as professional Front-End Developer. Really passionate to learn everything about technology: software engineering, visual design and information security.'}),e("h3",{children:"Work"}),e("p",{children:"I'm currently working on Digital Agency Company called Fairtech Technology, Ltd, located in Singapore, Jakarta and Makassar."}),e("h3",{children:"Technology Stack & Experiences"}),i("ul",{children:[e("li",{children:"Javascript Technology - Fundamentals & Current Trends"}),e("li",{children:"Git, Subversion and Mercurial"}),e("li",{children:"Mastering CSS & Frontend Architecture for web development"}),e("li",{children:"Familiar with almost CSS Preprocessors SCSS/SASS, LESS, Compass, CSS-Crush, Stylus-lang, PostCSS"}),e("li",{children:"Familiar with templating engine : twig, handlebars, mustache, pug, ejs, dOT, and Jade"}),e("li",{children:"Familiar with Cutting-edge Javascript Framework & Library such as: Node, Vue, React, Svelte | Next, Nuxt and NestJS"}),e("li",{children:"Familiar with frontend tooling like Vite for rapid web development"}),e("li",{children:"PHP Native & MVC Framework such as: CodeIgniter and Laravel."}),e("li",{children:"Python for data processing and API."}),e("li",{children:"Java & Kotlin for native Android development."}),e("li",{children:"Currently develop react-native app for mobile"}),e("li",{children:"Generate static content web using task runner / module bundler / build tool / package management tool such as : Webpack, Grunt, Gulp, npm, Browserify, Babel, Requirejs, Parcel"}),e("li",{children:"Familiar with UNIX/Linux Environment to deploy and maintain web & mobile application, also familiar with container such as: docker"}),e("li",{children:"Focusing on clean code, conducting best practice as much as possible"}),e("li",{children:"Being a product designer as side hustle, helping company deal with product design, familiar with : Figma, Sketch, Zeplin, Invision for web and mobile app designs"}),e("li",{children:"Experience more than 10 years on logo, advertisment, promotional content."})]}),e("h3",{children:"Github Calendar"}),e(N,{username:"ridwanzal",transformData:!0,hideTotalCount:!0,hideColorLegend:!0})]})})})}),e(h,{})]})}function z(){return i("div",{children:[e("main",{className:"section",children:i(f,{children:[e(S,{}),i(w,{children:[e(d,{path:"/articles",element:e(E,{})}),e(d,{path:"/projects",element:e(T,{})}),e(d,{path:"/designs",element:e(I,{})}),e(d,{path:"/contact",element:e(M,{})}),e(d,{path:"/login",element:e(R,{})}),e(d,{path:"/about",element:e(j,{})}),e(d,{path:"/",element:e(D,{})})]})]})}),e("footer",{})]})}b.createRoot(document.getElementById("root")).render(e(p,{children:e(z,{})}));
