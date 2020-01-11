<template>
  <div class="zj-salary-search-container">
    <el-form ref="form" :model="fromData">
      <div class="base-pad-r">
        <el-input v-model="fromData.searchId" :placeholder="holderData[0]" size="small"></el-input>
      </div>
      <div class="base-pad-r">
        <div class="block">
          <el-date-picker
            v-model="fromData.searchDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期" size="small" value-format="yyyy-MM-dd hh:mm:ss">
          </el-date-picker>
        </div>
      </div>
      <div class="base-pad-r">
        <el-input v-model="fromData.searchPage" :placeholder="holderData[1]" size="small"></el-input>
      </div>
      <div class="base-pad-r">
        <el-input v-model="fromData.searchPageSize" :placeholder="holderData[2]" size="small"></el-input>
      </div>
    </el-form>
    <el-button type="primary" size="small" @click="getFromData">查询</el-button>
    <el-button type="primary" size="small" @click="loadAllData">加载全部</el-button>
  </div>
</template>

<script>
  export default {
    name: "SalarySearch",
    props: {
      holderData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        fromData: {
          searchId: '',
          searchDate: [],
          searchPage: '',
          searchPageSize: ''
        },
        againData: {
          page: 1,
          pageSize: 10
        }
      }
    },
    methods: {
      /** 1. 查询数据*/
      getFromData() {
        let data = {
          staffId: this.fromData.searchId,
          dateScopeStart: this.fromData.searchDate[0],
          dateScopeEnd: this.fromData.searchDate[1],
          page: this.fromData.searchPage,
          pageSize: this.fromData.searchPageSize
        }
        let flag = false // 为true时才能发送请求
        // for(let key in data) {
        //   // 1. 判断用户是否输入查询数据
        //   if(!data[key]) {
        //     return this.$message.warning('请输入要查询的数据！！！')
        //   }
        //   // 2. 都输入了则满足条件发送请求
        //   flag = true
        // }
        if(data.page && data.pageSize && data.staffId) {
          flag = true
        }else {
          return this.$message.warning('请输入要查询的数据！！！')
        }
        flag && this.$emit('getSearchData', data)
        // 3. 清除表单的数据
        for(let item in this.fromData) {
          this.fromData[item] = ''
        }
      },
      /** 2. 加载第一页数据*/
      loadAllData() {
        this.$emit('againRendering', this.againData)
      }
    }
  }
</script>

<style scoped lang="less">
  .zj-salary-search-container {
    padding-bottom: 10px;
    display: flex;
    width: 60%;

    .el-form {
      width: 100%;
      display: flex;

    }

  }
</style>