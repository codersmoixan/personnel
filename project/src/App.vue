<template>
  <div id="app">
    <public-layout></public-layout>
  </div>
</template>

<script>
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
</style>
