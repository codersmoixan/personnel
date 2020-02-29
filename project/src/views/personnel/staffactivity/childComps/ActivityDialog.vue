<template>
  <div class="zj-activity-dialog">
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" @close="closeDialog">
      <el-form :model="handleData">
        <el-form-item label="活动标题" :label-width="formLabelWidth">
          <el-col :span="10">
            <el-input v-model="handleData.title" autocomplete="off" @focus="clearData"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动图片" :label-width="formLabelWidth">
          <el-col :span="10">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                <span class="el-upload-list__item-actions"></span>
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </div>
            </el-upload>
          </el-col>
        </el-form-item>
        <el-form-item label="活动日期" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="handleData.date" type="date" placeholder="选择日期"
                            value-format="yyyy-MM-dd hh:mm:ss">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="活动内容" :label-width="formLabelWidth">
          <el-col :span="10">
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
    name: "ActivityDialog",
    props: {
      dialogFlag: {
        type: Boolean,
        default: false
      },
      dialogTitle: {
        type: String,
        default: ''
      },
      diaLogType: {
        type: String,
        default() {
          return ''
        }
      },
      updateData: {
        type: Object,
        default() {
          return {
            title: ''
          }
        }
      }
    },
    watch: {
      dialogFlag(newVal, oldVal) { // 监听props传过来的值的变化
        this.dialogFormVisible = newVal
      },
      diaLogType(newVal, oldVal) {
        this.diaLogCurrentType = newVal // 决定当前dialog是修改活动还是增加活动
      },
      updateData(newVal, oldVal) {
        this.handleData = newVal
      },
      keep: true
    },
    data() {
      return {
        formLabelWidth: '100px',
        dialogFormVisible: this.dialogFlag, // 控制添加页面的关闭切换
        handleData: {
          title: '',
          date: '',
          content: '',
          picture: ''
        }, // 当前表单的数据
        imageUrl: '',
        clearCurrentDataFlag: false, // 当前表单数据是否清楚
        diaLogCurrentType: null, // 当前提交请求走向
      }
    },
    methods: {
      /**1. 上传头像*/
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
      },
      /**2. 发送添加的数据*/
      sendOutData() {
        let sendOutData = {}
        for(let key in this.handleData) {
          sendOutData[key] = this.handleData[key]
        }
        switch (this.diaLogCurrentType) {
          case 'addActivity':
            console.log(this.handleData);
            // 判断用户是否填写了添加的信息 如果没有添加则不需要发送请求
            if(JSON.stringify(sendOutData) === '{}') return this.$message.warning('请输入需要添加的信息！')
            this.$emit('getAddActivityData', sendOutData)
            break
          case 'updateActivity': this.$emit('getUpdateActivityData', sendOutData)
            break
        }
        this.closeDialog()
      },
      /**3. 关闭界面*/
      closeDialog() {
        this.dialogFormVisible = false
        this.$emit('closeDialogChange', this.dialogFormVisible)
      },
      /**4. 清除表单中的数据*/
      clearData() {
        // for(let key in this.handleData) {
        //   this.handleData[key] = ''
        // }
      }
    }
  }
</script>

<style scoped>

</style>