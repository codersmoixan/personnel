<template>
  <div class="cover" v-show="editShow">
    <div class="edit-data add-view">
      <div class="title content-top">
        <span>修改信息</span>
        <div class="close" @click="editClose">x</div>
      </div>
      <div class="edit-content ov-auto">
        <el-form ref="form" :model="editData" label-width="150px">
          <div>
            <div class="data-title">员工工号</div>
            <table>
              <tr>
                <td class="item-title">员工ID</td>
                <td class="item-input">
                  <el-input  disabled size="small" :value="editData.id"></el-input>
                </td>
              </tr>
            </table>
          </div>
          <div class="basic-data">
            <data-form :viewData="showData" :isDisabled="true" @receiveData="receiveData"></data-form>
          </div>
          <div class="user-content">
            <div class="data-title">其他信息</div>
            <label for="usercontent">
              <div class="text-title">工作经历</div>
              <el-input type="textarea"  rows="5" id="usercontent"
                        class="content"></el-input>
            </label>
            <label for="userevaluate">
              <div class="text-title">面试结果（领导对这个人的印象）</div>
              <el-input type="textarea"  rows="5" id="userevaluate"
                        class="content" disabled></el-input>
            </label>
          </div>
          <div class="edit-submit">
            <el-button type="primary" @click="editClick" class="submit">修改</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <warning v-show="isWarnShow"></warning>
  </div>
</template>

<script>
  import {httpPost} from 'network/quest'

  import DataForm from 'components/content/dataForm/DataForm'
  import Warning from 'components/common/Warning'

  export default {
    name: "EditData",
    data() {
      return {
        editData: {
          name: '',
          age: '',
          workExperience: '',
        },
        editShow: false,
        isWarnShow: false,
        showData: {}
      }
    },
    beforeCreate() {
      this.$bus.$on('zj_editData', v => {
        this.editData = v.editData
        this.editShow = v.editClose
      })
    },
    watch: {
      editData(newval, oldval) {
        this.showData = newval
      }
    },
    methods: {
      editClose() {
        this.editShow = false
      },
      /**
       * 1. 获取子组件传过来的数据
       * */
      receiveData(data) {
        // for(let item in data) {
        //   this.editData[item] = data[item]
        // }
      },
      /**
       * 2. 提交修改的信息
       * */
      editClick() {
        console.log(this.editData);
        // this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   /** 2. 将更新的信息保存到服务器中*/
        //   httpPost('/personnel/staff/update', this.editData).then(res => {
        //     console.log(res);
        //     // 根据服务器响应的状态来判断是否上传成功
        //     if(res.code === 200) {
        //       this.$message({
        //         type: 'success',
        //         message: '修改成功!'
        //       });
        //     }else {
        //       this.$message({
        //         type: 'error',
        //         message: '修改失败!'
        //       });
        //     }
        //   }).catch(err => {
        //     console.log(err);
        //     this.$message({
        //       type: 'error',
        //       message: '修改失败!'
        //     });
        //   })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
        // });
        // /** 3. 提交成功之后关闭修改界面*/
        // this.editShow = false
      }
    },
    components: {
      DataForm,
      Warning
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .edit-data {
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

      .edit-content {
        .data-title {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          font-weight: 700;
          color: #606266;
          border-bottom: 1px solid #ccc;
        }

        table {
          padding-left: 80px;

          tr {
            td {
              height: 40px;
              line-height: 40px;
            }

            td.item-title {
              width: 70px;
              text-align: right;
              padding-right: 10px;
              box-sizing: border-box;
            }

            td.item-input {
              margin-right: 50px;
              width: 205px;
            }
          }
        }

        .edit-submit {
          padding-top: 30px;
          width: 100%;

          .submit {
            width: 200px;
            margin-left: 50%;
            transform: translateX(-50%);
          }
        }
        .text-title {
          padding: 10px 0;
        }
      }
    }
  }
</style>