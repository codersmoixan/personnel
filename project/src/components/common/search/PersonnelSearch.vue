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
          searcheId: '',
          searchName: '',
          page: '',
          pageSize: ''
        }
      }
    },
    methods: {
      searchClick() {
        this.$emit('searchData', this.formSearch)
      }
    }
  }
</script>

<style scoped lang="less">
  .zj-p-search {

    .demo-input-size {
      padding: 10px 0;

      .input {
        margin-right: 10px;
        width: 150px;
      }
    }

  }

</style>
