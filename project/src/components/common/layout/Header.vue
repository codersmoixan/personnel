<template>
  <div class="header-container">
    <div class="left"><i class="el-icon-caret-left"></i></div>
    <div class="right"><i class="el-icon-rank"></i></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #ccc;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 220px;
  display: flex;
  justify-content: space-between;
  z-index: -1;
  .left, .right {
    margin: 0 30px 0 20px;
     i {
       font-size: 20px;
     }
  }
}
</style>