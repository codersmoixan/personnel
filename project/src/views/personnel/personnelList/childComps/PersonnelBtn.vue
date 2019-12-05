<template>
  <div class="person-btn">
    <el-row>
      <el-button type="primary" @click="addStaff">增加员工信息</el-button>
      <el-button type="danger" @click="batchRemove">批量删除</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PersonnelBtn",
    methods: {
      addStaff() {
        this.$emit('addStaff')
      },
      batchRemove() {
        this.$emit('batchRemove')
      }
    }
  }
</script>

<style scoped lang="less">
  .person-btn {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>