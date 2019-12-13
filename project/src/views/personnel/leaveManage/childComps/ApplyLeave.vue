<template>
  <div class="cover" v-show="applyClose">
    <div class="apply-leave-container">
      <div class="apply-top">
        <span>请假申请</span>
        <div class="close" @click="clickClose">x</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApplyLeave",
    data() {
      return {
        applyClose: true
      }
    },
    methods: {
      clickClose() {
        this.applyClose = false
        this.$emit('closeChange', this.applyClose)
      }
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .apply-leave-container {
      margin: 10px 0 0 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 800px;
      overflow: hidden;
      border-radius: 5px;
      background-color: #fff;
      .apply-top {
        position: relative;
        width: 100%;
        height: 50px;
        background-color: #3a8ee6;
        span {
          padding-left: 20px;
          line-height: 50px;
        }

      }
    }
  }
</style>