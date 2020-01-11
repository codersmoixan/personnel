<template>
  <div class="leave-manage pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="leave-top">
      <div class="add-button">
        <el-button type="primary" icon="el-icon-circle-plus" size="small" @click="applyLeave">请假申请</el-button>
      </div>
      <div class="leave-search">
        <personnel-search @searchData="searchData" :queryParameter="queryParameter"></personnel-search>
      </div>
    </div>
    <div class="list">
      <leave-list :leaveList="leaveList"></leave-list>
    </div>
    <apply-leave v-show="applyClose" @closeChange="closeChange"></apply-leave>
  </div>
</template>

<script>
  import LeaveList from './childComps/LeaveList'
  import ApplyLeave from './childComps/ApplyLeave'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  import {getLeaveList, queryLeaveItem} from 'network/personnel'

  export default {
    name: "LeaveManage",
    data() {
      return {
        activeName: 'first',
        applyClose: false,
        leaveList: [],
        queryParameter: ['ID', 'LeaveType', 'Page', 'PageSize'],
        fullscreenLoading: false
      };
    },
    created() {
      this._getLeaveList(0)
    },
    methods: {
      handleClick(tab, event) {

      },
      applyLeave() {
        this.applyClose = true
      },
      isShowChange(data) {
        this.applyClose = data
      },
      closeChange(data) {
        this.applyClose = data
      },
      _getLeaveList(page) {
        this.fullscreenLoading = true
        // 获取全部的请假条
        let pageSize = 5
        getLeaveList(page, pageSize).then(res => {
          this.leaveList = res.data.list
          this.fullscreenLoading = false
        }).catch(err => {
          console.log(err);
        })
      },
      searchData(data) {
        // 根据条件查询指定的请假条
        queryLeaveItem(data).then(res => {
          this.leaveList = res.data.list
          console.log(this.leaveList);
        }).catch(err => {
          console.log(err);
        })
        console.log(data);
      }
    },
    components: {
      LeaveList,
      ApplyLeave,
      PersonnelSearch
    }
  }
</script>

<style scoped lang="less">
  .leave-manage {
    position: relative;
    width: 100%;
    height: 100%;
    .leave-top {
      padding: 10px 0;
    }
    .add-button {
      float: left;
    }
    .leave-search {
      float: left;
      margin-left: 50px;
      margin-top: -10px;
    }
  }

</style>