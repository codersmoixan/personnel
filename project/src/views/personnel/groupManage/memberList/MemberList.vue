<template>
  <div class="zj-member-list-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div>
      <personnel-search :queryParameter="queryParameter" @searchData="searchData"
                        @againRendering="againRendering"></personnel-search>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" width="150"></el-table-column>
        <el-table-column prop="name" label="组名称" width="120"></el-table-column>
        <el-table-column prop="groupIcon" label="组头像" width="120"></el-table-column>
        <el-table-column prop="groupLeaderName" label="组长" width="120"></el-table-column>
        <el-table-column prop="createpersonName" label="创建人" width="300"></el-table-column>
        <el-table-column prop="createdate" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="groupMembersName" label="成员名字" width="120"></el-table-column>
        <el-table-column prop="type" label="组类型" width="120"></el-table-column>
        <el-table-column prop="status" label="组状态" width="120"></el-table-column>
      </el-table>
    </div>
    <div>
      <pagination :pageParams="pageParams" @getPageNum="getPageNum"></pagination>
    </div>
  </div>
</template>

<script>
  import {getGroupMemberList, queryGroupMember} from 'network/personnel'

  import Pagination from 'components/common/pagination/Pagination'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  export default {
    name: "MemberList",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        pageParams: {
          pageNum: 1,
          pageSize: [10],
          total: 0
        },
        queryParameter: ['ID', 'NAME', 'PAGE', 'PAGESIZE'],
        fullscreenLoading: false
      }
    },
    created() {
      this._getGroupMemberList(this.page, this.pageSize)
    },
    methods: {
      /**1. 请求组成员数据*/
      _getGroupMemberList(page, pageSize) {
        this.fullscreenLoading =true
        let data = {
          page,
          pageSize
        }
        this.tableData = []
        // 发送请求
        getGroupMemberList(data).then(res => {
          if(res.code === 200) {
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            this.fullscreenLoading = false
          }
        }).catch(err => {
          console.log(err);
        })
      },
      /**2. 查询数据*/
      searchData(data) {
        this.fullscreenLoading = true
        let searchData = {
          id: data.searchId,
          name: data.searchName,
          page: data.page,
          pageSize: data.pageSize
        }
        // 发送请求
        queryGroupMember(searchData).then(res => {
          if(res.code === 200) {
            //查询成功
            this.tableData = []
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            this.fullscreenLoading = false
            this.$message.success('查询成功！！！')
          }else {
            this.$message.warning('查询失败！！！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.warning('查询失败！！！')
        })
      },
      /**3. 分页查询*/
      getPageNum(num) {
        let data = {
          page: num,
          pageSize: this.pageSize
        }
        this.againRendering(data)
      },
      /**4. 重新渲染*/
      againRendering(data) {
        this._getGroupMemberList(data.page, data.pageSize)
      }
    },
    components: {
      Pagination,
      PersonnelSearch
    }
  }
</script>

<style scoped>

</style>