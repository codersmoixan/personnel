<template>
  <div class="zj-notice-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="zj-handle-btn">
      <div class="zj-search base-f-l">
        <personnel-search :queryParameter="queryParameter"
                          @againRendering="againRendering"
                          @searchData="searchData"></personnel-search>
      </div>
      <div class="zj-add base-f-r">
        <el-button type="primary" @click="openAddNotice">添加通告</el-button>
      </div>
    </div>
    <div class="zj-notice-list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="公告ID" width="80"></el-table-column>
        <el-table-column prop="name" label="公告名称" width="180"></el-table-column>
        <el-table-column label="公告类型" width="100">
          <template slot-scope="scope">
            <div :class="scope.row.type === '公司通知' ? 'type type-color-blue' : 'type type-color-yellow'">{{scope.row.type}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="公告内容" width="500"></el-table-column>
        <el-table-column prop="createdate" label="发布时间" width="200"></el-table-column>
        <el-table-column prop="staffName" label="发布者"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="openUpdateNotice(scope.row)">编辑</el-button>
            <el-button @click="deleteNoticeById(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination :pageParams="pageParams"></pagination>
    <notice-dialog :dialogFlag="dialogFlag"
                   :dialogType="dialogType"
                   :dialogTitle="dialogTitle"
                   :updateData="updateData"
                   @closeDialogChange="closeDialogChange"
                   @getAddNoticeData="getAddNoticeData"
                   @getUpdateNoticeData="getUpdateNoticeData">
    </notice-dialog>
  </div>
</template>

<script>
  import Pagination from 'components/common/pagination/Pagination'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  import NoticeDialog from './childComps/NoticeDialog'

  import {getNoticeList, queryNoticeById, addNotice, deleteNotice, updateNotice} from 'network/personnel'

  export default {
    name: "NoticeManage",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        pageParams: {
          total: 0,
          pageSize: [10],
          pageNum: 1
        },
        fullscreenLoading: false,
        queryParameter: ['Notice-ID', 'Notice-Name', 'Page', 'PageSize'],
        recordParams: {}, // 保存当前页面的查询数据
        dialogFlag: false,
        dialogType: null, // 提交的数据走向
        dialogTitle: null,
        updateData: null // 修改的公告信息
      }
    },
    created() {
      this._getNoticeList(this.page, this.pageSize)
    },
    methods: {
      /**
       * 1. 获取所有的公告
       * */
      _getNoticeList(page, pageSize) {
        this.fullscreenLoading = true
        let data = {
          page,
          pageSize
        }
        // 发送请求
        getNoticeList(data).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.tableData = []
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total

            // 记录当前的页面查询的参数
            this.recordParams.page = res.data.pageNum
            this.recordParams.pageSize = res.data.pageSize
            this.fullscreenLoading = false
          }
        }).catch(err => {
          console.log(err);
        })
      },
      /**2. 查询通告*/
      searchData(data) {
        this.fullscreenLoading = true
        let queryData = {
          id: data.searchId,
          name: data.searchName,
          page: data.page,
          pageSize: data.pageSize
        }
        console.log(data);
        // 发送请求
        queryNoticeById(queryData).then(res => {
          console.log(res);
          if(res.code === 200) {
            this.tableData = []
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            this.fullscreenLoading = false
            this.$message.success(res.message)
          }else {
            this.$message.warning('查询失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败了！')
        })
      },
      /**3. 添加通告*/
      // 打开添加界面
      openAddNotice() {
        this.dialogFlag = true
        this.dialogType = 'addNotice'
        this.dialogTitle = '添加公告'
      },
      // 获取数据提交请求
      getAddNoticeData(data) {
        addNotice(data).then(res => {
          if(res.code === 200) {
            this.$message.success('添加成功！')
            this.againRendering(this.recordParams)
          }else {
            this.$message.warning('添加失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败了！')
        })
      },
      /**4. 修改公告*/
      // 打开编辑界面
      openUpdateNotice(data) {
        this.updateData = data
        this.dialogFlag = true
        this.dialogType = 'updateNotice'
        this.dialogTitle = '修改当前公告 - ' + this.updateData.name + ' ID: ' + this.updateData.id
      },
      getUpdateNoticeData(data) {
        updateNotice(data).then(res => {
          console.log(res);
          if(res.code === 200) {
            this.againRendering(this.recordParams)
            this.$message.success(res.message + '!')
          }else {
            this.$message.warning('修改失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败啦！')
        })
      },
      /**5. 删除当前公告*/
      deleteNoticeById(data) {
        let deleteId = data.id
        this.$confirm('确定删除当前公告嘛?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteNotice(deleteId).then(res => {
            console.log(res);
            if(res.code === 200) {
              this.againRendering(this.recordParams)
              this.$message.success('删除成功!')
            }else {
              this.$message.warning('删除失败！')
            }
          }).catch(err => {
            console.log(err);
            this.$message.error('连接服务器失败了！')
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      /**6. 重新渲染数据*/
      againRendering(data) {
        this._getNoticeList(data.page, data.pageSize)
      },
      /**7. 关闭界面*/
      closeDialogChange(flag) {
        this.dialogFlag = flag
      }
    },
    components: {
      Pagination,
      PersonnelSearch,
      NoticeDialog
    }
  }
</script>

<style scoped lang="less">
  .zj-notice-container {

    .type {
      width: 62px;
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 2px;
      color: #ffff;
      font-size: 12px;
      text-align: center;
    }

    .type-color-blue {
      background-color: #1E9FFF;
    }

    .type-color-yellow {
      background-color: #FFB800;
    }
  }
</style>