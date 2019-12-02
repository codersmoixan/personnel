<template>
<h2>这是首页</h2>
  <button @click="personnelBtn">人事管理</button>
</template>
<script>
  export default {
    name: 'Home',
    methods: {
      personnelBtn() {
        this.$router.replace('/home/personnel')
      }
    }
  }
</script>
<style scoped>

</style>