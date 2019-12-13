<template>
  <div class="plan-list">
    <div class="plan-top">
      <div class="plan-page">
        <pagination @handleCurrentChange="handleCurrentChange"></pagination>
      </div>
      <div class="plan-search">
        <personnel-search @searchData="searchData" :queryParameter="queryParameter"></personnel-search>
      </div>
    </div>
    <el-table
      :data="planList"
      style="width: 100%">
      <el-table-column type="expand" @row-click="currentClick">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="计划名称：" class="item">
              <span v-show="spanShow">{{ props.row.recruitName }}</span>
              <el-input
                :placeholder="props.row.recruitName"
                v-model="editPlan.recruitName"
                clearable v-show="inputShow" size="small" required="true">
              </el-input>
            </el-form-item>
            <el-form-item label="创建时间：" class="item" required>
              <span>{{ props.row.createdate }}</span>
            </el-form-item>
            <el-form-item label="开始时间：" class="item">
              <span>{{ props.row.startDate }}</span>
            </el-form-item>
            <el-form-item label="结束时间:" class="item">
              <span v-show="spanShow">{{ props.row.endDate }}</span>
              <el-date-picker
                v-model="editPlan.endDate"
                type="date"
                :placeholder="props.row.endDate"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="planDate" v-show="inputShow" size="small" aria-required="true">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="计划状态:" class="item">
              <span v-show="spanShow">{{ props.row.status }}</span>
              <el-input
                :placeholder="props.row.status"
                v-model="editPlan.status"
                clearable v-show="inputShow" size="small" aria-required="true">
              </el-input>
            </el-form-item>
            <el-form-item label="计划负责人:" class="item">
              <span v-show="spanShow">{{ props.row.staffIdRecruit }}</span>
              <el-input
                :placeholder="props.row.staffIdRecruit"
                v-model="editPlan.staffIdRecruit"
                clearable v-show="inputShow" size="small" aria-required="true">
              </el-input>
            </el-form-item>
            <el-form-item label="招聘人数:" class="item">
              <span v-show="spanShow">{{ props.row.number }}</span>
              <el-input-number v-model="editPlan.number" controls-position="right" @change="handleChange" :min="1"
                               :max="10" v-show="inputShow" size="small" aria-required="true"></el-input-number>
            </el-form-item>
            <el-form-item label="招聘计划类型:" class="item">
              <span v-show="spanShow">{{ props.row.type }}</span>
              <el-input
                :placeholder="props.row.type"
                v-model="editPlan.type"
                clearable v-show="inputShow" size="small" aria-required="true">
              </el-input>
            </el-form-item>
            <el-form-item label="计划简要:" class="item">
              <span v-html="props.row.descs" class="text" v-show="spanShow"></span>
              <el-input type="textarea" v-model="editPlan.descs" rows="1" v-show="inputShow" class="item"
                        aria-required="true"></el-input>
            </el-form-item>
            <div class="operation">
              <el-button type="primary" plain @click.stop="editItem(props.row.id)">编辑</el-button>
              <el-button type="primary" plain @click="submitItem">提交</el-button>
              <el-button type="danger" plain @click="deletePlanItem(props.row.id)">删除</el-button>
            </div>
          </el-form>
        </template>
      </el-table-column @row-click="currentClick">
      <el-table-column
        label="序号"
        prop="id"
        width="100">
      </el-table-column>
      <el-table-column
        label="计划名称"
        prop="recruitName">
      </el-table-column>
      <el-table-column
        label="招聘类型"
        prop="type">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="createdate">
      </el-table-column>
      <el-table-column
        label="发起人"
        prop="staffIdRecruit">
      </el-table-column>
      <el-table-column
        label="开始时间"
        prop="startDate">
      </el-table-column>
      <el-table-column
        label="结束事件"
        prop="endDate">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Pagination from 'components/common/page/Pagination'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  import {getRecruitPlanList, deletePlan, searchPlan, editPlanData} from 'network/personnel'

  export default {
    name: "PlanList",
    data() {
      return {
        planList: [],
        page: '',
        editPlan: {},
        spanShow: true,
        inputShow: false,
        queryParameter: ['ID', 'RecruitName', 'Page', 'PageSize']
      }
    },
    created() {
      this._getRecruitPlanList(0)
    },
    methods: {
      // 请求全部计划
      _getRecruitPlanList(page) {
        let pageSize = 10
        getRecruitPlanList(page, pageSize).then(res => {
          console.log(res);
          this.planList = res.data.list
        }).catch(err => {
          console.log(err);
        })
      },
      handleCurrentChange(pageNum) { // 分页显示
        this.page = pageNum
        this._getRecruitPlanList(this.page)
      },
      deletePlanItem(id) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 根据 id 删除相应计划
          deletePlan(id).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          this.handleCurrentChange(this.page)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      searchData(data) {
        // 按照指定条件查询数据
        console.log(data);
        searchPlan(data).then(res => {
          this.planList = res.data.list
        }).catch(err => {
          console.log(err);
        })
      },
      handleChange() {

      },
      planDate() {

      },
      editItem(id) {

        for (var item in this.planList) {
          if (this.planList[item].id === id) {
            this.spanShow = false
            this.inputShow = true
            this.editPlan.createdate = this.planList[item].createdate
            this.editPlan.startDate = this.planList[item].startDate
            this.editPlan.id = this.planList[item].id
          }
        }
      },
      submitItem() {
        this.spanShow = true
        this.inputShow = false
        this.$confirm('确认修改此文件吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          editPlanData(this.editPlan).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          this.handleCurrentChange(this.page)
          this.editPlan = {}
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        })
      },
      currentClick() {
        console.log(1);
      }
    },
    components: {
      Pagination,
      PersonnelSearch
    }
  }
</script>

<style scoped lang="less">
  .plan-list {
    .plan-top {
      position: relative;
      width: 100%;
      height: 80px;
      padding: 10px 0 20px 0;

      .plan-page {
        position: absolute;
        top: 15px;
      }

      .plan-search {
        position: absolute;
        right: 20px;
        top: 0;
      }
    }

    .demo-table-expand {
      font-size: 0;

      .item {
        margin: 5px 0;
      }

      .delete {
        display: inline-block;
        margin-left: 40px;
      }
    }

    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
</style>