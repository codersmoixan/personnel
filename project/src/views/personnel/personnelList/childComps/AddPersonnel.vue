<template>
  <div class="cover base-font-size" v-show="isShow">
    <div class="zj-add-person add-view">
      <div class="content-top">
        <span>添加员工信息</span>
        <div class="close" @click="addShow">x</div>
      </div>
      <div class="archives ov-auto">
        <el-form ref="form" :model="addPersonnelItemData" label-width="80px">
          <div class="login-number-data">
            <div class="data-title">账号信息</div>
            <table>
              <tr>
                <td>
                  <el-form-item label="员工工号" class="base-font-size">
                    <el-input size="small" disabled placeholder="直接用姓名登录"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                  <el-form-item label="密码" class="base-font-size">
                    <el-input size="small" placeholder="输入密码" v-model="password" show-password></el-input>
                  </el-form-item>
                </td>
                <td>
                  <el-form-item label="确认密码" class="base-font-size">
                    <el-input size="small" placeholder="输入密码" show-password v-model="confirmPassword" @blur="passwordTesting"></el-input>
                  </el-form-item>
                </td>
                <td v-show="isTestWarningShow">
                  <warning :warningData="'两次输入密码不一致！！！'"></warning>
                </td>
              </tr>
            </table>
          </div>
          <data-form @receiveData="receiveData" :isDisabled="false"></data-form>
          <div class="user-content">
            <div class="data-title">其他信息</div>
            <label for="usercontent">
              <div class="text-title">工作经历</div>
              <el-input type="textarea" v-model="addPersonnelItemData.workExperience" rows="5" id="usercontent"
                        class="content"></el-input>
            </label>
            <label for="userevaluate">
              <div class="text-title">面试结果（领导对这个人的印象）</div>
              <el-input type="textarea" v-model="addPersonnelItemData.interviewResults" rows="5" id="userevaluate"
                        class="content"></el-input>
            </label>
          </div>
          <div class="user-submit">
            <el-button type="primary" class="submit" @click="clickSubmit" size="small">提交</el-button>
          </div>
        </el-form>
      </div>
      <warning v-show="isSubmitWarnShow" :warningData="'请填入完整的信息！！！'"></warning>
    </div>
  </div>
</template>

<script>
  import Warning from 'components/common/Warning'
  import DataForm from 'components/content/dataForm/DataForm'

  import {addPersonnel} from 'network/personnel'

  export default {
    name: 'AddPersonnel',
    data() {
      return {
        isShow: false,
        addPersonnelItemData: {
          password: '', // 密码
          workExperience: '', // 工作经历
          interviewResults: '' // 面试结果
        },
        password: '',
        confirmPassword: '',
        isTestWarningShow: false,
        isSubmitWarnShow: false,
        clearFlag: true
      }
    },
    methods: {
      /**
       * 关闭添加员工的界面
       * */
      addShow() {
        this.$emit('addPersonnelShowChange', this.isShow)
      },
      /**
       * 1. 检测两次密码是否输入一致
       * */
      passwordTesting() {
        if(this.password !== this.confirmPassword) {
          this.isTestWarningShow = true
        }else {
          this.isTestWarningShow = false
          this.addPersonnelItemData.password = this.confirmPassword
        }
      },
      /**
       * 2. 接收子组件传过来的值，并且加入到需要发送给服务器的数据中
       * */
      receiveData(data) {
        for(let item in data) {
          this.addPersonnelItemData[item] = data[item]
        }
      },
      /**
       * 3. 添加员工信息
       * */
      clickSubmit() {
        /**1. 判断用户是否填完完整信息*/
        console.log(this.addPersonnelItemData);
        for(let item in this.addPersonnelItemData) {
          if(this.addPersonnelItemData[item] === '') {
            // 没有完整输入提示用户输入完整信息
            this.isSubmitWarnShow = true
            setTimeout(() => {this.isSubmitWarnShow = false}, 2000)
            return
          }
        }

        /**2. 提交数据*/
        this.$confirm('确定提交此数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 发送请求
          addPersonnel(this.addPersonnelItemData).then(res => {
            // 判断服务器返回的状态
            if(res.code === 200) {
              this.$message({
                type: 'success',
                message: '提交成功!'
              });

              // 提交成功后的处理
              this.addShow() // 关闭添加界面
              for(let i in this.addPersonnelItemData) { // 清空编辑表单数据
                this.addPersonnelItemData[i] = ''
              }
            }else {
              this.$message({
                type: 'error',
                message: '提交失败!'
              });
            }
          }).catch(err => {
            console.log(err);
            this.$message({
              type: 'error',
              message: '提交失败!'
            });
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '提交添加'
          });
        });

       }
    },
    components: {
      Warning,
      DataForm
    }
  }

</script>

<style lang="less">
  .cover {
    .zj-add-person {

      .archives {
        padding: 20px;

        .data-title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          font-weight: 700;
          border-bottom: 1px solid #eee;
        }

        .el-form-item {
          margin: 0;
        }
        label.el-form-item__label {
           text-align: right;
           vertical-align: middle;
           float: left;
           font-size: 12px;
           color: #606266;
           line-height: 40px;
           padding: 0 12px 0 0;
           -webkit-box-sizing: border-box;
           box-sizing: border-box;
         }
        .el-radio__label {
          font-size: 12px;
        }

        td {
          padding-right: 50px;
          height: 40px;
          line-height: 40px;
        }
        .text-title {
          padding: 10px 0;
        }
        .user-submit {
          padding: 10px 0;
        }
      }
    }
  }
</style>