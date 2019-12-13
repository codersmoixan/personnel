<template>
  <div class="leave-list">
    <el-table
      :data="leaveList"
      border
      style="width: 100%">
      <el-table-column
        prop="staffLeave"
        label="请假员工"
        width="100">
      </el-table-column>
      <el-table-column
        prop="leaveDate"
        label="请假开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="请假结束时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="leaveCause"
        label="请假事因">
      </el-table-column>
      <el-table-column
        prop="type"
        label="请假类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="审批状态"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="审批意见">
      </el-table-column>
      <el-table-column
        prop="address"
        label="审批时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="审批"
        width="180">
      </el-table-column>
      <el-table-column
        prop="staffApprover"
        label="审批人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "LeaveList",
    props: {
      leaveList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .leave-list {
    width: 100%
  }
</style>