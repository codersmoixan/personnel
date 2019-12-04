<template>
  <div class="mainPage-container">
    <!-- <el-button>main</el-button> -->
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
  background-color: rgb(248, 248, 248);
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 50px;
  z-index: -1;
  padding: 10px 10px 10px 230px;
}
</style>