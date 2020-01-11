<template>
  <div class="zj-p-search">
    <el-form label-width="80px">
      <div class="demo-input-size">
        <el-input
          size="small"
          :placeholder="queryParameter[0]"
          v-model="formSearch.searcheId" class="input">
        </el-input>
        <el-input
          size="small"
          :placeholder="queryParameter[1]"
          v-model="formSearch.searchName" class="input">
        </el-input>
        <el-input
          size="small"
          :placeholder="queryParameter[2]"
          v-model="formSearch.page" class="input">
        </el-input>
        <el-input
          size="small"
          :placeholder="queryParameter[3]"
          v-model="formSearch.pageSize" class="input">
        </el-input>
        <el-button type="primary" class="btn" @click="searchClick" size="small">搜索</el-button>
        <el-button type="primary" class="btn" @click="getAllData" size="small">加载全部</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "PersonnelSearch",
    props: {
      queryParameter: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        formSearch: {
          searchId: '',
          searchName: '',
          page: '',
          pageSize: ''
        },
        againData: {
          page: 1,
          pageSize: 10
        }
      }
    },
    methods: {
      // 发送查询的数据
      searchClick() {
        let flag = false
        // 如果用户没有输入需要查询的参数，则不能发送查询的请求，并提示用户输入正确的参数
        for(let key in this.formSearch) {
          if(this.formSearch[key]) flag = true
        }
        flag ? this.$emit('searchData', this.formSearch) : this.$message.warning('请输入需要查询的参数！！！')
        this.formSearch = {}
      },
      // 加载全部数据
      getAllData() {
        this.$emit('againRendering', this.againData)
      }
    }
  }
</script>

<style scoped lang="less">
  .zj-p-search {
    .demo-input-size {
      padding-bottom: 10px;

      .input {
        margin-right: 10px;
        width: 150px;
      }
    }

  }

</style>
