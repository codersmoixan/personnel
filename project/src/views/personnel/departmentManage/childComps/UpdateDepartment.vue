<template>
  <div class="cover">
    <div class="add-view">
      <div class="content-top">
        <span>编辑部门信息</span>
        <div class="close" @click="editClick">x</div>
      </div>
      <div class="content ov-auto">
        <el-form ref="itemData" :model="itemData" label-width="180px" label-position="left">
          <el-form-item label="部门ID">
            <el-col :span="5">
              <el-input v-model="itemData.id" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门名称">
            <el-col :span="5">
              <el-input v-model="itemData.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门人数">
            <el-col :span="5">
              <el-input v-model="itemData.number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门申请人">
            <el-col :span="5">
              <el-input v-model="itemData.staffIdCreateperson"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门负责人">
            <el-col :span="5">
              <el-input v-model="itemData.staffIdInCharge"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="审批人">
            <el-col :span="5">
              <el-input v-model="itemData.staffIdApproval"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="部门状态" prop="resource">
            <el-radio-group v-model="itemData.status">
              <el-radio label="正常"></el-radio>
              <el-radio label="已停止"></el-radio>
              <el-radio label="已废弃"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审批状态" prop="resource">
            <el-radio-group v-model="itemData.approvalStatus">
              <el-radio label="同意"></el-radio>
              <el-radio label="驳回"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审批意见（如果是驳回，填写意见）" prop="desc">
            <el-input type="textarea" v-model="itemData.approvalSuggest" rows="3"></el-input>
          </el-form-item>
          <div class="submit">
            <el-button type="primary" @click="subimtUpdate" class="subimtUpdate">提交</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {updateDepartmen} from 'network/personnel'

  export default {
    name: "UpdateDepartment",
    props: {
      itemData: {
        typr: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        editShow: false,
        editData: {

        }
      }
    },
    methods: {
      // 1. 编辑界面开关
      editClick() {
        this.$emit('editShowChange', this.editShow)
      },

      // 2. 提交更新信息
      subimtUpdate() {
        // 将同意 驳回 转为1 0
        this.itemData.approvalStatus = this.itemData.approvalStatus === '同意' ? 1 : 0
        this.editData = this.itemData
        console.log(this.editData);
        this.$confirm('此操作将修改该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 更新部门信息
          updateDepartmen(this.editData).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          // 点击提交关闭编辑界面
          this.editClick()
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .add-view {
      .content {
        padding: 30px;
      }
    }
  }
</style>