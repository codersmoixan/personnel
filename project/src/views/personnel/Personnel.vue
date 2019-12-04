<template>
<div class="personnel">
  <div class="staff-manage">
    <div class="staff-list">
      <person-btn @addStaff="addStaff"></person-btn>
    </div>
  </div>

</div>
</template>
<script>
  import PersonBtn from 'views/personnel/childComps/PersonBtn'
  export default {
    name: 'Personnel',
    data() {
      return {
        msg: '用于测试的msg'
      }
    },
    methods: {
      addStaff() {
        // console.log('addStaff')
      }
    },
    components: {
      PersonBtn
    }
  }
</script>
<style scoped>
  .personnel {
    width: 100%;
    box-sizing: border-box;
  }
  .staff-list {
    padding: 10px;
    height: 400px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
  }
</style>
