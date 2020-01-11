<template>
<div class="personnel">
  <router-view></router-view>
</div>
</template>
<script>


  export default {
    name: 'Personnel',
    data() {
      return {

      }
    },
    created() {
    },
    methods: {

    }
  }
</script>
<style scoped lang="less">
  .personnel {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
</style>
