<template>
  <div class="popup-header">
    <slot name="heder-left"></slot>
    <slot name="heder-center"></slot>
    <div class="close">
      <slot name="heder-right"></slot>
    </div>
    <span>添加员工信息</span>
    <div class="close" @click="closeClick">x</div>
  </div>
</template>

<script>
  export default {
    name: "PopupHeader",
    data() {
      return {
        close: false
      }
    },
    methods: {
      closeClick() {
        this.$bus.$emit('zj_offFlag', this.close)
      }
    }
  }
</script>

<style scoped lang="less">
  .popup-header {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 15px;
    width: 100%;
    height: 60px;
    background-color: cornflowerblue;
    font-size: 20px;
    line-height: 60px;
    box-sizing: border-box;
    z-index: 9;
    .close {
      position: absolute;
      right: 20px;
      bottom: 50%;
      transform: translateY(50%);
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
  }
</style>