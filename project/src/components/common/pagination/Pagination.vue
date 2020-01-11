<template>
  <div class="page-container base-f-r base-mar-t-ten">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleNumChange"
      :current-page="pageParams.pageNum"
      :page-sizes="pageParams.pageSize"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageParams.total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      pageParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handleSizeChange(size) {
        this.$emit('getPageSize', size)
      },
      handleNumChange(num) {
        this.$emit('getPageNum', num)
      }
    }
  }
</script>

<style scoped>

</style>