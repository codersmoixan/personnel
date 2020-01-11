<template>
  <div class="zj-salary-month-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <salary-search :holderData="holderData" @getSearchData="getSearchData"
                   @againRendering="againRendering"></salary-search>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="staffId" label="员工ID" width="100"></el-table-column>
      <el-table-column prop="staffName" label="员工姓名" width="120"></el-table-column>
      <el-table-column prop="staffDepartment" label="员工部门" width="120"></el-table-column>
      <el-table-column prop="salaryBasic" label="基本月工资" width="120"></el-table-column>
      <el-table-column prop="performancePerformance" label="业绩绩效" width="120"></el-table-column>
      <el-table-column prop="performanceOvertime" label="加班绩效" width="120"></el-table-column>
      <el-table-column prop="performanceEvection" label="出差绩效" width="120"></el-table-column>
      <el-table-column prop="bonus" label="奖金" width="120"></el-table-column>
      <el-table-column prop="subsidy" label="补助" width="120"></el-table-column>
      <el-table-column prop="lateDeduct" label="迟到扣除" width="120"></el-table-column>
      <el-table-column prop="earlyDeduct" label="早退扣除" width="120"></el-table-column>
      <el-table-column prop="leaveDeduct" label="请假扣除" width="120"></el-table-column>
      <el-table-column prop="outWorkDeduct" label="旷工扣除" width="120"></el-table-column>
      <el-table-column prop="staffCountPerson" label="负责人（工资计算）" width="150"></el-table-column>
      <el-table-column prop="staffUpdatePerson" label="负责人（工资修改）" width="150"></el-table-column>
      <el-table-column prop="status" label="状态（财务审批）" width="150"></el-table-column>
      <el-table-column prop="date" label="应发日期" width="150"></el-table-column>
      <el-table-column prop="dateReality" label="实发日期" width="150"></el-table-column>
      <el-table-column prop="salaryShould" label="应发工资" width="120"></el-table-column>
      <el-table-column fixed="right" prop="salaryReality" label="实发工资" width="120"></el-table-column>
    </el-table>
    <pagination :pageParams="pageParams"></pagination>
  </div>
</template>

<script>
  import {getSalaryMonth, querySakaryMonthData} from 'network/personnel'

  import SalarySearch from 'components/content/salary/SalarySearch'
  import Pagination from 'components/common/pagination/Pagination'

  export default {
    name: "SalaryDay",
    data() {
      return {
        tableData: [],
        fullscreenLoading: false,
        page: 1,
        pageSize: 10,
        holderData: ['ID', 'PAGE', 'PAGESIZE'],
        pageParams: {
          total: 0,
          pageSize: [10],
          pageNum: 1
        }
      }
    },
    created() {
      this._getSalaryMonth(this.page, this.pageSize)
    },
    methods: {
      /** 1.查询所有数据*/
      _getSalaryMonth(page, pageSize) {
        this.fullscreenLoading = true
        let data = {
          page,
          pageSize
        }
        // 1. 发送请求
        getSalaryMonth(data).then(res => {
          // 2. 先清除原来的数据
          this.tableData = []
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
      /** 2. 查询指定数据*/
      getSearchData(data) {
        // 1. 处理查询的参数
        let searchData = {}
        for(let key in data) {
          searchData[key] = data[key]
        }
        searchData.id = ''
        console.log(searchData);
        // 2. 发送请求
        querySakaryMonthData(searchData).then(res => {
          console.log(res);
          if(res.code === 200) {
            // 清除原先显示的数据
            this.tableData = []
            // 查询成功渲染列表
            this.tableData.push(...res.data.list)
            this.$message.success('查询成功！！！')
          }else {
            this.$message.warning('没有此数据！！！')
          }
        }).catch(err => {
          this.$message.warning('查询失败！！！')
          console.log(err);
        })
      },
      /** 3. 重新渲染*/
      againRendering(data) {
        this._getSalaryMonth(data.page, data.pageSize)
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