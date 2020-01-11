<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    display: flex;
    z-index: -999;
  }

</style>
