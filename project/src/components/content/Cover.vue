<template>
  <div class="cover" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Cover",
    data() {
      return {
        isShow: false
      }
    }
  }
</script>

<style scoped lang="less">
</style>