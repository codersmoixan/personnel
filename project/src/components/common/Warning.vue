<template>
  <div class="warning">
    <el-alert
      :title="warningData"
      type="warning"
      effect="dark" :closable="false" show-icon>
    </el-alert>
  </div>
</template>

<script>
  export default {
    name: "Warning",
    props: {
      warningData: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .warning {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 99;
  }
</style>