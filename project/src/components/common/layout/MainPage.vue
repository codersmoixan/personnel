<template>
  <div class="mainPage-container">
    <el-scrollbar style="height: 100%;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.mainPage-container {
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 220px;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgb(248, 248, 248);
  margin-top: 50px;
  box-sizing: border-box;
}
</style>