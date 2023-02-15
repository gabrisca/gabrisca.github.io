"use strict";(self["webpackChunkgabrisca"]=self["webpackChunkgabrisca"]||[]).push([[497],{497:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"todo"}},[e.welcome?t("div",{staticClass:"welcome"},[e._m(0),t("hr"),t("div",{staticClass:"d-flex flex-column align-bottom"},[t("div",{staticClass:"welcome-input"},[t("b-form-input",{staticClass:"mt-4",attrs:{id:"input-live",placeholder:"Please enter your name",state:e.nameState,"aria-describedby":"input-live-help input-live-feedback",trim:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterPage.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" Enter at least 3 letters ")])],1),t("div",{staticClass:"d-flex justify-content-end mt-2"},[t("b-button",{attrs:{variant:"success"},on:{click:e.enterPage}},[e._v("OK")])],1)])]):e._e(),e.welcome?e._e():t("div",{staticClass:"container"},[t("header",[t("h1",[e._v(e._s(e.name)+"'s TodoList")])]),t("div",{staticClass:"filters"},[t("span",{class:{selected:"all"===e.filter},on:{click:function(t){t.preventDefault(),e.filter="all"}}},[t("a",{attrs:{href:""}},[e._v("All ("+e._s(e.all)+")")])]),t("span",{class:{selected:"todo"===e.filter},on:{click:function(t){t.preventDefault(),e.filter="todo"}}},[t("a",{attrs:{href:""}},[e._v("To complete ("+e._s(e.remaining)+")")])]),t("span",{class:{selected:"done"===e.filter},on:{click:function(t){t.preventDefault(),e.filter="done"}}},[t("a",{attrs:{href:""}},[e._v("Completed ("+e._s(e.completed)+")")])])]),t("form",{on:{submit:function(e){e.preventDefault()}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newTask,expression:"newTask"}],attrs:{type:"text",id:"item",placeholder:"...",minlength:"2",autocomplete:"off"},domProps:{value:e.newTask},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask.apply(null,arguments)},input:function(t){t.target.composing||(e.newTask=t.target.value)}}})]),e.todos.length>0?t("ul",{attrs:{id:"list"}},e._l(e.filteredTodos,(function(s){return t("li",{key:s,staticClass:"todo",class:{checked:s.checked},on:{click:function(t){return e.taskCompleted(s)}}},[e._v(" "+e._s(s.name)+" "),t("span",{staticClass:"trash"},[s.checked?t("i",{staticClass:"fa-solid fa-trash"}):e._e()]),t("span",{staticClass:"marked"},[s.checked?e._e():t("i",{staticClass:"fa-solid fa-check"})])])})),0):e._e(),t("footer")])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-content-evenly"},[t("h3",[e._v("TodoList App")]),t("img",{attrs:{src:s(3410),alt:"todolist app"}})])}],i={name:"TodolistView",components:{},data(){return{welcome:!0,name:"",todos:[],newTask:"",filter:"all"}},mounted(){},methods:{enterPage(){this.name.length>2&&(this.welcome=!this.welcome)},addTask(){""!=this.newTask&&this.todos.push({name:this.newTask,checked:!1}),this.newTask=""},taskCompleted(e){if(1==e.checked){var t=this.todos.indexOf(e);this.todos.splice(t,1)}else e.checked=!e.checked}},computed:{nameState(){return this.name.length>2},all(){return this.todos.length},remaining(){return this.todos.filter((e=>!e.checked)).length},completed(){return this.todos.filter((e=>e.checked)).length},filteredTodos(){return"todo"===this.filter?this.todos.filter((e=>!e.checked)):"done"===this.filter?this.todos.filter((e=>e.checked)):this.todos}}},l=i,o=s(1001),c=(0,o.Z)(l,a,n,!1,null,"18f70ece",null),r=c.exports},3410:function(e,t,s){e.exports=s.p+"img/todolist-app.364b7fbd.png"}}]);
//# sourceMappingURL=497.633bc3b2.js.map