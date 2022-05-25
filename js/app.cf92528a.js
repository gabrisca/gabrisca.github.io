(function(){"use strict";var e={4934:function(e,t,r){var n=r(8935),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("LoaderComp"),r("Header"),r("router-view"),r("LateralTitle"),r("Footer")],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isloaded?e._e():r("div",{attrs:{id:"loader"}},[r("div",{staticClass:"cube"}),r("div",{staticClass:"cube"}),r("div",{staticClass:"cube"}),r("div",{staticClass:"cube"})])},o=[],l={name:"LoaderComp",data:()=>({isloaded:!1}),mounted(){document.onreadystatechange=()=>{"complete"==document.readyState&&(this.isloaded=!0)}}},c=l,u=r(1001),d=(0,u.Z)(c,i,o,!1,null,"c00d2c52",null),f=d.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("navbar",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("router-link",{staticClass:"gs_brand",attrs:{to:this.links[0].url}},[r("div",{staticClass:"logo_text"},[r("span",[e._v(" camilla ")]),r("span",[e._v(" barbarossa ")])])])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:e.showCollapse,callback:function(t){e.showCollapse=t},expression:"showCollapse"}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-nav",[r("ul",{staticClass:"inline_menu"},e._l(e.links,(function(t,n){return r("li",{key:n,class:{active:t.current},on:{click:function(e){e.stopPropagation()}}},[r("router-link",{attrs:{to:t.url}},[e._v(" "+e._s(t.text)+" ")])],1)})),0)])],1)],1)],1)],1)},p=[],h={name:"HeaderView",data(){return{showCollapse:!1,links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1},{text:"outcomes",url:"/outcomes",current:!1}]}},watch:{$route(){this.showCollapse=!1}}},v=h,m=(0,u.Z)(v,g,p,!1,null,"7006f89c",null),b=m.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("div",{staticClass:"footer_top",class:{hideFoot:!e.showFooter}},[e._m(0),e._m(1)]),e._m(2)])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"school"},[n("li",[n("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"_blank"}},[n("img",{attrs:{src:r(4657),alt:"logo tbs"}})])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",[r("li",[r("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[r("i",{staticClass:"fab fa-linkedin-in"})])]),r("li",[r("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[r("i",{staticClass:"fab fa-researchgate"})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer_bottom"},[n("div",[n("img",{attrs:{src:r(4184),alt:""}})]),n("div",[n("span",{staticClass:"name"},[e._v(" camilla barbarossa ")])]),n("div",[n("span",{staticClass:"powered"},[e._v(" powered by "),n("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",target:"_blank"}},[e._v(" gabrisca ")])])])])}],w={name:"FooterView",data(){return{showFooter:!1,lastScrollPosition:0}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){var e=window.innerWidth;if(e>800){const e=window.pageYOffset;if(e<10)return;if(Math.abs(e-this.lastScrollPosition)<0)return;this.showFooter=e>this.lastScrollPosition,this.lastScrollPosition=e}else this.showFooter=!1}}},A=w,x=(0,u.Z)(A,y,C,!1,null,"d44dd8b4",null),k=x.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"lateral_title"}},[r("span",{staticClass:"positioner-text"},[e._v("CAMILLA BARBAROSSA")])])}],D={name:"LateralTitle"},O=D,S=(0,u.Z)(O,E,P,!1,null,"fa7a965e",null),Y=S.exports,j={name:"App",components:{LoaderComp:f,Header:b,Footer:k,LateralTitle:Y}},z=j,I=(0,u.Z)(z,a,s,!1,null,null,null),Z=I.exports,H=r(2809),X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HeroComp"),r("div",{staticClass:"gs_container"},[r("div",{staticClass:"bienvenue"},[r("h1",[e._v(e._s(e.greeting()))]),r("div",{staticClass:"date"},[r("p",[e._v(e._s(e.currentDate()))])]),e._m(0)])]),r("ContactComp")],1)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"news"},[e._v(" Camilla Barbarossa is Associate Professor of Marketing at TBS. She holds a PhD in Business Administration and Management obtained at Faculty of Economics, Sapienza University of Rome. Her primary research interests concern: (i) consumer adoption of eco-friendly alternatives; (ii) consumer responses to corporate social responsibility and irresponsibility; and (iii) intergroup bias in group judgment processes. She published articles in, among others, Journal of Business Ethics, International Marketing Review, Journal of Environmental Psychology, Ecological Economics. "),r("br"),r("br"),r("b",[e._v("Teaching areas :")]),e._v(" marketing, business communication, marketing research. "),r("br"),r("br"),r("b",[e._v("Research areas :")]),e._v(" Ethical and pro-environmental consumption, Consumer responses to corporate social responsibility (CSR) and irresponsibility (CSI), Effects of stereotypes on intergroup judgments; Country-of-origin effects and national stereotypes, Quantitative methods. "),r("br"),r("br"),r("b",[e._v("Proposed expertises :")]),e._v(" ethical consumption, marketing. ")])}],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero",style:e.changeBackground()},[r("div",{staticClass:"blurred-box"},[r("div",{staticClass:"user-login-box"},[r("div",{staticClass:"user-name"},[e._v("Camilla Barbarossa")]),r("router-link",{attrs:{to:"/about"}},[r("span",{staticClass:"user-icon"})]),r("div",{staticClass:"user-title"},[r("h1",[e._v(" # "),r("span",{staticClass:"typed-text"},[e._v(e._s(e.typeValue))]),r("span",{staticClass:"cursor",class:{typing:e.typeStatus}},[e._v(" ")])])])],1)])])},B=[],_={name:"HeroComp",data(){return{image:[{"background-image":"url("+r(7057)+")"},{"background-image":"url("+r(1872)+")"},{"background-image":"url("+r(466)+")"},{"background-image":"url("+r(740)+")"},{"background-image":"url("+r(4279)+")"},{"background-image":"url("+r(1854)+")"},{"background-image":"url("+r(5916)+")"},{"background-image":"url("+r(3663)+")"},{"background-image":"url("+r(4358)+")"},{"background-image":"url("+r(5127)+")"},{"background-image":"url("+r(1660)+")"},{"background-image":"url("+r(8773)+")"}],typeValue:"",typeStatus:!1,typeArray:["consumer behaviour","country-of-origin","country stereotypes","corporate greed","corporate crisis","green consumption"],typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typeArrayIndex:0,charIndex:0}},methods:{changeBackground(){var e=(new Date).getHours();return console.log(e),e>=6&&e<8?this.image[0]:e>=8&&e<10?this.image[1]:e>=10&&e<11?this.image[2]:e>=11&&e<12?this.image[3]:e>=12&&e<14?this.image[4]:e>=14&&e<16?this.image[5]:e>=16&&e<17?this.image[6]:e>=17&&e<18?this.image[7]:e>=18&&e<19?this.image[8]:e>=19&&e<20?this.image[9]:e>=20&&e<22?this.image[10]:this.image[11]},typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}},M=_,T=(0,u.Z)(M,F,B,!1,null,"517dad2e",null),G=T.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"skills"},[r("div",{staticClass:"skill"},[r("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[r("div",[r("h2",[r("strong",[e._v("Linkedin")])])])])]),r("div",{staticClass:"skill"},[r("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[r("div",[r("h2",[r("strong",[e._v("Research Gate")])])])])]),r("div",{staticClass:"skill"},[r("a",{attrs:{href:"https://scholar.google.com/citations?user=Cev_0eYAAAAJ",target:"blank"}},[r("div",[r("h2",[r("strong",[e._v("Google Scholar")])])])])]),r("div",{staticClass:"skill"},[r("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"blank"}},[r("div",[r("h2",[r("strong",[e._v("TBS Education")])])])])])])}],Q={name:"ContactComp",data(){return{}},methods:{}},V=Q,W=(0,u.Z)(V,R,K,!1,null,"5e97e26c",null),J=W.exports,N={name:"HomeView",components:{HeroComp:G,ContactComp:J},data(){return{}},methods:{currentDate(){const e=new Date;switch(e.getDay()){case 0:return`Sunday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 1:return`Monday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 2:return`Tuesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 3:return`Wednesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 4:return`Thursday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 5:return`Friday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 6:return`Saturday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;default:break}},greeting(){var e=(new Date).getHours();return console.log(e),e>=6&&e<12?"Good Morning":e>=12&&e<18?"Good Afternoon":e>=18&&e<23?"Good Evening":"Welcome"}}},U=N,q=(0,u.Z)(U,X,L,!1,null,"5cd5ae20",null),$=q.exports;n["default"].use(H.Z);const ee=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,4033))},{path:"/outcomes",name:"outcomes",component:()=>r.e(443).then(r.bind(r,6422))},{path:"/:pathMatch(.*)*",name:"error404",component:()=>r.e(763).then(r.bind(r,8763))}],te=new H.Z({mode:"hash",base:"/",routes:ee,scrollBehavior(){scroll(0,0),document.getElementById("app").scrollIntoView({behavior:"smooth"})}});var re=te,ne=r(6166),ae=r.n(ne),se=r(8262),ie=r(3266);n["default"].prototype.$http=ae(),n["default"].config.productionTip=!1,n["default"].use(se.XG7),n["default"].use(ie.A7),new n["default"]({router:re,render:e=>e(Z)}).$mount("#app")},4184:function(e){e.exports="data:image/png;base64,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"},4358:function(e,t,r){e.exports=r.p+"img/nature13.f72a62f1.jpg"},3663:function(e,t,r){e.exports=r.p+"img/nature15.1e2bfeb7.jpg"},7057:function(e,t,r){e.exports=r.p+"img/nature16.77e47dac.jpg"},8773:function(e,t,r){e.exports=r.p+"img/nature18.9c6f1ec6.jpg"},466:function(e,t,r){e.exports=r.p+"img/nature20.47e3ed38.jpg"},1872:function(e,t,r){e.exports=r.p+"img/nature21.a1de1ac1.jpg"},5127:function(e,t,r){e.exports=r.p+"img/nature22.56a00679.jpg"},5916:function(e,t,r){e.exports=r.p+"img/nature23.d6c59900.jpg"},1854:function(e,t,r){e.exports=r.p+"img/nature24.7c4e8a25.jpg"},1660:function(e,t,r){e.exports=r.p+"img/nature25.236e0cf5.jpg"},740:function(e,t,r){e.exports=r.p+"img/nature27.c77ebaef.jpg"},4279:function(e,t,r){e.exports=r.p+"img/nature8.f6a03d09.jpg"},4657:function(e,t,r){e.exports=r.p+"img/tbs-logoetbaseline.2f1968f2.png"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+(443===e?"about":e)+"."+{443:"2869ca86",763:"3c6c0ae0"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{443:"a3e7eac3",763:"0b22fa48"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gs_template:";r.l=function(n,a,s,i){if(e[n])e[n].push(a);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+s),o.src=n),e[n]=[a];var f=function(t,r){o.onerror=o.onload=null,clearTimeout(g);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(s){if(a.onerror=a.onload=null,"load"===s.type)r();else{var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=function(n){return new Promise((function(a,s){var i=r.miniCssF(n),o=r.p+i;if(t(i,o))return a();e(n,o,a,s)}))},a={143:0};r.f.miniCss=function(e,t){var r={443:1,763:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=s);var i=r.p+r.u(t),o=new Error,l=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,a[1](o)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunkgs_template"]=self["webpackChunkgs_template"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4934)}));n=r.O(n)})();
//# sourceMappingURL=app.cf92528a.js.map