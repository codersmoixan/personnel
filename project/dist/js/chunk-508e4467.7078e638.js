(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508e4467"],{"0215":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3,"page-size":1},on:{"current-change":t.handleCurrentChange}})],1)},s=[],i={name:"Pagination",data:function(){return{pageNum:1}},methods:{handleCurrentChange:function(t){var e=t;this.$emit("handleCurrentChange",e)}}},r=i,o=a("2877"),l=Object(o["a"])(r,n,s,!1,null,"0a911911",null);e["a"]=l.exports},"0253":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zj-p-search"},[a("el-form",{attrs:{"label-width":"80px"}},[a("div",{staticClass:"demo-input-size"},[a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:t.queryParameter[0]},model:{value:t.formSearch.searcheId,callback:function(e){t.$set(t.formSearch,"searcheId",e)},expression:"formSearch.searcheId"}}),a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:t.queryParameter[1]},model:{value:t.formSearch.searchName,callback:function(e){t.$set(t.formSearch,"searchName",e)},expression:"formSearch.searchName"}}),a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:t.queryParameter[2]},model:{value:t.formSearch.page,callback:function(e){t.$set(t.formSearch,"page",e)},expression:"formSearch.page"}}),a("el-input",{staticClass:"input",attrs:{size:"small",placeholder:t.queryParameter[3]},model:{value:t.formSearch.pageSize,callback:function(e){t.$set(t.formSearch,"pageSize",e)},expression:"formSearch.pageSize"}}),a("el-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.searchClick}},[t._v("搜索")]),a("el-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.getAllData}},[t._v("加载全部")])],1)])],1)},s=[],i={name:"PersonnelSearch",props:{queryParameter:{type:Array,default:function(){return[]}}},data:function(){return{formSearch:{searchId:"",searchName:"",page:"",pageSize:""},againData:{page:1,pageSize:10}}},methods:{searchClick:function(){var t=!1;for(var e in this.formSearch)this.formSearch[e]&&(t=!0);t?this.$emit("searchData",this.formSearch):this.$message.warning("请输入需要查询的参数！！！"),this.formSearch={}},getAllData:function(){this.$emit("againRendering",this.againData)}}},r=i,o=(a("a3ba"),a("2877")),l=Object(o["a"])(r,n,s,!1,null,"c79270b4",null);e["a"]=l.exports},"0801":function(t,e,a){"use strict";var n=a("7f16"),s=a.n(n);s.a},"15c8":function(t,e,a){"use strict";a.d(e,"t",(function(){return s})),a.d(e,"K",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"v",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"L",(function(){return d})),a.d(e,"n",(function(){return u})),a.d(e,"s",(function(){return f})),a.d(e,"F",(function(){return m})),a.d(e,"p",(function(){return p})),a.d(e,"B",(function(){return h})),a.d(e,"f",(function(){return v})),a.d(e,"M",(function(){return b})),a.d(e,"h",(function(){return g})),a.d(e,"u",(function(){return D})),a.d(e,"e",(function(){return w})),a.d(e,"J",(function(){return C})),a.d(e,"d",(function(){return S})),a.d(e,"N",(function(){return _})),a.d(e,"m",(function(){return z})),a.d(e,"A",(function(){return k})),a.d(e,"w",(function(){return y})),a.d(e,"G",(function(){return I})),a.d(e,"l",(function(){return x})),a.d(e,"o",(function(){return P})),a.d(e,"x",(function(){return $})),a.d(e,"I",(function(){return j})),a.d(e,"y",(function(){return O})),a.d(e,"H",(function(){return E})),a.d(e,"z",(function(){return N})),a.d(e,"q",(function(){return L})),a.d(e,"C",(function(){return R})),a.d(e,"r",(function(){return A})),a.d(e,"D",(function(){return W})),a.d(e,"a",(function(){return F})),a.d(e,"E",(function(){return M})),a.d(e,"b",(function(){return T})),a.d(e,"j",(function(){return q})),a.d(e,"i",(function(){return H}));a("7f7f");var n=a("c2f4");function s(t,e){return Object(n["a"])("/personnel/staff/list",{page:t,pageSize:e})}function i(t){return Object(n["a"])("/personnel/staff/list/condition",{id:t.searcheId,name:t.searchName,page:t.page,pageSize:t.pageSize})}function r(t){return Object(n["b"])("/personnel/staff/add",t)}function o(t,e){return Object(n["a"])("/personnel/recruit/list",{page:t,pageSize:e})}function l(t){return Object(n["b"])("/personnel/recruit/add",t)}function c(t){return Object(n["a"])("/personnel/recruit/delete",{id:t})}function d(t){return Object(n["a"])("/personnel/recruit/list/condition",{id:t.searcheId,name:t.searchName,page:t.page,pageSize:t.pageSize})}function u(t){return Object(n["b"])("/personnel/recruit/update",t)}function f(t,e){return Object(n["a"])("/personnel/leave/list",{page:t,pageSize:e})}function m(t){return Object(n["a"])("/personnel/leave/list",{id:t.id,type:t.type,page:t.page,pageSize:t.pageSize})}function p(t,e){return Object(n["a"])("/personnel/department/list",{page:t,pageSize:e})}function h(t){return Object(n["a"])("/personnel/department/list/condition",{id:t.id,name:t.name,page:t.page,pageSize:t.pageSize})}function v(t){return Object(n["b"])("/personnel/department/add",t)}function b(t){return Object(n["b"])("/personnel/department/update",t)}function g(t){return Object(n["a"])("/personnel/department/delete",{id:t})}function D(t){return Object(n["a"])("/personnel/training/stafflist",{id:t.id,page:t.page,pageSize:t.pageSize})}function w(t){return Object(n["b"])("/personnel/training/add",t)}function C(t){return Object(n["a"])("/personnel/training/list/condition/only",{id:t.id,name:t.name,page:t.page,pageSize:t.pageSize})}function S(t){return Object(n["a"])("/personnel/training/add/staff",{trainingId:t.trainingId,staffId:t.staffId})}function _(t){return Object(n["b"])("/personnel/training/update",t)}function z(t){return Object(n["a"])("/personnel/training/delete",{id:t})}function k(t){return Object(n["a"])("/personnel/training/list/only",{page:t.page,pageSize:t.pageSize})}function y(t){return Object(n["a"])("/personnel/recruitusers/list",{page:t.page,pageSize:t.pageSize})}function I(t){return Object(n["a"])("/personnel/recruitusers/list/condition",{id:t.id,name:t.name,page:t.page,pageSize:t.pageSize})}function x(t){return Object(n["a"])("/personnel/recruitusers/delete",{id:t})}function P(t){return Object(n["a"])("/personnel/attendance/list",{page:t.page,pageSize:t.pageSize})}function $(t){return Object(n["a"])("/personnel/salaryday/list",{page:t.page,pageSize:t.pageSize})}function j(t){return Object(n["a"])("/personnel/salaryday/list/condition",{id:t.id,staffId:t.staffId,dateScopeStart:t.dateScopeStart,dateScopeEnd:t.dateScopeEnd,page:t.page,pageSize:t.pageSize})}function O(t){return Object(n["a"])("/personnel/salarymonth/list",{page:t.page,pageSize:t.pageSize})}function E(t){return Object(n["a"])("/personnel/salarymonth/list/condition",{id:t.id,staffId:t.staffId,dateScopeStart:t.dateScopeStart,dateScopeEnd:t.dateScopeEnd,page:t.page,pageSize:t.pageSize})}function N(t){return Object(n["a"])("/personnel/staffactivity/list",{page:t.page,pageSize:t.pageSize})}function L(t){return Object(n["a"])("/personnel/groupmanagement/list/only",{page:t.page,pageSize:t.pageSize})}function R(t){return Object(n["a"])("/personnel/groupmanagement/list/condition/only",{id:t.id,name:t.name,page:t.page,pageSize:t.pageSize})}function A(t){return Object(n["a"])("/personnel/groupmanagement/list",{page:t.page,pageSize:t.pageSize})}function W(t){return Object(n["a"])("/personnel/groupmanagement/list/condition",{id:t.id,name:t.name,page:t.page,pageSize:t.pageSize})}function F(t){return Object(n["b"])("/personnel/groupmanagement/add",t)}function M(t){return Object(n["a"])("/personnel/groupmanagement/stafflist",{id:t.id,page:t.page,pageSize:t.pageSize})}function T(t){return Object(n["a"])("/personnel/groupmanagement/add/staff",{groupManagementId:t.groupManagementId,staffId:t.staffId,descs:t.descs})}function q(t){return Object(n["a"])("/personnel/groupmanagement/delete/staff",{staffId:t.staffId,groupManagementId:t.groupManagementId})}function H(t){return Object(n["a"])("/personnel/groupmanagement/delete",{id:t})}},"1daf":function(t,e,a){"use strict";var n=a("b613"),s=a.n(n);s.a},"1dca":function(t,e,a){"use strict";var n=a("a622"),s=a.n(n);s.a},"2cc1":function(t,e,a){"use strict";var n=a("d293"),s=a.n(n);s.a},"2f3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.fullscreenLoading,expression:"fullscreenLoading"}],staticClass:"personnel-list pad-ten",attrs:{"element-loading-background":"rgba(255, 255, 255, 0.8)","element-loading-text":"拼命加载中..."}},[a("div",{staticClass:"staff-manage"},[a("personnel-search",{attrs:{queryParameter:t.queryParameter},on:{searchData:t.searchData}}),a("div",{staticClass:"staff-list"},[a("personnel-btn",{staticClass:"left",on:{addStaff:t.addStaff,batchRemove:t.batchRemove}}),a("pagination",{staticClass:"right",on:{handleCurrentChange:t.handleCurrentChange}}),a("list",{attrs:{tabList:t.personnelList}})],1)],1),a("add-personnel",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{click:t.clickHandle,addPersonnelShowChange:t.addPersonnelShowChange}}),a("check-personnel"),a("edit-data")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person-btn"},[a("el-row",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addStaff}},[t._v("增加员工信息")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.batchRemove}},[t._v("批量删除")])],1)],1)},r=[],o={name:"PersonnelBtn",methods:{addStaff:function(){this.$emit("addStaff")},batchRemove:function(){this.$emit("batchRemove")}}},l=o,c=(a("5257"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"7269fb4e",null),u=d.exports,f=a("0253"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(0!==t.tabelData.length)?a("div",{staticClass:"zj-person-list"},[a("el-table",{staticClass:"base-font-size",staticStyle:{width:"100%"},attrs:{data:t.tabList,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"id",label:"员工ID",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"gender",label:"性别",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.gender?"男":"女"))])]}}],null,!1,609561871)}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"80"}}),a("el-table-column",{attrs:{prop:"entryPosition",label:"职位",width:"120"}}),a("el-table-column",{attrs:{prop:"",label:"邮箱",width:"180"}}),a("el-table-column",{attrs:{prop:"entryPosition",label:"部门",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"籍贯",width:"120"}}),a("el-table-column",{attrs:{prop:"entryDate",label:"入职日期",width:"180"}}),a("el-table-column",{attrs:{prop:"",label:"在职情况",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("\n          "+t._s(e.row.status?"在职":"离职")+"\n        ")])]}}],null,!1,500660467)}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-view"},on:{click:function(a){return t.checkData(e.row)}}}),a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(a){return t.editData(e.row)}}})]}}],null,!1,2876886975)})],1)],1):t._e()},p=[],h={name:"PersonnelList",props:{tabList:{type:Array,default:function(){return[]}}},data:function(){return{tabelData:this.tabList,checkListIndex:0,checkIsClose:!0,showId:"edit"}},methods:{checkData:function(t){var e=t,a=this.checkIsClose;this.$bus.$emit("zj_checkData",{personnelData:e,checkClose:a})},editData:function(t){var e=t,a=this.checkIsClose,n=this.showId;this.$bus.$emit("zj_editData",{editData:e,editClose:a,showId:n})}}},v=h,b=(a("e767"),Object(c["a"])(v,m,p,!1,null,"003f0f6a",null)),g=b.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"cover base-font-size"},[a("div",{staticClass:"zj-add-person add-view"},[a("div",{staticClass:"content-top"},[a("span",[t._v("添加员工信息")]),a("div",{staticClass:"close",on:{click:t.addShow}},[t._v("x")])]),a("div",{staticClass:"archives ov-auto"},[a("el-form",{ref:"form",attrs:{model:t.addPersonnelItemData,"label-width":"80px"}},[a("div",{staticClass:"login-number-data"},[a("div",{staticClass:"data-title"},[t._v("账号信息")]),a("table",[a("tr",[a("td",[a("el-form-item",{staticClass:"base-font-size",attrs:{label:"员工工号"}},[a("el-input",{attrs:{size:"small",disabled:"",placeholder:"直接用姓名登录"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{staticClass:"base-font-size",attrs:{label:"密码"}},[a("el-input",{attrs:{size:"small",placeholder:"输入密码","show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("td",[a("el-form-item",{staticClass:"base-font-size",attrs:{label:"确认密码"}},[a("el-input",{attrs:{size:"small",placeholder:"输入密码","show-password":""},on:{blur:t.passwordTesting},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),a("td",{directives:[{name:"show",rawName:"v-show",value:t.isTestWarningShow,expression:"isTestWarningShow"}]},[a("warning",{attrs:{warningData:"两次输入密码不一致！！！"}})],1)])])]),a("data-form",{attrs:{isDisabled:!1},on:{receiveData:t.receiveData}}),a("div",{staticClass:"user-content"},[a("div",{staticClass:"data-title"},[t._v("其他信息")]),a("label",{attrs:{for:"usercontent"}},[a("div",{staticClass:"text-title"},[t._v("工作经历")]),a("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"usercontent"},model:{value:t.addPersonnelItemData.workExperience,callback:function(e){t.$set(t.addPersonnelItemData,"workExperience",e)},expression:"addPersonnelItemData.workExperience"}})],1),a("label",{attrs:{for:"userevaluate"}},[a("div",{staticClass:"text-title"},[t._v("面试结果（领导对这个人的印象）")]),a("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"userevaluate"},model:{value:t.addPersonnelItemData.interviewResults,callback:function(e){t.$set(t.addPersonnelItemData,"interviewResults",e)},expression:"addPersonnelItemData.interviewResults"}})],1)]),a("div",{staticClass:"user-submit"},[a("el-button",{staticClass:"submit",attrs:{type:"primary",size:"small"},on:{click:t.clickSubmit}},[t._v("提交")])],1)],1)],1),a("warning",{directives:[{name:"show",rawName:"v-show",value:t.isSubmitWarnShow,expression:"isSubmitWarnShow"}],attrs:{warningData:"请填入完整的信息！！！"}})],1)])},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warning"},[a("el-alert",{attrs:{title:t.warningData,type:"warning",effect:"dark",closable:!1,"show-icon":""}})],1)},S=[],_={name:"Warning",props:{warningData:{type:String,default:""}}},z=_,k=(a("81f1"),Object(c["a"])(z,C,S,!1,null,"319c175c",null)),y=k.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-form"},[a("div",{staticClass:"basic-data"},[a("div",{staticClass:"data-title",on:{click:t.showPersonnelData}},[t._v("基本信息")]),a("table",[a("tr",[a("td",[a("el-form-item",{staticClass:"base-font-size",attrs:{label:"姓名"}},[a("el-input",{attrs:{type:"text",size:"small",disabled:t.isDisabled,placeholder:t.showData.name},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),a("td",[a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.formData.gender,callback:function(e){t.$set(t.formData,"gender",e)},expression:"formData.gender"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}})],1)],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.age},model:{value:t.formData.age,callback:function(e){t.$set(t.formData,"age",e)},expression:"formData.age"}})],1)],1),a("td",[a("el-form-item",{attrs:{label:"民族"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.nation},model:{value:t.formData.nation,callback:function(e){t.$set(t.formData,"nation",e)},expression:"formData.nation"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"身份证号码"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.identityCardNumber},model:{value:t.formData.identityCardNumber,callback:function(e){t.$set(t.formData,"identityCardNumber",e)},expression:"formData.identityCardNumber"}})],1)],1),a("td",[a("el-form-item",{attrs:{label:"国籍"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.nationality},model:{value:t.formData.nationality,callback:function(e){t.$set(t.formData,"nationality",e)},expression:"formData.nationality"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"学历"}},[a("el-select",{attrs:{placeholder:"请选择学历",size:"small"},model:{value:t.formData.education,callback:function(e){t.$set(t.formData,"education",e)},expression:"formData.education"}},[a("el-option",{attrs:{label:"高中",value:"高中"}}),a("el-option",{attrs:{label:"专科",value:"专科"}}),a("el-option",{attrs:{label:"本科",value:"本科"}}),a("el-option",{attrs:{label:"研究生",value:"研究生"}}),a("el-option",{attrs:{label:"博士",value:"博士"}})],1)],1)],1),a("td",[a("el-form-item",{attrs:{label:"毕业院校"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.graduatedSchool},model:{value:t.formData.graduatedSchool,callback:function(e){t.$set(t.formData,"graduatedSchool",e)},expression:"formData.graduatedSchool"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"省份"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.province},model:{value:t.formData.province,callback:function(e){t.$set(t.formData,"province",e)},expression:"formData.province"}})],1)],1),a("td",[a("el-form-item",{attrs:{label:"市"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.city},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"详细地址"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.detailedAddress},model:{value:t.formData.detailedAddress,callback:function(e){t.$set(t.formData,"detailedAddress",e)},expression:"formData.detailedAddress"}})],1)],1),a("td",[a("el-form-item",{attrs:{label:"联系方式"}},[a("el-input",{attrs:{size:"small",placeholder:t.showData.contactInformation},model:{value:t.formData.contactInformation,callback:function(e){t.$set(t.formData,"contactInformation",e)},expression:"formData.contactInformation"}})],1)],1)])])]),a("div",{staticClass:"subsidiary-data"},[a("div",{staticClass:"data-title"},[t._v("附属信息")]),a("table",[a("tr",[a("td",[a("el-form-item",{attrs:{label:"入职时间",size:"small"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.formData.entryDate,callback:function(e){t.$set(t.formData,"entryDate",e)},expression:"formData.entryDate"}})],1)])],1),a("td",[a("el-form-item",{attrs:{label:"入职职位"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formData.entryPosition,callback:function(e){t.$set(t.formData,"entryPosition",e)},expression:"formData.entryPosition"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"所属部门"}},[a("el-select",{attrs:{placeholder:"请选择部门",size:"small"},model:{value:t.formData.departmentId,callback:function(e){t.$set(t.formData,"departmentId",e)},expression:"formData.departmentId"}},[a("el-option",{attrs:{label:"测试前端部门",value:"测试前端部门"}}),a("el-option",{attrs:{label:"Java开发测试",value:"Java开发测试"}}),a("el-option",{attrs:{label:"H5开发",value:"H5开发"}}),a("el-option",{attrs:{label:"开发部",value:"开发部"}}),a("el-option",{attrs:{label:"销售部",value:"销售部"}}),a("el-option",{attrs:{label:"董事会",value:"董事会"}})],1)],1)],1),a("td",[a("el-form-item",{attrs:{label:"试用期"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formData.probationPeriod,callback:function(e){t.$set(t.formData,"probationPeriod",e)},expression:"formData.probationPeriod"}})],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"公司角色",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.role,callback:function(e){t.$set(t.formData,"role",e)},expression:"formData.role"}},[a("el-option",{attrs:{label:"普通员工",value:"NORMAL_ROLE"}}),a("el-option",{attrs:{label:"组长",value:"GROUPADMIN_ROLE"}}),a("el-option",{attrs:{label:"产品经理",value:"PRODUCTADMIN_ROLE"}}),a("el-option",{attrs:{label:"部门主管",value:"DEPARTMENTADMIN_ROLE"}}),a("el-option",{attrs:{label:"管理员",value:"ADMIN_ROLE"}})],1)],1)],1),a("td",[a("el-form-item",{attrs:{label:"员工状态",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-option",{attrs:{label:"在职",value:"在职"}}),a("el-option",{attrs:{label:"离职",value:"离职"}})],1)],1)],1)]),a("tr",[a("td",[a("el-form-item",{attrs:{label:"补贴",size:"small"}},[a("el-input",{attrs:{size:"small"},on:{blur:t.outgoingData},model:{value:t.formData.otherSubsidies,callback:function(e){t.$set(t.formData,"otherSubsidies",e)},expression:"formData.otherSubsidies"}})],1)],1)])])])])},x=[],P={name:"DataForm",props:{isDisabled:{type:Boolean,default:!0}},watch:{isDisabled:function(t,e){console.log(t)}},data:function(){return{formData:{age:"",city:"",contactInformation:"",departmentId:"",detailedAddress:"",education:"",enclosure:"暂无",entryDate:"",entryPosition:"",gender:"",graduatedSchool:"",identityCardNumber:"",name:"",nation:"",nationality:"",otherSubsidies:"",probationPeriod:"",province:"",role:"",status:""},showData:{},showId:"",editData:{}}},beforeCreate:function(){var t=this;this.$bus.$on("clearFlag",(function(e){if(e.clear)for(var a in t.formData)t.formData[a]=""})),this.$bus.$on("zj_editData",(function(e){t.editData=e.editData}))},created:function(){},methods:{showPersonnelData:function(){var t=this;this.$bus.$on("zj_editData",(function(e){t.showId=e.showId})),this.$bus.$on("clearFlag",(function(e){t.showId=e.showId})),"add"===this.showId?this.showData=this.formData:this.showData=this.editData,console.log(this.showId)},outgoingData:function(){switch(console.log(this.isDisabled),this.formData.gender="男"===this.formData.gender?1:0,this.formData.status="在职"===this.formData.status?1:0,this.formData.departmentId){case"测试前端部门":this.formData.departmentId=1;break;case"Java开发测试":this.formData.departmentId=6;break;case"H5开发":this.formData.departmentId=7;break;case"销售部":this.formData.departmentId=9;break;case"开发部":this.formData.departmentId=10;break;case"董事会":this.formData.departmentId=11;break}this.$emit("receiveData",this.formData)}}},$=P,j=(a("0801"),Object(c["a"])($,I,x,!1,null,"3ca97fa7",null)),O=j.exports,E=a("15c8"),N={name:"AddPersonnel",data:function(){return{isShow:!1,addPersonnelItemData:{password:"",workExperience:"",interviewResults:""},password:"",confirmPassword:"",isTestWarningShow:!1,isSubmitWarnShow:!1,clearFlag:!0}},methods:{addShow:function(){this.$emit("addPersonnelShowChange",this.isShow)},passwordTesting:function(){this.password!==this.confirmPassword?this.isTestWarningShow=!0:(this.isTestWarningShow=!1,this.addPersonnelItemData.password=this.confirmPassword)},receiveData:function(t){for(var e in t)this.addPersonnelItemData[e]=t[e]},clickSubmit:function(){var t=this;for(var e in console.log(this.addPersonnelItemData),this.addPersonnelItemData)if(""===this.addPersonnelItemData[e])return this.isSubmitWarnShow=!0,void setTimeout((function(){t.isSubmitWarnShow=!1}),2e3);this.$confirm("确定提交此数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(E["c"])(t.addPersonnelItemData).then((function(e){if(200===e.code)for(var a in t.$message({type:"success",message:"提交成功!"}),t.addShow(),t.addPersonnelItemData)t.addPersonnelItemData[a]="";else t.$message({type:"error",message:"提交失败!"})})).catch((function(e){console.log(e),t.$message({type:"error",message:"提交失败!"})}))})).catch((function(){t.$message({type:"info",message:"提交添加"})}))}},components:{Warning:y,DataForm:O}},L=N,R=(a("1dca"),Object(c["a"])(L,D,w,!1,null,null,null)),A=R.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkClose,expression:"checkClose"}],staticClass:"cover"},[a("div",{staticClass:"check-personnel add-view"},[a("div",{staticClass:"title content-top"},[a("span",[t._v("员工详细信息："+t._s(t.personnelData.name)+"（"+t._s(t.personnelData.id)+"）")]),a("div",{staticClass:"close",on:{click:t.closeFlag}},[t._v("x")])]),a("div",{staticClass:"show-personnel-data ov-auto"},[a("div",{staticClass:"basic-data"},[a("div",{staticClass:"data-title"},[t._v("基本信息")]),a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",{staticClass:"item-title"},[t._v("员工ID")]),a("td",[t._v(t._s(t.personnelData.id))]),a("td",{staticClass:"item-title"},[t._v("员工姓名")]),a("td",[t._v(t._s(t.personnelData.name))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("性别")]),a("td",[t._v(t._s(t.personnelData.gender))]),a("td",{staticClass:"item-title"},[t._v("年龄")]),a("td",[t._v(t._s(t.personnelData.age))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("学历")]),a("td",[t._v(t._s(t.personnelData.education))]),a("td",{staticClass:"item-title"},[t._v("毕业院校")]),a("td",[t._v(t._s(t.personnelData.graduatedSchool))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("身份证号码")]),a("td",[t._v(t._s(t.personnelData.identityCardNumber))]),a("td",{staticClass:"item-title"},[t._v("国籍")]),a("td",[t._v(t._s(t.personnelData.nationality))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("民族")]),a("td",[t._v(t._s(t.personnelData.nation))]),a("td",{staticClass:"item-title"},[t._v("籍贯")]),a("td",[t._v(t._s(t.personnelData.province))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("市区")]),a("td",[t._v(t._s(t.personnelData.city))]),a("td",{staticClass:"item-title"},[t._v("联系方式")]),a("td",[t._v(t._s(t.personnelData.contactInformation))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("详细地址")]),a("td",[t._v(t._s(t.personnelData.detailedAddress))]),a("td",{staticClass:"item-title"}),a("td")])])]),a("div",{staticClass:"subsidiary-data"},[a("div",{staticClass:"data-title"},[t._v("附属信息")]),a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",{staticClass:"item-title"},[t._v("公司角色")]),a("td",[t._v(t._s(t.personnelData.role))]),a("td",{staticClass:"item-title"},[t._v("在职部门")]),a("td",[t._v(t._s(t.personnelData.departmentName))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("员工状态")]),a("td",[t._v(t._s(t.personnelData.status))]),a("td",{staticClass:"item-title"},[t._v("试用期")]),a("td",[t._v(t._s(t.personnelData.probationPeriod))])]),a("tr",[a("td",{staticClass:"item-title"},[t._v("其他补贴")]),a("td",[t._v(t._s(t.personnelData.otherSubsidies))]),a("td",{staticClass:"item-title"}),a("td")])])]),a("div",{staticClass:"outer-data"},[a("div",{staticClass:"data-title"},[t._v("其他信息")]),a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[t._m(0),a("tr",[a("td",{staticClass:"text"},[a("div",{staticClass:"content"},[t._v(t._s(t.personnelData.workExperience))])])])]),a("div",{staticClass:"mar-top"},[a("table",[t._m(1),a("tr",[a("td",{staticClass:"text"},[a("div",{staticClass:"content"},[t._v(t._s(t.personnelData.interviewResults))])])])])])])])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"item-title"},[t._v("工作经历")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"item-title"},[t._v("面试结果")])])}],M={name:"CheckPersonnel",data:function(){return{checkClose:!1,personnelId:0,personnelData:{}}},mounted:function(){this.getPersonnelData()},methods:{getPersonnelData:function(){var t=this;this.$bus.$on("zj_checkData",(function(e){t.checkClose=e.checkClose,t.personnelData=e.personnelData,console.log(t.personnelData)})),this.$bus.$on("zj_offFlag",(function(e){t.checkClose=e}))},closeFlag:function(){this.checkClose=!1}},components:{}},T=M,q=(a("473d"),Object(c["a"])(T,W,F,!1,null,"263c1e14",null)),H=q.exports,B=a("0215"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.editShow,expression:"editShow"}],staticClass:"cover"},[a("div",{staticClass:"edit-data add-view"},[a("div",{staticClass:"title content-top"},[a("span",[t._v("修改信息")]),a("div",{staticClass:"close",on:{click:t.editClose}},[t._v("x")])]),a("div",{staticClass:"edit-content ov-auto"},[a("el-form",{ref:"form",attrs:{model:t.editData,"label-width":"150px"}},[a("div",[a("div",{staticClass:"data-title"},[t._v("员工工号")]),a("table",[a("tr",[a("td",{staticClass:"item-title"},[t._v("员工ID")]),a("td",{staticClass:"item-input"},[a("el-input",{attrs:{disabled:"",size:"small",value:t.editData.id}})],1)])])]),a("div",{staticClass:"basic-data"},[a("data-form",{attrs:{viewData:t.showData,isDisabled:!0},on:{receiveData:t.receiveData}})],1),a("div",{staticClass:"user-content"},[a("div",{staticClass:"data-title"},[t._v("其他信息")]),a("label",{attrs:{for:"usercontent"}},[a("div",{staticClass:"text-title"},[t._v("工作经历")]),a("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"usercontent"}})],1),a("label",{attrs:{for:"userevaluate"}},[a("div",{staticClass:"text-title"},[t._v("面试结果（领导对这个人的印象）")]),a("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"userevaluate",disabled:""}})],1)]),a("div",{staticClass:"edit-submit"},[a("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.editClick}},[t._v("修改")])],1)])],1)]),a("warning",{directives:[{name:"show",rawName:"v-show",value:t.isWarnShow,expression:"isWarnShow"}]})],1)},G=[],K=(a("c2f4"),{name:"EditData",data:function(){return{editData:{name:"",age:"",workExperience:""},editShow:!1,isWarnShow:!1,showData:{}}},beforeCreate:function(){var t=this;this.$bus.$on("zj_editData",(function(e){t.editData=e.editData,t.editShow=e.editClose}))},watch:{editData:function(t,e){this.showData=t}},methods:{editClose:function(){this.editShow=!1},receiveData:function(t){},editClick:function(){console.log(this.editData)}},components:{DataForm:O,Warning:y}}),U=K,Q=(a("1daf"),Object(c["a"])(U,J,G,!1,null,"67574b1a",null)),V=Q.exports,X={name:"PersonnelList",data:function(){return{isClose:!1,checkPersonnelId:0,checkClose:!0,personnelList:[],isShow:!1,queryParameter:["ID","Name","Page","PageSize"],clearFlag:!0,showId:"add",fullscreenLoading:!1}},created:function(){this._getPersonnelList(0)},computed:{tabList:function(){}},methods:{_getPersonnelList:function(t){var e=this;this.fullscreenLoading=!0;var a=10;Object(E["t"])(t,a).then((function(t){console.log(t),e.personnelList=t.data.list,e.$store.commit("addPersonnelList",t.data.list),e.fullscreenLoading=!1}))},handleCurrentChange:function(t){this._getPersonnelList(t)},addStaff:function(){this.$bus.$emit("clearFlag",{clear:this.clearFlag,showId:this.showId}),this.isClose=!0,this.isShow=!0},addPersonnelShowChange:function(t){this.isShow=t},removeStaff:function(){console.log("removeStaff")},batchRemove:function(){console.log("batchRemove")},clickHandle:function(){this.isShow=!0},searchData:function(t){var e=this,a=[];Object(E["K"])(t).then((function(t){a.push(t),e.personnelList=a[0].data.list})).catch((function(t){console.log(t)}))}},components:{PersonnelSearch:f["a"],PersonnelBtn:u,List:g,AddPersonnel:A,CheckPersonnel:H,Pagination:B["a"],EditData:V}},Y=X,Z=(a("2cc1"),Object(c["a"])(Y,n,s,!1,null,"87263358",null));e["default"]=Z.exports},"2fdd":function(t,e,a){},"473d":function(t,e,a){"use strict";var n=a("474a"),s=a.n(n);s.a},"474a":function(t,e,a){},"4b264":function(t,e,a){},5257:function(t,e,a){"use strict";var n=a("2fdd"),s=a.n(n);s.a},"7f16":function(t,e,a){},"81f1":function(t,e,a){"use strict";var n=a("a0c1"),s=a.n(n);s.a},a0c1:function(t,e,a){},a3ba:function(t,e,a){"use strict";var n=a("4b264"),s=a.n(n);s.a},a622:function(t,e,a){},b613:function(t,e,a){},d293:function(t,e,a){},e767:function(t,e,a){"use strict";var n=a("f3e9"),s=a.n(n);s.a},f3e9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-508e4467.7078e638.js.map