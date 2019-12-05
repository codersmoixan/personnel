<template>
  <div id="app">
    <PublicLayout></PublicLayout>
  </div>
</template>

<script>
// import Home from 'views/home/Home'
import PublicLayout from 'views/publicLayout/PublicLayout'

export default {
  name: 'app',
  components: {
    PublicLayout
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #app {
    display: flex;
    background-color: #fff;
  }
  .tab-bar {
    width: 200px;
    background-color: #001529 ;
    color: #fff;
  }
  .functional-module {
    flex: 1;
    height: 100vh;
    background-color: #eee;
  }
</style>
