<template>
  <div class="zj-member-manage-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="zj-list-container">
      <div class="zj-handle-btn base-pad-b">
        <div class="zj-add base-pad-r">
          <el-button type="primary" @click="addGroupMemberView">添加组成员</el-button>
        </div>
        <div class="zj-search">
          <el-col :span="5" class="base-pad-r">
            <el-input v-model="queryData.id" :placeholder="searchHolder[0]"></el-input>
          </el-col>
          <el-col :span="5" class="base-pad-r">
            <el-input v-model="queryData.page" :placeholder="searchHolder[1]"></el-input>
          </el-col>
          <el-col :span="5" class="base-pad-r">
            <el-input v-model="queryData.pageSize" :placeholder="searchHolder[2]"></el-input>
          </el-col>
          <el-button type="primary" @click="_queryGroupMemberById(queryData)">查询</el-button>
        </div>
      </div>
      <div class="zj-list">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="staffId" label="员工工号" width="150"></el-table-column>
          <el-table-column prop="staffName" label="员工姓名" width="120"></el-table-column>
          <el-table-column prop="groupManagementId" label="所在组ID" width="120"></el-table-column>
          <el-table-column prop="groupManagementName" label="所在组名称" width="120"></el-table-column>
          <el-table-column prop="descs" label="备注" width="300"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="deleteGroupMemberData(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <pagination :pageParams="pageParams" @getPageNum="getPageNum"></pagination>
      </div>
      <el-dialog :title="addTitle" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="addFormData">
          <div class="zj-add-from">
            <el-form-item label="员工ID" :label-width="formLabelWidth">
              <el-input v-model="addFormData.staffId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input v-model="addFormData.descs" autocomplete="off" type="textarea"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addGroupMemberData">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {queryGroupMemberById, addGroupMember, deleteGroupMember} from 'network/personnel'
  import {dataCopy} from 'common/utils'

  import Pagination from 'components/common/pagination/Pagination'

  export default {
    name: "GroupManage",
    data() {
      return {
        tableData: [],
        fullscreenLoading: false,
        pageParams: {
          total: 0,
          pageNum: 1,
          pageSize: [10]
        },
        searchHolder: ['GROUP-ID', 'PAGE', 'PAGESIZE'],
        queryData: {
          id: '',
          page: '',
          pageSize: ''
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
        addFormData: {
          groupManagementId: '',
          staffId: '',
          descs: ''
        },
        title: '添加组成员 - ',
        addTitle: '',
        recordData: {}, // 记录当前组成员
        recordParams: {}, // 记录查询的参数
        responseCode: false, // 记录当前是否搜索过组信息
        groupId: null
      }
    },
    methods: {
      /**1. 请求组全部成员*/
      _queryGroupMemberById(data) {
        this.tableData = []
        this.fullscreenLoading = true
        this.groupId = data.id
        // console.log(queryParams);
        // 发送请求
        return queryGroupMemberById(data).then(res => {

          if (res.code === 200) {
            // 记录已经查询过某个组
            this.responseCode = true
            // 先判断当前组是否有成员信息
            if(res.data.list.length === 0) {
              for(let item in this.queryData) {
                this.queryData[item] = ''
              }
              this.fullscreenLoading = false
              return this.$message.warning('当前组成员为空!!!')
            }

            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            // 遍历查询的参数记录当前组成员数据
            this.recordData = dataCopy(this.tableData)

            this.recordParams.id = res.data.list[0].groupManagementId
            this.recordParams.page = res.data.pageNum
            this.recordParams.pageSize = res.data.pageSize

            // 获得当前组名字
            this.addTitle = ''
            this.addTitle = this.title + this.tableData[0].groupManagementName

            // 清空搜索参数
            for (let key in this.queryData) {
              this.queryData[key] = ''
            }
            this.fullscreenLoading = false
          } else {
            this.$message.warning('查询失败！！！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.warning('与服务器连接失败！！！')
        })
      },
      /**2. 分页查询*/
      getPageNum(data) {
        //1. 分页查询的参数
        let pageParams = {
          id: this.recordParams.id,
          page: data,
          pageSize: this.recordParams.pageSize
        }
        //2. 渲染列表
        this._queryGroupMemberById(pageParams)
      },
      /**3. 添加组成员*/
      // 1. 打开添加界面
      addGroupMemberView() {
        //判断有无组信息 只有当请求过组信息之后才能添加新成员
        if (!this.responseCode) {
          return this.$message.warning('请先搜索需要添加成员的组！！！')
        }
        this.dialogFormVisible = true
      },

      // 2. 发送添加组成员请求
      addGroupMemberData() {
        let flag = true
        // 获取当前组的组id
        this.addFormData.groupManagementId = this.groupId
        // 先遍历全部组员，判断要添加的组员是否存在当前组中，如果存在则提示用户该成员已存在
        for(let item in this.recordData) {
          if(this.recordData[item].staffId === parseInt(this.addFormData.staffId)) {
            this.$message.warning('该成员已在组中，请勿重复添加！')
            this.addFormData.staffId = ''
            return flag = false
          }
        }
        if(flag) {
          addGroupMember(this.addFormData).then(res => {
            // 判断是否添加成功
            if(res.code === 200) {
              this.dialogFormVisible = false

              // 添加成功之后重新渲染列表
              this._queryGroupMemberById(this.recordParams)
              this.addFormData.staffId = ''
              this.$message.success(res.message + '!')
            }else {
              this.$message.warning(res.message)
            }
          }).catch(err => {
            console.log(err);
          })
        }else {

        }
      },
      /**4. 删除组成员*/
      deleteGroupMemberData(data) {
        deleteGroupMember(data).then(res => {
          if(res.code === 200) {
            this.$confirm('确定将该成员移除当前组吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              // 删除成功后重新渲染列表
              this._queryGroupMemberById(this.recordParams)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }else {
            this.$message.warning('删除失败！')
          }
        })
      }
    },
    components: {
      Pagination
    }
  }
</script>

<style scoped lang="less">
  .zj-member-manage-container {
    .zj-list-container {
      width: 70%;

      .zj-handle-btn {
        display: flex;
      }
    }


  }
</style>