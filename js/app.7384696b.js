(function(){"use strict";var e={1178:function(e,t,n){var a=n(8935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LoaderComp"),n("Header"),n("router-view"),n("LateralTitle"),n("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isloaded?e._e():n("div",{attrs:{id:"loader"}},[n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"})])},i=[],l={name:"LoaderComp",data:()=>({isloaded:!1}),mounted(){document.onreadystatechange=()=>{"complete"==document.readyState&&(this.isloaded=!0)}}},c=l,u=n(1001),d=(0,u.Z)(c,s,i,!1,null,"c00d2c52",null),f=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("navbar",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"}},[n("router-link",{staticClass:"gs_brand",attrs:{to:this.links[0].url}},[n("div",{staticClass:"logo_text"},[n("span",[e._v(" camilla ")]),n("span",[e._v(" barbarossa ")])])])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:e.showCollapse,callback:function(t){e.showCollapse=t},expression:"showCollapse"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-navbar-nav",[n("ul",{staticClass:"inline_menu"},e._l(e.links,(function(t,a){return n("li",{key:a,class:{active:t.current},on:{click:function(e){e.stopPropagation()}}},[n("router-link",{attrs:{to:t.url}},[e._v(" "+e._s(t.text)+" ")])],1)})),0)])],1)],1)],1)],1)},p=[],h={name:"HeaderView",data(){return{showCollapse:!1,links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1},{text:"outcomes",url:"/outcomes",current:!1}]}},watch:{$route(){this.showCollapse=!1}}},g=h,v=(0,u.Z)(g,m,p,!1,null,"7006f89c",null),b=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"footer_top",class:{hideFoot:!e.showFooter}},[e._m(0),e._m(1)]),e._m(2)])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"school"},[a("li",[a("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"_blank"}},[a("img",{attrs:{src:n(4657),alt:"logo tbs"}})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[n("i",{staticClass:"fab fa-linkedin-in"})])]),n("li",[n("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[n("i",{staticClass:"fab fa-researchgate"})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer_bottom"},[n("div",[n("span",{staticClass:"name"},[e._v(" camilla barbarossa ")])]),n("div",[n("span",{staticClass:"powered"},[e._v(" powered by "),n("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",target:"_blank"}},[e._v(" gabrisca ")])])])])}],w={name:"FooterView",data(){return{showFooter:!1,lastScrollPosition:0}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){var e=window.innerWidth;if(e>800){const e=window.pageYOffset;if(e<10)return;if(Math.abs(e-this.lastScrollPosition)<0)return;this.showFooter=e>this.lastScrollPosition,this.lastScrollPosition=e}else this.showFooter=!1}}},y=w,k=(0,u.Z)(y,_,C,!1,null,"6be30bd8",null),$=k.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"lateral_title"}},[n("span",{staticClass:"positioner-text"},[e._v("CAMILLA BARBAROSSA")])])}],S={name:"LateralTitle"},A=S,F=(0,u.Z)(A,E,x,!1,null,"fa7a965e",null),j=F.exports,M={name:"App",components:{LoaderComp:f,Header:b,Footer:$,LateralTitle:j}},T=M,B=(0,u.Z)(T,r,o,!1,null,null,null),D=B.exports,O=n(2809),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HeroComp"),n("div",{staticClass:"gs_container"},[n("div",{staticClass:"bienvenue"},[n("h1",[e._v(e._s(e.greeting()))]),n("div",{staticClass:"date"},[n("p",[e._v(e._s(e.currentDate()))])]),e._m(0)])]),n("ContactComp")],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"news"},[e._v(" Camilla Barbarossa is Associate Professor of Marketing at TBS. She holds a PhD in Business Administration and Management obtained at Faculty of Economics, Sapienza University of Rome. Her primary research interests concern: (i) consumer adoption of eco-friendly alternatives; (ii) consumer responses to corporate social responsibility and irresponsibility; and (iii) intergroup bias in group judgment processes. She published articles in, among others, Journal of Business Ethics, International Marketing Review, Journal of Environmental Psychology, Ecological Economics. "),n("br"),n("br"),n("b",[e._v("Teaching areas :")]),e._v(" marketing, business communication, marketing research. "),n("br"),n("br"),n("b",[e._v("Research areas :")]),e._v(" Ethical and pro-environmental consumption, Consumer responses to corporate social responsibility (CSR) and irresponsibility (CSI), Effects of stereotypes on intergroup judgments; Country-of-origin effects and national stereotypes, Quantitative methods. "),n("br"),n("br"),n("b",[e._v("Proposed expertises :")]),e._v(" ethical consumption, marketing. ")])}],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero",style:e.changeBackground()},[e._m(0)])},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blurred-box"},[n("div",{staticClass:"user-login-box"},[n("div",{staticClass:"user-title"},[e._v("Associate Professor")]),n("span",{staticClass:"user-icon"}),n("div",{staticClass:"user-name"},[e._v("Camilla Barbarossa")])])])}],Y={name:"HeroComp",data(){return{image:[{"background-image":"url("+n(7553)+")"},{"background-image":"url("+n(1231)+")"},{"background-image":"url("+n(3288)+")"},{"background-image":"url("+n(1634)+")"},{"background-image":"url("+n(7577)+")"},{"background-image":"url("+n(7727)+")"},{"background-image":"url("+n(6366)+")"}]}},mounted(){},methods:{changeBackground(){var e=(new Date).getHours();return console.log(e),e>=6&&e<9?this.image[0]:e>=9&&e<12?this.image[1]:e>=12&&e<14?this.image[2]:e>=14&&e<17?this.image[3]:e>=17&&e<20?this.image[4]:e>=20&&e<22?this.image[5]:this.image[6]}}},N=Y,R=(0,u.Z)(N,H,Z,!1,null,"6c797c6a",null),G=R.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skills"},[n("div",{staticClass:"skill"},[n("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[n("div",[n("h2",[n("strong",[e._v("Linkedin")])])])])]),n("div",{staticClass:"skill"},[n("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[n("div",[n("h2",[n("strong",[e._v("Research Gate")])])])])]),n("div",{staticClass:"skill"},[n("a",{attrs:{href:"https://scholar.google.com/citations?user=Cev_0eYAAAAJ",target:"blank"}},[n("div",[n("h2",[n("strong",[e._v("Google Scholar")])])])])]),n("div",{staticClass:"skill"},[n("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"blank"}},[n("div",[n("h2",[n("strong",[e._v("TBS Education")])])])])])])}],J={name:"ContactComp",data(){return{}},methods:{}},W=J,q=(0,u.Z)(W,I,V,!1,null,"5e97e26c",null),U=q.exports,z={name:"HomeView",components:{HeroComp:G,ContactComp:U},data(){return{}},methods:{currentDate(){const e=new Date;switch(e.getDay()){case 0:return`Sunday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 1:return`Monday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 2:return`Tuesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 3:return`Wednesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 4:return`Thursday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 5:return`Friday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 6:return`Saturday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;default:break}},greeting(){var e=(new Date).getHours();return console.log(e),e>=6&&e<12?"Good Morning":e>=12&&e<18?"Good Afternoon":e>=18&&e<23?"Good Evening":"Welcome"}}},K=z,Q=(0,u.Z)(K,P,L,!1,null,"5cd5ae20",null),X=Q.exports;a["default"].use(O.Z);const ee=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1730))},{path:"/outcomes",name:"outcomes",component:()=>n.e(443).then(n.bind(n,6422))},{path:"/:pathMatch(.*)*",name:"error404",component:()=>n.e(763).then(n.bind(n,8763))}],te=new O.Z({mode:"hash",base:"/",routes:ee,scrollBehavior(){scroll(0,0),document.getElementById("app").scrollIntoView({behavior:"smooth"})}});var ne=te,ae=n(6166),re=n.n(ae),oe=n(8262),se=n(3266);a["default"].prototype.$http=re(),a["default"].config.productionTip=!1,a["default"].use(oe.XG7),a["default"].use(se.A7),new a["default"]({router:ne,render:e=>e(D)}).$mount("#app")},7553:function(e,t,n){e.exports=n.p+"img/nature0.5d331829.jpg"},1231:function(e,t,n){e.exports=n.p+"img/nature1.8973b2bb.jpg"},3288:function(e,t,n){e.exports=n.p+"img/nature2.1592129b.jpg"},1634:function(e,t,n){e.exports=n.p+"img/nature3.839ad529.jpg"},7577:function(e,t,n){e.exports=n.p+"img/nature4.499074eb.jpg"},7727:function(e,t,n){e.exports=n.p+"img/nature5.a53ae175.png"},6366:function(e,t,n){e.exports=n.p+"img/nature6.d0a1f14f.jpg"},4657:function(e,t,n){e.exports=n.p+"img/tbs-logoetbaseline.2f1968f2.png"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{443:"96180f72",763:"3c6c0ae0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{443:"b8807db9",763:"0b22fa48"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gs_template:";n.l=function(a,r,o,s){if(e[a])e[a].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var s=n.miniCssF(a),i=n.p+s;if(t(s,i))return r();e(a,i,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1,763:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var s=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkgs_template"]=self["webpackChunkgs_template"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1178)}));a=n.O(a)})();
//# sourceMappingURL=app.7384696b.js.map