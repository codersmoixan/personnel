<template>
  <div class="zj-notice-dialog">
    <el-dialog :title="currentTitle" :visible.sync="dialogFormVisible" @close="closeDialog" width="35%">
      <el-form :model="handleData">
        <el-form-item label="发布人ID" :label-width="formLabelWidth">
          <el-col :span="20">
            <el-input v-model="handleData.staffId" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公告名称" :label-width="formLabelWidth">
          <el-col :span="20">
            <el-input v-model="handleData.name" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公告类型" :label-width="formLabelWidth">
          <el-select v-model="handleData.type" placeholder="请选择公告类型">
            <el-option label="公司通告" value="公司通告"></el-option>
            <el-option label="公司通知" value="公司通知"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公告内容" :label-width="formLabelWidth">
          <el-col :span="20">
            <el-input v-model="handleData.content" autocomplete="off" type="textarea"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="sendOutData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "NoticeDialog",
    props: {
      dialogFlag: {
        type: Boolean,
        default: false
      },
      dialogType: {
        type: String,
        default: ''
      },
      dialogTitle: {
        type: String,
        default: ''
      },
      updateData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        dialogFormVisible: this.dialogFlag,
        handleData: {
          staffId: '',
          name: '',
          type: '',
          content: ''
        },
        formLabelWidth: '100px',
        diaLogCurrentType: null, // 决定当前提交的数据为添加还是修改
        currentTitle: null
      }
    },
    watch: {
      dialogFlag(newData, oldData) {
        this.dialogFormVisible = newData
      },
      dialogType(newData, oldData) {
        this.diaLogCurrentType = newData
      },
      dialogTitle(newData, oldData) {
        this.currentTitle = newData
      },
      updateData(newData, oldData) {
        this.handleData = newData
      },
      keep: true
    },
    methods: {
      /**1. 将数据发送出去*/
      sendOutData() {
        let sendOutData = {}
        for(let key in this.handleData) {
          sendOutData[key] = this.handleData[key]
        }
        switch (this.diaLogCurrentType) {
          case 'addNotice':
            // 判断用户是否填写了添加的信息 如果没有添加则不需要发送请求
            for(let item in sendOutData) {
              if(sendOutData[item] === '') return this.$message.warning('请输入需要添加的信息！')
            }
            this.$emit('getAddNoticeData', sendOutData)
            break
          case 'updateNotice': this.$emit('getUpdateNoticeData', sendOutData)
            break
        }
        this.closeDialog()
        // 提交数据之后清楚添加表单里面的内容
        setTimeout(() => {
          for(let item in this.handleData) {
            this.handleData[item] = ''
          }
        }, 100)
      },
      /**2. 关闭界面*/
      closeDialog() {
        this.dialogFormVisible = false
        this.$emit('closeDialogChange', this.dialogFormVisible)
      }
    }
  }
</script>

<style scoped>

</style>