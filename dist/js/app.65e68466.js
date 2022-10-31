(function(){"use strict";var t={6869:function(t,a,s){var e=s(6369),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("Header"),a("Loader"),a("router-view"),a("Footer"),a("Scroll")],1)},r=[],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mynav"},[a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("router-link",{staticClass:"gs_brand",attrs:{to:this.links[0].url}},[a("img",{attrs:{src:s(5157),alt:"logo gabrisca"}}),a("span",[t._v("Gabriele")]),a("span",[t._v("Scarparo")])])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.showCollapse,callback:function(a){t.showCollapse=a},expression:"showCollapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-navbar-nav",[a("ul",{staticClass:"inline_menu"},[t._l(t.links,(function(s,e){return a("li",{key:e,class:{active:s.current},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:s.url}},[t._v(" "+t._s(s.text)+" ")])],1)})),a("b-nav-item-dropdown",{staticClass:"projects",attrs:{text:"projects",right:""}},t._l(t.projects,(function(s,e){return a("li",{key:e,staticClass:"my_drop",class:{active:s.current},on:{click:function(t){t.stopPropagation()}}},[a("router-link",{attrs:{to:s.url}},[t._v(" "+t._s(s.text)+" ")])],1)})),0)],2)])],1)],1)],1)],1)},o=[],l={name:"HeaderComp",data(){return{showCollapse:!1,links:[{text:"home",url:"/",current:!1},{text:"about",url:"/about",current:!1}],projects:[{text:"home projects",url:"/projects",current:!1},{text:"boolflix",url:"/projects/boolflix",current:!1},{text:"weatherdb",url:"/projects/weatherdb",current:!1}]}},watch:{$route(){this.showCollapse=!1}}},c=l,u=s(1001),v=(0,u.Z)(c,n,o,!1,null,"6200ef56",null),p=v.exports,d=function(){var t=this,a=t._self._c;return a("footer",[a("div",{staticClass:"footer_top",class:{hideFoot:!t.showFooter}},[t._m(0)]),a("div",{staticClass:"footer_bottom"},[a("router-link",{staticClass:"my_router",attrs:{to:"/"}},[a("div",{staticClass:"site logo"},[a("img",{attrs:{src:s(1823),alt:"logo gabriele scarparo"},on:{click:function(a){return a.stopPropagation(),t.hideMenu()}}}),a("span",{staticClass:"powered"},[t._v(" powered by "),a("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",target:"_blank"}},[t._v(" gabrisca ")])])])]),a("div",{staticClass:"site my_menu",on:{click:function(a){return t.toggle()}}},[a("input",{attrs:{id:"menu-toggle",type:"checkbox"},on:{click:function(a){return t.toggle()}}}),t._m(1),a("b-navbar-nav",[a("transition",{attrs:{name:"slide"}},[t.showMenu?a("ul",{staticClass:"menu"},[t._l(t.links,(function(s,e){return a("li",{key:e,class:{active:s.current},on:{click:function(a){return a.stopPropagation(),t.toggle()}}},[a("router-link",{attrs:{to:s.url}},[a("i",{class:[t.faClass(s.icon)]}),t._v(" "+t._s(s.text)+" ")])],1)})),a("ul",{staticClass:"submenu"},t._l(t.projects,(function(s,e){return a("li",{key:e,staticClass:"my_drop",class:{active:s.current},on:{click:function(a){return a.stopPropagation(),t.toggle()}}},[a("router-link",{attrs:{to:s.url}},[a("i",{class:[t.faClass(s.icon)]}),t._v(" "+t._s(s.text)+" ")])],1)})),0),a("ul",{staticClass:"social_icons"},[a("a",{attrs:{href:"https://www.facebook.com/gabriele.scarparo.3",title:"Facebook",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})]),a("a",{attrs:{href:"https://twitter.com/gabrisca_85",title:"Twitter",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter icon"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",title:"Linkedin",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin-in icon"})]),a("a",{attrs:{href:"https://gabrielescarparo.wordpress.com/",title:"Wordpress",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-wordpress-simple icon"})]),a("a",{attrs:{href:"https://github.com/gabrisca",title:"GitHub",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-github"})])])],2):t._e()])],1)],1)],1)])},f=[function(){var t=this,a=t._self._c;return a("ul",[a("li",[a("a",{attrs:{href:"https://www.facebook.com/gabriele.scarparo.3",target:"blank"}},[a("i",{staticClass:"fab fa-facebook-f icon"})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/gabrisca_85",target:"blank"}},[a("i",{staticClass:"fab fa-twitter icon"})])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",target:"blank"}},[a("i",{staticClass:"fab fa-linkedin-in icon"})])]),a("li",[a("a",{attrs:{href:"https://gabrielescarparo.wordpress.com/",target:"blank"}},[a("i",{staticClass:"fa-brands fa-wordpress-simple icon",attrs:{target:"blank"}})])]),a("li",[a("a",{attrs:{href:"https://github.com/gabrisca",target:"blank"}},[a("i",{staticClass:"fa-brands fa-github icon",attrs:{target:"blank"}})])])])},function(){var t=this,a=t._self._c;return a("label",{staticClass:"menu-button-container",attrs:{for:"menu-toggle"}},[a("div",{staticClass:"menu-button"})])}],_={name:"FooterComp",data(){return{showFooter:!1,lastScrollPosition:0,showMenu:!1,links:[{text:"home",url:"/",icon:"house-user",current:!1},{text:"about",url:"/about",icon:"user",current:!1},{text:"my projects",url:"/projects",icon:"window-restore",current:!1}],projects:[{text:"boolflix",url:"/projects/boolflix",current:!1},{text:"weatherdb",url:"/projects/weatherdb",current:!1}]}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){var t=window.innerWidth;if(t>800){const t=window.pageYOffset;if(t<10)return;if(Math.abs(t-this.lastScrollPosition)<0)return;this.showFooter=t<this.lastScrollPosition,this.lastScrollPosition=t}else this.showFooter=!1},toggle(){this.showMenu=!this.showMenu},hideMenu(){this.showMenu=!1},faClass(t){return`fa-solid fa-${t}`}}},h=_,b=(0,u.Z)(h,d,f,!1,null,"3cf0918a",null),m=b.exports,C=function(){var t=this,a=t._self._c;return t.isloaded?t._e():a("div",{attrs:{id:"loader"}},[a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})])},g=[],w={name:"LoaderComp",data:()=>({isloaded:!1}),mounted(){document.onreadystatechange=()=>{"complete"==document.readyState&&(this.isloaded=!0)}}},k=w,y=(0,u.Z)(k,C,g,!1,null,"4eb598e6",null),x=y.exports,j=function(){var t=this,a=t._self._c;return a("div",{staticClass:"scrolly"},[a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.scY>300,expression:"scY > 300"}],staticClass:"fixed right-0 bottom-0",attrs:{id:"pagetop"},on:{click:t.toTop}},[a("i",{staticClass:"fa-solid fa-circle-arrow-up fa-3x"})])])],1)},T=[],M={name:"ScrollComp",data(){return{scTimer:0,scY:0}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scTimer||(this.scTimer=setTimeout((()=>{this.scY=window.scrollY,clearTimeout(this.scTimer),this.scTimer=0}),100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},S=M,$=(0,u.Z)(S,j,T,!1,null,"33429c44",null),F=$.exports,P={name:"App",components:{Header:p,Footer:m,Loader:x,Scroll:F},data(){return{enter:!0}},methods:{setEnter(){this.enter=!1}}},E=P,D=(0,u.Z)(E,i,r,!1,null,null,null),O=D.exports,A=s(2631),Z=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("div",{staticClass:"welcome"},[a("Jumbotron2")],1),a("Interests")],1)},L=[],I=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mycontainer"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"date"},[a("div",[a("span",{staticClass:"today"},[t._v(t._s(t.currentDate()))]),t.welcome?a("i",{staticClass:"fa-solid fa-face-smile"}):t._e(),t.morning?a("i",{staticClass:"fa-solid fa-sun"}):t._e(),t.afternoon?a("i",{staticClass:"fa-solid fa-clock"}):t._e(),t.evening?a("i",{staticClass:"fa-solid fa-moon"}):t._e()]),a("h3",[t._v(t._s(t.greeting())+"!")])]),t._m(1),a("div",{staticClass:"buttonclass"},[a("a",{staticClass:"button",attrs:{href:"mailto:gabrielescarparo@yahoo.com"}},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-telegram",attrs:{viewBox:"0 0 16 16",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}})])]),a("p",[t._v("Contact Me")])])]),t._m(2),t._m(3)])])},Y=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"gscontainer"},[a("div",{staticClass:"gs"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"type"},[a("div",{staticClass:"img"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"website"},[a("h1",[t._v("gabriele scarparo website")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"social_icons"},[a("a",{attrs:{href:"https://www.facebook.com/gabriele.scarparo.3",title:"Facebook",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})]),a("a",{attrs:{href:"https://twitter.com/gabrisca_85",title:"Twitter",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter icon"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/gabriele-scarparo/",title:"Linkedin",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin-in icon"})]),a("a",{attrs:{href:"https://gabrielescarparo.wordpress.com/",title:"Wordpress",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-wordpress-simple icon"})]),a("a",{attrs:{href:"https://github.com/gabrisca",title:"GitHub",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-github"})])])}],G={name:"Jumbotron2Comp",components:{},data(){return{morning:!1,afternoon:!1,evening:!1,welcome:!1}},methods:{currentDate(){const t=new Date;switch(t.getDay()){case 0:return`Sunday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 1:return`Monday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 2:return`Tuesday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 3:return`Wednesday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 4:return`Thursday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 5:return`Friday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;case 6:return`Saturday, ${t.getDate()} / ${t.getMonth()+1} / ${t.getFullYear()}`;default:break}},greeting(){var t=(new Date).getHours();return t>=6&&t<12?(this.morning=!0,"Good Morning"):t>=12&&t<18?(this.afternoon=!0,"Good Afternoon"):t>=18&&t<23?(this.evening=!0,"Good Evening"):(this.welcome=!0,"Welcome")}},created(){setTimeout(this.typeText,this.newTextDelay+200)}},H=G,N=(0,u.Z)(H,I,Y,!1,null,"d5261a30",null),B=N.exports,W=function(){var t=this,a=t._self._c;return a("div",{staticClass:"interests"},[a("div",{staticClass:"content"},[a("div",{staticClass:"interest ione"},[a("div",{staticClass:"one"},[a("h2",[t._v("I'm a web developer")]),a("a",{staticClass:"btnme bt1",on:{click:function(a){return t.scrollMeTo("dev_c")}}},[a("i",[t._v("M")]),a("i",[t._v("o")]),a("i",[t._v("r")]),a("i",[t._v("e")])])]),a("div",{staticClass:"two first"})]),a("hr"),a("div",{staticClass:"interest itwo"},[a("div",{staticClass:"one second"}),a("div",{staticClass:"two"},[a("h2",[t._v("I'm a writer")]),a("a",{staticClass:"btnme bt2",on:{click:function(a){return t.scrollMeTo("writer_c")}}},[a("i",[t._v("M")]),a("i",[t._v("o")]),a("i",[t._v("r")]),a("i",[t._v("e")])])])]),a("hr"),a("div",{staticClass:"interest ithree"},[a("div",{staticClass:"one"},[a("h2",[t._v("I'm a history buff")]),a("a",{staticClass:"btnme bt3",on:{click:function(a){return t.scrollMeTo("history_c")}}},[a("i",[t._v("M")]),a("i",[t._v("o")]),a("i",[t._v("r")]),a("i",[t._v("e")])])]),a("div",{staticClass:"two third"})])]),a("div",{ref:"dev_c",staticClass:"content dev",attrs:{id:"dev_c"}},[a("h2",[t._v("I'm a web developer")]),t._m(0)]),a("div",{ref:"writer_c",staticClass:"content writer",attrs:{id:"writer_c"}},[a("h2",[t._v("I'm a writer")]),t._m(1)]),a("div",{ref:"history_c",staticClass:"content history",attrs:{id:"writer_c"}},[a("h2",[t._v("I'm a history buff")]),t._m(2)]),a("div",{staticClass:"contact"},[a("b-avatar",{staticClass:"avatar",attrs:{src:t.gabriele,size:"6rem"}}),a("h2",{staticClass:"im"},[t._v("I'm Gabriele Scarparo")])],1)])},z=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"interest ione"},[a("div",{staticClass:"one"},[a("div",{staticClass:"json"},[a("p",{staticClass:"gold"},[t._v("{")]),a("p",{staticClass:"obj"},[t._v(' "basics"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"purple"},[t._v(" { ")])]),a("p",{staticClass:"key"},[t._v(' "name"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "Gabriele Scarparo"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "alias"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "gabrisca"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "label"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "Web Developer"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "image"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' ""')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "email"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "gabrielescarparo@yahoo.com"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "phone"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "xx xx xx xx"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "url"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "https://gabrisca.github.io"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "summary"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "A summary of Gabriele..."')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "location"'),a("span",{staticClass:"points"},[t._v(": ")]),a("span",{staticClass:"blue"},[t._v(" { ")])]),a("p",{staticClass:"key location"},[t._v(' "address"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "xxxxxxx"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key location"},[t._v(' "postalCode"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value number"},[t._v(" 31200")]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key location"},[t._v(' "city"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "Toulouse"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key location"},[t._v(' "countryCode"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "FR"')]),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key location"},[t._v(' "region"'),a("span",{staticClass:"points"},[t._v(":")]),a("span",{staticClass:"value"},[t._v(' "Occitanie"')])]),a("p",{staticClass:"key blue"},[t._v("}"),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key"},[t._v(' "skills"'),a("span",{staticClass:"points"},[t._v(": ")]),a("span",{staticClass:"blue"},[t._v("[")])]),a("p",{staticClass:"key value location"},[t._v('"HTL5"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v('"CSS3"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v('"SASS"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v(' "JavaScript"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v(' "jQuery"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v(' "Vue.js"'),a("span",{staticClass:"coma"},[t._v(",")])]),a("p",{staticClass:"key value location"},[t._v('"C#"')]),a("p",{staticClass:"key"},[a("span",{staticClass:"blue"},[t._v("]")])]),a("p",{staticClass:"purple obj close"},[t._v("}")]),a("p",{staticClass:"gold"},[t._v("}")])])]),a("div",{staticClass:"two"},[a("div",[a("a",{staticClass:"btnme bt1",attrs:{href:"https://github.com/gabrisca",target:"blank"}},[a("i",[t._v("E")]),a("i",[t._v("v")]),a("i",[t._v("e")]),a("i",[t._v("n")]),t._v(" "),a("i",[t._v("M")]),a("i",[t._v("o")]),a("i",[t._v("r")]),a("i",[t._v("e")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"interest ione",attrs:{id:"writer"}},[a("div",{staticClass:"one"},[a("div",[a("a",{staticClass:"btnme bt1",attrs:{href:"https://www.amazon.it/rimozione-memoria-storica-italiana-mondiale/dp/886864343X",target:"blank"}},[a("i",[t._v("R")]),a("i",[t._v("e")]),a("i",[t._v("a")]),a("i",[t._v("d")]),t._v(" "),a("i",[t._v("M")]),a("i",[t._v("y")]),t._v(" "),a("i",[t._v("b")]),a("i",[t._v("o")]),a("i",[t._v("o")]),a("i",[t._v("k")])])])]),a("div",{staticClass:"two"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"interest ione",attrs:{id:"history"}},[a("div",{staticClass:"one"}),a("div",{staticClass:"two"},[a("div",[a("a",{staticClass:"btnme bt1",attrs:{href:"https://gabrielescarparo.wordpress.com/",target:"blank"}},[a("i",[t._v("v")]),a("i",[t._v("i")]),a("i",[t._v("s")]),a("i",[t._v("i")]),a("i",[t._v("t")]),t._v(" "),a("i",[t._v("M")]),a("i",[t._v("y")]),t._v(" "),a("i",[t._v("b")]),a("i",[t._v("l")]),a("i",[t._v("o")]),a("i",[t._v("g")])])])])])}],J=s.p+"img/gabriele.5c6c84e1.jpg",V={name:"InterestsComp",data(){return{gabriele:J}},methods:{scrollMeTo(t){var a=this.$refs[t],s=a.offsetTop;window.scrollTo(0,s)}}},q=V,R=(0,u.Z)(q,W,z,!1,null,"9bd0b434",null),X=R.exports,K={name:"HomeView",data(){return{}},components:{Jumbotron2:B,Interests:X}},Q=K,U=(0,u.Z)(Q,Z,L,!1,null,"8df722e2",null),tt=U.exports;e.ZP.use(A.ZP);const at=[{path:"/",name:"home",component:tt},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,6941))},{path:"/projects",name:"projects",component:()=>s.e(443).then(s.bind(s,2130))},{path:"/projects/boolflix",name:"boolflix",component:()=>s.e(443).then(s.bind(s,6471))},{path:"/projects/weatherdb",name:"weatherdb",component:()=>s.e(443).then(s.bind(s,1150))},{path:"/payment",name:"payment",component:()=>s.e(443).then(s.bind(s,1470))},{path:"/:pathMatch(.*)*",name:"error404",component:()=>s.e(265).then(s.bind(s,265))}],st=new A.ZP({mode:"hash",base:"/",routes:at,scrollBehavior(){scroll(0,0),document.getElementById("app").scrollIntoView({behavior:"smooth"})}});var et=st,it=s(3151),rt=s(3039);//!Dipendenze installate
s(5765);e.ZP.config.productionTip=!1,e.ZP.use(it.XG7),e.ZP.use(rt.A7),new e.ZP({router:et,render:t=>t(O)}).$mount("#app")},1823:function(t,a,s){t.exports=s.p+"img/logo2.50aea8ef.png"},5157:function(t,a,s){t.exports=s.p+"img/logow.5b1ed103.jpg"}},a={};function s(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(a,e,i,r){if(!e){var n=1/0;for(u=0;u<t.length;u++){e=t[u][0],i=t[u][1],r=t[u][2];for(var o=!0,l=0;l<e.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,i,r]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(a,e){return s.f[e](t,a),a}),[]))}}(),function(){s.u=function(t){return"js/"+(443===t?"about":t)+"."+{265:"4e8f98b5",443:"27f5fb57"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+(443===t?"about":t)+"."+{265:"0c568f86",443:"c2d535e9"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={},a="gabrisca:";s.l=function(e,i,r,n){if(t[e])t[e].push(i);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var v=c[u];if(v.getAttribute("src")==e||v.getAttribute("data-webpack")==a+r){o=v;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",a+r),o.src=e),t[e]=[i];var p=function(a,s){o.onerror=o.onload=null,clearTimeout(d);var i=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),a)return a(s)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t=function(t,a,s,e){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)s();else{var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||a,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=o,i.parentNode.removeChild(i),e(l)}};return i.onerror=i.onload=r,i.href=a,document.head.appendChild(i),i},a=function(t,a){for(var s=document.getElementsByTagName("link"),e=0;e<s.length;e++){var i=s[e],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===a))return i}var n=document.getElementsByTagName("style");for(e=0;e<n.length;e++){i=n[e],r=i.getAttribute("data-href");if(r===t||r===a)return i}},e=function(e){return new Promise((function(i,r){var n=s.miniCssF(e),o=s.p+n;if(a(n,o))return i();t(e,o,i,r)}))},i={143:0};s.f.miniCss=function(t,a){var s={265:1,443:1};i[t]?a.push(i[t]):0!==i[t]&&s[t]&&a.push(i[t]=e(t).then((function(){i[t]=0}),(function(a){throw delete i[t],a})))}}(),function(){var t={143:0};s.f.j=function(a,e){var i=s.o(t,a)?t[a]:void 0;if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(s,e){i=t[a]=[s,e]}));e.push(i[2]=r);var n=s.p+s.u(a),o=new Error,l=function(e){if(s.o(t,a)&&(i=t[a],0!==i&&(t[a]=void 0),i)){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+a+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,i[1](o)}};s.l(n,l,"chunk-"+a,a)}},s.O.j=function(a){return 0===t[a]};var a=function(a,e){var i,r,n=e[0],o=e[1],l=e[2],c=0;if(n.some((function(a){return 0!==t[a]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var u=l(s)}for(a&&a(e);c<n.length;c++)r=n[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},e=self["webpackChunkgabrisca"]=self["webpackChunkgabrisca"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(6869)}));e=s.O(e)})();
//# sourceMappingURL=app.65e68466.js.map