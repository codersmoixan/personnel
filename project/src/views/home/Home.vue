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
            path: '/supervise'
          },
          {
            name: '财务管理',
            path: '/finance'
          },
          {
            name: '技术管理',
            path: '/technical'
          },
          {
            name: '销售管理',
            path: '/sale'
          },
          {
            name: '统计分析',
            path: '/statistics'
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