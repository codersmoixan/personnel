<template>
  <div class="header-container">
    <div class="left"><i class="el-icon-caret-left"></i></div>
    <div class="right">
      <div class="sign-out">
        <el-button type="text" size="small" @click="signOut">退出</el-button>
      </div>
      <i class="el-icon-rank"></i>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      signOut() {
        this.$confirm('确定退出当前账号吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 1. 清除本地的用户令牌
          window.sessionStorage.clear('token')
          // 2. 跳转到登录界面
          this.$router.replace('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 220px;
    display: flex;
    justify-content: space-between;

    .left, .right {
      margin: 0 30px 0 20px;
      color: #000;
      i {
        font-size: 20px;
      }
      .sign-out {
        position: relative;
        width: 50px;
        height: 100%;
        margin-top: 10px;
        line-height: 100%;
        text-align: center;
        color: #ccc;
        cursor: pointer;
      }
      .sign-out:hover {
        color: #3a8ee6;
      }
    }
  }
</style>