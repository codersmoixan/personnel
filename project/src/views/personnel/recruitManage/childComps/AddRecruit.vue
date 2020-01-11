<template>
  <div class="cover add-recruit-container">
    <div class="add-view">
      <div class="content-top">
        <span>添加简历</span>
        <div class="close" @click="isClose">x</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddRecruit",
    data() {
      return {
        isAddShow: false
      }
    },
    methods: {
      // 1. 关闭当前界面
      isClose() {
        this.$emit('isAddShowChange', this.isAddShow)
      }
    }
  }
</script>

<style scoped>

</style>