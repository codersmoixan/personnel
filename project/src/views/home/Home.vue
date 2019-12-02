<template>
<div class="home">
  <main-tab-item :itemList="itemList" class="tab-bar"></main-tab-item>
</div>
</template>
<script>
  import MainTabItem from 'components/content/MainTabItem'
  export default {
    name: 'Home',
    data() {
      return {
        itemList: [
          {
            name: '人事管理',
            path: '/personnel'
          },
          {
            name: '更新日志',
            path: '/updatelog'
          },
          {
            name: '超级管理',
            path: '1'
          },
          {
            name: '财务管理',
            path: '/finance'
          },
          {
            name: '技术管理',
            path: '3'
          },
          {
            name: '销售管理',
            path: '4'
          },
          {
            name: '统计分析',
            path: ''
          }
        ]
      }
    },
    methods: {
      personnelBtn() {
        this.$router.replace('/personnel')
      }
    },
    components: {
      MainTabItem
    }
  }
</script>
<style scoped>
  .tab-bar {
    width: 200px;
    height: 100vh;
  }
</style>