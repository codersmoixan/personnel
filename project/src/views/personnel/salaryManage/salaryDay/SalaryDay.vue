<template>
  <div class="zj-salary-data-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <salary-search :holderData="holderData" @getSearchData="getSearchData"
                   @againRendering="againRendering"></salary-search>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="staffId" label="员工ID" width="100"></el-table-column>
      <el-table-column prop="staffName" label="员工姓名" width="120"></el-table-column>
      <el-table-column prop="staffDepartment" label="员工部门" width="120"></el-table-column>
      <el-table-column prop="type" label="薪资类型" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="salaryBasic" label="基本日工资" width="120"></el-table-column>
      <el-table-column prop="performanceOvertime" label="加班绩效" width="120"></el-table-column>
      <el-table-column prop="performancePerformance" label="业绩绩效" width="120"></el-table-column>
      <el-table-column prop="performanceEvection" label="出差绩效" width="120"></el-table-column>
      <el-table-column prop="bonus" label="奖金" width="120"></el-table-column>
      <el-table-column prop="lateDeduct" label="迟到扣除" width="120"></el-table-column>
      <el-table-column prop="earlyDeduct" label="早退扣除" width="120"></el-table-column>
      <el-table-column prop="leaveDeduct" label="请假扣除" width="120"></el-table-column>
      <el-table-column prop="outWorkDeduct" label="旷工扣除" width="120"></el-table-column>
      <el-table-column fixed="right" prop="amount" label="累积金额" width="120"></el-table-column>
    </el-table>
    <pagination :pageParams="pageParams"></pagination>
  </div>
</template>

<script>
  import {getSalaryDay, querySalaryDayData} from 'network/personnel'

  import SalarySearch from 'components/content/salary/SalarySearch'
  import Pagination from 'components/common/pagination/Pagination'

  export default {
    name: "SalaryDay",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        fullscreenLoading: false,
        holderData: ['ID', 'PAGE', 'PAGESIZE'],
        pageParams: {
          total: 0,
          pageSize: [10],
          pageNum: 1
        }
      }
    },
    created() {
      this._getSalaryDay(this.page, this.pageSize)
    },
    methods: {
      /** 1.获取工资列表*/
      _getSalaryDay(page, pageSize) {
        this.fullscreenLoading = true
        // 清空原来的数据
        this.tableData = []
        const data = {
          page,
          pageSize
        }
        getSalaryDay(data).then(res => {
          // 请求成功
          if (res.code === 200) {
            this.fullscreenLoading = false
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
          }
        }).catch(err => {
          console.log(err);
        })
      },
      /**2. 查询数据*/
      getSearchData(data) {
        // 1. 处理查询参数
        let searchData = {}
        for(let key in data) {
          searchData[key] = data[key]
        }
        searchData.id = ''
        // 2. 发送请求
        querySalaryDayData(searchData).then(res => {
          console.log(res);
          if(res.code === 200) {
            // 查询成功
            // 清除渲染列表数据
            this.tableData = []
            // 查询到的数据渲染在列表中
            this.tableData.push(...res.data.list)
            this.$message.success('查询成功！！！')
          }else {
            // 查询失败
            this.$message.warning('没有此数据！！！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.warning('查询失败！！！')
        })
      },
      /**3. 重新渲染*/
      againRendering(data) {
        this._getSalaryDay(data.page, data.pageSize)
      }
    },
    components: {
      SalarySearch,
      Pagination
    }
  }
</script>

<style scoped>

</style>