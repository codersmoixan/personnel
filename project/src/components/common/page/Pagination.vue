<template>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000" :page-size="1"  @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data() {
      return {
        pageNum: 1
      }
    },
    methods: {
      handleCurrentChange(page) { // 点击页码加载更多
        // 1. 获取当前页码
        let pageNum = page
        // 2. 将页码发送出去
        this.$emit('handleCurrentChange', pageNum)
      }
    }
  }
</script>

<style scoped>

</style>