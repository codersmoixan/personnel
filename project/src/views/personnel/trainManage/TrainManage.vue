<template>
  <div class="train-manage" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="train-container">
      <div class="train-top">
        <div class="add-train">
          <el-button type="primary" size="small" icon="el-icon-circle-plus" @click="addTrainClick">添加计划</el-button>
        </div>
        <div class="search">
          <personnel-search @searchData="searchData" :queryParameter="queryParameter"></personnel-search>
        </div>
        <div class="page">
          <pagination></pagination>
        </div>
      </div>
      <div class="train-list">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="计划ID"
            width="120" fixed="left">
          </el-table-column>
          <el-table-column
            prop="name"
            label="计划名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="createdate"
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="startDate"
            label="开始时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="endDate"
            label="结束时间"
            width="180">
          </el-table-column>

          <el-table-column
            prop="budget"
            label="培训预算"
            width="120">
          </el-table-column>
          <el-table-column
            prop=""
            label="负责人"
            width="120">
            <template>
              <div class="text">{{tableData.staffIdInCharge}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="staffInSupervisor"
            label="监督人"
            width="120">
            <template>
              <div class="text">{{tableData.staffIdInSupervisor ? '是' : '否'}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="staffFinance"
            label="财务审批人"
            width="120">
            <template>
              <div class="text">{{tableData.staffIdFinance ? '是' : '否'}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="审批状态"
            width="150">
            <template>
              <div class="status" :style="statusShow">{{tableData.approvalStatus ? '同意' : '驳回'}}</div>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button @click="clickDetailed(scope.row)" type="text" size="small" icon="el-icon-view"></el-button>
              <el-button @click="clickDelete(scope.row)" type="text" size="small" icon="el-icon-delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <add-train-plan v-show="isAddTrainShow" @addTrainShowChange="addTrainShowChange" @refreshList="refreshList"></add-train-plan>
    <check-train v-show="isCheckShow" @checkShowChange="checkShowChange" :handleCheckData="handleCheckData" @refreshList="refreshList"></check-train>
  </div>
</template>

<script>
  import {getTrainPlanList, queryTrainPlan, deleteTrainPlan} from 'network/personnel'

  import PersonnelSearch from 'components/common/search/PersonnelSearch'
  import Pagination from 'components/common/page/Pagination'

  import AddTrainPlan from './childComps/AddTrainPlan'
  import CheckTrain from './childComps/CheckTrain'

  export default {
    name: "TrainManage",
    data() {
      return {
        tableData: [],
        queryParameter: ['ID', 'Name', 'Page', 'PageSize'],
        isAddTrainShow: false,
        isCheckShow: false,
        isEditShow: false,
        handleCheckData: {},
        handleEditData: {},
        fullscreenLoading: false,
        personnelList: []
      }
    },
    computed: {
      statusShow() {
        return this.tableData.approvalStatus ? {'background': '#259cc0'} : {'background': '#fadc08'}
      },
      getPersonnelList() {
        return this.$store.state.personnelList
      }
    },
    watch: {
      '$store.state.personnelList'(newData, oldData) {
        this.personnelList = newData
        console.log(newData);
      },
      keep: true
    },
    created() {
      this._getTrainPlanList(0)
    },
    methods: {
      /**
       * 1. 获取全部培训计划列表
       * */
      _getTrainPlanList(page) {
        console.log(this.personnelList);
        this.fullscreenLoading = true
        let pageSize = 10
        let data = {
          page,
          pageSize
        }
        getTrainPlanList(data).then(res => {
          this.tableData = res.data.list
          this.fullscreenLoading = false
        }).catch(err => {
          console.log(err);
        })
      },
      /**
       * 2. 查询计划
       * */
      searchData(data) {
        // 先判断是否有需要查询的数据
        for(let item in data) {
          if(data[item]) {
            queryTrainPlan(data).then(res => {
              // 查询成功后重新渲染页面
              this.tableData = res.data.list
            }).catch(err => {
              console.log(err);
            })
          }
        }

      },
      /**
       * 3. 添加计划
       * */
      addTrainClick() {
        this.isAddTrainShow = true
      },
      addTrainShowChange(flag) {
        this.isAddTrainShow = flag
      },
      // 添加成功之后重新获取所有计划列表渲染页面
      refreshList() {
        this._getTrainPlanList(0)
      },
      /**
       * 4. 操作当前培训计划详细信息
       * */
      // 查看详情
      clickDetailed(data) {
        // 获取需要操作的当前数据发送给子组件
        this.handleCheckData = data
        this.isCheckShow = true
        console.log(data);
      },
      checkShowChange(flag) {
        this.isCheckShow = flag
      },
      // 删除
      clickDelete(data) {
        // 获取需要操作的 id
        let deleteId = data.id

        this.$confirm('确定删除此条计划吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除指定的数据
          deleteTrainPlan(deleteId).then(res => {
            // 判断是否删除成功
            if(res.code === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              /**
               * 删除成功后需要进行的操作
               * */
              // 重新渲染计划列表
              this._getTrainPlanList(0)
            }else {
              this.$message({
                type: 'error',
                message: '删除失败!'
              });
            }
          }).catch(err => {
            console.log(err);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    components: {
      PersonnelSearch,
      Pagination,
      AddTrainPlan,
      CheckTrain
    }
  }
</script>

<style lang="less">
  .train-manage {
    position: relative;
    width: 100%;
    height: 100%;
    .train-container {
      padding: 10px;
      .train-top {
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        .add-train {
          float: left;
        }
        .search {
          padding-left: 40px;
          margin-top: -10px;
          float: left;
          height: 60px;
        }
        .page {
          float: right;
          margin-top: 5px;
          height: 40px;
        }
      }
      .train-list {
        .status {
          margin-left: 50%;
          transform: translateX(-50%);
          width: 40px;
          text-align: center;
          color: #fff;
          border-radius: 5px;
        }
      }

      .el-table {
        font-size: 13px;
      }
    }
  }
</style>