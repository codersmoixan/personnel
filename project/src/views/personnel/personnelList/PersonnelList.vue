<template>
  <div class="personnel-list pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="staff-manage">
      <personnel-search @searchData="searchData" :queryParameter="queryParameter"></personnel-search>
      <div class="staff-list">
        <personnel-btn @addStaff="addStaff" @batchRemove="batchRemove"
                       class="left"></personnel-btn>
        <pagination class="right" @handleCurrentChange="handleCurrentChange"></pagination>
        <list :tabList="personnelList"></list>
      </div>
    </div>
    <add-personnel v-show="isShow" @click="clickHandle" @addPersonnelShowChange="addPersonnelShowChange"></add-personnel>
    <!--    <check-personnel :checkId="checkPersonnelId" :checkClose="checkClose"></check-personnel>-->
    <check-personnel></check-personnel>
    <edit-data></edit-data>
  </div>
</template>

<script>
  import PersonnelBtn from './childComps/PersonnelBtn'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'
  import List from './childComps/List'
  import AddPersonnel from './childComps/AddPersonnel'
  import CheckPersonnel from './childComps/CheckPersonnel'
  import Pagination from 'components/common/page/Pagination'
  import EditData from './childComps/EditData'

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
        queryParameter: ['ID', 'Name', 'Page', 'PageSize'],
        clearFlag: true,
        showId: 'add',
        fullscreenLoading: false
      }
    },
    created() {
      this._getPersonnelList(0)
      // this.request()
    },
    computed: {
      tabList() {
        // return this.$store.state.list
      }
    },
    methods: {
      /**
       *  1. 获取全部员工的数据
       * */
      _getPersonnelList(page) {
        this.fullscreenLoading = true
        const pageSize = 10
        getPersonnelList(page, pageSize).then(res => {
          console.log(res);
          // 将获取的数据存放在数组中
          this.personnelList = res.data.list
          // 将数据存储在vuex中
          this.$store.commit('addPersonnelList', res.data.list)
          this.fullscreenLoading = false
        })
      },
      handleCurrentChange(pageNum) {
        this._getPersonnelList(pageNum)
      },

      /**
       * 2. 添加员工
       * */
      addStaff() { // 打开添加员工信息界面
        // 打开的添加界面先清除表单里面的信息
        this.$bus.$emit('clearFlag', {
          clear: this.clearFlag,
          showId: this.showId
        })

        this.isClose = true
        this.isShow = true
      },
      addPersonnelShowChange(flag) { // 关闭添加员工信息界面
        this.isShow = flag
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
    height: 100%;
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