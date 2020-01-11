<template>
  <div class="cover">
    <div class="add-train-container add-view">
      <div class="content-top">
        <span>添加培训计划</span>
        <div class="close" @click="isAddShowFlag">x</div>
      </div>
      <div class="add-train ov-auto">
        <el-form ref="trainList" :model="trainList" label-width="120px">
          <el-form-item label="计划名称">
            <el-col :span="6">
              <el-input v-model="trainList.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="计划开始时间">
            <div class="block">
              <el-date-picker
                v-model="trainList.approvalDateFinance"
                type="date"
                placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="培训时间">
            <div class="block">
              <el-date-picker
                v-model="trainDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="培训地点">
            <el-col :span="6">
              <el-input v-model="trainList.address"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="培训预算">
            <el-col :span="6">
              <el-input v-model="trainList.budget"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="负责人">
            <el-col :span="6">
              <el-input v-model="trainList.staffIdInCharge"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="监督人">
            <el-col :span="6">
              <el-input v-model="trainList.staffIdInSupervisor"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="财务审批人">
            <el-col :span="6">
              <el-input v-model="trainList.staffIdFinance"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="培训内容">
            <el-col :span="15">
              <el-input v-model="trainList.content" type="textarea" rows="3"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="trainSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {addTrainPlan} from 'network/personnel'

  export default {
    name: "AddTrainPlan",
    data() {
      return {
        isAddTrainShow: false,
        trainList: {
          address: '',
          approvalDateFinance: '',
          approvalStatus: '0',
          approvelSuggest: '1',
          budget: '',
          content: '',
          endDate: '',
          name: '',
          staffIdFinance: '0',
          staffIdInCharge: '',
          staffIdInSupervisor: '',
          startDate: ''
        },
        trainDate: []
      }
    },
    computed: {
      getPersonnelList() {
        // 获取全部的人员列表
        return this.$store.state.personnelList
      }
    },
    methods: {
      /**
       * 1. 关闭添加计划界面
       * */
      isAddShowFlag() {
        this.$emit('addTrainShowChange', this.isAddTrainShow)
      },
      /**
       * 2. 添加培训机会
       * */
      getPersonnelId(list, val, oldObj, newObj) {
        for(let item in list) {
          if(oldObj[val] === list[item].name) {
            newObj[val] = list[item].id
          }
        }
      },
      trainSubmit() {
        let getTrainList = {}

        // 1. 拷贝获取的所有数据到新对象中
        for(let i in this.trainList) {
          getTrainList[i] = this.trainList[i]
        }

        // 2. 获取负责人 监督人 审批人的 id

        this.getPersonnelId(this.getPersonnelList, 'staffIdFinance', this.trainList, getTrainList) // 财务
        this.getPersonnelId(this.getPersonnelList, 'staffIdInCharge', this.trainList, getTrainList) // 负责人
        this.getPersonnelId(this.getPersonnelList, 'staffIdInSupervisor', this.trainList, getTrainList) // 监督人
        console.log(getTrainList);

        // 3. 获取培训计划的开始时间和结束时间
        getTrainList.startDate = this.trainDate[0]
        getTrainList.endDate = this.trainDate[1]

        console.log(getTrainList);
        this.$confirm('确认提交该计划?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 提交申请计划
          addTrainPlan(getTrainList).then(res => {
            console.log(res);
            if(res.code === 200) {
              // 提交成功之后清除表单里面的内容 并且关闭创建新计划的界面
              for(let item in this.trainList) {
                this.trainList[item] = ''
              }
              this.$emit('refreshList')
              this.isAddShowFlag()

              this.$message({
                type: 'success',
                message: '提交成功!'
              });
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
            message: '已取消提交'
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .add-train-container {
      .add-train {
        padding: 30px 10px;
      }
    }
  }
</style>