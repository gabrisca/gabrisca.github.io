(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-790e41ef"],{5943:function(t,s,e){"use strict";e("c9d9")},"7db0":function(t,s,e){"use strict";var i=e("23e7"),a=e("b727").find,r=e("44d2"),n="find",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)},"9f52":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"details"},[e("div",{staticClass:"container"},[t.articles||t.chapters||t.conferences?t._e():e("div",{staticClass:"welcome"},[t._m(0),e("div",{staticClass:"search"},[e("div",{staticClass:"btn"},[e("router-link",{staticClass:"btn_n",attrs:{active:1==t.active,to:"/Outcomes/"},on:{click:function(s){t.active=-1}}},[e("i",{staticClass:"fa-solid fa-angle-left"}),t._v(" outcomes")])],1)])]),t.articles?e("div",{staticClass:"ctg"},[e("div",{staticClass:"control"},[e("router-link",{staticClass:"btn_n",attrs:{active:1==t.active,to:"/Outcomes/"},on:{click:function(s){t.active=-1}}},[e("i",{staticClass:"fa-solid fa-angle-left"}),t._v(" outcomes")]),e("div",[e("button",{staticClass:"btn_b back",on:{click:function(s){return t.goBack()}}},[t._v("back")]),e("button",{staticClass:"btn_b next",on:{click:function(s){return t.goNext()}}},[t._v("next")])])],1),e("div",{staticClass:"title"},[e("div",{staticClass:"tile"},[e("h3",[t._v(t._s(this.res.journal)+" - "+t._s(this.res.year))]),e("h1",[t._v(" "+t._s(this.res.title)+" ")]),e("h2",[t._v(" "+t._s(this.res.subtitle)+" ")])])]),e("div",{staticClass:"event"},[e("div",{staticClass:"tile f_one"},[e("h3",[t._v("Authors")]),t._l(this.res.authors,(function(s){return e("ul",{key:s.name},[e("li",[t._v(" "+t._s(s.name)+" ")])])}))],2),e("div",{staticClass:"tile f_two"},[e("h3",[t._v("Abstract")]),e("p",[t._v(" "+t._s(this.res.abstract)+" ")]),e("div",{staticClass:"btn"},[e("a",{staticClass:"btn_d",attrs:{href:this.res.link,target:"blank"}},[t._v("doi "),e("i",{staticClass:"fa-solid fa-angle-right"})])])])]),e("div",{staticClass:"tile id"},[e("h3",[t._v("Keywords")]),t._l(this.res.keywords,(function(s){return e("div",{key:s.tag},[e("span",[t._v(t._s(s.tag)+" ")])])}))],2)]):t._e(),t.chapters?e("div",{staticClass:"ctg"},[e("div",{staticClass:"control"},[e("router-link",{staticClass:"btn_n",attrs:{active:1==t.active,to:"/Outcomes/"},on:{click:function(s){t.active=-1}}},[e("i",{staticClass:"fa-solid fa-angle-left"}),t._v(" outcomes")]),e("div",[e("button",{staticClass:"btn_b back",on:{click:function(s){return t.goBack()}}},[t._v("back")]),e("button",{staticClass:"btn_b next",on:{click:function(s){return t.goNext()}}},[t._v("next")])])],1),e("div",{staticClass:"title"},[e("div",{staticClass:"tile"},[e("h3",[t._v(t._s(this.res.journal)+" - "+t._s(this.res.year))]),e("h1",[t._v(" "+t._s(this.res.title)+" ")]),e("h2",[t._v(" "+t._s(this.res.subtitle)+" ")])])]),e("div",{staticClass:"event"},[e("div",{staticClass:"tile f_one"},[e("h3",[t._v("Authors")]),t._l(this.res.authors,(function(s){return e("ul",{key:s.name},[e("li",[t._v(" "+t._s(s.name)+" ")])])}))],2),e("div",{staticClass:"tile f_two"},[e("h3",[t._v("Abstract")]),e("p",[t._v(" "+t._s(this.res.abstract)+" ")]),e("div",{staticClass:"btn"},[e("a",{staticClass:"btn_d",attrs:{href:this.res.link,target:"blank"}},[t._v("doi "),e("i",{staticClass:"fa-solid fa-angle-right"})])])])]),e("div",{staticClass:"tile id"},[e("h3",[t._v("Keywords")]),t._l(this.res.keywords,(function(s){return e("div",{key:s.tag},[e("span",[t._v(t._s(s.tag)+" ")])])}))],2)]):t._e(),t.conferences?e("div",{staticClass:"ctg"},[e("div",{staticClass:"control"},[e("router-link",{staticClass:"btn_n",attrs:{active:1==t.active,to:"/Outcomes/"},on:{click:function(s){t.active=-1}}},[e("i",{staticClass:"fa-solid fa-angle-left"}),t._v(" outcomes")]),e("div",[e("button",{staticClass:"btn_b back",on:{click:function(s){return t.goBack()}}},[t._v("back")]),e("button",{staticClass:"btn_b next",on:{click:function(s){return t.goNext()}}},[t._v("next")])])],1),e("div",{staticClass:"title"},[e("div",{staticClass:"tile"},[e("h3",[t._v(t._s(this.res.conf)+" - "+t._s(this.res.year))]),e("h1",[t._v(" "+t._s(this.res.title)+" ")]),e("h2",[t._v(" "+t._s(this.res.subtitle)+" ")])])]),e("div",{staticClass:"event"},[e("div",{staticClass:"tile f_one"},[e("h3",[t._v("City")]),e("p",[t._v(t._s(this.res.city)+" - "+t._s(this.res.nation))])]),e("div",{staticClass:"tile f_two"},[e("h3",[t._v("Abstract")]),e("p",[t._v(" "+t._s(this.res.abstract)+" ")]),e("div",{staticClass:"btn"},[e("a",{staticClass:"btn_d",attrs:{href:this.res.link,target:"blank"}},[t._v("doi "),e("i",{staticClass:"fa-solid fa-angle-right"})])])])]),e("div",{staticClass:"tile id"},[e("h3",[t._v("Keywords")]),t._l(this.res.keywords,(function(s){return e("div",{key:s.tag},[e("span",[t._v(t._s(s.tag)+" ")])])}))],2)]):t._e()])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"professor"},[e("h1",[t._v("Camilla Barbarossa")]),e("span",[t._v("PhD professor")])])}],r=(e("7db0"),e("dda0")),n={name:"Details",components:{},data:function(){return{id:this.$route.params.id,category:this.$route.params.category+"s",results:r,res:[],articles:!1,chapters:!1,conferences:!1,active:0}},mounted:function(){var t=this;"articles"==this.category?(this.articles=!0,setTimeout((function(){t.res=t.results.articles,console.log(t.res),t.res=t.res.find((function(s){return s.id===t.id})),console.log(t.res)}),10)):"chapters"==this.category?(this.chapters=!0,setTimeout((function(){t.res=t.results.chapters,console.log(t.res),t.res=t.res.find((function(s){return s.id===t.id})),console.log(t.res)}),10)):"conferences"==this.category&&(this.conferences=!0,setTimeout((function(){t.res=t.results.conferences,console.log(t.res),t.res=t.res.find((function(s){return s.id===t.id})),console.log(t.res)}),10))},methods:{goNext:function(){var t=this;"articles"==this.category?setTimeout((function(){t.id++,t.res=t.results.articles,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=0,t.goNext())}),10):"chapters"==this.category?setTimeout((function(){t.id++,t.res=t.results.chapters,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=0,t.goNext())}),10):"conferences"==this.category&&setTimeout((function(){t.id++,t.res=t.results.conferences,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=0,t.goNext())}),10)},goBack:function(){var t=this;"articles"==this.category?setTimeout((function(){t.id--,t.res=t.results.articles,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),0!=t.id&&t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=t.arraylength+1,t.goBack())}),10):"chapters"==this.category?setTimeout((function(){t.id--,t.res=t.results.chapters,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),0!=t.id&&t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=t.arraylength+1,t.goBack())}),10):"conferences"==this.category&&setTimeout((function(){t.id--,t.res=t.results.conferences,t.arraylength=t.res.length,t.res=t.res.find((function(s){return s.id===t.id})),0!=t.id&&t.id<=t.arraylength?(console.log(t.id),t.$router.push({name:"Details",params:{id:t.id,category:t.category}})):(t.id=t.arraylength+1,t.goBack())}),10)}}},c=n,o=(e("5943"),e("2877")),l=Object(o["a"])(c,i,a,!1,null,null,null);s["default"]=l.exports},c9d9:function(t,s,e){}}]);
//# sourceMappingURL=chunk-790e41ef.2e37195e.js.map