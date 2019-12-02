<template>
  <div class="nav-item" @click="itemClick" :style="itemFontColor">
    <span>>&nbsp;&nbsp;{{item.name}}</span>
  </div>
</template>

<script>
  export default {
    name: "NavItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      path: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      itemFontColor() {
        return this.isActive ? {backgroundColor: 'cornflowerblue'} : {}
      }
    },
    methods: {
      itemClick() {
        if(this.path !== this.$route.path) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .nav-item  {
    margin: 5px 0;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    background-color: #001529;
  }
  .active {

  }
</style>