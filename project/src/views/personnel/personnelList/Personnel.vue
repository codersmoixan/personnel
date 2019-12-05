<template>
<div class="personnel">
  <div class="staff-manage">
    <personnel-search></personnel-search>
    <div class="staff-list">
      <personnel-btn @addStaff="addStaff" @removeStaff="removeStaff" @batchRemove="batchRemove"></personnel-btn>
      <personnel-list :tabList="tabList" @checkPersonnel="checkPersonnel" :isClose="isClose"></personnel-list>
    </div>
  </div>
  <add-personnel></add-personnel>
  <check-personnel :checkId="checkPersonnelId" :checkClose="checkClose"></check-personnel>
</div>
</template>
<script>
  import PersonnelBtn from './childComps/PersonnelBtn'
  import PersonnelSearch from './childComps/PersonnelSearch'
  import PersonnelList from './childComps/PersonnelList'
  import AddPersonnel from './childComps/AddPersonnel'
  import CheckPersonnel from './childComps/CheckPersonnel'

  export default {
    name: 'Personnel',
    data() {
      return {
        isClose: false,
        checkPersonnelId: 0,
        checkClose: true
      }
    },
    beforeCreate() {
      this.$bus.$on('checkIs', v => {
        console.log(v);
      })
    },
    computed: {
      tabList() {
        return this.$store.state.list
      }
    },
    methods: {
      addStaff() { // 打开添加员工信息界面
        this.isClose = true
        this.$bus.$emit('zj_addOnFlag', this.isClose)
      },
      removeStaff() {
        console.log('removeStaff');
      },
      batchRemove() {
        console.log('batchRemove');
      },
      changeClose(res) {
        this.isClose = res
      },
      checkPersonnel(check) { // 查看员工信息
        this.checkPersonnelId = check.checkListIndex
        this.checkClose = check.checkClose
      }
    },
    components: {
      PersonnelSearch,
      PersonnelBtn,
      PersonnelList,
      AddPersonnel, // 添加员工信息弹窗
      CheckPersonnel // 查看员工信息弹窗
    }
  }
</script>
<style scoped lang="less">
  .personnel {
    width: 100%;
    box-sizing: border-box;

    .staff-list {
      box-sizing: border-box;
      background-color: #f2f2f2;
      border: 1px solid #ccc;
    }
  }

</style>
