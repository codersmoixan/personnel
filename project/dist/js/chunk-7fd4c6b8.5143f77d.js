(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd4c6b8"],{"0faa":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personnel"},[s("div",{staticClass:"staff-manage"},[s("personnel-search"),s("div",{staticClass:"staff-list"},[s("personnel-btn",{on:{addStaff:t.addStaff,removeStaff:t.removeStaff,batchRemove:t.batchRemove}}),s("personnel-list",{attrs:{tabList:t.tabList,isClose:t.isClose},on:{checkPersonnel:t.checkPersonnel}})],1)],1),s("add-personnel"),s("check-personnel",{attrs:{checkId:t.checkPersonnelId,checkClose:t.checkClose}})],1)},l=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"person-btn"},[s("el-row",[s("el-button",{attrs:{type:"primary"},on:{click:t.addStaff}},[t._v("增加员工信息")]),s("el-button",{attrs:{type:"danger"},on:{click:t.batchRemove}},[t._v("批量删除")])],1)],1)},i=[],r={name:"PersonnelBtn",methods:{addStaff:function(){this.$emit("addStaff")},batchRemove:function(){this.$emit("batchRemove")}}},o=r,c=(s("1b97"),s("2877")),u=Object(c["a"])(o,n,i,!1,null,"87ea5194",null),d=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zj-p-search"},[s("div",{staticClass:"demo-input-size"},[s("el-input",{staticClass:"input",attrs:{size:"large",placeholder:"开始日期"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),s("el-input",{staticClass:"input",attrs:{size:"large",placeholder:"结束日期"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),s("el-input",{staticClass:"input",attrs:{size:"large",placeholder:"账号"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),s("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("搜索")])],1)])},h=[],v={name:"PersonnelSearch",data:function(){return{input1:"",input2:""}}},b=v,m=(s("2153"),Object(c["a"])(b,p,h,!1,null,"1f0e2f20",null)),f=m.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return Object.keys(0!==t.tabelData.length)?s("div",{staticClass:"zj-person-list"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tabelData,border:""}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{fixed:"",prop:"personnelNum",label:"ID",width:"220"}}),s("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100"}}),s("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100"}}),s("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100"}}),s("el-table-column",{attrs:{prop:"roleTitle",label:"职位",width:"120"}}),s("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"250"}}),s("el-table-column",{attrs:{prop:"department",label:"部门",width:"120"}}),s("el-table-column",{attrs:{prop:"province",label:"籍贯",width:"120"}}),s("el-table-column",{attrs:{prop:"entryTime",label:"入职日期",width:"120"}}),s("el-table-column",{attrs:{prop:"state",label:"在职情况",width:"120"}}),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.checkData(e.row)}}},[t._v("查看")]),s("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")]),s("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(s){return s.preventDefault(),t.deleteRow(e.row)}}},[t._v("删除")])]}}],null,!1,1836032320)})],1)],1):t._e()},C=[],k={name:"PersonnelList",props:{tabList:{type:Object,default:function(){return{}}}},data:function(){return{tabelData:this.tabList.list,checkListIndex:0,checkIsClose:!0}},methods:{checkData:function(t){var e=t.id,s=this.checkIsClose;this.$bus.$emit("zj_checkData",{checkListId:e,checkClose:s})},deleteRow:function(t){var e=t.id;this.$store.commit("removeList",e)}}},g=k,y=(s("886c"),Object(c["a"])(g,_,C,!1,null,"5981beb9",null)),w=y.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"cover"},[s("div",{staticClass:"zj-add-person"},[s("popup-header",[s("span",{attrs:{slot:"header-left"},slot:"header-left"},[t._v("添加员工信息")])]),s("div",{staticClass:"archives"},[s("form",{attrs:{action:""}},[s("table",{staticClass:"archives-table"},[s("tr",{staticClass:"archives-item"},[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"username"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("姓名：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"username",clearable:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("性别：")]),s("td",[s("el-radio",{attrs:{label:"1"},model:{value:t.userRadio,callback:function(e){t.userRadio=e},expression:"userRadio"}},[t._v("男")]),s("el-radio",{attrs:{label:"2"},model:{value:t.userRadio,callback:function(e){t.userRadio=e},expression:"userRadio"}},[t._v("女")])],1)])])])])]),s("tr",[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userage"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("年龄：")]),s("td",[s("el-input-number",{attrs:{"controls-position":"right",min:1,max:100,id:"userage"},on:{change:t.handleChange},model:{value:t.userAge,callback:function(e){t.userAge=e},expression:"userAge"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("学历：")]),s("td",[s("el-select",{attrs:{clearable:"",placeholder:"请选择学历"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.ducationOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value,id:"usereducation"}})})),1)],1)])])])])]),s("tr",{staticClass:"archives-item"},[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userprobation"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("试用期（月）：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入试用期（月）",id:"userprobation",clearable:""},model:{value:t.userProbation,callback:function(e){t.userProbation=e},expression:"userProbation"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userpost"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("面试职位：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"userpost",clearable:""},model:{value:t.userPost,callback:function(e){t.userPost=e},expression:"userPost"}})],1)])])])])])]),s("tr",{staticClass:"archives-item"},[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"usernation"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("民族：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"usernation",clearable:""},model:{value:t.userNation,callback:function(e){t.userNation=e},expression:"userNation"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"useridcard"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("身份证号码：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"useridcard",clearable:""},model:{value:t.useridcard,callback:function(e){t.useridcard=e},expression:"useridcard"}})],1)])])])])])]),s("tr",[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userschool"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("毕业院校：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"毕业院校",id:"userschool",clearable:""},model:{value:t.userSchool,callback:function(e){t.userSchool=e},expression:"userSchool"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"usernationality"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("国籍：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"usernationality",clearable:""},model:{value:t.userusErnationality,callback:function(e){t.userusErnationality=e},expression:"userusErnationality"}})],1)])])])])])]),s("tr",[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userprovince"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("省份：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"userprovince",clearable:""},model:{value:t.userProvince,callback:function(e){t.userProvince=e},expression:"userProvince"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"usercity"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("市：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"usercity",clearable:""},model:{value:t.userCity,callback:function(e){t.userCity=e},expression:"userCity"}})],1)])])])])])]),s("tr",[s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"useradress"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("详细地址：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入内容",id:"useradress",clearable:""},model:{value:t.userAdress,callback:function(e){t.userAdress=e},expression:"userAdress"}})],1)])])])])]),s("td",[s("div",{staticClass:"tab-item"},[s("label",{attrs:{for:"userphone"}},[s("table",[s("tr",{staticClass:"child-item"},[s("td",[t._v("联系方式：")]),s("td",[s("el-input",{staticClass:"item-input",attrs:{placeholder:"请输入联系方式",id:"userphone",clearable:""},model:{value:t.userPhone,callback:function(e){t.userPhone=e},expression:"userPhone"}})],1)])])])])])])]),s("div",{staticClass:"upload"},[s("table",[s("tr",[s("td",[t._v("上传附件")]),s("td",[s("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{display:"inline-block"},attrs:{limit:1,accept:".xls,.xlsx",action:"/hqx/knowledge/importKnowledge","file-list":t.fileList,"http-request":t.uploadSectionFile,"auto-upload":!1}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",plain:""},slot:"trigger"},[t._v("选取文件")]),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",icon:"el-icon-upload2",type:"success"},on:{click:t.submitUpload}},[t._v("导入")])],1)],1)])])]),s("div",{staticClass:"user-content"},[s("label",{attrs:{for:"usercontent"}},[t._v("\n            工作经历：\n            "),s("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"usercontent"},model:{value:t.userContent,callback:function(e){t.userContent=e},expression:"userContent"}})],1)]),s("div",{staticClass:"user-content"},[s("label",{attrs:{for:"userevaluate"}},[t._v("\n            面试结果（领导对这个人的印象）：\n            "),s("el-input",{staticClass:"content",attrs:{type:"textarea",rows:"5",id:"userevaluate"},model:{value:t.userEvaluate,callback:function(e){t.userEvaluate=e},expression:"userEvaluate"}})],1)]),s("div",{staticClass:"user-submit"},[s("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.clickSubmit}},[t._v("提交")])],1)])])],1)])},P=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup-header"},[t._t("heder-left"),t._t("heder-center"),s("div",{staticClass:"close"},[t._t("heder-right")],2),s("span",[t._v("添加员工信息")]),s("div",{staticClass:"close",on:{click:t.closeClick}},[t._v("x")])],2)},$=[],S={name:"PopupHeader",data:function(){return{close:!1}},methods:{closeClick:function(){this.$bus.$emit("zj_offFlag",this.close)}}},I=S,j=(s("b72a"),Object(c["a"])(I,D,$,!1,null,"7e558492",null)),z=j.exports,R={name:"AddPersonnel",data:function(){return{isShow:!1,userName:"",userAge:0,userNation:"",ducationOptions:[{value:"选项1",label:"高中"},{value:"选项2",label:"大专"},{value:"选项3",label:"本科"},{value:"选项4",label:"研究生"},{value:"选项5",label:"博士"}],value:"",userRadio:"1",userSchool:"",userusErnationality:"",userProvince:"",userCity:"",userAdress:"",userPhone:"",useridcard:"",userContent:"",userProbation:"",userPost:"",userEvaluate:"",fileList:[],personnelMsg:{}}},beforeCreate:function(){var t=this;this.$bus.$on("zj_addOnFlag",(function(e){t.isShow=e})),this.$bus.$on("zj_offFlag",(function(e){t.isShow=e}))},methods:{handleChange:function(){},submitUpload:function(){var t=document.getElementsByClassName("el-upload-list__item is-ready");0!=t.length?this.$refs.upload.submit():this.$message({type:"warning",message:"请选择需要导入的模板！"})},uploadSectionFile:function(t){var e=this,s=t.file,a=new FormData;a.append("file",s),a.append("userId",this.userId),a.append("userName",this.userName),this.GLOBAL.POST("/hqx/knowledge/importKnowledge",a).then((function(t){t.data.success,e.$message({type:"success",message:t.data.msg}),e.fileList=[]}))},clickSubmit:function(){this.personnelMsg.id=parseInt(1e13*Math.random()),this.personnelMsg.name=this.userName,this.personnelMsg.sex="1"===this.userRadio?"男":"女",this.personnelMsg.age=this.userAge,this.personnelMsg.role=!1,this.personnelMsg.email="y.ykqhwk@rgpwubyg.ye",this.personnelMsg.department="销售部",this.personnelMsg.native="江苏省",this.personnelMsg.entryTime=new Date,this.personnelMsg.state="未在职",this.$store.commit("addData",this.personnelMsg),this.closeClick(),console.log(this.$store.state.list)}},components:{PopupHeader:z}},L=R,E=(s("734d"),Object(c["a"])(L,x,P,!1,null,"0adbb506",null)),O=E.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.checkClose,expression:"checkClose"}],staticClass:"cover"},[s("div",{staticClass:"check-personnel"},[s("popup-header",{attrs:{isClose:t.checkClose}},[s("span",{attrs:{slot:"header-left"},slot:"header-left"},[t._v("员工详细信息")])]),s("div",{staticClass:"show-personnel-data"},[s("table",[s("tr",[s("td",[t._v("姓名：")]),s("td",[t._v(t._s(t.personnelData.name))])]),s("tr",[s("td",[t._v("性别：")]),s("td",[t._v(t._s(t.personnelData.sex))])]),s("tr",[s("td",[t._v("年龄：")]),s("td",[t._v(t._s(t.personnelData.age))])]),s("tr",[s("td",[t._v("毕业学校：")]),s("td",[t._v(t._s(t.personnelData.school))])]),s("tr",[s("td",[t._v("国籍：")]),s("td",[t._v(t._s(t.personnelData.nationality))])]),s("tr",[s("td",[t._v("籍贯：")]),s("td",[t._v(t._s(t.personnelData.province))])]),s("tr",[s("td",[t._v("城市：")]),s("td",[t._v(t._s(t.personnelData.city))])]),s("tr",[s("td",[t._v("详细地址：")]),s("td",[t._v(t._s(t.personnelData.dress))])]),s("tr",[s("td",[t._v("民族：")]),s("td",[t._v(t._s(t.personnelData.nation))])]),s("tr",[s("td",[t._v("身份证号码：")]),s("td",[t._v(t._s(t.personnelData.IDCard))])]),s("tr",[s("td",[t._v("入职日期：")]),s("td",[t._v(t._s(t.personnelData.entryTime))])]),s("tr",[s("td",[t._v("部门：")]),s("td",[t._v(t._s(t.personnelData.department))])]),s("tr",[s("td",[t._v("实习时间（月）：")]),s("td",[t._v(t._s(t.personnelData.probation)+"个月")])]),s("tr",[s("td",[t._v("职位：")]),s("td",[t._v(t._s(t.personnelData.roleTitle))])]),s("tr",[s("td",[t._v("邮箱：")]),s("td",[t._v(t._s(t.personnelData.email))])]),s("tr",[s("td",[t._v("qq：")]),s("td",[t._v(t._s(t.personnelData.qq))])]),s("tr",[s("td",[t._v("餐补：")]),s("td",[t._v(t._s(t.personnelData.mealAllowance))])]),s("tr",[s("td",[t._v("车补：")]),s("td",[t._v(t._s(t.personnelData.fareSubsidy))])]),s("tr",[s("td",[t._v("工作经历：")]),s("td",[t._v(t._s(t.personnelData.workHistory))])]),s("tr",[s("td",[t._v("面试结果（领导的评价）：")]),s("td",[t._v(t._s(t.personnelData.interviewResults))])])])])],1)])},A=[],M={name:"CheckPersonnel",data:function(){return{checkClose:!1,personnelId:0,personnelData:{}}},mounted:function(){this.getPersonnelData()},methods:{getPersonnelData:function(){var t=this;this.$bus.$on("zj_checkData",(function(e){t.checkClose=e.checkClose,t.personnelId=e.checkListId,t.getPersonId()})),this.$bus.$on("zj_offFlag",(function(e){t.checkClose=e}))},getPersonId:function(){var t=this.$store.state.list.list;for(var e in t)this.personnelId===t[e].id&&(this.personnelData=t[e],console.log(this.personnelData))}},components:{PopupHeader:z}},q=M,F=(s("8ccc"),Object(c["a"])(q,N,A,!1,null,"f8aa3cf4",null)),T=F.exports,B={name:"Personnel",data:function(){return{isClose:!1,checkPersonnelId:0,checkClose:!0}},beforeCreate:function(){this.$bus.$on("checkIs",(function(t){console.log(t)}))},computed:{tabList:function(){return this.$store.state.list}},methods:{addStaff:function(){this.isClose=!0,this.$bus.$emit("zj_addOnFlag",this.isClose)},removeStaff:function(){console.log("removeStaff")},batchRemove:function(){console.log("batchRemove")},changeClose:function(t){this.isClose=t},checkPersonnel:function(t){this.checkPersonnelId=t.checkListIndex,this.checkClose=t.checkClose}},components:{PersonnelSearch:f,PersonnelBtn:d,PersonnelList:w,AddPersonnel:O,CheckPersonnel:T}},H=B,J=(s("2330"),Object(c["a"])(H,a,l,!1,null,"4020d12a",null));e["default"]=J.exports},"1b97":function(t,e,s){"use strict";var a=s("4934"),l=s.n(a);l.a},2153:function(t,e,s){"use strict";var a=s("29d9"),l=s.n(a);l.a},2330:function(t,e,s){"use strict";var a=s("43ac"),l=s.n(a);l.a},"29d9":function(t,e,s){},"2c4e":function(t,e,s){},"43ac":function(t,e,s){},4934:function(t,e,s){},"65ec":function(t,e,s){},"734d":function(t,e,s){"use strict";var a=s("65ec"),l=s.n(a);l.a},"886c":function(t,e,s){"use strict";var a=s("bbfa"),l=s.n(a);l.a},"8ccc":function(t,e,s){"use strict";var a=s("bdb8"),l=s.n(a);l.a},b72a:function(t,e,s){"use strict";var a=s("2c4e"),l=s.n(a);l.a},bbfa:function(t,e,s){},bdb8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7fd4c6b8.5143f77d.js.map