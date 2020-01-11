<template>
  <div class="cover" v-show="applyClose">
    <div class="apply-leave-container add-view">
      <div class="apply-top content-top">
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
      .apply-top {
        span {
          padding-left: 20px;
          line-height: 50px;
        }

      }
    }
  }
</style>