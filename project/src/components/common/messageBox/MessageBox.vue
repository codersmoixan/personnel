<template>
  <div class="msg-box">
    <el-button type="danger" plain @click="open">删除</el-button>
  </div>
</template>

<script>
  export default {
    name: "MessageBox",
    props: {
      id: {
        type: Number,
        default: 0
      },
      tableData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      open() {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => { // 删除操作
          for(let item in this.tableData) {
            if(this.id === this.tableData[item].id) {
              this.tableData.splice(item, 1)
            }
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>