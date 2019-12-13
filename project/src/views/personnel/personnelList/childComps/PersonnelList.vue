<template>
  <div class="personnel-list">
    <div class="staff-manage">
      <personnel-search @searchData="searchData" :queryParameter="queryParameter"></personnel-search>
      <div class="staff-list">
        <personnel-btn @addStaff="addStaff" @removeStaff="removeStaff" @batchRemove="batchRemove"
                       class="left"></personnel-btn>
        <pagination class="right" @handleCurrentChange="handleCurrentChange"></pagination>
        <list :tabList="personnelList" :isClose="isClose"></list>
      </div>
    </div>
    <add-personnel v-show="isShow" @click="clickHandle"></add-personnel>
    <!--    <check-personnel :checkId="checkPersonnelId" :checkClose="checkClose"></check-personnel>-->
    <check-personnel></check-personnel>
    <edit-data></edit-data>
  </div>
</template>

<script>
  import PersonnelBtn from './PersonnelBtn'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'
  import List from './List'
  import AddPersonnel from './AddPersonnel'
  import CheckPersonnel from './CheckPersonnel'
  import Pagination from 'components/common/page/Pagination'
  import EditData from './EditData'

  import {getPersonnelList, searchPersonnel} from "network/personnel";

  export default {
    name: "PersonnelList",
    data() {
      return {
        isClose: false,
        checkPersonnelId: 0,
        checkClose: true,
        personnelList: [],
        isShow: false,
        queryParameter: ['ID', 'Name', 'Page', 'PageSize']
      }
    },
    created() {
      this._getPersonnelList(0)
      // this.request()
    },
    computed: {
      tabList() {
        return this.$store.state.list
      }
    },
    methods: {
      _getPersonnelList(page) {
        const pageSize = 10
        getPersonnelList(page, pageSize).then(res => {
          // 将获取的数据存放在数组中
          console.log(res);
          this.personnelList = res.data.list
        })
      },
      handleCurrentChange(pageNum) {
        this._getPersonnelList(pageNum)
      },


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
      // changeClose(res) {
      //   this.isClose = res
      // },
      // checkPersonnel(check) { // 查看员工信息
      //   this.checkPersonnelId = check.checkListIndex
      //   this.checkClose = check.checkClose
      // }
      clickHandle() {
        this.isShow = true
      },
      searchData(formSearch) { // 子组件传递的方法
        let searchList = [] // 声明空数组用来存储查到的数据
        searchPersonnel(formSearch).then(res => { // 按条件查询
          searchList.push(res) // 将数据添加到数组中
          this.personnelList = searchList[0].data.list
        }).catch(err => {
          console.log(err);
        })
      }
    },
    components: {
      PersonnelSearch,
      PersonnelBtn,
      List,
      AddPersonnel, // 添加员工信息弹窗
      CheckPersonnel, // 查看员工信息弹窗
      Pagination,
      EditData
    }
  }
</script>

<style scoped lang="less">
  .personnel-list {
    position: relative;
    width: 100%;
    box-sizing: border-box;

    .staff-list {
      position: relative;
      box-sizing: border-box;
      background-color: #f2f2f2;
      border: 1px solid #ccc;

      .right {
        position: absolute;
        right: 0;
        top: 10px;
      }
    }
  }
</style>