(function(t){function e(e){for(var s,c,r=e[0],l=e[1],o=e[2],p=0,d=[];p<r.length;p++)c=r[p],a[c]&&d.push(a[c][0]),a[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},i=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"024e":function(t,e,n){"use strict";var s=n("0633"),a=n.n(s);a.a},"034f":function(t,e,n){"use strict";var s=n("9e74"),a=n.n(s);a.a},"037b":function(t,e,n){"use strict";var s=n("5b98"),a=n.n(s);a.a},"0633":function(t,e,n){},"0835":function(t,e,n){"use strict";var s=n("8014"),a=n.n(s);a.a},2518:function(t,e,n){"use strict";var s=n("9fe3"),a=n.n(s);a.a},"25b7":function(t,e,n){},"38d6":function(t,e,n){t.exports=n.p+"static/img/home-carousel-1.70735838.png"},"3ce0":function(t,e,n){t.exports=n.p+"static/img/home-detail-2.541c6dfc.jpg"},"3e6f":function(t,e,n){t.exports=n.p+"static/img/home-carousel-4.4d24e122.jpg"},"53a7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var s=n("6e6d"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={data:function(){return{}},created:function(){var t=this;localStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem("store")))),window.addEventListener("beforeunload",function(){localStorage.setItem("store",JSON.stringify(t.$store.state))})}},r=c,l=(n("034f"),n("17cc")),o=Object(l["a"])(r,a,i,!1,null,null,null),u=o.exports,p=n("1e6f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header-container"},[s("div",{staticClass:"header-nav"},[s("div",{staticClass:"header-title",on:{click:t.homeClick}},[t._v("挣闲钱")]),s("div",{staticClass:"header-nav-cell",on:{click:t.qnClick}},[t._v("问卷系统")]),s("div",{staticClass:"header-nav-cell",on:{click:t.taskClick}},[t._v("小任务系统")]),s("div",{staticClass:"header-nav-cell"},[t._v("社区系统")])]),s("div",{staticClass:"header-account"},[null==t.userInfo?s("div",[s("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.jumpToSignin}},[t._v("登录")]),s("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.signoutClick}},[t._v("登出")])],1):s("div",{staticClass:"header-account-avatar"},[s("a-dropdown",{attrs:{trigger:["click"]}},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("img",{staticClass:"header-account-avatar-img",attrs:{src:n("915e")}})]),s("a-menu",{staticClass:"header-account-menu",attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",{key:"0"},[t._v("账户详情")]),s("a-menu-divider"),s("a-menu-item",{key:"3",on:{click:t.signoutClick}},[t._v("退出登录")])],1)],1),s("span",{staticClass:"header-account-username"},[t._v(t._s(t.userInfo))])],1)])]),s("div",{staticClass:"container-guide-display"},[s("router-view")],1)])},m=[],v=n("e20c"),h=n("2427"),f=n.n(h),g=n("591a"),C={data:function(){return{}},computed:Object(v["a"])({},Object(g["c"])(["userInfo"])),methods:Object(v["a"])({},Object(g["b"])(["setUserInfo"]),{homeClick:function(){this.$router.push({path:"/guide"})},jumpToSignin:function(){this.$router.push({path:"/signin"})},signoutClick:function(){var t=this;f.a.post("/users/signout/",{username:this.userInfo}).then(function(e){var n=e.data;if(console.log(n),1===n.code)return t.$message.warning(n.message),void t.$router.push({path:"/signin"});2===n.code&&(t.setUserInfo(null),t.$router.push({path:"/signin"}))}).catch(function(e){return t.$message.error(e)})},qnClick:function(){this.$router.push({path:"/guide/qnHome"})},taskClick:function(){this.$router.push({path:"/guide/taskHome"})}})},_=C,b=(n("9fa6"),Object(l["a"])(_,d,m,!1,null,"797a3538",null)),q=b.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-carousel",{attrs:{autoplay:""}},[s("div",{staticClass:"carousel-container"},[s("img",{staticClass:"carousel-img",attrs:{src:n("38d6")}}),s("div",{staticClass:"carousel-text"},[t._v("自定义问卷")]),s("a-button",{staticClass:"carousel-button",attrs:{type:"primary"},on:{click:t.qnClick}},[t._v("问卷调查")])],1),s("div",{staticClass:"carousel-container"},[s("img",{staticClass:"carousel-img",attrs:{src:n("7e0e")}}),s("span",{staticClass:"carousel-text"},[t._v("随时发布和获取任务")]),s("a-button",{staticClass:"carousel-button",attrs:{type:"primary"},on:{click:t.taskClick}},[t._v("小任务系统")])],1),s("div",{staticClass:"carousel-container"},[s("img",{staticClass:"carousel-img",attrs:{src:n("cfa4")}}),s("span",{staticClass:"carousel-text"},[t._v("社区系统")])]),s("div",{staticClass:"carousel-container"},[s("img",{staticClass:"carousel-img",attrs:{src:n("3e6f")}}),s("span",{staticClass:"carousel-text"},[t._v("不只是问卷调查")])])]),t._m(0),s("div",{staticClass:"detail-container"},[s("div",{staticClass:"detail-content-container"},[s("img",{staticClass:"detail-img",attrs:{src:n("70fdd")}}),s("div",{staticClass:"empty-block"}),s("div",{staticClass:"detail-content"},[s("h1",[t._v("在线编辑，操作简单")]),s("h3",[t._v("• 提供问卷的在线编辑系统")]),s("h3",[t._v("• 可以保存编辑的问卷，待需要时发布")]),s("h3",[t._v("• 在线修改问卷")]),s("h3",[t._v("• 实时悬赏")]),s("a-button",{staticClass:"detail-button",attrs:{type:"primary"},on:{click:t.qnClick}},[t._v("点击进入问卷系统")])],1)])]),s("a-divider",{staticClass:"detail-divider"}),s("div",{staticClass:"detail-container"},[s("div",{staticClass:"detail-content-container"},[s("div",{staticClass:"detail-content"},[s("h1",[t._v("任务系统，互帮互助")]),s("h3",[t._v("• 在线发表任务需求")]),s("h3",[t._v("• 发布方和接收方对接容易")]),s("h3",[t._v("• 界面简单明了，易于查看")]),s("a-button",{staticClass:"detail-button",attrs:{type:"primary"},on:{click:t.taskClick}},[t._v("点击进入小任务系统")])],1),s("div",{staticClass:"empty-block"}),s("img",{staticClass:"detail-img",attrs:{src:n("3ce0")}})])])],1)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-container"},[n("div",{staticClass:"description-title"},[t._v("他们正在使用")]),n("div",{staticClass:"description-text"},[t._v("这是一个为大学生设计的平台，不仅仅可以在上面发表问卷")]),n("div",{staticClass:"description-text"},[t._v("你还可以进行完成任务以及进行闲置物品交易")])])}],w={data:function(){return{}},methods:{qnClick:function(){this.$router.push({path:"/guide/qnHome"})},taskClick:function(){this.$router.push({path:"/guide/taskHome"})}}},$=w,x=(n("6f9e"),Object(l["a"])($,k,y,!1,null,"121ef6e0",null)),Q=x.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-card"},[n("div",{staticClass:"text-header"},[t._v("欢迎来到挣闲钱")]),n("a-divider"),n("div",{staticClass:"container-input"},[n("span",[t._v("账号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),n("div",{staticClass:"container-input"},[n("span",[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.signupClick}},[t._v("注册")]),n("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.signinClick}},[t._v("登录")])],1)},j=[],O={data:function(){return{account:null,password:null}},methods:Object(v["a"])({},Object(g["b"])(["setUserInfo"]),{signupClick:function(){this.$router.push({path:"/signup"})},signinClick:function(){var t=this;this.isNULL(this.account)?this.$message.warning("请输入账号"):this.isValidId(this.account)?this.isNULL(this.password)?this.$message.warning("请输入密码"):this.isValidId(this.password)?f.a.post("/users/signin/",{username:this.account,password:this.password}).then(function(e){var n=e.data;0!==n.code&&1!==n.code&&3!==n.code?2===n.code&&(t.setUserInfo(t.account),t.$message.success("登录成功！"),t.$router.push({path:"/guide"})):t.$message.warning(n.message)}).catch(function(e){return t.$message.error(e)}):this.$message.warning("密码格式不正确，请输入6-20个字符"):this.$message.warning("账号格式不正确，请输入6-20个字符")},isNULL:function(t){return null==t||0===t.length},isValidId:function(t){return t.length>=6&&t.length<=20}})},I=O,S=(n("037b"),Object(l["a"])(I,L,j,!1,null,"3b362848",null)),E=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-card"},[n("form",[n("div",{staticClass:"text-header"},[t._v("注册")]),n("a-divider"),n("div",{staticClass:"container-input"},[n("span",[t._v("账号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),n("div",{staticClass:"container-input"},[n("span",[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"container-input"},[n("span",[t._v("确认密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rpassword,expression:"rpassword"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.rpassword},on:{input:function(e){e.target.composing||(t.rpassword=e.target.value)}}})]),n("div",{staticClass:"container-input"},[n("span",[t._v("邮箱：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.signupClick}},[t._v("注册")]),n("a-button",{staticClass:"button-sign",attrs:{type:"primary"},on:{click:t.signinClick}},[t._v("登录")])],1)])},T=[],U={data:function(){return{account:null,password:null,rpassword:null,email:null}},methods:{signinClick:function(){this.$router.push({path:"/signin"})},signupClick:function(){var t=this;this.isNULL(this.account)?this.$message.warning("请填写账号"):this.isValidId(this.account)?this.isNULL(this.password)?this.$message.warning("请填写密码"):this.isValidId(this.password)?this.isNULL(this.rpassword)?this.$message.warning("请重复密码"):this.password===this.rpassword?this.isNULL(this.email)?this.$message.warning("请填写邮箱"):this.isValidEmail(this.email)?f.a.post("/users/register/",{username:this.account,password:this.password,email:this.email}).then(function(e){var n=e.data;1!==n.code?2===n.code&&(t.$message.success("注册成功！"),t.$router.push({path:"/signin"})):t.$message.warning(n.message)}).catch(function(e){return t.$message.error(e)}):this.$message.warning("邮箱格式不正确，请输入小于20个字符"):this.$message.warning("两次输入的密码不一致"):this.$message.warning("密码格式不正确，请输入6-20个字符"):this.$message.warning("账号格式不正确，请输入6-20个字符")},isNULL:function(t){return null==t||0===t.length},isValidId:function(t){return t.length>=6&&t.length<=20},isValidEmail:function(t){return t.length>0&&t.length<=20}}},P=U,V=(n("cbf3"),Object(l["a"])(P,N,T,!1,null,"51dee5a4",null)),H=V.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"banner-cell banner-new-qn",on:{click:t.newQnClick}},[n("a-icon",{staticClass:"banner-icon",attrs:{type:"plus-square"}}),t._v("\r\n      创建空白问卷\r\n    ")],1),n("div",{staticClass:"banner-cell banner-new-qn1",on:{click:t.fillQnClick}},[n("a-icon",{staticClass:"banner-icon",attrs:{type:"diff"}}),t._v("\r\n      填写问卷\r\n    ")],1),n("div",{staticClass:"banner-cell banner-new-qn2",on:{click:t.editQnClick}},[n("a-icon",{staticClass:"banner-icon",attrs:{type:"edit"}}),t._v("\r\n      编辑问卷\r\n    ")],1)]),t._m(0)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-container"},[n("div",{staticClass:"bottom-title"},[t._v("随时挣闲钱")]),n("hr",{staticClass:"bottom-divider"}),n("div",{staticClass:"bottom-text"},[t._v("填写问卷或发布你的问卷，完成调查的同时获得收益")])])}],z={data:function(){return{}},methods:{newQnClick:function(){this.$router.push({path:"/guide/newQn"})},fillQnClick:function(){this.$router.push({path:"/guide/allQnList"})},editQnClick:function(){this.$router.push({path:"/guide/myQnList"})}}},D=z,A=(n("a2a1"),Object(l["a"])(D,M,J,!1,null,"66a8e958",null)),B=A.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"qn-type-container"},[n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addSingle}},[n("a-icon",{attrs:{type:"plus"}}),t._v("单选题\r\n    ")],1),n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addMulti}},[n("a-icon",{attrs:{type:"plus"}}),t._v("多选题\r\n    ")],1),n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addText}},[n("a-icon",{attrs:{type:"plus"}}),t._v("填空题\r\n    ")],1)],1),n("div",{staticClass:"qn-container"},[n("div",{staticClass:"qn-cell"},[n("div",{staticClass:"qn-title"},[t._v("问卷标题: ")]),n("a-input",{staticClass:"qn-input",model:{value:t.qn.title,callback:function(e){t.$set(t.qn,"title",e)},expression:"qn.title"}})],1),t._l(t.qn.q,function(e,s){return n("div",{key:s,staticClass:"qn-cell"},["single"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 单选题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1),n("div",[n("p",{staticClass:"qn-name"},[t._v("选项数: ")]),n("a-input-number",{attrs:{min:1,max:5},model:{value:e.cnum,callback:function(n){t.$set(e,"cnum",n)},expression:"q.cnum"}})],1),t._l(e.cnum,function(s){return n("div",{key:s},[n("p",{staticClass:"qn-name"},[t._v("选项"+t._s(s)+": ")]),n("a-input",{staticClass:"qn-input",model:{value:e.choices[s-1],callback:function(n){t.$set(e.choices,s-1,n)},expression:"q.choices[j-1]"}})],1)})],2):"multi"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 多选题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1),n("div",[n("p",{staticClass:"qn-name"},[t._v("选项数: ")]),n("a-input-number",{attrs:{min:1,max:5},model:{value:e.cnum,callback:function(n){t.$set(e,"cnum",n)},expression:"q.cnum"}})],1),t._l(e.cnum,function(s){return n("div",{key:s},[n("p",{staticClass:"qn-name"},[t._v("选项"+t._s(s)+": ")]),n("a-input",{staticClass:"qn-input",model:{value:e.choices[s-1],callback:function(n){t.$set(e.choices,s-1,n)},expression:"q.choices[j-1]"}})],1)})],2):t._e(),"text"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 填空题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1)],1):t._e()])}),n("a-button",{staticClass:"new-qn-button",attrs:{type:"primary"},on:{click:t.newQn}},[t._v("创建问卷")])],2)])},G=[],K=(n("7364"),{data:function(){return{qn:{title:null,q:[]}}},methods:{addSingle:function(){this.qn.q.push({type:"single",name:"",cnum:1,choices:[]})},addMulti:function(){this.qn.q.push({type:"multi",name:"",cnum:1,choices:[]})},addText:function(){this.qn.q.push({type:"text",name:""})},removeQ:function(t){this.qn.q.splice(t,1)},newQn:function(){var t=this;if(this.isNULL(this.qn.title))this.$message.warning("请填写问卷标题!");else if(0!==this.qn.q.length){for(var e=0;e<this.qn.q.length;e++){var n=this.qn.q[e];if(this.isNULL(n.name))return void this.$message.warning("问题"+(e+1)+"的标题为空");if("text"!==n.type&&n.cnum!==n.choices.length)return void this.$message.warning("问题"+(e+1)+"的选项为空或选项数不匹配")}for(var s=[],a=[],i=0;i<this.qn.q.length;i++){var c=this.qn.q[i],r={};if("text"!==c.type){r={title:c.name,option_num:c.cnum,mytype:"single"===c.type?"单选":"多选",option:[]};for(var l=0;l<c.choices.length;l++)r.option.push({text:c.choices[l]});s.push(r)}else r={title:c.name},a.push(r)}f.a.post("/paper/create/",{title:this.qn.title,select_question_num:s.length,fill_question_num:a.length,Question_select:s,Question_fill:a}).then(function(e){var n=e.data;3===n.code&&(t.$message.success("创建问卷成功"),t.$router.push({path:"/guide/qnHome"}))}).catch(function(e){return t.$message.error(e)})}else this.$message.warning("请至少添加一个问题")},isNULL:function(t){return null==t||0===t.length}}}),R=K,W=(n("d626"),Object(l["a"])(R,F,G,!1,null,"7aba5fbc",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"list-container"},[n("a-list",{attrs:{itemLayout:"vertical",size:"large",dataSource:t.qnList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{},[n("a-card",{attrs:{hoverable:"",title:e.title},on:{click:function(n){return t.fillQnClick(e)}}},[n("span",{staticClass:"list-card-time"},[t._v("创建者: "+t._s(e.creater))]),n("span",{staticClass:"list-card-name"},[t._v("创建时间: "+t._s(t.tmpqninfo1))])])],1)}}])})],1)])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("span",{staticClass:"header-title"},[t._v("全部问卷")])])}],tt={data:function(){return{qnList:[],tmpqninfo1:"2019-05-25"}},created:function(){var t=this;f.a.post("/paper/query/",{username:this.userInfo}).then(function(e){var n=e.data;2===n.code&&(t.qnList=n.paper_list)}).catch(function(e){return t.$message.error(e)})},methods:{fillQnClick:function(t){this.$router.push({name:"fillQn",params:{qn:t}})}}},et=tt,nt=(n("ba6c"),Object(l["a"])(et,Y,Z,!1,null,"41fd9858",null)),st=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"qn-title-container"},[n("div",{staticClass:"qn-title-text"},[t._v(t._s(t.qn.title))]),n("div",{staticClass:"qn-title-hint"},[t._v(t._s(t.hint))])]),n("div",{staticClass:"qn-container"},[n("a-progress",{staticClass:"progress-container",attrs:{percent:t.progressPercent,showInfo:!0}}),t._l(t.qn.q,function(e,s){return n("div",{key:s,staticClass:"qn-cell"},["single"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". "+t._s(e.name))]),n("a-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"q.answer"}},t._l(e.cnum,function(s){return n("a-radio",{key:s,staticClass:"qn-choice",attrs:{value:e.choices[s-1].id}},[t._v(t._s(e.choices[s-1].text))])}),1)],1):"multi"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". "+t._s(e.name))]),n("a-checkbox-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"q.answer"}},t._l(e.cnum,function(s){return n("a-checkbox",{key:s,staticClass:"qn-choice",attrs:{value:e.choices[s-1].id}},[t._v(t._s(e.choices[s-1].text))])}),1)],1):t._e(),"text"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". "+t._s(e.name))]),n("a-input",{staticClass:"qn-input",model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"q.answer"}})],1):t._e()])}),n("a-button",{staticClass:"new-qn-button",attrs:{type:"primary"},on:{click:t.fillQn}},[t._v("提交")])],2)])},it=[],ct=(n("f301"),n("df99"),{data:function(){return{qn:{title:"最喜欢的乐队调查",id:null,q:[]},hint:"为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！"}},created:function(){var t,e=this.$route.params.qn;this.qn.title=e.title,this.qn.id=e.id;for(var n=0;n<e.Question_select.length;n++){t=e.Question_select[n];for(var s={type:"单选"===t.mytype?"single":"multi",name:t.title,id:t.id,cnum:t.option_num,choices:[],answer:null},a=0;a<t.option.length;a++)s.choices.push({text:t.option[a].text,id:t.option[a].id});this.qn.q.push(s)}for(var i=0;i<e.Question_fill.length;i++)t=e.Question_fill[i],this.qn.q.push({type:"text",name:t.title,id:t.id,answer:null})},methods:{fillQn:function(){var t=this;if(100===this.progressPercent){for(var e=[],n=[],s=0;s<this.qn.q.length;s++){var a=this.qn.q[s],i={};if("text"!==a.type){i={id:a.id,option:[]};for(var c=0;c<a.choices.length;c++){var r=a.choices[c],l={id:r.id,select:!1};"single"===a.type?a.answer===r.id&&(l.select=!0):a.answer.includes(r.id)&&(l.select=!0),i.option.push(l)}e.push(i)}else i={id:a.id,answer:a.answer},n.push(i)}f.a.post("/paper/fill/",{id:this.qn.id,Question_select:e,Question_fill:n}).then(function(e){var n=e.data;2===n.code&&t.$message.error(n.message),3===n.code&&(t.$message.success("填写问卷成功"),t.$router.push({path:"/guide/allQnList"}))}).catch(function(e){return t.$message.error(e)})}else this.$message.warning("请填写所有问题")}},computed:{progressPercent:function(){for(var t=this.qn.q.length,e=0,n=0;n<t;n++)null!=this.qn.q[n].answer&&""!==this.qn.q[n].answer&&e++;return parseInt(e/t*100)}}}),rt=ct,lt=(n("024e"),Object(l["a"])(rt,at,it,!1,null,"1cb6afa1",null)),ot=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-container"},[n("span",{staticClass:"header-title"},[t._v("我创建的问卷")]),n("a-button",{staticClass:"new-qn-button",attrs:{type:"primary"},on:{click:t.newQnClick}},[n("a-icon",{attrs:{type:"plus"}}),t._v("创建问卷\r\n    ")],1)],1),n("div",{staticClass:"list-container"},[n("a-list",{attrs:{itemLayout:"vertical",size:"large",dataSource:t.qnList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{},[n("a-card",{attrs:{hoverable:"",title:e.title},on:{click:function(n){return t.editQnClick(e)}}},[n("span",{staticClass:"list-card-time"},[t._v("创建者: "+t._s(e.creater))]),n("span",{staticClass:"list-card-name"},[t._v("创建时间: "+t._s(t.tmpqninfo1))])])],1)}}])})],1)])},pt=[],dt={data:function(){return{qnList:[],tmpqninfo1:"2019-05-25"}},created:function(){var t=this;f.a.post("/paper/query/",{username:this.userInfo}).then(function(e){var n=e.data;if(2===n.code)for(var s=0;s<n.paper_list.length;s++){var a=n.paper_list[s];a.creater===t.userInfo&&t.qnList.push(a)}}).catch(function(e){return t.$message.error(e)})},computed:Object(v["a"])({},Object(g["c"])(["userInfo"])),methods:{newQnClick:function(){this.$router.push({path:"/guide/newQn"})},editQnClick:function(t){this.$router.push({name:"editQn",params:{qn:t}})}}},mt=dt,vt=(n("ab05"),Object(l["a"])(mt,ut,pt,!1,null,"dd4888aa",null)),ht=vt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"qn-type-container"},[n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addSingle}},[n("a-icon",{attrs:{type:"plus"}}),t._v("单选题\r\n    ")],1),n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addMulti}},[n("a-icon",{attrs:{type:"plus"}}),t._v("多选题\r\n    ")],1),n("a-button",{staticClass:"qn-type-button",attrs:{type:"dashed"},on:{click:t.addText}},[n("a-icon",{attrs:{type:"plus"}}),t._v("填空题\r\n    ")],1)],1),n("div",{staticClass:"qn-container"},[n("div",{staticClass:"qn-cell"},[n("div",{staticClass:"qn-title"},[t._v("问卷标题: ")]),n("a-input",{staticClass:"qn-input",model:{value:t.qn.title,callback:function(e){t.$set(t.qn,"title",e)},expression:"qn.title"}})],1),t._l(t.qn.q,function(e,s){return n("div",{key:s,staticClass:"qn-cell"},["single"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 单选题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1),n("div",[n("p",{staticClass:"qn-name"},[t._v("选项数: ")]),n("a-input-number",{attrs:{min:1,max:5},model:{value:e.cnum,callback:function(n){t.$set(e,"cnum",n)},expression:"q.cnum"}})],1),t._l(e.cnum,function(s){return n("div",{key:s},[n("p",{staticClass:"qn-name"},[t._v("选项"+t._s(s)+": ")]),n("a-input",{staticClass:"qn-input",model:{value:e.choices[s-1],callback:function(n){t.$set(e.choices,s-1,n)},expression:"q.choices[j-1]"}})],1)})],2):"multi"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 多选题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1),n("div",[n("p",{staticClass:"qn-name"},[t._v("选项数: ")]),n("a-input-number",{attrs:{min:1,max:5},model:{value:e.cnum,callback:function(n){t.$set(e,"cnum",n)},expression:"q.cnum"}})],1),t._l(e.cnum,function(s){return n("div",{key:s},[n("p",{staticClass:"qn-name"},[t._v("选项"+t._s(s)+": ")]),n("a-input",{staticClass:"qn-input",model:{value:e.choices[s-1],callback:function(n){t.$set(e.choices,s-1,n)},expression:"q.choices[j-1]"}})],1)})],2):t._e(),"text"==e.type?n("div",[n("div",{staticClass:"qn-title"},[t._v(t._s(s+1)+". 填空题")]),n("a-icon",{staticClass:"qn-delete-button",attrs:{type:"minus-circle-o"},on:{click:function(e){return t.removeQ(s)}}}),n("div",[n("p",{staticClass:"qn-name"},[t._v("问题: ")]),n("a-input",{staticClass:"qn-input",model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"q.name"}})],1)],1):t._e()])}),n("a-button",{staticClass:"new-qn-button",attrs:{type:"primary"},on:{click:t.editQn}},[t._v("修改问卷")]),n("a-button",{staticClass:"new-qn-button",attrs:{type:"danger"},on:{click:t.deleteQn}},[t._v("删除问卷")]),n("a-modal",{attrs:{title:"删除问卷"},on:{ok:t.deleteOk},model:{value:t.modalVisibel,callback:function(e){t.modalVisibel=e},expression:"modalVisibel"}},[n("p",[t._v("确认要删除问卷吗，此操作将删除此问卷")])])],2)])},gt=[],Ct={data:function(){return{qn:{title:null,id:null,q:[]},modalVisibel:!1}},created:function(){var t,e=this.$route.params.qn;this.qn.title=e.title,this.qn.id=e.id;for(var n=0;n<e.Question_select.length;n++){t=e.Question_select[n];for(var s={type:"单选"===t.mytype?"single":"multi",name:t.title,cnum:t.option_num,choices:[]},a=0;a<t.option.length;a++)s.choices.push(t.option[a].text);this.qn.q.push(s)}for(var i=0;i<e.Question_fill.length;i++)t=e.Question_fill[i],this.qn.q.push({type:"text",name:t.title})},methods:{addSingle:function(){this.qn.q.push({type:"single",name:"",cnum:1,choices:[]})},addMulti:function(){this.qn.q.push({type:"multi",name:"",cnum:1,choices:[]})},addText:function(){this.qn.q.push({type:"text",name:""})},removeQ:function(t){this.qn.q.splice(t,1)},editQn:function(){this.$message.warning("功能暂未开放")},deleteQn:function(){this.modalVisibel=!0},deleteOk:function(){var t=this;f.a.post("/paper/delete/",{title:this.qn.title,id:this.qn.id}).then(function(e){var n=e.data;2===n.code&&(t.$message.error(n.message),t.$router.push({path:"/guide/myQnList"})),4===n.code&&(t.$message.error(n.message),t.$router.push({path:"/guide/myQnList"})),3===n.code&&(t.$message.success("删除问卷成功"),t.$router.push({path:"/guide/myQnList"}))}).catch(function(e){return t.$message.error(e)})}}},_t=Ct,bt=(n("0835"),Object(l["a"])(_t,ft,gt,!1,null,"5ea57d0a",null)),qt=bt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"banner-cell banner-task1",on:{click:t.taskClick}},[n("a-icon",{staticClass:"banner-icon",attrs:{type:"plus-square"}}),t._v("\r\n      校园互助任务\r\n    ")],1),n("div",{staticClass:"banner-cell banner-task2",on:{click:t.tradeClick}},[n("a-icon",{staticClass:"banner-icon",attrs:{type:"diff"}}),t._v("\r\n      校园交易站\r\n    ")],1)]),n("div",{staticClass:"bottom-container"})])},yt=[],wt={data:function(){return{}},methods:{taskClick:function(){this.$router.push({path:"/guide/taskList"})},tradeClick:function(){}}},$t=wt,xt=(n("a58a"),Object(l["a"])($t,kt,yt,!1,null,"5ce01685",null)),Qt=xt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-container"},[n("span",{staticClass:"header-title"},[t._v("全部任务")]),n("a-button",{staticClass:"new-task-button",attrs:{type:"primary"},on:{click:t.newTaskClick}},[n("a-icon",{attrs:{type:"plus"}}),t._v("发布任务\r\n    ")],1)],1),n("div",{staticClass:"list-container"},[n("a-list",{attrs:{itemLayout:"vertical",size:"large",dataSource:t.taskList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{},[n("a-card",{attrs:{hoverable:"",title:e.title},on:{click:function(n){return t.taskClick(e)}}},[n("span",{staticClass:"list-card-time"},[t._v(t._s(t.tmptaskinfo1))]),n("span",{staticClass:"list-card-name"},[t._v(t._s(t.tmptaskinfo2))])])],1)}}])})],1)])},jt=[],Ot={data:function(){return{taskList:[{title:"任务1",content:[]},{title:"任务2",content:[]},{title:"任务3",content:[]},{title:"任务4",content:[]},{title:"任务5",content:[]}],tmptaskinfo1:"发布人: 2019-05-25",tmptaskinfo2:"发布时间: kris wu"}},methods:{newTaskClick:function(){this.$router.push({path:"/guide/newTask"})},taskClick:function(t){this.$router.push({path:"/guide/taskDetail"})}}},It=Ot,St=(n("2518"),Object(l["a"])(It,Lt,jt,!1,null,"641db33e",null)),Et=St.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"task-container"},[n("div",{staticClass:"task-cell"},[n("div",{staticClass:"task-title"},[t._v("任务名称: ")]),n("a-input",{staticClass:"task-input",model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("div",{staticClass:"task-cell"},[n("div",{staticClass:"task-title"},[t._v("联系方式: ")]),n("br"),n("div",{staticClass:"task-name"},[t._v("QQ: ")]),n("a-input",{staticClass:"task-input",model:{value:t.qq,callback:function(e){t.qq=e},expression:"qq"}}),n("br"),n("div",{staticClass:"task-name"},[t._v("微信: ")]),n("a-input",{staticClass:"task-input",model:{value:t.wechat,callback:function(e){t.wechat=e},expression:"wechat"}})],1),n("div",{staticClass:"task-cell"},[n("div",{staticClass:"task-title"},[t._v("任务信息: ")]),n("br"),n("div",{staticClass:"task-name"},[t._v("时间: ")]),n("a-input",{staticClass:"task-input",model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),n("br"),n("div",{staticClass:"task-name"},[t._v("地点: ")]),n("a-input",{staticClass:"task-input",model:{value:t.place,callback:function(e){t.place=e},expression:"place"}}),n("br"),n("div",{staticClass:"task-name"},[t._v("内容: ")]),n("a-input",{staticClass:"task-input",model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("div",{staticClass:"task-cell"},[n("div",{staticClass:"task-title"},[t._v("任务报酬: ")]),n("a-input",{staticClass:"task-input",model:{value:t.reward,callback:function(e){t.reward=e},expression:"reward"}})],1),n("a-button",{staticClass:"new-task-button",attrs:{type:"primary"}},[t._v("存为草稿")]),n("a-button",{staticClass:"new-task-button",attrs:{type:"primary"},on:{click:t.newTask}},[t._v("发布任务")])],1)])},Tt=[],Ut={data:function(){return{title:null,qq:null,wechat:null,time:null,place:null,content:null,reward:null}}},Pt=Ut,Vt=(n("b4c6"),Object(l["a"])(Pt,Nt,Tt,!1,null,"00028a7c",null)),Ht=Vt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"task-container"},[t._v("\r\n    显示任务详情\r\n    "),n("a-button",{staticClass:"accept-task-button",attrs:{type:"primary"},on:{click:t.acceptTask}},[t._v("接受任务")])],1)])},Jt=[],zt={data:function(){return{}}},Dt=zt,At=(n("924d"),Object(l["a"])(Dt,Mt,Jt,!1,null,"049503c4",null)),Bt=At.exports;s["a"].use(p["a"]);var Ft=new p["a"]({routes:[{path:"/",redirect:"/guide"},{path:"/guide",name:"guide",component:q,redirect:"/guide/home",children:[{path:"home",name:"home",component:Q},{path:"qnHome",name:"qnHome",component:B},{path:"newQn",name:"newQn",component:X},{path:"allQnList",name:"allQnList",component:st},{path:"fillQn",name:"fillQn",component:ot},{path:"myQnList",name:"myQnList",component:ht},{path:"editQn",name:"editQn",component:qt},{path:"taskHome",name:"taskHome",component:Qt},{path:"taskList",name:"taskList",component:Et},{path:"newTask",name:"newTask",component:Ht},{path:"taskDetail",name:"taskDetail",component:Bt}]},{path:"/signin",name:"signin",component:E},{path:"/signup",name:"signup",component:H}]});s["a"].use(g["a"]);var Gt=new g["a"].Store({state:{userInfo:null},mutations:{setUserInfo:function(t,e){t.userInfo=e}},actions:{}}),Kt=(n("f0f9"),n("d3b0")),Rt=n("52eb"),Wt=n("8820"),Xt=n("7a07"),Yt=n("cbf1"),Zt=n("4a27"),te=n("2558"),ee=n("927e"),ne=n("59df"),se=n("ba64"),ae=n("fdb5"),ie=n("ea96"),ce=n("7ff1"),re=n("d12c"),le=n("44ab"),oe=n("25e7"),ue=n("aceb");s["a"].prototype.$message=Kt["a"],s["a"].prototype.$confirm=Rt["a"].confirm,s["a"].use(Wt["a"]),s["a"].use(Xt["a"]),s["a"].use(Yt["a"]),s["a"].use(Zt["a"]),s["a"].use(te["a"]),s["a"].use(ee["a"]),s["a"].use(ne["a"]),s["a"].use(se["b"]),s["a"].use(ae["a"]),s["a"].use(ie["a"]),s["a"].use(ce["a"]),s["a"].use(re["a"]),s["a"].use(le["a"]),s["a"].use(oe["a"]),s["a"].use(Kt["a"]),s["a"].use(ue["a"]),s["a"].use(Rt["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Ft,store:Gt,render:function(t){return t(u)}}).$mount("#app"),Ft.beforeEach(function(t,e,n){"/signin"!==t.path&&"/signup"!==t.path&&null==Gt.state.userInfo&&n("/signin"),n()})},"5b98":function(t,e,n){},6062:function(t,e,n){},"663e":function(t,e,n){},"6b35":function(t,e,n){},"6f9e":function(t,e,n){"use strict";var s=n("c40b"),a=n.n(s);a.a},"70fdd":function(t,e,n){t.exports=n.p+"static/img/home-detail-1.bbc5b2ce.jpg"},"7e0e":function(t,e,n){t.exports=n.p+"static/img/home-carousel-2.8b347fd3.jpg"},8014:function(t,e,n){},"915e":function(t,e,n){t.exports=n.p+"static/img/avatar.f5009b8c.jpg"},"924d":function(t,e,n){"use strict";var s=n("6062"),a=n.n(s);a.a},"9e74":function(t,e,n){},"9fa6":function(t,e,n){"use strict";var s=n("53a7"),a=n.n(s);a.a},"9fe3":function(t,e,n){},a2a1:function(t,e,n){"use strict";var s=n("6b35"),a=n.n(s);a.a},a3b7:function(t,e,n){},a58a:function(t,e,n){"use strict";var s=n("eb9a"),a=n.n(s);a.a},a772:function(t,e,n){},ab05:function(t,e,n){"use strict";var s=n("663e"),a=n.n(s);a.a},b4c6:function(t,e,n){"use strict";var s=n("a772"),a=n.n(s);a.a},b655:function(t,e,n){},ba6c:function(t,e,n){"use strict";var s=n("a3b7"),a=n.n(s);a.a},c40b:function(t,e,n){},cbf3:function(t,e,n){"use strict";var s=n("25b7"),a=n.n(s);a.a},cfa4:function(t,e,n){t.exports=n.p+"static/img/home-carousel-3.d201e704.jpg"},d626:function(t,e,n){"use strict";var s=n("b655"),a=n.n(s);a.a},eb9a:function(t,e,n){}});
//# sourceMappingURL=app.c7868cb2.js.map