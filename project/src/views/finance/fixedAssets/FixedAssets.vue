<template>
  <div class="fixed-assets-container">
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
            label="资产名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="count"
            label="数量"
            width="60">
          </el-table-column>
          <el-table-column
            prop="money"
            label="价格"
            sortable
            width="100">
          </el-table-column>
          <el-table-column
            prop="durableYear"
            label="使用年限"
            width="90">
          </el-table-column>
          <el-table-column
            prop="invoice"
            label="是否开具发票"
            width="110">
          </el-table-column>
          <el-table-column
            prop="btime"
            label="购买时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="bperson"
            label="购买负责人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="status"
            label="财务确认状态"
            width="110">
          </el-table-column>
          <el-table-column
            prop="confirmTime"
            label="财务确认时间"
            width="110">
          </el-table-column>
          <el-table-column
            prop="compensation"
            label="赔偿金"
            width="80">
          </el-table-column>
          <el-table-column
            prop="channel"
            label="用途"
            width="100">
          </el-table-column>
          <el-table-column
            prop="accessory"
            label="附件"
            width="120">
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
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
            // 附件（发票等）
            accessory: '这是附件'
          },
          {
            // 复选框是否选中
            isSelected: false,
            // 资产名称
            name: '固定电脑',
            // 资产数量
            count: 30,
            // 价格
            money: 150000,
            // 使用年限
            durableYear: 7,
            // 是否开发票
            invoice: true,
            // 购买时间
            btime: '2016-05-03',
            // 购买负责人
            bperson: '小王',
            // 财务确认状态，0审核通过，1待审核，2审核未通过
            status: 0,
            // 财务确认时间
            confirmTime: '2016-05-10',
            // 赔偿金
            compensation: 30000,
            // 用途
            channel: '***',
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
.fixed-assets-container {
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