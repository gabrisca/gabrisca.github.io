(function(t){function e(e){for(var i,n,r=e[0],u=e[1],c=e[2],l=0,d=[];l<r.length;l++)n=r[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=u(u.s=a[0]))}return t}var i={},n={app:0},s={app:0},o=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-578ab1a4":"adb6477d","chunk-7239725e":"b53a7a54","chunk-7c9642a0":"3105b67b","chunk-790e41ef":"2faf452b","chunk-d5b9be6a":"a09850f2"}[t]+".js"}function u(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={"chunk-578ab1a4":1,"chunk-7239725e":1,"chunk-790e41ef":1,"chunk-d5b9be6a":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({}[t]||t)+"."+{"chunk-578ab1a4":"86df50c6","chunk-7239725e":"f1b3b53b","chunk-7c9642a0":"31d6cfe0","chunk-790e41ef":"f28f429d","chunk-d5b9be6a":"1e0d5da8"}[t]+".css",s=u.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===i||l===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],l=c.getAttribute("data-href");if(l===i||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[t],m.parentNode.removeChild(m),a(o)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=i,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(a,i,function(e){return t[e]}.bind(null,i));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0fb6":function(t,e,a){},"12ad":function(t,e,a){},"28e4":function(t,e,a){},"42a9":function(t,e,a){},"480e":function(t,e,a){"use strict";a("42a9")},"4a7d":function(t,e,a){"use strict";a("811c")},"4dd1":function(t,e,a){"use strict";a("b839")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Loader"),a("div",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("LateralTitle"),a("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{class:{hideNav:!t.showNavbar},attrs:{id:"nav"}},[i("div",{attrs:{id:"logo"}},[i("img",{attrs:{src:a("a046"),alt:"logo"}}),i("div",{staticClass:"logo_text"},[i("router-link",{attrs:{to:this.links[0].url}},[i("span",[t._v(" camilla ")]),i("span",[t._v(" barbarossa ")])])],1)]),i("div",{attrs:{id:"menu"}},[i("ul",{staticClass:"inline_menu"},t._l(t.links,(function(e,a){return i("li",{key:a,class:{active:e.current},on:{click:function(t){t.stopPropagation()}}},[i("router-link",{attrs:{to:e.url}},[t._v(" "+t._s(e.text)+" ")])],1)})),0),i("ul",{staticClass:"hamburger_menu hide"},t._l(t.links,(function(e,a){return i("li",{key:a,staticClass:"menuItem",class:{active:e.current},on:{click:function(t){t.stopPropagation()}}},[i("router-link",{attrs:{to:e.url},nativeOn:{click:function(e){return t.toggleMenu.apply(null,arguments)}}},[t._v(" "+t._s(e.text)+" ")])],1)})),0),i("div",{staticClass:"hamburger",on:{click:t.toggleMenu}},[i("i",{staticClass:"my_hamburger fas fa-bars fa-2x"}),i("i",{staticClass:"my_close_hamburger fas fa-times fa-2x"})])])])])},r=[],u=(a("159b"),{name:"Header",data:function(){return{links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1},{text:"outcomes",url:"/outcomes",current:!1}],showNavbar:!0,lastScrollPosition:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{setActive:function(t){this.links.forEach((function(t){t.current=!1})),this.links[t].current=!0},toggleMenu:function(){var t=document.querySelector(".hamburger_menu"),e=document.querySelector(".my_close_hamburger"),a=document.querySelector(".my_hamburger");t.classList.contains("show")?(t.classList.remove("show"),t.classList.add("hide"),e.style.display="none",a.style.display="block"):(t.classList.remove("hide"),t.classList.add("show"),e.style.display="block",a.style.display="none")},onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;t<0||Math.abs(t-this.lastScrollPosition)<10||(this.showNavbar=t<this.lastScrollPosition,this.lastScrollPosition=t)}}}),c=u,l=(a("480e"),a("2877")),d=Object(l["a"])(c,o,r,!1,null,"2d83288e",null),m=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer_top",class:{hideFoot:!t.showFooter}},[t._m(0),t._m(1)]),t._m(2)])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"school"},[i("li",[i("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"_blank"}},[i("img",{attrs:{src:a("75cb"),alt:"logo tbs"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("li",[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("i",{staticClass:"fab fa-researchgate"})])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer_bottom"},[i("div",[i("img",{attrs:{src:a("a046"),alt:""}}),i("span",[t._v(" camilla barbarossa ")])]),i("div",[i("span",[t._v(" powered by "),i("a",{attrs:{href:"https://github.com/gabrisca",target:"_blank"}},[t._v(" gabrisca ")])])])])}],b={name:"Footer",data:function(){return{showFooter:!1,lastScrollPosition:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.pageYOffset;t<10||Math.abs(t-this.lastScrollPosition)<0||(this.showFooter=t>this.lastScrollPosition,this.lastScrollPosition=t)}}},h=b,v=(a("ccda"),Object(l["a"])(h,p,f,!1,null,"4026ac72",null)),g=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isloaded?t._e():a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})])},w=[],k={name:"Loader",data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"==document.readyState&&(t.isloaded=!0)}}},q=k,y=(a("4dd1"),Object(l["a"])(q,_,w,!1,null,"bb5ffbee",null)),C=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"lateral_title"}},[a("span",{staticClass:"positioner-text"},[t._v("CAMILLA BARBAROSSA")])])}],E={name:"LateralTitle"},L=E,O=(a("a9fa"),Object(l["a"])(L,x,S,!1,null,"79a5560d",null)),P=O.exports,A={name:"App",components:{Header:m,Footer:g,Loader:C,LateralTitle:P}},D=A,M=(a("5c0b"),Object(l["a"])(D,n,s,!1,null,null,null)),j=M.exports,T=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Hero"),a("div",{staticClass:"bienvenue"},[a("h1",[t._v(t._s(t.greeting()))]),a("div",{staticClass:"date"},[a("p",[t._v(t._s(t.currentDate()))])]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae provident ratione doloribus, sunt totam ea. Adipisci temporibus possimus est incidunt similique consequatur recusandae perspiciatis architecto totam ipsa deserunt quis, iure atque accusantium placeat. Temporibus itaque aperiam optio quo quos necessitatibus eveniet laboriosam! Nobis repellendus numquam natus voluptatibus exercitationem, mollitia, autem, neque tempore obcaecati consequatur ratione. Libero temporibus ducimus voluptate tempora atque, aut non enim veniam sapiente beatae possimus odit sequi deserunt. Quibusdam, voluptatibus, quae eius quis ducimus minus delectus a eligendi officia neque saepe expedita! Animi obcaecati natus et temporibus omnis earum excepturi voluptas alias officia harum ad nostrum, ullam rem, autem possimus neque fuga quidem maxime vero laboriosam adipisci dolore voluptatibus architecto. Voluptatem sint quia perferendis voluptas nam deserunt neque enim, nihil quibusdam molestias earum? Quisquam nulla molestiae, amet minus, beatae optio provident magni facere vero soluta recusandae similique quis, natus consequatur incidunt ab iusto ea labore sint odit maiores tempore maxime explicabo! Accusamus cumque quam dicta distinctio quos aspernatur consectetur dolorem, quasi delectus aut itaque culpa, a fugiat ratione quaerat iusto. Esse consectetur beatae dignissimos aperiam, quam debitis possimus, blanditiis perspiciatis, similique nemo deserunt rem temporibus autem officiis mollitia suscipit. Ipsa voluptatem temporibus animi inventore pariatur facilis placeat, vitae, eaque enim voluptates officia sed perspiciatis? Minima ratione nemo voluptas eum molestiae eveniet alias amet veniam, accusamus commodi quibusdam at? Doloribus dolor quis eos porro nam. Vitae voluptatibus nostrum, voluptas totam omnis illum delectus. Voluptate repellendus tempore ipsum sapiente, voluptatem culpa eligendi. Ullam soluta, architecto ipsam, nemo accusamus eius, blanditiis velit dignissimos quo doloribus fugiat? Corporis ut earum laboriosam dolor quas autem repellendus dolorum sequi rerum nobis itaque quod veniam, eaque error doloremque eos minus delectus vitae ratione necessitatibus veritatis? Omnis, voluptatem aliquam necessitatibus odio praesentium fugit quas modi aspernatur corrupti sunt iste. Perferendis blanditiis quo aliquid accusamus, est, voluptatibus magnam voluptates beatae accusantium quia obcaecati veritatis, ut exercitationem tempora sed deleniti velit eaque debitis! Esse consequuntur perferendis sunt cupiditate vel consequatur aperiam temporibus fugiat nesciunt est debitis facilis id nihil, doloremque placeat. Distinctio debitis est commodi, dolor, aperiam exercitationem ea provident eum laboriosam itaque a quisquam nemo cum eius? Quae enim minima facilis, corrupti velit error quos totam repellat qui dolores. Animi sequi non rem illo labore nulla, expedita saepe dolores aspernatur cupiditate cum ipsam aperiam quasi perspiciatis. Natus, tenetur! Error maxime necessitatibus molestias at, amet a! Nam iure dolore accusantium corporis autem asperiores, laboriosam odit. Distinctio, itaque? ")])]),a("Skills")],1)},$=[],B=(a("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?i("div",{staticClass:"hero__content"},[i("p",{staticClass:"intro-text"},[t._v("PhD Professor")]),i("h1",{staticClass:"big-text"},[t._v("Camilla Barbarossa")]),i("a",{staticClass:"button",attrs:{href:"https://www.tbs-education.com/",target:"blank"}},[t._v("Toulouse Business School")]),i("div",{staticClass:"profile"},[i("img",{attrs:{src:a("b8f2"),alt:"profilo"}})])]):t._e()])],1)}),N=[],H={name:"Hero",data:function(){return{show:!1}},mounted:function(){this.slide()},methods:{slide:function(){var t=this;setTimeout((function(){t.show=!0}),400)}}},Y=H,I=(a("c437"),Object(l["a"])(Y,B,N,!1,null,"223d87d7",null)),G=I.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skills"}},[a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.linkedin.com/in/camilla-barbarossa-01422a40/",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Linkedin")])]),a("p",{staticClass:"text"},[t._v(" Rendere semplice ciò che non è immediato è il nostro mestiere. ")])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.researchgate.net/profile/Camilla-Barbarossa",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Research Gate")])]),a("p",{staticClass:"text"},[t._v("Siamo al 100% digital, niente è escluso.")])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://scholar.google.com/citations?user=Cev_0eYAAAAJ",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("Google Scholar")])]),a("p",{staticClass:"text"},[t._v("Esserci non basta. Vi aiutiamo a farvi conoscere.")])])])]),a("div",{staticClass:"skill"},[a("a",{attrs:{href:"https://www.tbs-education.fr/professeur/barbarossa-camilla/",target:"blank"}},[a("div",[a("h2",[a("strong",[t._v("TBS Education")])]),a("p",{staticClass:"text"},[t._v(" Inspiring education. Inspiring Life. ")])])])])])}],J={name:"Skills",data:function(){return{}},methods:{}},Q=J,U=(a("dd30"),Object(l["a"])(Q,V,R,!1,null,"654316da",null)),W=U.exports,K={name:"Home",components:{Hero:G,Skills:W},data:function(){return{}},methods:{currentDate:function(){var t=new Date;switch(t.getDay()){case 0:return"Sunday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 1:return"Monday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 2:return"Tuesday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 3:return"Wednesday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 4:return"Thursday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 5:return"Friday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());case 6:return"Saturday, ".concat(t.getDate()," / ").concat(t.getMonth()+1," / ").concat(t.getFullYear());default:break}},greeting:function(){var t=(new Date).getHours();return console.log(t),t>=6&&t<12?"Good Morning":t>=12&&t<18?"Good Afternoon":t>=18&&t<23?"Good Evening":"Welcome"}}},z=K,X=(a("4a7d"),Object(l["a"])(z,F,$,!1,null,"020ab1bc",null)),Z=X.exports;i["default"].use(T["a"]);var tt=new T["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return a.e("chunk-7239725e").then(a.bind(null,"f820"))}},{path:"/outcomes",name:"Outcomes",component:function(){return Promise.all([a.e("chunk-7c9642a0"),a.e("chunk-d5b9be6a")]).then(a.bind(null,"a2ec"))}},{path:"/details/:id",name:"Details",component:function(){return Promise.all([a.e("chunk-7c9642a0"),a.e("chunk-790e41ef")]).then(a.bind(null,"9f52"))}},{path:"/:pathMatch(.*)*",name:"error404",component:function(){return a.e("chunk-578ab1a4").then(a.bind(null,"b2ec"))}}],scrollBehavior:function(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),et=tt,at=a("574d"),it=a.n(at),nt=(a("04f2"),a("9b23")),st=a.n(nt);
//! VueSax
i["default"].config.productionTip=!1,i["default"].use(it.a,{}),//! BootstrapVue
//! worldcloud
i["default"].use(st.a,{}),new i["default"]({el:"#app",router:et,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"75cb":function(t,e,a){t.exports=a.p+"img/tbs-logoetbaseline.923df644.png"},"811c":function(t,e,a){},"9c0c":function(t,e,a){},a046:function(t,e,a){t.exports=a.p+"img/cb.a1598e66.png"},a9fa:function(t,e,a){"use strict";a("12ad")},b839:function(t,e,a){},b8f2:function(t,e,a){t.exports=a.p+"img/profile.5d76fc9a.png"},c437:function(t,e,a){"use strict";a("28e4")},ccda:function(t,e,a){"use strict";a("f1b7")},dd30:function(t,e,a){"use strict";a("0fb6")},f1b7:function(t,e,a){}});
//# sourceMappingURL=app.7f590b61.js.map