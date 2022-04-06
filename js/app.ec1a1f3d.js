(function(){"use strict";var e={6319:function(e,t,a){var i=a(8935),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("LoaderComp"),a("Header"),a("router-view"),a("LateralTitle"),a("Footer")],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isloaded?e._e():a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})])},o=[],u={name:"LoaderComp",data:()=>({isloaded:!1}),mounted(){document.onreadystatechange=()=>{"complete"==document.readyState&&(this.isloaded=!0)}}},l=u,c=a(1001),m=(0,c.Z)(l,n,o,!1,null,"c00d2c52",null),d=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("navbar",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("router-link",{staticClass:"gs_brand",attrs:{to:this.links[0].url}},[e._v(" Camilla Barbarossa ")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-navbar-nav",[a("ul",{staticClass:"inline_menu"},e._l(e.links,(function(t,i){return a("li",{key:i,class:{active:t.current},on:{click:function(e){e.stopPropagation()}}},[a("router-link",{attrs:{to:t.url}},[e._v(" "+e._s(t.text)+" ")])],1)})),0)])],1)],1)],1)],1)},f=[],v={name:"HeaderView",data(){return{links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1},{text:"outcomes",url:"/outcomes",current:!1}]}}},b=v,h=(0,c.Z)(b,p,f,!1,null,"16978985",null),g=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"footer_top",class:{hideFoot:!e.showFooter}},[e._m(0),e._m(1)]),e._m(2)])},q=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",{staticClass:"school"},[i("li",[i("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"_blank"}},[i("img",{attrs:{src:a(4657),alt:"logo tbs"}})])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("li",[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("i",{staticClass:"fab fa-researchgate"})])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer_bottom"},[a("div",[a("span",{staticClass:"name"},[e._v(" camilla barbarossa ")])]),a("div",[a("span",{staticClass:"powered"},[e._v(" powered by "),a("a",{attrs:{href:"https://github.com/gabrisca",target:"_blank"}},[e._v(" gabrisca ")])])])])}],C={name:"FooterView",data(){return{showFooter:!1,lastScrollPosition:0}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){var e=window.innerWidth;if(e>800){const e=window.pageYOffset;if(e<10)return;if(Math.abs(e-this.lastScrollPosition)<0)return;this.showFooter=e>this.lastScrollPosition,this.lastScrollPosition=e}else this.showFooter=!1}}},w=C,y=(0,c.Z)(w,_,q,!1,null,"052f9846",null),k=y.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"lateral_title"}},[a("span",{staticClass:"positioner-text"},[e._v("CAMILLA BARBAROSSA")])])}],E={name:"LateralTitle"},A=E,S=(0,c.Z)(A,$,x,!1,null,"633db8cc",null),F=S.exports,D={name:"App",components:{LoaderComp:d,Header:g,Footer:k,LateralTitle:F}},L=D,O=(0,c.Z)(L,r,s,!1,null,null,null),T=O.exports,M=a(2809),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HeroComp"),a("div",{staticClass:"gs_container"},[a("div",{staticClass:"bienvenue"},[a("h1",[e._v(e._s(e.greeting()))]),a("div",{staticClass:"date"},[a("p",[e._v(e._s(e.currentDate()))])]),a("p",[e._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae provident ratione doloribus, sunt totam ea. Adipisci temporibus possimus est incidunt similique consequatur recusandae perspiciatis architecto totam ipsa deserunt quis, iure atque accusantium placeat. Temporibus itaque aperiam optio quo quos necessitatibus eveniet laboriosam! Nobis repellendus numquam natus voluptatibus exercitationem, mollitia, autem, neque tempore obcaecati consequatur ratione. Libero temporibus ducimus voluptate tempora atque, aut non enim veniam sapiente beatae possimus odit sequi deserunt. Quibusdam, voluptatibus, quae eius quis ducimus minus delectus a eligendi officia neque saepe expedita! Animi obcaecati natus et temporibus omnis earum excepturi voluptas alias officia harum ad nostrum, ullam rem, autem possimus neque fuga quidem maxime vero laboriosam adipisci dolore voluptatibus architecto. Voluptatem sint quia perferendis voluptas nam deserunt neque enim, nihil quibusdam molestias earum? Quisquam nulla molestiae, amet minus, beatae optio provident magni facere vero soluta recusandae similique quis, natus consequatur incidunt ab iusto ea labore sint odit maiores tempore maxime explicabo! Accusamus cumque quam dicta distinctio quos aspernatur consectetur dolorem, quasi delectus aut itaque culpa, a fugiat ratione quaerat iusto. Esse consectetur beatae dignissimos aperiam, quam debitis possimus, blanditiis perspiciatis, similique nemo deserunt rem temporibus autem officiis mollitia suscipit. Ipsa voluptatem temporibus animi inventore pariatur facilis placeat, vitae, eaque enim voluptates officia sed perspiciatis? Minima ratione nemo voluptas eum molestiae eveniet alias amet veniam, accusamus commodi quibusdam at? Doloribus dolor quis eos porro nam. Vitae voluptatibus nostrum, voluptas totam omnis illum delectus. Voluptate repellendus tempore ipsum sapiente, voluptatem culpa eligendi. Ullam soluta, architecto ipsam, nemo accusamus eius, blanditiis velit dignissimos quo doloribus fugiat? Corporis ut earum laboriosam dolor quas autem repellendus dolorum sequi rerum nobis itaque quod veniam, eaque error doloremque eos minus delectus vitae ratione necessitatibus veritatis? Omnis, voluptatem aliquam necessitatibus odio praesentium fugit quas modi aspernatur corrupti sunt iste. Perferendis blanditiis quo aliquid accusamus, est, voluptatibus magnam voluptates beatae accusantium quia obcaecati veritatis, ut exercitationem tempora sed deleniti velit eaque debitis! Esse consequuntur perferendis sunt cupiditate vel consequatur aperiam temporibus fugiat nesciunt est debitis facilis id nihil, doloremque placeat. Distinctio debitis est commodi, dolor, aperiam exercitationem ea provident eum laboriosam itaque a quisquam nemo cum eius? Quae enim minima facilis, corrupti velit error quos totam repellat qui dolores. Animi sequi non rem illo labore nulla, expedita saepe dolores aspernatur cupiditate cum ipsam aperiam quasi perspiciatis. Natus, tenetur! Error maxime necessitatibus molestias at, amet a! Nam iure dolore accusantium corporis autem asperiores, laboriosam odit. Distinctio, itaque? ")])])]),a("ContactComp")],1)},j=[],B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hero"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[e.show?i("div",{staticClass:"hero__content"},[i("p",{staticClass:"intro-text"},[e._v("PhD Professor")]),i("h1",{staticClass:"big-text"},[e._v("Camilla Barbarossa")]),i("div",{staticClass:"profile"},[i("img",{attrs:{src:a(8438),alt:"profilo"}})])]):e._e()])],1)},N=[],Z={name:"HeroComp",data(){return{show:!1}},mounted(){this.slide()},methods:{slide(){setTimeout((()=>{this.show=!0}),400)}}},H=Z,Y=(0,c.Z)(H,B,N,!1,null,"3da7e322",null),G=Y.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skills"},[a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("div",[a("h2",[a("strong",[e._v("Linkedin")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("div",[a("h2",[a("strong",[e._v("Research Gate")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://scholar.google.com/citations?user=Cev_0eYAAAAJ",target:"blank"}},[a("div",[a("h2",[a("strong",[e._v("Google Scholar")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"blank"}},[a("div",[a("h2",[a("strong",[e._v("TBS Education")])])])])])])}],Q={name:"ContactComp",data(){return{}},methods:{}},R=Q,W=(0,c.Z)(R,V,I,!1,null,"1bcfbd74",null),U=W.exports,J={name:"HomeView",components:{HeroComp:G,ContactComp:U},data(){return{}},methods:{currentDate(){const e=new Date;switch(e.getDay()){case 0:return`Sunday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 1:return`Monday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 2:return`Tuesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 3:return`Wednesday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 4:return`Thursday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 5:return`Friday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;case 6:return`Saturday, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;default:break}},greeting(){var e=(new Date).getHours();return console.log(e),e>=6&&e<12?"Good Morning":e>=12&&e<18?"Good Afternoon":e>=18&&e<23?"Good Evening":"Welcome"}}},K=J,X=(0,c.Z)(K,P,j,!1,null,"3c78c235",null),z=X.exports;i["default"].use(M.Z);const ee=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9454))},{path:"/outcomes",name:"outcomes",component:()=>a.e(443).then(a.bind(a,1161))}],te=new M.Z({mode:"history",base:"/",routes:ee});var ae=te,ie=a(8262),re=a(3266);i["default"].config.productionTip=!1,i["default"].use(ie.XG7),i["default"].use(re.A7),new i["default"]({router:ae,render:e=>e(T)}).$mount("#app")},8438:function(e,t,a){e.exports=a.p+"img/profile.df591fc5.png"},4657:function(e,t,a){e.exports=a.p+"img/tbs-logoetbaseline.2f1968f2.png"}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,r,s){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],s=e[c][2];for(var o=!0,u=0;u<i.length;u++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[u])}))?i.splice(u--,1):(o=!1,s<n&&(n=s));if(o){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.25a9ab43.js"}}(),function(){a.miniCssF=function(e){return"css/about.8294b32d.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gs_template:";a.l=function(i,r,s,n){if(e[i])e[i].push(r);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+s){o=m;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+s),o.src=i),e[i]=[r];var d=function(t,a){o.onerror=o.onload=null,clearTimeout(p);var r=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)a();else{var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=o,r.parentNode.removeChild(r),i(u)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var r=a[i],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var n=document.getElementsByTagName("style");for(i=0;i<n.length;i++){r=n[i],s=r.getAttribute("data-href");if(s===e||s===t)return r}},i=function(i){return new Promise((function(r,s){var n=a.miniCssF(i),o=a.p+n;if(t(n,o))return r();e(i,o,r,s)}))},r={143:0};a.f.miniCss=function(e,t){var a={443:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,i){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(a,i){r=e[t]=[a,i]}));i.push(r[2]=s);var n=a.p+a.u(t),o=new Error,u=function(i){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,r[1](o)}};a.l(n,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,n=i[0],o=i[1],u=i[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(u)var c=u(a)}for(t&&t(i);l<n.length;l++)s=n[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunkgs_template"]=self["webpackChunkgs_template"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6319)}));i=a.O(i)})();
//# sourceMappingURL=app.ec1a1f3d.js.map