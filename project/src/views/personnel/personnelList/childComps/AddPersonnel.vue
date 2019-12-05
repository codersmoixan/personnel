<template>
  <div class="cover" v-show="isShow">
    <div class="zj-add-person">
      <popup-header>
        <span slot="header-left">添加员工信息</span>
      </popup-header>
      <div class="archives">
        <form action="">
          <table class="archives-table">
            <tr class="archives-item">
              <td>
                <div class="tab-item"><label for="username">
                  <table>
                    <tr class="child-item">
                      <td>姓名：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userName"
                          id="username"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item">
                  <table>
                    <tr class="child-item">
                      <td>性别：</td>
                      <td>
                        <el-radio v-model="userRadio" label="1">男</el-radio>
                        <el-radio v-model="userRadio" label="2">女</el-radio>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="tab-item"><label for="userage">
                  <table>
                    <tr class="child-item">
                      <td>年龄：</td>
                      <td>
                        <el-input-number v-model="userAge" controls-position="right" @change="handleChange" :min="1"
                                         :max="100" id="userage"></el-input-number>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item">
                  <table>
                    <tr class="child-item">
                      <td>学历：</td>
                      <td>
                        <el-select v-model="value" clearable placeholder="请选择学历">
                          <el-option
                            v-for="item in ducationOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value" id="usereducation">
                          </el-option>
                        </el-select>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
            <tr class="archives-item">
              <td>
                <div class="tab-item"><label for="userprobation">
                  <table>
                    <tr class="child-item">
                      <td>试用期（月）：</td>
                      <td>
                        <el-input
                          placeholder="请输入试用期（月）"
                          v-model="userProbation"
                          id="userprobation"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item"><label for="userpost">
                  <table>
                    <tr class="child-item">
                      <td>面试职位：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userPost"
                          id="userpost"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
            </tr>
            <tr class="archives-item">
              <td>
                <div class="tab-item"><label for="usernation">
                  <table>
                    <tr class="child-item">
                      <td>民族：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userNation"
                          id="usernation"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item"><label for="useridcard">
                  <table>
                    <tr class="child-item">
                      <td>身份证号码：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="useridcard"
                          id="useridcard"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="tab-item"><label for="userschool">
                  <table>
                    <tr class="child-item">
                      <td>毕业院校：</td>
                      <td>
                        <el-input
                          placeholder="毕业院校"
                          v-model="userSchool"
                          id="userschool"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item"><label for="usernationality">
                  <table>
                    <tr class="child-item">
                      <td>国籍：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userusErnationality"
                          id="usernationality"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="tab-item"><label for="userprovince">
                  <table>
                    <tr class="child-item">
                      <td>省份：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userProvince"
                          id="userprovince"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item"><label for="usercity">
                  <table>
                    <tr class="child-item">
                      <td>市：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userCity"
                          id="usercity"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="tab-item"><label for="useradress">
                  <table>
                    <tr class="child-item">
                      <td>详细地址：</td>
                      <td>
                        <el-input
                          placeholder="请输入内容"
                          v-model="userAdress"
                          id="useradress"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
              <td>
                <div class="tab-item"><label for="userphone">
                  <table>
                    <tr class="child-item">
                      <td>联系方式：</td>
                      <td>
                        <el-input
                          placeholder="请输入联系方式"
                          v-model="userPhone"
                          id="userphone"
                          clearable class="item-input">
                        </el-input>
                      </td>
                    </tr>
                  </table>
                </label></div>
              </td>
            </tr>
          </table>
          <div class="upload">
            <table>
              <tr>
                <td>上传附件</td>
                <td>
                  <el-upload
                    style="display:inline-block"
                    :limit="1"
                    class="upload-demo"
                    ref="upload"
                    accept=".xls,.xlsx"
                    action="/hqx/knowledge/importKnowledge"
                    :file-list="fileList"
                    :http-request="uploadSectionFile"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" icon="el-icon-upload2" type="success" @click="submitUpload">导入</el-button>
                  </el-upload>
                </td>
              </tr>
            </table>
          </div>
          <div class="user-content">
            <label for="usercontent">
              工作经历：
              <el-input type="textarea" v-model="userContent" rows="5" id="usercontent" class="content"></el-input>
            </label>
          </div>
          <div class="user-content">
            <label for="userevaluate">
              面试结果（领导对这个人的印象）：
              <el-input type="textarea" v-model="userEvaluate" rows="5" id="userevaluate" class="content"></el-input>
            </label>
          </div>
          <div class="user-submit">
            <el-button type="primary" class="submit" @click="clickSubmit">提交</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import PopupHeader from 'components/content/PopupHeader'

  export default {
    name: "AddPersonnel",
    data() {
      return {
        isShow: false,
        userName: '',
        userAge: 0,
        userNation: '',
        ducationOptions: [
          {
            value: '选项1',
            label: '高中'
          },
          {
            value: '选项2',
            label: '大专'
          },
          {
            value: '选项3',
            label: '本科'
          },
          {
            value: '选项4',
            label: '研究生'
          },
          {
            value: '选项5',
            label: '博士'
          }
        ],
        value: '',
        userRadio: '1',
        userSchool: '',
        userusErnationality: '',
        userProvince: '',
        userCity: '',
        userAdress: '',
        userPhone: '',
        useridcard: '',
        userContent: '',
        userProbation: '',
        userPost: '',
        userEvaluate: '',
        fileList: [],
        personnelMsg: {}
      }
    },
    beforeCreate() {
      this.$bus.$on('zj_addOnFlag', v => { // 获取开启弹窗开关
        this.isShow = v
      })
      this.$bus.$on('zj_offFlag', v => { // 获取关闭弹窗开关
        this.isShow = v
      } )
    },
    methods: {
      handleChange() {

      },
      submitUpload() {
        let list = document.getElementsByClassName('el-upload-list__item is-ready')
        if(list.length == 0){
          this.$message({
            type:'warning',
            message:"请选择需要导入的模板！"
          })
          return;
        }
        this.$refs.upload.submit();
      },
      uploadSectionFile(param){ // 上传文件
        var fileObj = param.file;
        // FormData 对象
        var form = new FormData();
        // 文件对象
        form.append("file", fileObj);
        form.append("userId", this.userId);
        form.append("userName", this.userName);
        this.GLOBAL.POST('/hqx/knowledge/importKnowledge',form).then(res => {
          if(res.data.success == true){
            this.$message({
              type:'success',
              message:res.data.msg
            })
            this.fileList =[]
          } else {
            this.$message({
              type:'success',
              message:res.data.msg
            })
            this.fileList =[]
          }
        })
      },
      clickSubmit() { // 提交信息
        this.personnelMsg.id = parseInt(Math.random() * 10000000000000)
        this.personnelMsg.name = this.userName
        this.personnelMsg.sex = this.userRadio === '1' ? '男' : '女'
        this.personnelMsg.age = this.userAge
        this.personnelMsg.role = false
        this.personnelMsg.email = 'y.ykqhwk@rgpwubyg.ye'
        this.personnelMsg.department = '销售部'
        this.personnelMsg.native = '江苏省'
        this.personnelMsg.entryTime = new Date()
        this.personnelMsg.state = '未在职'

        this.$store.commit('addData', this.personnelMsg)
        this.closeClick()
        console.log(this.$store.state.list)
      }
    },
    components: {
      PopupHeader
    }
  }
