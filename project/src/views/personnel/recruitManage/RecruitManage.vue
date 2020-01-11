<template>
  <div class="manage-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="handle-top clear-fix">
      <div class="add">
        <el-button type="primary" size="small" icon="el-icon-circle-plus" @click="addResume">添加</el-button>
      </div>
      <div class="search">
        <personnel-search :queryParameter="queryParameter" @searchData="searchData"></personnel-search>
      </div>
    </div>
    <recruit-list :resumeShowList="resumeShowList" @againRendering="againRendering"></recruit-list>
    <div class="page">
      <pagination :pageParams="pageParams" @getPageNum="getPageNum"></pagination>
    </div>
    <recruit-details v-show="isShow" @isCloseFlag="isCloseFlag" :tableItem="tableItem"></recruit-details>
    <add-recruit v-if="isAddShow" @isAddShowChange="isAddShowChange"></add-recruit>
  </div>
</template>

<script>
  import RecruitDetails from './childComps/RecruitDetails'
  import RecruitList from './childComps/RecruitList'
  import AddRecruit from './childComps/AddRecruit'

  import PersonnelSearch from 'components/common/search/PersonnelSearch'
  import Pagination from 'components/common/pagination/Pagination'

  import {getResumeListAll, queryResumeById} from 'network/personnel'

  export default {
    name: "RecruitManage",
    data() {
      return {
        isShow: false,
        tableItem: {},
        pageNum: 1,
        pageSize: 10,
        resumeShowList: [],
        queryParameter: ['ID', 'NAME', 'PAGE', 'PAGESIZE'],
        pageParams: {
          pageNum: 1,
          pageSize: [10],
          total: 0
        },
        isCoverShow: false,
        fullscreenLoading: false,
        isAddShow: false
      }
    },
    created() {
      this._getResumeListAll(this.pageNum, this.pageSize)
    },
    methods: {
      handleClick(data) {
        this.isShow = true
        this.tableItem = data
      },
      isCloseFlag(data) {
        this.isShow = data
      },
      /**
       * 1. 数据处理
       * */
      // 1. 获取全部数据
      _getResumeListAll(num, size) {
        console.log(this.$store.state.recruitPlanList)
        this.fullscreenLoading = true
        let data = {
          page: num,
          pageSize: size
        }
        // 发送请求
        getResumeListAll(data).then(res => {
          if (res.code === 200) {
            this.resumeShowList = []
            this.resumeShowList.push(...res.data.list)
            this.pageParams.total = res.data.total
            this.fullscreenLoading = false
          }
        }).catch(err => {
          console.log(err);
          // 提醒用户请求超时
          this.$message.error('请求超时！！！')
          this.fullscreenLoading = false
        })
      },
      // 2. 重新渲染
      againRendering() {
        this._getResumeListAll(this.pageNum, this.pageSize)
      },
      // 3. 分页渲染
      getPageNum(num) { // 获取页数
        this.pageNum = num
        this._getResumeListAll(this.pageNum, this.pageSize)
      },
      /**
       * 2. 搜索数据
       * */
      searchData(data) {
        console.log(data);
        queryResumeById(data).then(res => {
          // 判断是否查询成功
          if (res.code === 200) {
            this.resumeShowList = []
            this.resumeShowList = res.data.list
          }
        }).catch(err => {
          console.log(err);
        })
      },
      /**
       * 3. 添加简历
       * */
      // 1. 打开添加界面
      addResume() {
        this.isAddShow = true
      },
      // 2. 关闭添加界面
      isAddShowChange(flag) {
        this.isAddShow = flag
      }
    },
    components: {
      RecruitDetails,
      RecruitList,
      PersonnelSearch,
      Pagination,
      AddRecruit
    }
  }
</script>

<style scoped lang="less">
  .manage-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);
    overflow: auto;

    .handle-top {
      .add {
        float: left;
      }

      .search {
        float: right;
      }
    }

    .page {
      float: right;
    }
  }
</style>