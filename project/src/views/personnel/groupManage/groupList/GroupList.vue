<template>
  <div class="zj-group-list-container pad-ten" v-loading="fullscreenLoading"
       element-loading-background="rgba(255, 255, 255, 0.8)" element-loading-text="拼命加载中...">
    <div class="zj-handle-btn clear-fix">
      <div class="zj-search base-f-l">
        <personnel-search :queryParameter="queryParameter"
                          @searchData="searchData" @againRendering="againRendering"></personnel-search>
      </div>
      <div class="zj-add base-f-r">
        <el-button type="primary" @click="addGroupDataView">添加组</el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="组名称" width="150"></el-table-column>
        <el-table-column prop="groupIcon" label="组头像" width="120"></el-table-column>
        <el-table-column prop="groupLeader" label="组长" width="150"></el-table-column>
        <el-table-column prop="createdate" label="创建时间" width="200"></el-table-column>
        <el-table-column prop="createperson" label="创建人" width="150"></el-table-column>
        <el-table-column prop="type" label="组类型" width="150"></el-table-column>
        <el-table-column prop="status" label="组状态" width="150"></el-table-column>
        <el-table-column prop="dateOverdue" label="时效" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteCurrentGroup(scope.row.id, tableData)"
                       type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination :pageParams="pageParams"></pagination>
    <div>
      <el-dialog title="添加组" :visible.sync="dialogFormVisible" width="40%">
        <el-form :model="addData">
          <el-form-item label="组名称" :label-width="formLabelWidth">
            <el-col :span="10">
              <el-input v-model="addData.name" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="组头像" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" style="color: #ccc">&nbsp&nbsp选择图片</i>
            </el-upload>
          </el-form-item>
          <el-form-item label="组长" :label-width="formLabelWidth">
            <el-col :span="10">
              <el-input v-model="addData.groupLeader" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="创建人" :label-width="formLabelWidth">
            <el-col :span="10">
              <el-input v-model="addData.createperson" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="组类型" :label-width="formLabelWidth">
            <el-select v-model="addData.type" placeholder="请选择组类型">
              <el-option label="正常" value="1"></el-option>
              <el-option label="临时" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="组状态" :label-width="formLabelWidth">
            <el-select v-model="addData.status" placeholder="请选择组类型">
              <el-option label="正常" value="1"></el-option>
              <el-option label="废弃" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="截止时间" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker
                v-model="addData.dateOverdue"
                type="datetime"
                placeholder="选择日期时间" value-format="yyyy-MM-dd hh:mm:ss" :disabled="isDisabled">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addGroupData">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {getGroupList, queryGroup, addGroup, deleteGroup} from 'network/personnel'

  import Pagination from 'components/common/pagination/Pagination'
  import PersonnelSearch from 'components/common/search/PersonnelSearch'

  export default {
    name: "GroupList",
    data() {
      return {
        tableData: [],
        page: 1,
        pageSize: 10,
        fullscreenLoading: false,
        pageParams: {
          total: 0,
          pageNum: 1,
          pageSize: [10]
        },
        queryParameter: ['ID', 'NAME', 'PAGE', 'PAGESIZE'],
        addData: { // 添加组信息
          name: '',
          groupIcon: '',
          groupLeader: '', // 组长id
          createperson: '', // 创建人id
          status: '', // 组状态
          dateOverdue: '', // 组过期时间
          type: '' // 组类型
        },
        formLabelWidth: '80px',
        dialogFormVisible: false, // 控制添加界面
        imageUrl: '', // 头像
        recordParams: {} // 记录当前查询的参数
      }
    },
    computed: {
      isDisabled() {
        // 如果创建的不是临时组，那么就不需要截止时间
        if (parseInt(this.addData.type)) return true
      }
    },
    created() {
      this._getGroupList(this.page, this.pageSize)
    },
    methods: {
      /**1. 请求小组列表*/
      _getGroupList(page, pageSize) {
        // 1. 清除原先的数据
        this.tableData = []
        this.fullscreenLoading = true
        let data = {
          page,
          pageSize
        }
        // 2. 发送请求
        getGroupList(data).then(res => {
          if (res.code === 200) {
            this.tableData.push(...res.data.list)
            this.pageParams.total = res.data.total
            // 将请求当前页面的参数记录下来
            this.recordParams.page = res.data.pageNum
            this.recordParams.pageSize = res.data.pageSize
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
        queryGroup(searchData).then(res => {
          if (res.code === 200) {
            this.tableData = []
            this.tableData.push(...res.data.list)
            this.fullscreenLoading = false
            this.$message.success('查询成功！！！')
          } else {
            this.$message.warning('查询失败！！！')
          }
        }).catch(err => {
          console.log(err);
          this.$message.warning('查询失败！！！')
        })
      },
      /**3. 添加组*/
      // 1. 打开添加界面
      addGroupDataView() {
        this.dialogFormVisible = true
      },
      // 2. 发送请求添加组
      addGroupData() {
        addGroup(this.addData).then(res => {
          if (res.code === 200) {
            // 添加成功之后重新渲染页面
            this.againRendering(this.recordParams)
            this.$message.success(res.message)
            this.dialogFormVisible = false
          } else {
            this.$message.warning('添加失败！')
          }
        }).catch(err => {
          console.log(err);
        })
      },
      /**4. 移除组*/
      deleteCurrentGroup(data) {
        let deleteId = data
        deleteGroup(deleteId).then(res => {
          this.$confirm('确定删除当前组？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if(res.code === 200) {
              // 删除成功后重新渲染页面
              this.againRendering(this.recordParams)
              this.$message.success(res.message)
            }else {
              this.$message.warning('删除失败！')
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }).catch(err => {
          console.log(err);
          this.$message.error('连接服务器失败！')
        })
      },
      /**5. 重新渲染数据*/
      againRendering(data) {
        this._getGroupList(data.page, data.pageSize)
      },
      /**6. 头像上传*/
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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