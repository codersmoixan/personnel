<template>
  <div class="mainPage-container">
    <el-button>main</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.mainPage-container {
  width: 100%;
  background-color: #001529;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 220px;
  margin-top: 50px;
  z-index: -1;
}
</style>