</script>

<style scoped lang="less">
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .2);
    z-index: 99;
    .zj-add-person {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 900px;
      height: 850px;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 5px;

      .title {
        position: relative;
        top: 0;
        right: 0;
        left: 0;
        padding-left: 15px;
        width: 100%;
        height: 60px;
        background-color: cornflowerblue;
        font-size: 20px;
        line-height: 60px;
        box-sizing: border-box;
        z-index: 9;

        .close {
          position: absolute;
          right: 20px;
          bottom: 50%;
          transform: translateY(50%);
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }

      .archives {
        padding: 20px;
        width: 100%;
        height: 790px;
        overflow: auto;

        .archives-item > td {
          margin-left: 20px;
        }

        .tab-item {
          color: #000;
          width: 400px;

          .child-item td:first-of-type {
            width: 100px;
          }

          .child-item td:last-of-type {
            width: 300px;
          }

          .item-input {
            width: 100%;
          }
        }

        .user-content {
          padding-top: 40px;
          color: #000;

          .content {
            margin-top: 10px;
          }
        }

        .upload {
          padding-top: 5px;
          color: #000;

          td:first-of-type {
            width: 100px;
          }
        }

        .user-submit {
          width: 100%;

          .submit {
            margin-top: 30px;
            margin-left: 50%;
            transform: translateX(-50%);
            width: 200px;
          }
        }
      }
    }
  }
</style>