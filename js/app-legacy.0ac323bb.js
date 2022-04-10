(function(){"use strict";var t={3529:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var i=a(8935),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("LoaderComp"),a("Header"),a("router-view"),a("LateralTitle"),a("Footer")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isloaded?t._e():a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})])},s=[],u={name:"LoaderComp",data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"==document.readyState&&(t.isloaded=!0)}}},l=u,c=a(1001),m=(0,c.Z)(l,r,s,!1,null,"c00d2c52",null),d=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("navbar",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("router-link",{staticClass:"gs_brand",attrs:{to:this.links[0].url}},[a("div",{staticClass:"logo_text"},[a("span",[t._v(" camilla ")]),a("span",[t._v(" barbarossa ")])])])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-navbar-nav",[a("ul",{staticClass:"inline_menu"},t._l(t.links,(function(e,i){return a("li",{key:i,class:{active:e.current},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:e.url}},[t._v(" "+t._s(e.text)+" ")])],1)})),0)])],1)],1)],1)],1)},f=[],v={name:"HeaderView",data:function(){return{showCollapse:!1,links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1},{text:"outcomes",url:"/outcomes",current:!1}]}},watch:{$route:function(){this.showCollapse=!1}}},b=v,h=(0,c.Z)(b,p,f,!1,null,"99abb824",null),g=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer_top",class:{hideFoot:!t.showFooter}},[t._m(0),t._m(1)]),t._m(2)])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"school"},[i("li",[i("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"_blank"}},[i("img",{attrs:{src:a(4657),alt:"logo tbs"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("li",[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("i",{staticClass:"fab fa-researchgate"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_bottom"},[a("div",[a("span",{staticClass:"name"},[t._v(" camilla barbarossa ")])]),a("div",[a("span",{staticClass:"powered"},[t._v(" powered by "),a("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",target:"_blank"}},[t._v(" gabrisca ")])])])])}],C={name:"FooterView",data:function(){return{showFooter:!1,lastScrollPosition:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.innerWidth;if(t>800){var e=window.pageYOffset;if(e<10)return;if(Math.abs(e-this.lastScrollPosition)<0)return;this.showFooter=e>this.lastScrollPosition,this.lastScrollPosition=e}else this.showFooter=!1}}},q=C,y=(0,c.Z)(q,_,w,!1,null,"3e3d6e93",null),k=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"lateral_title"}},[a("span",{staticClass:"positioner-text"},[t._v("CAMILLA BARBAROSSA")])])}],A={name:"LateralTitle"},S=A,F=(0,c.Z)(S,x,E,!1,null,"0e858192",null),D=F.exports,L={name:"App",components:{LoaderComp:d,Header:g,Footer:k,LateralTitle:D}},O=L,T=(0,c.Z)(O,n,o,!1,null,null,null),M=T.exports,P=(a(1539),a(8783),a(3948),a(2809)),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HeroComp"),a("div",{staticClass:"gs_container"},[a("div",{staticClass:"bienvenue"},[a("h1",[t._v(t._s(t.greeting()))]),a("div",{staticClass:"date"},[a("p",[t._v(t._s(t.currentDate()))])]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae provident ratione doloribus, sunt totam ea. Adipisci temporibus possimus est incidunt similique consequatur recusandae perspiciatis architecto totam ipsa deserunt quis, iure atque accusantium placeat. Temporibus itaque aperiam optio quo quos necessitatibus eveniet laboriosam! Nobis repellendus numquam natus voluptatibus exercitationem, mollitia, autem, neque tempore obcaecati consequatur ratione. Libero temporibus ducimus voluptate tempora atque, aut non enim veniam sapiente beatae possimus odit sequi deserunt. Quibusdam, voluptatibus, quae eius quis ducimus minus delectus a eligendi officia neque saepe expedita! Animi obcaecati natus et temporibus omnis earum excepturi voluptas alias officia harum ad nostrum, ullam rem, autem possimus neque fuga quidem maxime vero laboriosam adipisci dolore voluptatibus architecto. Voluptatem sint quia perferendis voluptas nam deserunt neque enim, nihil quibusdam molestias earum? Quisquam nulla molestiae, amet minus, beatae optio provident magni facere vero soluta recusandae similique quis, natus consequatur incidunt ab iusto ea labore sint odit maiores tempore maxime explicabo! Accusamus cumque quam dicta distinctio quos aspernatur consectetur dolorem, quasi delectus aut itaque culpa, a fugiat ratione quaerat iusto. Esse consectetur beatae dignissimos aperiam, quam debitis possimus, blanditiis perspiciatis, similique nemo deserunt rem temporibus autem officiis mollitia suscipit. Ipsa voluptatem temporibus animi inventore pariatur facilis placeat, vitae, eaque enim voluptates officia sed perspiciatis? Minima ratione nemo voluptas eum molestiae eveniet alias amet veniam, accusamus commodi quibusdam at? Doloribus dolor quis eos porro nam. Vitae voluptatibus nostrum, voluptas totam omnis illum delectus. Voluptate repellendus tempore ipsum sapiente, voluptatem culpa eligendi. Ullam soluta, architecto ipsam, nemo accusamus eius, blanditiis velit dignissimos quo doloribus fugiat? Corporis ut earum laboriosam dolor quas autem repellendus dolorum sequi rerum nobis itaque quod veniam, eaque error doloremque eos minus delectus vitae ratione necessitatibus veritatis? Omnis, voluptatem aliquam necessitatibus odio praesentium fugit quas modi aspernatur corrupti sunt iste. Perferendis blanditiis quo aliquid accusamus, est, voluptatibus magnam voluptates beatae accusantium quia obcaecati veritatis, ut exercitationem tempora sed deleniti velit eaque debitis! Esse consequuntur perferendis sunt cupiditate vel consequatur aperiam temporibus fugiat nesciunt est debitis facilis id nihil, doloremque placeat. Distinctio debitis est commodi, dolor, aperiam exercitationem ea provident eum laboriosam itaque a quisquam nemo cum eius? Quae enim minima facilis, corrupti velit error quos totam repellat qui dolores. Animi sequi non rem illo labore nulla, expedita saepe dolores aspernatur cupiditate cum ipsam aperiam quasi perspiciatis. Natus, tenetur! Error maxime necessitatibus molestias at, amet a! Nam iure dolore accusantium corporis autem asperiores, laboriosam odit. Distinctio, itaque? ")])])]),a("ContactComp")],1)},j=[],B=(a(2222),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?i("div",{staticClass:"hero__content"},[i("p",{staticClass:"intro-text"},[t._v("PhD Professor")]),i("h1",{staticClass:"big-text"},[t._v("Camilla Barbarossa")]),i("div",{staticClass:"profile"},[i("img",{attrs:{src:a(8438),alt:"profilo"}})])]):t._e()])],1)}),N=[],Z={name:"HeroComp",data:function(){return{show:!1}},mounted:function(){this.slide()},methods:{slide:function(){var t=this;setTimeout((function(){t.show=!0}),400)}}},H=Z,Y=(0,c.Z)(H,B,N,!1,null,"11c9ab38",null),V=Y.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills"},[a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Linkedin")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Research Gate")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://scholar.google.com/citations?user=Cev_0eYAAAAJ",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Google Scholar")])])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("TBS Education")])])])])])])}],Q={name:"ContactComp",data:function(){return{}},methods:{}},R=Q,W=(0,c.Z)(R,G,I,!1,null,"42430d55",null),U=W.exports,J={name:"HomeView",components:{HeroComp:V,ContactComp:U},data:function(){return{}},methods:{currentDate:function(){var t=new Date;switch(t.getDay()){case 0:return"Sunday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 1:return"Monday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 2:return"Tuesday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 3:return"Wednesday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 4:return"Thursday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 5:return"Friday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 6:return"Saturday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());default:break}},greeting:function(){var t=(new Date).getHours();return console.log(t),t>=6&&t<12?"Good Morning":t>=12&&t<18?"Good Afternoon":t>=18&&t<23?"Good Evening":"Welcome"}}},K=J,X=(0,c.Z)(K,$,j,!1,null,"6fdbcbd8",null),z=X.exports;i["default"].use(P.Z);var tt=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return a.e(443).then(a.bind(a,6369))}},{path:"/outcomes",name:"outcomes",component:function(){return a.e(443).then(a.bind(a,2935))}},{path:"/:pathMatch(.*)*",name:"error404",component:function(){return a.e(509).then(a.bind(a,509))}}],et=new P.Z({mode:"hash",base:"/",routes:tt,scrollBehavior:function(){scroll(0,0),document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),at=et,it=a(8262),nt=a(3266);i["default"].config.productionTip=!1,i["default"].use(it.XG7),i["default"].use(nt.A7),new i["default"]({router:at,render:function(t){return t(M)}}).$mount("#app")},8438:function(t,e,a){t.exports=a.p+"img/profile.df591fc5.png"},4657:function(t,e,a){t.exports=a.p+"img/tbs-logoetbaseline.2f1968f2.png"}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,o){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],o=t[c][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<r&&(r=o));if(s){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+(443===t?"about":t)+"-legacy."+{443:"e60dde49",509:"413e647f"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+(443===t?"about":t)+"."+{443:"08e936a8",509:"1bcbd8de"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="gs_template:";a.l=function(i,n,o,r){if(t[i])t[i].push(n);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==e+o){s=m;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+o),s.src=i),t[i]=[n];var d=function(e,a){s.onerror=s.onload=null,clearTimeout(p);var n=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)a();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,n.parentNode.removeChild(n),i(u)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var n=a[i],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){n=r[i],o=n.getAttribute("data-href");if(o===t||o===e)return n}},i=function(i){return new Promise((function(n,o){var r=a.miniCssF(i),s=a.p+r;if(e(r,s))return n();t(i,s,n,o)}))},n={143:0};a.f.miniCss=function(t,e){var a={443:1,509:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,i){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(a,i){n=t[e]=[a,i]}));i.push(n[2]=o);var r=a.p+a.u(e),s=new Error,u=function(i){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}};a.l(r,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,r=i[0],s=i[1],u=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(u)var c=u(a)}for(e&&e(i);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},i=self["webpackChunkgs_template"]=self["webpackChunkgs_template"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3529)}));i=a.O(i)})();
//# sourceMappingURL=app-legacy.0ac323bb.js.map