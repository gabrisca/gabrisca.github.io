"use strict";(self["webpackChunkgabrisca"]=self["webpackChunkgabrisca"]||[]).push([[184],{9184:function(t,s,i){i.r(s),i.d(s,{default:function(){return y}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"weather_app"},[s("SearchView",{attrs:{setDefault:t.setDefault},on:{searchQuery:t.searching}}),1==this.noResults||"invalid query"==this.results.message?s("div",{staticClass:"d-flex justify-content-center align-items-center not_found text-center"},[s("h2",[t._v("No Results Found")])]):t._e(),1==this.errors?s("div",{staticClass:"d-flex justify-content-center align-items-center not_found text-center flex-column"},[s("h2",[t._v("Sever offline.")]),s("br"),t._m(0)]):t._e(),t.welcome?s("div",{staticClass:"text-center mt-3 mb-3 welcome"}):t._e(),t.loading?s("div",{staticClass:"d-flex justify-content-center align-items-center loading"},[s("swapping-squares-spinner",{attrs:{"animation-duration":1e3,size:65,color:"#e88244"}})],1):t._e(),1==this.found&&"invalid query"!=this.results.message?s("div",{staticClass:"weatherdb"},[s("div",{staticClass:"item"},[s("div",{staticClass:"content"},[s("div",{staticClass:"day"},[s("span",{staticClass:"region"},[t._v("Now in "+t._s(t.results.region))])]),s("div",{staticClass:"main"},[s("div",{staticClass:"w_img"},[s("div",{staticClass:"icon"},[t.today.iconURL?s("img",{staticClass:"img-fluid",attrs:{src:t.today.iconURL,alt:t.today.comment}}):s("img",{staticClass:"img-fluid",attrs:{src:i(541)}})]),s("div",{staticClass:"degree"},[s("p",[t._v(t._s(t.todayTemp.c)),s("span",[t._v("°C")])]),s("p",[t._v(t._s(t.todayTemp.f)),s("span",[t._v("°F")])])])]),s("div",{staticClass:"info"},[s("div",{staticClass:"comment"},[s("span",[t._v(t._s(t.today.comment))])]),s("div",{staticClass:"stats"},[s("div",{staticClass:"stat wind"},[t._m(1),s("span",[t._v(t._s(t.todayWinds.km)+" km/h")])]),s("div",{staticClass:"stat humidity"},[t._m(2),s("span",[t._v(t._s(t.today.humidity))])]),s("div",{staticClass:"stat rain"},[t._m(3),s("span",[t._v(t._s(t.today.precip))])]),s("div",{staticClass:"stat dayhour"},[t._m(4),s("span",[t._v(t._s(t.today.dayhour))])])])])])])]),t._l(t.nextDays,(function(e){return s("div",{key:e.id,staticClass:"item next"},[s("div",{staticClass:"next_content"},[s("div",{staticClass:"next_img"},[s("span",{staticClass:"day_day"},[t._v(t._s(e.day))]),e.iconURL?s("img",{staticClass:"img-fluid",attrs:{src:e.iconURL,alt:e.comment}}):s("img",{staticClass:"img-fluid",attrs:{src:i(541)}})]),s("div",{staticClass:"next_comment"},[s("span",[t._v(t._s(e.comment))])]),s("div",{staticClass:"next_temp"},[s("div",{staticClass:"max"},[t._m(5,!0),t._l(e.max_temp,(function(i,e){return s("div",{key:e.id,staticClass:"degree"},[s("p",[t._v(t._s(i)+" "+t._s(e)+"°")])])}))],2),s("div",{staticClass:"min"},[t._m(6,!0),t._l(e.min_temp,(function(i,e){return s("div",{key:e.id,staticClass:"degree"},[s("p",[t._v(t._s(i)+"° "+t._s(e))])])}))],2)])])])}))],2):t._e()],1)},a=[function(){var t=this,s=t._self._c;return s("p",[t._v("We apologize for the inconvenience, but we are experiencing technical difficulties. We are working hard to try and resolve the issue as soon as possible."),s("br"),t._v("Thank you for your understanding.")])},function(){var t=this,s=t._self._c;return s("span",[s("i",{staticClass:"fa-solid fa-wind"}),t._v(" Wind:")])},function(){var t=this,s=t._self._c;return s("span",[s("i",{staticClass:"fa-solid fa-droplet"}),t._v(" Humidity:")])},function(){var t=this,s=t._self._c;return s("span",[s("i",{staticClass:"fa-solid fa-umbrella"}),t._v(" Rain:")])},function(){var t=this,s=t._self._c;return s("span",[s("i",{staticClass:"fa-regular fa-clock"}),t._v(" Last Update:")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"icon"},[s("i",{staticClass:"fa-solid fa-arrow-trend-up"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"icon"},[s("i",{staticClass:"fa-solid fa-arrow-trend-down"})])}],n=i(6265),r=i.n(n),o=function(){var t=this,s=t._self._c;return s("header",{staticClass:"d-flex align-items-center ps-5 pe-5"},[s("div",{staticClass:"logo"},[s("button",{staticClass:"bool_btn",on:{click:function(s){return s.preventDefault(),t.resetAll()}}})]),s("div",[s("form",{staticClass:"d-flex mt-3 mb-3"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.apiQuery,expression:"apiQuery",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search City or Zip Code"},domProps:{value:t.apiQuery},on:{input:function(s){s.target.composing||(t.apiQuery=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),s("div",{staticClass:"ms-3"},[s("button",{staticClass:"btn btn-primary mc_btn",on:{click:function(s){return s.preventDefault(),t.sendQuery()}}},[t._v(" Search ")])])])])])},l=[],c={name:"SearchComp",data(){return{apiQuery:""}},props:{setDefault:Function},methods:{sendQuery(){this.$emit("searchQuery",this.apiQuery),console.log(this.apiQuery),this.apiQuery=""},resetAll(){this.apiQuery="",this.setDefault()}}},d=c,u=i(1001),m=(0,u.Z)(d,o,l,!1,null,"fa0bf444",null),h=m.exports,f=i(8836),p={name:"WeatherView",components:{SearchView:h,SwappingSquaresSpinner:f.v0},data(){return{apiQuery:"",apiWeatherURL:"https://weatherdbi.herokuapp.com/data/weather/",results:{},today:{},todayWinds:{},todayTemp:{},nextDays:[],nextDaysMax:{},welcome:!0,noResults:!1,errors:!1,found:!1,loading:!1}},mounted(){window.scrollTo(0,0)},methods:{searching(t){""!=t&&(this.noResults=!1,this.errors=!1,this.loading=!0,this.apiQuery=t,this.welcome=!1,this.found=!1,r().get(this.apiWeatherURL+this.apiQuery).then((t=>{this.results=t.data,this.today=this.results.currentConditions,this.todayWinds=this.today.wind,this.todayTemp=this.today.temp,this.nextDays=this.results.next_days.filter(((t,s)=>0!=s)),this.loading=!1,0===this.results.length?this.noResults=!0:this.found=!0})).catch((t=>{this.loading=!1,this.errors=!0,console.log(t)})))},reset(){this.errors=!1,this.loading=!1,this.found=!1,this.welcome=!0,this.results=[]},setDefault(){this.reset()},substringText(t,s,i){return t.substring(s,i)}}},_=p,v=(0,u.Z)(_,e,a,!1,null,"f9f131d8",null),y=v.exports},541:function(t,s,i){t.exports=i.p+"img/Weather_db.9a81c877.png"}}]);
//# sourceMappingURL=184.682c60e0.js.map