<template>
  <div class="tab-bar">
    <tab-bar-item v-for="item in itemList" :path="item.path" :item="item"></tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    props: {
      itemList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    },
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>

</style>