<template>
  <div class="personnel-c-work pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="staffId"
          label="员工ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffName"
          label="员工姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffPosition"
          label="员工职位"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffDepartment"
          label="员工部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="workStartTime"
          label="上班打卡时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="workStartAddress"
          label="上班打卡地点"
          width="100">
        </el-table-column>
        <el-table-column
          prop="workEndTime"
          label="下班打卡时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="workEndAddress"
          label="下班打卡地点"
          width="100">
        </el-table-column>
        <el-table-column
          prop=""
          label="是否迟到"
          width="80">
          <template>
            <div>{{tableData.ifLate ? '迟到' : '未迟到'}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="是否出差"
          width="80">
          <template>
            <div>{{tableData.ifBusiness ? '出差' : '未出差'}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="是否加班"
          width="80">
          <template>
            <div>{{tableData.ifOvertime ? '加班' : '未加班'}}</div>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  import {getAttendanceList} from 'network/personnel'
  export default {
    name: "PersonnelCwork",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        fullscreenLoading: false
      }
    },
    created() {
      this._getAttendanceList()
    },
    methods: {
      /**
       * 1. 查询所有的考勤列表
       * */
      _getAttendanceList() {
        this.fullscreenLoading = true
        let data = {
          page: this.page,
          pageSize: this.pageSize
        }
        // 1. 请求数据
        getAttendanceList(data).then(res => {
          // 2. 判断是否成功
          if(res.code === 200) {
            this.fullscreenLoading = false
            this.tableData.push(...res.data.list)
          }
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .personnel-c-work {
    width: 100%;

    /*修改 element-ui 样式*/

    .el-table {
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      width: 100%;
      max-width: 100%;
      font-size: 13px;
      color: #606266;
    }
  }
</style>