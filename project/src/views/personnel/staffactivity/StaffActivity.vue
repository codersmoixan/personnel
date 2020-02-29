<template>
  <div class="zj-staff-activity pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="zj-activity-container">
      <div class="zj-handle-btn">
        <div class="base-f-l">
          <personnel-search :queryParameter="queryParameter"
                            @searchData="searchData" @againRendering="againRendering"></personnel-search>
        </div>
        <div class="base-f-r">
          <el-button type="primary" size="small" @click.native.prevent="addActivity">添加活动</el-button>
        </div>
      </div>
      <div class="zj-activity-list">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="活动ID" width="100"></el-table-column>
          <el-table-column prop="title" label="活动标题" width="150"></el-table-column>
          <el-table-column prop="picture" label="活动宣传图" width="100"></el-table-column>
          <el-table-column prop="content" label="活动内容"></el-table-column>
          <el-table-column prop="date" label="活动日期" width="200"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteActivity(scope.row.id, tableData)"
                         type="text" size="small">删除
              </el-button>
              <el-button type="text" size="small" @click.native.prevent="updateActivity(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <pagination :pageParams="pageParams"></pagination>
    </div>
    <activity-dialog :dialogFlag="dialogFlag" :dialogTitle="dialogTitle"
                     :diaLogType="diaLogType" :updateData="updateData"
                     @getAddActivityData="getAddActivityData"
                     @closeDialogChange="closeDialogChange"
                     @getUpdateActivityData="getUpdateActivityData"></activity-dialog>
  </div>
</template>

<script>
  import {getStaffActivityList,
    queryStaffActivity,
    deleteStaffActivity,
    updateStaffActivity, addStaffActivity} from 'network/personnel'

  import Pagination from 'components/common/pagination/Pagination'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  import ActivityDialog from './childComps/ActivityDialog'
  export default {
    name: "StaffActivity",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        fullscreenLoading: false,
        recordParams: {}, // 记录当前页的查询数据
        queryParameter: ['activity-ID', 'Title', 'Page', 'PageSize'], // 搜索显示
        pageParams: { // 分页参数
          total: 0,
          pageNum: 1,
          pageSize: [10]
        },
        dialogFlag: false, // 控制添加 编辑界面
        dialogTitle: '',
        diaLogType: null, // 决定dialog的数据提交走向
        updateData: null
      }
    },
    created() {
      this._getStaffActivityList(this.page, this.pageSize)
    },
    methods: {
      /**1. 获取员工活动列表*/
      _getStaffActivityList(page, pageSize) {
        this.fullscreenLoading = true
        this.tableData = []
        let data = {
          page,
          pageSize
        }
        // 发送请求
        getStaffActivityList(data).then(res => {
          if (res.code === 200) {
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            // 当前页的查询参数记录下来
            this.recordParams.page = res.data.pageNum
            this.recordParams.pageSize = res.data.pageSize
            this.fullscreenLoading = false
          }else {
            this.$message.warning('查询失败！')
          }
        }).catch(err => {
          this.$message.error('连接服务器失败了！')
        })
      },
      /**2. 查询数据*/
      searchData(data) {
        this.fullscreenLoading = true
        let queryParams = {
          id: data.searchId,
          title: data.searchName,
          page: data.page,
          pageSize: data.pageSize
        }
        // 1. 发送请求
        queryStaffActivity(queryParams).then(res => {
          if(res.code === 200) {
            // 1. 清空原来渲染的数据
            this.tableData = []
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            this.fullscreenLoading = false
          }else {
            this.$message.warning('查询失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败了！')
        })
      },
      /**3. 添加活动*/
      // 1. 打开添加界面
      addActivity() {
        this.updateData = {}
        this.dialogFlag = true
        this.dialogTitle = '添加员工活动'
        this.diaLogType = 'addActivity'
      },
      // 2. 获取添加的信息 发送请求添加组
      getAddActivityData(data) {
        addStaffActivity(data).then(res => {
          console.log(res);
          if(res.code === 200) {
            this.$message.success(res.message)
            // 重新渲染列表
            this.againRendering(this.recordParams)
          }else {
            this.$message.warning('添加失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('与服务器连接失败啦！')
        })
      },
      /**4. 更新员工活动*/
      // 1. 打开更新界面
      updateActivity(data) {
        this.updateData = data
        let updateId = this.updateData.id
        this.dialogFlag = true
        this.dialogTitle = '编辑员工活动 - ' + this.updateData.title + ' ID: ' + updateId
        this.diaLogType = 'updateActivity'
      },
      // 2. 发送更新请求
      getUpdateActivityData(data) {
        updateStaffActivity(data).then(res => {
          if(res.code === 200) {
            // 重新渲染页面
            this.againRendering(this.recordParams)
            this.$message.success('修改成功！')
          }else {
            this.$message.warning('修改失败！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败了！')
        })
      },
      /**5. 删除员工活动*/
      deleteActivity(id) {
        let deleteId = id
        deleteStaffActivity(id).then(res => {
          this.$confirm('确定删除当前活动?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if(res.code === 200) {
              this.$message.success(res.message + '!')
              this.againRendering(this.recordParams)
            }else {
              this.$message.warning(res.message + '!')
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }).catch(err => {
          this.$message.error('连接服务器失败了！')
        })
      },
      /**6. 重新渲染 */
      againRendering(data) {
        this._getStaffActivityList(data.page, data.pageSize)
      },
      /**7. 关闭界面*/
      closeDialogChange(flag) {
        this.dialogFlag = flag
      }
    },
    components: {
      Pagination,
      PersonnelSearch,
      ActivityDialog
    }
  }
</script>

<style scoped lang="less">
  .zj-staff-activity {
    .zj-activity-container {
      width: 70%;
    }
  }
</style>