<template>
  <div class="finance-apply-container">
    <div class="operate">
      <el-button type="danger" size="small" @click="deleteAll" v-if="isButtonOperated">批量删除<i class="el-icon-delete"></i></el-button>
      <el-button type="danger" size="small"  disabled v-else>批量删除<i class="el-icon-delete"></i></el-button>
      <el-button type="primary" size="small">添加<i class="el-icon-circle-plus-outline"></i></el-button>
    </div>
    <hr>
    <div class="table-container">
      <template>
        <el-table
          :data="fixedAssetsData"
          border
          @selection-change="handleSelectionChange"
          style="width: 100%">
          <!-- 复选框 -->
          <el-table-column 
            fixed="left"
            type="selection" 
            width="35" 
            :selectable="selectable">
          </el-table-column>
          <el-table-column
            fixed="left"
            prop="name"
            label="报销项目"
            width="150">
          </el-table-column>
          <el-table-column
            prop="money"
            label="金额"
            sortable
            width="80">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间段"
            width="180">
          </el-table-column>
          <el-table-column
            prop="hasInvoice"
            label="是否开具发票"
            width="110">
          </el-table-column>
          <el-table-column
            prop="invoice"
            label="发票"
            width="100">
          </el-table-column>
          <el-table-column
            prop="bperson"
            label="报销人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="btime"
            label="报销时间"
            width="110">
          </el-table-column>
          <el-table-column
            prop="auditor"
            label="审核人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="auditStatus"
            label="审核状态"
            width="80">
          </el-table-column>
          <el-table-column
            prop="auditOpinion"
            label="审核意见"
            width="120">
          </el-table-column>
          <el-table-column
            prop="auditTime"
            label="审核时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="approver"
            label="财务审批人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="approvalStatus"
            label="财务审批状态"
            width="110">
          </el-table-column>
          <el-table-column
            prop="remarksOfApprover"
            label="财务审批意见"
            width="110">
          </el-table-column>
          <el-table-column
            prop="approvalTime"
            label="财务审批时间"
            width="110">
          </el-table-column>
          <el-table-column
            prop="accessory"
            label="附件"
            width="110">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small" @click="deleteOne">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        // selectable: false,
        // 进出账信息
        fixedAssetsData: [
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 报销项目（出差，住酒店）
            name: '出差，机票+住酒店',
            // 报销金额
            money: 2500,
            // 时间段
            time: '2016-05-03~2016-05-09',
            // 是否开发票
            hasInvoice: true,
            // 发票
            invoice: '.....',
            // 报销人
            bperson: '李老四',
            // 报销时间
            btime: '2016-05-11',
            // 审核人
            auditor: '总管李',
            // 审核状态，0审核通过，1待审核，2审核未通过
            auditStatus: 0,
            // 审核意见
            auditOpinion: '审核意见',
            // 审核时间
            auditTime: '2016-05-12',
            // 财务审批人
            approver: '财务王',
            // 财务审批状态，0审核通过，1待审核，2审核未通过
            approvalStatus: 0,
            // 财务审批意见
            remarksOfApprover: '审核通过',
            // 审核时间
            approvalTime: '2016-05-12',
            // 附件（发票等）
            accessory: '这是附件'
          }
        ],
        // "批量删除"按钮 是否可以操作
        isButtonOperated: false
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      //选中列表行
      handleSelectionChange(val) {
        // val是 选中的行的信息对象 组成的数组
        console.log(val)
        this.isButtonOperated = val.length > 0 ? true: false
      },
      selectable() {          
        /* if(row.status == 1){
          return true
        }else {
          return false
        } */
        return true
      },
      // “批量删除”
      deleteAll() {
        this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showClose: true
        }).then(() => {
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
      },
      // “单个删除”
      deleteOne() {
        this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showClose: true
        }).then(() => {
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
      }
    }
  }
</script>

<style lang="less" scoped>
.finance-apply-container {
  .operate{
    margin-bottom: 5px;
    i {
      margin-left: 3px;
    }
  }
  .table-container {
    margin-top: 10px;
  }
}
</style>