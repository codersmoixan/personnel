<template>
  <div class="cover" v-show="editShow">
    <div class="edit-data">
      <div class="title">
        <span>修改信息</span>
        <div class="close" @click="editClose">x</div>
      </div>
      <div class="edit-content">
        <el-form ref="form" :model="editData" label-width="150px">
          <el-form-item label="姓名">
            <el-col :span="10">
              <el-input v-model="editData.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="年龄">
            <el-col :span="10">
              <el-input v-model="editData.age"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="民族">
            <el-col :span="10">
              <el-input v-model="editData.nation"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="户籍">
            <el-col :span="10">
              <el-input v-model="editData.province"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="城市">
            <el-col :span="10">
              <el-input v-model="editData.city"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-col :span="10">
              <el-input v-model="editData.detailedAddress"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="身份证号码：">
            <el-col :span="10">
              <el-input v-model="editData.identityCardNumber"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-col :span="10">
              <el-input v-model="editData.contactInformation"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="毕业学校">
            <el-col :span="10">
              <el-input v-model="editData.graduatedSchool"></el-input>
            </el-col>
          </el-form-item>
          <div class="edit-submit">
            <el-button type="primary" @click="editClick" class="submit">修改</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {httpPost} from 'network/quest'

  export default {
    name: "EditData",
    data() {
      return {
        editData: {
          name: '',
          age: ''
        },
        editShow: false
      }
    },
    beforeCreate() {
      this.$bus.$on('zj_editData', v => {
        console.log(v);
        this.editData = v.editData
        this.editShow = v.editClose
      })
    },
    methods: {
      editClose() {
        this.editShow = false
      },
      editClick() {
        console.log(this.editData);
        this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          httpPost('/personnel/staff/update', this.editData).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

        this.editShow = false
      }
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .edit-data {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      width: 900px;
      height: 800px;
      overflow: hidden;
      border-radius: 5px;
      background-color: #fff;
      .title {
        position: relative;
        width: 100%;
        height: 50px;
        background: #3a8ee6;
        span {
          line-height: 50px;
          padding-left: 20px;
          font-size: 18px;
        }
      }
      .edit-content {
        padding: 20px;
        .edit-submit {
          padding-top: 30px;
          width: 100%;
          .submit {
            width: 200px;
            margin-left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
</style>