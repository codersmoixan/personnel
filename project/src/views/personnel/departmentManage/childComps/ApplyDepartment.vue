<template>
  <div class="cover">
    <div class="apply-department add-view">
      <div class="content-top">
        <span>申请添加部门</span>
        <div class="close" @click="addShowFlag">x</div>
      </div>
      <div class="content ov-auto">
        <el-form ref="addData" :model="addData" label-width="150px" label-position="left">
          <el-form-item label="部门名称">
            <el-col :span="8">
              <el-input v-model="addData.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门人数">
            <el-col :span="8">
              <el-input v-model="addData.number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门负责人">
            <el-col :span="8">
              <el-input v-model="addData.staffIdInCharge"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="申请人">
            <el-col :span="8">
              <el-input v-model="addData.staffIdCreateperson"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门状态" prop="resource">
            <el-radio-group v-model="addData.status">
              <el-radio label="正常"></el-radio>
              <el-radio label="已停止"></el-radio>
              <el-radio label="已废弃"></el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="submit">
            <el-button type="primary" @click="applySubimt" class="btn">提交</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {applyDepartment} from 'network/personnel'

  export default {
    name: "ApplyDepartment",
    data() {
      return {
        addShow: false,
        addData: {
          name: '',
          number: '',
          staffIdInCharge: '',
          staffIdCreateperson: '',
          status: '',
          approvalDate: '',
          approvalStatus: 1,
          approvalSuggest: '',
          staffIdApproval: 1
        }
      }
    },
    methods: {
      /**
       * 1. 申请部门界面开关
       * */
      addShowFlag() {
        this.$emit('addShowChange', this.addShow)
      },
      /**
       * 2. 提交申请
       * */
      applySubimt() {
        this.$confirm('提交申请, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 申请添加部门
          applyDepartment(this.addData).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          console.log(this.addData);
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
          // 添加成功后 发送事件给父组件 重新渲染页面
          this.$emit('updateList')
          // 添加成功后 关闭界面
          this.addShowFlag()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .apply-department {
      .content {
        padding: 30px;
        .submit {
          width: 100%;
          height: 80px;
          text-align: center;
          line-height: 80px;
          .btn {
            width: 150px;
          }
        }
      }
    }
  }
</style>