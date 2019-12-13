<template>
  <div class="personnel-c-work">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="personnelId"
        label="员工编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="post"
        label="职务">
      </el-table-column>
      <el-table-column
        prop="clockInTime"
        label="上班打卡时间">
      </el-table-column>
      <el-table-column
        prop="clockInPlace"
        label="上班打卡地点">
      </el-table-column>
      <el-table-column
        prop="clockOutTime"
        label="下班打卡时间">
      </el-table-column>
      <el-table-column
        prop="clockOutPlace"
        label="下班打卡地点">
      </el-table-column>
      <el-table-column
        prop="leaveErrand ? '是' : '否'"
        label="是否出差">
      </el-table-column>
      <el-table-column
        prop="overtime"
        label="是否加班">
      </el-table-column>
      <el-table-column
        prop="late"
        label="是否迟到">
      </el-table-column>
      <el-table-column
        prop="department"
        label="所在部门">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "PersonnelCwork",
    data() {
      return {
        tableData: [
          {
            id: 1,
            personnelId: 2019120711341,
            name: '王刚',
            post: '普通职员',
            clockInTime: '8:00',
            clockInPlace: '孵化园',
            clockOutTime: '18:00',
            clockOutPlace: '孵化园',
            leaveErrand: false,
            overtime: true,
            late: false,
            department: '销售部'
          },
          {
            id: 2,
            personnelId: 2019120711342,
            name: '王刚',
            post: '普通职员',
            clockInTime: '8:00',
            clockInPlace: '孵化园',
            clockOutTime: '18:00',
            clockOutPlace: '孵化园',
            leaveErrand: false,
            overtime: true,
            late: false,
            department: '销售部'
          },
          {
            id: 3,
            personnelId: 2019120711343,
            name: '王刚',
            post: '普通职员',
            clockInTime: '8:00',
            clockInPlace: '孵化园',
            clockOutTime: '18:00',
            clockOutPlace: '孵化园',
            leaveErrand: false,
            overtime: true,
            late: false,
            department: '销售部'
          },
          {
            id: 4,
            personnelId: 2019120711344,
            name: '王刚',
            post: '普通职员',
            clockInTime: '8:00',
            clockInPlace: '孵化园',
            clockOutTime: '18:00',
            clockOutPlace: '孵化园',
            leaveErrand: false,
            overtime: true,
            late: false,
            department: '销售部'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .personnel-c-work {
    width: 100%;
  }
</style>