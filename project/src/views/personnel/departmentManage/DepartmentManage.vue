<template>
  <div class="department-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="department-top">
      <div class="add-btn">
        <el-button type="primary" size="small" icon="el-icon-circle-plus" @click="applyClick">申请添加部门</el-button>
      </div>
      <div class="search">
        <personnel-search :queryParameter="queryParameter" @searchData="searchData"></personnel-search>
      </div>
      <div class="department-page">
        <pagination @handleCurrentChange="handleCurrentChange"></pagination>
      </div>
    </div>
    <div class="list">
      <el-table
        :data="departmentList"
        border
        style="width: 100%">
        <el-table-column
          fixed="left"
          prop="id"
          label="部门ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="部门名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="createdate"
          label="创建时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="number"
          label="部门人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="staffInCharge"
          label="负责人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffCreateperson"
          label="创建人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="部门状态"
          width="150">
        </el-table-column>
        <el-table-column
          prop="staffApproval"
          label="部门审批人"
          width="150">
        </el-table-column>
        <el-table-column
          prop=""
          label="审批状态"
          width="150">
          <template slot-scope="scope">
            <div class="approval-status">{{scope.row.approvalStatus ? '同意' : '驳回'}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="staffIdApproval"
          label="董事长审批"
          width="150">
        </el-table-column>
        <el-table-column
          prop="approvalSuggest"
          label="审批意见"
          width="180">
        </el-table-column>
        <el-table-column
          prop="approvalDate"
          label="审批时间"
          width="160">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.row)" type="text" size="small" icon="el-icon-edit" class="icon handle-edit"></el-button>
            <el-button type="text" size="small" @click="deleteClick(scope.row)" icon="el-icon-delete" class="icon handle-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <apply-department v-show="addShow" @addShowChange="addShowChange" @updateList="updateList"></apply-department>
    <update-department v-show="updateShow" @editShowChange="editShowChange" :itemData="itemData"></update-department>
  </div>
</template>

<script>

  import PersonnelSearch from 'components/common/search/PersonnelSearch'
  import Pagination from 'components/common/page/Pagination'
  import ApplyDepartment from './childComps/ApplyDepartment'
  import UpdateDepartment from './childComps/UpdateDepartment'

  import {getDepartmentList, queryDepartmentList, deleteDepartmen} from 'network/personnel'

  export default {
    name: "DepartmentManage",
    data() {
      return {
        departmentList: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        queryParameter: ['ID', 'DepartmentName', 'Page', 'PageSize'],
        addShow: false,
        updateShow: false,
        itemData: {},
        pageNum: 0,
        fullscreenLoading: false
      }
    },
    created() {
      this._getDepartmentList(this.pageNum)
    },
    methods: {

      /**
       * 1. 获取公司全部部门
       * */
      _getDepartmentList(page) {
        this.fullscreenLoading = true
        let pageSize = 10
        getDepartmentList(page, pageSize).then(res => {
          this.departmentList = res.data.list
          this.fullscreenLoading = false
        }).catch(err => {
          console.log(err);
        })
      },

      /**
       * 2. 根据条件查询某个部门列表
       * */
      searchData(data) {
        queryDepartmentList(data).then(res => {
          this.departmentList = res.data.list
        }).catch(err => {
          console.log(err);
        })
      },

      /**
       * 3. 分页显示数据
       * */
      handleCurrentChange() {

      },

      /**
       * 4. 申请添加部门界面开关
       * */
      applyClick() {
        this.addShow = true
      },
      addShowChange(flag) {
        this.addShow = flag
      },
      // 添加成功后重新渲染页面
      updateList() {
        this._getDepartmentList(this.pageNum)
      },

      /**
       * 5. 编辑部门信息
       * */
      editClick(data) {
        console.log(data);
        this.updateShow = true
        this.itemData = data
      },
      // 编辑界面开关
      editShowChange(flag) {
        this.updateShow = flag
      },

      /**
       * 6. 删除部门
       * */
      deleteClick(data) {
        // 获取需要删除部门的id
        let deleteId = data.id

        this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除部门
          deleteDepartmen(deleteId).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })

          // 删除成功后重新渲染数据
          this._getDepartmentList(this.pageNum)

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
      }
    },
    components: {
      PersonnelSearch,
      Pagination,
      ApplyDepartment,
      UpdateDepartment
    }
  }
</script>

<style scoped lang="less">
  .department-container {
    position: relative;
    height: 100%;
    .department-top {
      .add-btn {
        float: left;
        margin-top: 10px;
      }
      .search {
        float: left;
        padding-left: 50px;
      }
      .department-page {
        float: right;
        margin-top: 10px;
      }
    }
    .icon {
      padding: 0 5px;
      font-size: 16px;
    }
  }
</style>