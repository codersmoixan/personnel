<template>
  <div class="person-btn">
    <el-row>
      <el-button type="primary" @click="addStaff">增加员工</el-button>
      <el-button type="warning" @click="removeStaff">删除</el-button>
      <el-button type="danger" @click="batchRemove">批量删除</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PersonBtn",
    methods: {
      addStaff() {
        this.$emit('addStaff')
      },
      removeStaff() {
        console.log('removeStaff')
      },
      batchRemove() {
        console.log('batchRemove')
      }
    }
  }
</script>

<style scoped>

</style>