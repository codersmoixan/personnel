<template>
  <h2>员工活动</h2>
</template>

<script>
  import {getStaffActivityList} from 'network/personnel'

  export default {
    name: "StaffActivity",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10
      }
    },
    created() {
      this._getStaffActivityList(this.page, this.pageSize)
    },
    methods: {
      /**1. 获取员工活动列表*/
      _getStaffActivityList(page, pageSize) {
        let data = {
          page,
          pageSize
        }
        // 发送请求
        getStaffActivityList(data).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>