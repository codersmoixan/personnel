<template>
  <div class="loading">
    <el-main  v-loading.fullscreen.lock="fullscreenLoading" element-loading-background="rgba(0, 0, 0, 0.8)"></el-main>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    data() {
      return {
        fullscreenLoading: true
      }
    }
  }
</script>

<style scoped lang="less">
  .loading {
    width: 100%;
    height: 100%;
  }
</style>