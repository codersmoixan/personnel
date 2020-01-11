<template>
  <div class="cover">
    <div class="check-container add-view">
      <div class="content-top">
        <span>{{handleCheckData.name}}</span>
        <div class="close" @click="closeCheck">x</div>
      </div>
      <div class="check-data">
        <form action="">
          <div class="data">
            <div class="basic">
              <div class="header">
                <div class="title">计划基本信息</div>
                <div class="add">
                  <el-button type="primary" icon="el-icon-edit" size="small" plain @click="editClick">编辑</el-button>
                </div>
              </div>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="item-title">培训计划名字</td>
                  <td>
                    <div v-show="!editShow">{{handleCheckData.name}}</div>
                    <div>
                      <el-input v-model="editData.name" placeholder="请输入内容" v-show="editShow"></el-input>
                    </div>
                  </td>
                  <td class="item-title">创建时间</td>
                  <td>
                    <div>{{handleCheckData.createdate}}</div>
                  </td>
                </tr>
                <tr>
                  <td class="item-title">开始时间</td>
                  <td>
                    <div v-show="!editShow">{{handleCheckData.startDate}}</div>
                    <div class="block">
                      <el-date-picker
                        v-model="editData.startDate"
                        type="date"
                        placeholder="选择日期" v-show="editShow" value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>
                  </td>
                  <td class="item-title">结束时间</td>
                  <td>
                    <div v-show="!editShow">{{handleCheckData.endDate}}</div>
                    <div class="block">
                      <el-date-picker
                        v-model="editData.endDate"
                        type="date"
                        placeholder="选择日期" v-show="editShow" value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="item-title">培训地点</td>
                  <td>
                    <div v-show="!editShow">{{handleCheckData.address}}</div>
                    <div>
                      <el-input v-model="editData.address" placeholder="请输入内容" v-show="editShow"></el-input>
                    </div>
                  </td>
                  <td class="item-title">培训预算</td>
                  <td>
                    <div v-show="!editShow">{{handleCheckData.budget}}</div>
                    <div>
                      <el-input v-model="editData.budget" placeholder="请输入内容" v-show="editShow"></el-input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="item-title">负责人</td>
                  <td>
                    <div v-show="!editShow">{{manageName.staffIdInCharge}}</div>
                    <div>
                      <el-input v-model="editData.staffInCharge" placeholder="请输入内容" v-show="editShow"></el-input>
                    </div>
                  </td>
                  <td class="item-title">监督人</td>
                  <td>
                    <div v-show="!editShow">{{manageName.staffIdInSupervisor}}</div>
                    <div>
                      <el-input v-model="editData.staffInSupervisor" placeholder="请输入内容" v-show="editShow"></el-input>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="item-status">
              <div class="title">审批状态</div>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="item-title">审批状态</td>
                  <td>
                    <div :style="statusShow" class="status">{{handleCheckData.approvalStatus ? '通过' : '驳回'}}</div>
                  </td>
                  <td class="item-title">审批时间</td>
                  <td>{{handleCheckData.approvalDateFinance}}</td>
                </tr>
                <tr>
                  <td class="item-title">审批人姓名</td>
                  <td>{{manageName.staffIdFinance}}</td>
                  <td class="item-title">审批意见</td>
                  <td>{{handleCheckData.approvalDateFinance}}</td>
                </tr>
              </table>
            </div>
            <div class="personnel">
              <div class="header">
                <div class="title">参加培训员工</div>
                <div class="add">
                  <el-button type="primary" icon="el-icon-circle-plus" size="small" plain @click="addPersonnel">添加培训员工
                  </el-button>
                </div>
              </div>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="item-title">员工ID</td>
                  <td></td>
                  <td class="item-title">员工姓名</td>
                  <td></td>
                </tr>
                <tr v-show="addPersonnelShow">
                  <td class="item-title">员工ID</td>
                  <td>
                    <div>
                      <el-input v-model="addPersonnelData.staffId" placeholder="ID"></el-input>
                    </div>
                  </td>
                  <td class="item-title">员工姓名</td>
                  <td>
                    <div>
                      <el-input placeholder="NAME"></el-input>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="content">
              <div class="title">培训内容</div>
              <el-input type="textarea" v-model="handleCheckData.content" rows="5" :disabled="!editShow"></el-input>
              <div class="title">培训结果</div>
              <el-input type="textarea" v-model="handleCheckData.result" rows="5" :disabled="!editShow"></el-input>
            </div>
            <div class="edit-button">
              <el-button type="primary" @click="submitData" :disabled="!submitShow" size="small">提交</el-button>
              <el-button type="primary" @click="emptyInput" size="small">清空</el-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPersonnelTrainPlanList, updateTrainPlan, addPlanPersonnel} from 'network/personnel'

  export default {
    name: "CheckDepartment",
    props: {
      handleCheckData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      handleCheckData(newVal, oldVal) { // 监听父组件传过来的值 然后将值复制到需要提交的对象中
        this.editData.id = newVal.id
        this.editData.createdate = newVal.createdate
        this.editData.approvalStatus = newVal.approvalStatus
        this.editData.approvalDateFinance = newVal.approvalDateFinance
        this.editData.content = newVal.content
        // 获取监督人 负责人 审批人
        this.editData.staffIdInCharge = newVal.staffIdInCharge
        this.editData.staffIdFinance = newVal.staffIdFinance
        this.editData.staffIdInSupervisor = newVal.staffIdInSupervisor

        this.addPersonnelData.trainingId = newVal.id
        this.currentId = newVal.id // 当前计划的ID

      }
    },
    data() {
      return {
        editShow: false,
        editData: {
          name: '',
          address: '',
          budget: '',
          staffInCharge: '',
          staffInSupervisor: '',
          startDate: '',
          endDate: ''
        },
        addPersonnelShow: false,
        addPersonnelData: {
          staffId: ''
        },
        submitShow: false,
        currentId: '',
        manageName: {
          staffIdInCharge: '', // 负责人姓名
          staffIdFinance: '', // 审批人姓名
          staffIdInSupervisor: '' // 监督人姓名
        }
      }
    },
    computed: {
      statusShow() {
        return this.handleCheckData.approvalStatus ? {'background': '#259cc0'} : {'background': '#fadc08'}
      },
      getPersonnelList() {
        // 获取全部员工数据
        return this.$store.state.personnelList
      }
    },
    created() {
      // 1. 页面创建完毕获取培训员工的数据
      this._getPersonnelTrainPlanList(0)
    },
    mounted() {
      // 将获取到的管理员id转换为姓名
      this.getAdmin(this.getPersonnelList, this.editData, this.manageName, 'staffIdInCharge')
      this.getAdmin(this.getPersonnelList, this.editData, this.manageName, 'staffIdFinance')
      this.getAdmin(this.getPersonnelList, this.editData, this.manageName, 'staffIdInSupervisor')
    },
    methods: {
      // 关闭当前页面
      closeCheck() {
        let isCheckShow = false
        this.$emit('checkShowChange', isCheckShow)
      },
      /**
       * 1. 获取参加培训的全部员工
       * */
      _getPersonnelTrainPlanList(page) {
        console.log(this.currentId);
        let pageSize = 100
        let data = {
          id: this.currentId,
          page,
          pageSize
        }
        getPersonnelTrainPlanList(data).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },
      /**
       * 2. 编辑计划
       * */
      editClick() {
        this.editShow = !this.editShow
        this.submitShow = !this.submitShow // 如果没有进行编辑将不会进行提交
      },
      // 添加培训员工
      addPersonnel() {
        this.addPersonnelShow = !this.addPersonnelShow
        this.submitShow = !this.submitShow // 如果没有进行编辑将不会进行提交
      },
      /**
       * 3. 提交修改信息
       * */
      submitData() {
        let submitData = ''
        if (this.editShow) {
          // 没有修改的项将之前的数据赋给新数据
          submitData = this.editData
          this.sendRequest(updateTrainPlan(submitData), this.editData)
        } else if (this.addPersonnelShow) {
          submitData = this.addPersonnelData
          this.sendRequest(addPlanPersonnel(submitData), this.addPersonnelData)
        }
      },
      /**
       * 遍历全部员工的数据拿取监督人 负责人
       * */
      getAdmin(list, oldObj, newObj, attr) {
        // 遍历全部员工的数据拿取监督人 负责人
        for(let item in list) {
          if(oldObj[attr] === list[item].staffIdInCharge) {
            newObj[attr] = list[item].name
            console.log(list[item].staffIdInCharge);
          }
        }
      },
      /**
       * 发送请求
       * */
      sendRequest(request, data) {
        // 提交数据
        this.$confirm('确认修改该计划?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 发送修改计划请求
          request.then(res => {
            console.log(res);
            if (res.code === 200) {
              this.$message({
                type: 'success',
                message: '修改成功!'
              });
              /**
               * 提交成功之后的逻辑处理
               * */
              // 1. 提交成功后清除表单里面的数据

              for(let i in data) {
                data[i] = ''
              }
              // 2. 关闭编辑选项
              if(this.editShow) {
                this.editShow = false
                this.submitShow = false
              }else if(this.addPersonnelShow) {
                this.addPersonnelShow = false
                this.submitShow = false
              }
              // 3. 关闭当前页面
              this.closeCheck()
              console.log(this.editShow);
              console.log(this.addPersonnelShow);
              // 4. 重新渲染计划列表
              this.$emit('refreshList')
            } else if (res.code === 500) {
              // 修改失败
              this.$message({
                type: 'error',
                message: '修改失败!'
              });
            }
          }).catch(err => {
            console.log(err);
            // 修改失败
            this.$message({
              type: 'error',
              message: '修改失败!'
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
      emptyInput() { // 清空表单里面的内容
        // 提交数据
        this.$confirm('确认清空修改的数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 关闭编辑表单并清除里面的内容
          if (this.editShow) {
            this.editShow = false
            for (let i in this.editData) {
              this.editData[i] = ''
            }
          } else if (this.addPersonnelShow) {
            this.addPersonnelShow = false
            this.personnelData.id = ''
            this.personnelData.name = ''
          }

          this.$message({
            type: 'success',
            message: '清空成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消清空'
          });
        });

      }
    }
  }
</script>

<style lang="less">
  .cover {
    .check-container {

      .check-data {
        padding: 20px;
        width: 100%;
        height: calc(100% - 50px);
        overflow: auto;

        .data {
          .basic {
          }

          .personnel {

          }

          .header {
            width: 100%;

            .title {
              float: left;
            }

            .add {
              float: right;
              margin-top: 15px;
            }
          }

          table {
            border: 1px solid #ccc;
            width: 100%;
            font-size: 13px;
            border-collapse: collapse;

            tr {
              width: 100%;
              height: 40px;

              td {
                padding: 0 20px;
                width: 25%;
                box-sizing: border-box;
                border: 1px solid #ccc;
              }

              td.item-title {
                background-color: #eee;
              }

              .status {
                width: 50px;
                height: 25px;
                text-align: center;
                line-height: 25px;
                border-radius: 5px;
              }
            }
          }
        }

        .title {
          padding: 20px 0;
          font-weight: 700;
          font-size: 16px;
          color: #666;
        }

        .edit-button {
          padding-top: 30px;
        }

        /*修改element-ui样式*/
        .el-input__inner {
          -webkit-appearance: none;
          background-color: #FFF;
          background-image: none;
          border-radius: 4px;
          border: 1px solid #DCDFE6;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #606266;
          display: inline-block;
          font-size: inherit;
          height: 30px;
          line-height: 30px;
          outline: 0;
          -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
          transition: border-color .2s cubic-bezier(.645,.045,.355,1);
          width: 100%;
        }
        .el-input__icon {
          height: 100%;
          width: 25px;
          text-align: center;
          -webkit-transition: all .3s;
          transition: all .3s;
          line-height: 30px;
        }
      }
    }
  }
</style>