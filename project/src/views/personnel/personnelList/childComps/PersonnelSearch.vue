<template>
  <div class="zj-p-search">
    <div class="demo-input-size">
      <el-input
        size="large"
        placeholder="开始日期"
        v-model="input1" class="input">
      </el-input>
      <el-input
        size="large"
        placeholder="结束日期"
        v-model="input2" class="input">
      </el-input>
      <el-input
        size="large"
        placeholder="账号"
        v-model="input2" class="input">
      </el-input>
      <el-button type="primary" class="btn">搜索</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonnelSearch",
    data() {
      return {
        input1: '',
        input2: ''
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
        width: 250px;
      }
    }

  }

</style>
