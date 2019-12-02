<template>
  <div id="app">
    <home></home>
    <div class="functional-module">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from 'views/home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #app {
    display: flex;
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
