<template>
  <div class="ltemsList-container">
    <div class='add'>
      <el-card class="operate-container" shadow="never" style='height:100px margin-bottom:20px'>
      <i class="el-icon-tickets" style=' font-size: 30px;'></i>
      <span style='font-size:30px'>数据列表</span>
       <el-button type="primary" size="small" style='float:right '>添加<i class="el-icon-circle-plus-outline"></i></el-button>
    </el-card>
    </div>
    <div class="operate">
      <el-button type="danger" size="small" @click="deleteAll" v-if="isButtonOperated">批量删除<i class="el-icon-delete"></i></el-button>
      <el-button type="danger" size="small"  disabled v-else style='float:right'>批量删除<i class="el-icon-delete"></i></el-button>
        <el-button type="primary" size="small">搜索<i class="el-icon-search"></i></el-button>
    </div>
    <hr>
    <div class="table-container">
      <template>
        <el-table
          :data="ItemsData"
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
            label="项目名称"
            width="80">
          </el-table-column>
          <el-table-column
            prop="logo"
            label="项目LOGO"
            width="80">
            <template slot-scope="scope">
              <img style="height: 80px" :src="scope.row.pic">
            </template>
          </el-table-column>
          <el-table-column
            prop="ProjectLeader"
            label="项目负责人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="allTime"
            label="项目周期"
            width="90">
          </el-table-column>
          <el-table-column
            prop="ProjectBeginTime"
            label="项目开始时间"
            width="110">
          </el-table-column>
          <el-table-column
            prop="ProjectEndTime"
            label="项目预结束时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="ProjectMembers"
            label="项目成员"
            width="90">
          </el-table-column>
          <el-table-column
            prop="ProjectState"
            label="项目状态(未开始、进行中、已结束)"
            width="150">
          </el-table-column>
          <el-table-column
            prop="ProjectBrief"
            label="项目简要"
            width="80">
          </el-table-column>
          <el-table-column
            prop="CurrentDevelopmentStage"
            label="目前开发阶段"
            width="100">
          </el-table-column>
          <el-table-column
            prop="SubmissionTime"
            label="提交次数统计"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Version"
            label="目前开发版本"
            width="90">
          </el-table-column>
          <el-table-column
            prop="CreateTime"
            label="创建时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="OnlineTime"
            label="预计上线日期"
            width="110">
          </el-table-column>
          <el-table-column
            prop="CarryingCapacity"
            label="预计承载量"
            width="110">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
             <template slot-scope="scope">
              <el-button  type="text" size="small">查看</el-button>
              <el-button  type="text" size="small">日志</el-button>
              <el-button   type="text" size="small" style="margin-left:-1px">编辑</el-button>
              <el-button  @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
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
        ItemsData: [
          {
            // 复选框
            isSelected: false,
            // 项目名称
            name: '项目名称',
            // 项目logo
            logo:'',
            // 项目负责人
            ProjectLeader: '老大',
            // 项目周期
            allTime:'15天',
            // 项目开始时间
            ProjectBeginTime: '2019-12-05',
            // 项目预结束时间
            ProjectEndTime: '2019-12-20',
            // 项目成员
            ProjectMembers: '老二，老三',
            // 项目状态
            ProjectState: '进行中',
            // 项目简要
            ProjectBrief: 'vue项目',
            // 目前开发阶段
            auditOpinCurrentDevelopmentStageion: '刚开始',
            // 提交次数统计
            SubmissionTime: '2',
            // 目前开发版本
            Version: '1.0',
            //创建时间
            CreateTime: '2019-12-05',
            //预计上线时间
            OnlineTime: '2019-12-20',
            // 审核时间
            CarryingCapacity: '2',
          },
           {
            // 复选框
            isSelected: false,
            // 项目名称
            name: '项目名称',
            // 项目logo
            logo:'',
            // 项目负责人
            ProjectLeader: '老大',
            // 项目周期
            allTime:'15天',
            // 项目开始时间
            ProjectBeginTime: '2019-12-05',
            // 项目预结束时间
            ProjectEndTime: '2019-12-20',
            // 项目成员
            ProjectMembers: '老二，老三',
            // 项目状态
            ProjectState: '进行中',
            // 项目简要
            ProjectBrief: 'vue项目',
            // 目前开发阶段
            auditOpinCurrentDevelopmentStageion: '刚开始',
            // 提交次数统计
            SubmissionTime: '2',
            // 目前开发版本
            Version: '1.0',
            //创建时间
            CreateTime: '2019-12-05',
            //预计上线时间
            OnlineTime: '2019-12-20',
            // 审核时间
            CarryingCapacity: '2',
          },
           {
            // 复选框
            isSelected: false,
            // 项目名称
            name: '项目名称',
            // 项目logo
            logo:'',
            // 项目负责人
            ProjectLeader: '老大',
            // 项目周期
            allTime:'15天',
            // 项目开始时间
            ProjectBeginTime: '2019-12-05',
            // 项目预结束时间
            ProjectEndTime: '2019-12-20',
            // 项目成员
            ProjectMembers: '老二，老三',
            // 项目状态
            ProjectState: '进行中',
            // 项目简要
            ProjectBrief: 'vue项目',
            // 目前开发阶段
            auditOpinCurrentDevelopmentStageion: '刚开始',
            // 提交次数统计
            SubmissionTime: '2',
            // 目前开发版本
            Version: '1.0',
            //创建时间
            CreateTime: '2019-12-05',
            //预计上线时间
            OnlineTime: '2019-12-20',
            // 审核时间
            CarryingCapacity: '2',
          },
           {
            // 复选框
            isSelected: false,
            // 项目名称
            name: '项目名称',
            // 项目logo
            logo:'',
            // 项目负责人
            ProjectLeader: '老大',
            // 项目周期
            allTime:'15天',
            // 项目开始时间
            ProjectBeginTime: '2019-12-05',
            // 项目预结束时间
            ProjectEndTime: '2019-12-20',
            // 项目成员
            ProjectMembers: '老二，老三',
            // 项目状态
            ProjectState: '进行中',
            // 项目简要
            ProjectBrief: 'vue项目',
            // 目前开发阶段
            auditOpinCurrentDevelopmentStageion: '刚开始',
            // 提交次数统计
            SubmissionTime: '2',
            // 目前开发版本
            Version: '1.0',
            //创建时间
            CreateTime: '2019-12-05',
            //预计上线时间
            OnlineTime: '2019-12-20',
            // 审核时间
            CarryingCapacity: '2',
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
            message: '删除成功!',
            duration: 1000
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 1000
          });          
        });
      },
      // “单个删除”
      handleDelete(index,row) {
        this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          showClose: true
        }).then(() => {
          let ids = [];
          ids.push(row.id);
          this.updateDeleteStatus(1,ids);
          this.$message({
            type: 'success',
            message: '删除成功!',
             duration: 1000
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 1000
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