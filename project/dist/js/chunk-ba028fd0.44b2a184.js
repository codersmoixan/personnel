(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba028fd0"],{"0de1":function(e,t,a){"use strict";a("c2f4")},"280b":function(e,t,a){},b0bf:function(e,t,a){"use strict";var r=a("280b"),s=a.n(r);s.a},c16d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-module"},[a("div",{staticClass:"register-container"},[e._m(0),a("div",{staticClass:"register"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.registerData,rules:e.registerData,"label-width":"150px"}},[a("div",[a("div",{staticClass:"title"},[a("span",[e._v("账户申请")])]),a("el-form-item",{attrs:{label:"姓名",prop:"name",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.name,callback:function(t){e.$set(e.registerData,"name",t)},expression:"registerData.name"}})],1)],1),a("el-form-item",{attrs:{label:"设置密码",prop:"password",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{"show-password":"",size:"small"},model:{value:e.firstPassword,callback:function(t){e.firstPassword=t},expression:"firstPassword"}})],1)],1),a("el-form-item",{attrs:{label:"确认密码",prop:"password",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{"show-password":"",size:"small"},on:{blur:e.inputBlur},model:{value:e.lastPassword,callback:function(t){e.lastPassword=t},expression:"lastPassword"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.warningShow,expression:"warningShow"}],staticStyle:{color:"red"}},[e._v("密码两次输入不一致")])],1)],1)],1),a("div",{staticClass:"main clear-fix"},[a("div",{staticClass:"register-main"},[a("div",{staticClass:"title"},[a("span",[e._v("主要信息")])]),a("el-form-item",{attrs:{label:"性别",prop:"gender",required:""}},[a("el-radio-group",{model:{value:e.registerData.gender,callback:function(t){e.$set(e.registerData,"gender",t)},expression:"registerData.gender"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}})],1)],1),a("el-form-item",{attrs:{label:"年龄",prop:"age",required:""}},[a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.age,callback:function(t){e.$set(e.registerData,"age",t)},expression:"registerData.age"}})],1)],1),a("el-form-item",{attrs:{label:"民族",prop:"nation",required:""}},[a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.nation,callback:function(t){e.$set(e.registerData,"nation",t)},expression:"registerData.nation"}})],1)],1),a("el-form-item",{attrs:{label:"身份证号码",prop:"identityCardNumber",required:""}},[a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.identityCardNumber,callback:function(t){e.$set(e.registerData,"identityCardNumber",t)},expression:"registerData.identityCardNumber"}})],1)],1),a("el-form-item",{attrs:{label:"学历",prop:"education",required:""}},[a("el-select",{attrs:{placeholder:"请选择学历",size:"small"},model:{value:e.registerData.education,callback:function(t){e.$set(e.registerData,"education",t)},expression:"registerData.education"}},[a("el-option",{attrs:{label:"高中",value:"高中"}}),a("el-option",{attrs:{label:"大专",value:"大专"}}),a("el-option",{attrs:{label:"本科",value:"本科"}}),a("el-option",{attrs:{label:"研究生",value:"研究生"}}),a("el-option",{attrs:{label:"博士",value:"博士"}})],1)],1),a("el-form-item",{attrs:{label:"毕业院校",prop:"graduatedSchool",required:""}},[a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.graduatedSchool,callback:function(t){e.$set(e.registerData,"graduatedSchool",t)},expression:"registerData.graduatedSchool"}})],1)],1)],1),a("div",{staticClass:"register-subsidiary"},[a("div",{staticClass:"title"},[a("span",[e._v("附属信息")])]),a("el-form-item",{attrs:{label:"国籍",prop:"nationality",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.nationality,callback:function(t){e.$set(e.registerData,"nationality",t)},expression:"registerData.nationality"}})],1)],1),a("el-form-item",{attrs:{label:"省份",prop:"province",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.province,callback:function(t){e.$set(e.registerData,"province",t)},expression:"registerData.province"}})],1)],1),a("el-form-item",{attrs:{label:"市区",prop:"city",required:""}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.city,callback:function(t){e.$set(e.registerData,"city",t)},expression:"registerData.city"}})],1)],1),a("el-form-item",{attrs:{label:"详细地址",prop:"detailedAddress",required:""}},[a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.detailedAddress,callback:function(t){e.$set(e.registerData,"detailedAddress",t)},expression:"registerData.detailedAddress"}})],1)],1),a("el-form-item",{attrs:{label:"联系方式",prop:"contactInformation",required:""}},[a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.contactInformation,callback:function(t){e.$set(e.registerData,"contactInformation",t)},expression:"registerData.contactInformation"}})],1)],1)],1)]),a("div",{staticClass:"register-other"},[a("div",{staticClass:"title"},[a("span",[e._v("其他信息")])]),a("el-form-item",{attrs:{label:"入职职位",prop:"entryPosition",required:""}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.entryPosition,callback:function(t){e.$set(e.registerData,"entryPosition",t)},expression:"registerData.entryPosition"}})],1)],1),a("el-form-item",{attrs:{label:"入职时间",prop:"entryDate"}},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("默认")]),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss",size:"small"},model:{value:e.registerData.entryDate,callback:function(t){e.$set(e.registerData,"entryDate",t)},expression:"registerData.entryDate"}})],1)]),a("el-form-item",{attrs:{label:"任职部门",prop:"departmentId",required:""}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.departmentId,callback:function(t){e.$set(e.registerData,"departmentId",t)},expression:"registerData.departmentId"}})],1)],1),a("el-form-item",{attrs:{label:"员工状态",prop:"status",required:""}},[a("el-select",{attrs:{placeholder:"状态",size:"small"},model:{value:e.registerData.status,callback:function(t){e.$set(e.registerData,"status",t)},expression:"registerData.status"}},[a("el-option",{attrs:{label:"在职",value:"1"}}),a("el-option",{attrs:{label:"离职",value:"0"}})],1)],1),a("el-form-item",{attrs:{label:"职业角色",prop:"role",required:""}},[a("el-select",{attrs:{placeholder:"请选择职业角色",size:"small"},model:{value:e.registerData.role,callback:function(t){e.$set(e.registerData,"role",t)},expression:"registerData.role"}},[a("el-option",{attrs:{label:"普通员工",value:"NORMAL_ROLE"}}),a("el-option",{attrs:{label:"组长",value:"GROUPADMIN_ROLE"}}),a("el-option",{attrs:{label:"产品经理",value:"PRODUCTADMIN_ROLE"}}),a("el-option",{attrs:{label:"部门主管",value:"DEPARTMENTADMIN_ROLE"}}),a("el-option",{attrs:{label:"管理员",value:"DEPARTMENTADMIN_ROLE"}})],1)],1),a("el-form-item",{attrs:{label:"试用期",prop:"probationPeriod",required:""}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.probationPeriod,callback:function(t){e.$set(e.registerData,"probationPeriod",t)},expression:"registerData.probationPeriod"}})],1)],1),a("el-form-item",{attrs:{label:"补贴",prop:"otherSubsidies",required:""}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{size:"small"},model:{value:e.registerData.otherSubsidies,callback:function(t){e.$set(e.registerData,"otherSubsidies",t)},expression:"registerData.otherSubsidies"}})],1)],1),a("el-form-item",{attrs:{label:"工作经历（可填多个）",prop:"workExperience"}},[a("el-input",{attrs:{type:"textarea",rows:"3",size:"small"},model:{value:e.registerData.workExperience,callback:function(t){e.$set(e.registerData,"workExperience",t)},expression:"registerData.workExperience"}})],1),a("el-form-item",{attrs:{label:"面试结果（领导的评价）",prop:"interviewResults"}},[a("el-input",{attrs:{type:"textarea",rows:"3",size:"small"},model:{value:e.registerData.interviewResults,callback:function(t){e.$set(e.registerData,"interviewResults",t)},expression:"registerData.interviewResults"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitRegister}},[e._v("立即创建")]),a("el-button",{attrs:{size:"small"},on:{click:e.resetRegister}},[e._v("重置")]),a("el-button",{attrs:{type:"text"},on:{click:e.linkLogin}},[e._v("已有账号?去登陆")])],1)],1)])],1)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-top"},[a("span",[e._v("注册信息")])])}],i=(a("0de1"),a("bc3a")),l=a.n(i),o={name:"LogonModule",data:function(){return{registerData:{name:"",gender:"",age:"",city:"",contactInformation:"",departmentId:"",detailedAddress:"",education:"",entryDate:"",entryPosition:"",graduatedSchool:"",identityCardNumber:"",interviewResults:"",nation:"",nationality:"",otherSubsidies:"",probationPeriod:"",province:"",role:"",status:"",workExperience:"",password:"",enclosure:""},firstPassword:"",lastPassword:"",warningShow:!1}},methods:{inputBlur:function(){this.firstPassword!==this.lastPassword?this.warningShow=!0:(this.warningShow=!1,this.registerData.password=this.lastPassword)},submitRegister:function(){this.registerData.gender="男"===this.registerData.gender?1:0,this.registerData.age=parseInt(this.registerData.age),console.log(this.registerData),this.firstPassword===this.lastPassword&&l.a.post("http://121.41.67.25:8060/signup",this.registerData).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},resetRegister:function(){},linkLogin:function(){this.$router.push("/login")}}},n=o,c=(a("b0bf"),a("2877")),d=Object(c["a"])(n,r,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-ba028fd0.44b2a184.js.map