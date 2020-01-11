<template>
  <div class="register-module">
    <div class="register-container">
      <div class="content-top">
        <span>注册信息</span>
      </div>
      <div class="register">
        <el-form :model="registerData" :rules="registerData" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <div>
            <div class="title">
              <span>账户申请</span>
            </div>
            <el-form-item label="姓名" prop="name" required>
              <el-col :span="8">
                <el-input v-model="registerData.name" size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="设置密码" prop="password" required>
              <el-col :span="8">
                <el-input v-model="firstPassword" show-password size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="确认密码" prop="password" required>
              <el-col :span="8">
                <el-input v-model="lastPassword" @blur="inputBlur" show-password size="small"></el-input>
                <span style="color: red" v-show="warningShow">密码两次输入不一致</span>
              </el-col>
            </el-form-item>
          </div>
          <div class="main clear-fix">
            <div class="register-main">
              <div class="title">
                <span>主要信息</span>
              </div>
              <el-form-item label="性别" prop="gender" required>
                <el-radio-group v-model="registerData.gender">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄" prop="age" required>
                <el-col :span="5">
                  <el-input v-model="registerData.age" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="民族" prop="nation" required>
                <el-col :span="5">
                  <el-input v-model="registerData.nation" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="身份证号码" prop="identityCardNumber" required>
                <el-col :span="15">
                  <el-input v-model="registerData.identityCardNumber" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="学历" prop="education" required>
                <el-select v-model="registerData.education" placeholder="请选择学历" size="small">
                  <el-option label="高中" value="高中"></el-option>
                  <el-option label="大专" value="大专"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="研究生" value="研究生"></el-option>
                  <el-option label="博士" value="博士"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="毕业院校" prop="graduatedSchool" required>
                <el-col :span="15">
                  <el-input v-model="registerData.graduatedSchool" size="small"></el-input>
                </el-col>
              </el-form-item>
            </div>
            <div class="register-subsidiary">
              <div class="title">
                <span>附属信息</span>
              </div>
              <el-form-item label="国籍" prop="nationality" required>
                <el-col :span="8">
                  <el-input v-model="registerData.nationality" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="省份" prop="province" required>
                <el-col :span="8">
                  <el-input v-model="registerData.province" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="市区" prop="city" required>
                <el-col :span="8">
                  <el-input v-model="registerData.city" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="详细地址" prop="detailedAddress" required>
                <el-col :span="15">
                  <el-input v-model="registerData.detailedAddress" size="small"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="联系方式" prop="contactInformation" required>
                <el-col :span="15">
                  <el-input v-model="registerData.contactInformation" size="small"></el-input>
                </el-col>
              </el-form-item>
            </div>
          </div>
          <div class="register-other">
            <div class="title">
              <span>其他信息</span>
            </div>
            <el-form-item label="入职职位" prop="entryPosition" required>
              <el-col :span="10">
                <el-input v-model="registerData.entryPosition" size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="入职时间" prop="entryDate">
              <div class="block">
                <span class="demonstration">默认</span>
                <el-date-picker
                  v-model="registerData.entryDate"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd HH:mm:ss" size="small">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="任职部门" prop="departmentId" required>
              <el-col :span="10">
                <el-input v-model="registerData.departmentId" size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="员工状态" prop="status" required>
              <el-select v-model="registerData.status" placeholder="状态" size="small">
                <el-option label="在职" value="1"></el-option>
                <el-option label="离职" value="0"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职业角色" prop="role" required>
              <el-select v-model="registerData.role" placeholder="请选择职业角色" size="small">
                <el-option label="普通员工" value="NORMAL_ROLE"></el-option>
                <el-option label="组长" value="GROUPADMIN_ROLE"></el-option>
                <el-option label="产品经理" value="PRODUCTADMIN_ROLE"></el-option>
                <el-option label="部门主管" value="DEPARTMENTADMIN_ROLE"></el-option>
                <el-option label="管理员" value="DEPARTMENTADMIN_ROLE"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="试用期" prop="probationPeriod" required>
              <el-col :span="10">
                <el-input v-model="registerData.probationPeriod" size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="补贴" prop="otherSubsidies" required>
              <el-col :span="10">
                <el-input v-model="registerData.otherSubsidies" size="small"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="工作经历（可填多个）" prop="workExperience">
              <el-input type="textarea" v-model="registerData.workExperience" rows="3" size="small"></el-input>
            </el-form-item>
            <el-form-item label="面试结果（领导的评价）" prop="interviewResults">
              <el-input type="textarea" v-model="registerData.interviewResults" rows="3" size="small"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitRegister" size="small">立即创建</el-button>
              <el-button @click="resetRegister" size="small">重置</el-button>
              <el-button type="text" @click="linkLogin">已有账号?去登陆</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {registerNumber} from "network/login";
  import axios from 'axios'
  export default {
    name: "LogonModule",
    data() {
      return {
        registerData: {
          name: '',
          gender: '',
          age: '',
          city: '',
          contactInformation: '',
          departmentId: '',
          detailedAddress: '',
          education: '',
          entryDate: '',
          entryPosition: '',
          graduatedSchool: '',
          identityCardNumber: '',
          interviewResults: '',
          nation: '',
          nationality: '',
          otherSubsidies: '',
          probationPeriod: '',
          province: '',
          role: '',
          status: '',
          workExperience: '',
          password: '',
          enclosure: ''
        },
        firstPassword: '',
        lastPassword: '',
        warningShow: false
      }
    },
    methods: {
      /**
       * 1. 判断两次密码是否一样
       * */
      inputBlur() {
        if(this.firstPassword !== this.lastPassword) {
          this.warningShow = true
        } else {
          this.warningShow = false
          // 如果两次密码一致 则把密码赋值给表单对象数据中
          this.registerData.password = this.lastPassword
        }
      },
      /**
       * 2. 提交注册信息
       * */
      submitRegister() {
        // 判断性别
        this.registerData.gender = this.registerData.gender === '男' ? 1 : 0
        this.registerData.age = parseInt(this.registerData.age)
        console.log(this.registerData);
        // 只有两次密码一样时才能提交表单
        if(this.firstPassword === this.lastPassword) {
          axios.post('http://121.41.67.25:8060/signup', this.registerData).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
        }
      },
      /**
       * 3. 清空注册信息
       * */
      resetRegister() {

      },
      /**
       * 4. 跳转到登录界面
       * */
      linkLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less">
  @baseBackgroundColor: #f3f3f4;
  @baseColor: #eee;
  html {
    overflow-y: unset;
  }
  .register-module {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    background: @baseBackgroundColor;
    .register-container {
      margin-left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 100%;
      box-sizing: border-box;
      background-color: #fff;
      .register {
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        .main {
          .register-main {
            width: 50%;
            float: left;
          }

          .register-subsidiary {
            width: 50%;
            float: right;
          }
        }

        .title {
          width: 100%;
          height: 40px;
          font-size: 18px;
          font-weight: 700;
          color: #555;
        }

        .register-other {
          padding-top: 20px;
          width: 100%;
        }
      }
    }
  }
</style>