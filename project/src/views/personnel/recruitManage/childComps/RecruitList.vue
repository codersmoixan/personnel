<template>
  <div class="recruit-list-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column type="selection" width="40">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="100">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="100">
      </el-table-column>
      <el-table-column prop="education" label="学历" width="100">
      </el-table-column>
      <el-table-column prop="graduatedSchool" label="毕业院校" width="100">
      </el-table-column>
      <el-table-column prop="professionalSkills" label="专业技能" width="100">
      </el-table-column>
      <el-table-column prop="nowInProvince" label="现居省份" width="100">
      </el-table-column>
      <el-table-column prop="nowInCity" label="现居城市" width="150">
      </el-table-column>
      <el-table-column prop="nowInAddress" label="详细地址" width="200">
      </el-table-column>
      <el-table-column prop="contactInformation" label="联系方式" width="200">
      </el-table-column>
      <el-table-column prop="salaryExpectation" label="期望薪资">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {deleteResumeById} from 'network/personnel'
  export default {
    name: "RecruitList",
    props: {
      resumeShowList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        tableData: this.resumeShowList
      }
    },
    watch: {
      resumeShowList(newData, oldData) {
        this.tableData = newData
      }
    },
    methods: {
      /** 1. 查看当前数据*/
      handleClick(data) {
        console.log(data);
      },
      /**2. 删除当前数据*/
      deleteClick(data) {
        console.log(data);
        // 1. 获取需要删除数据的id
        let deleteId = data.id
        // 2. 发送请求 删除数据
        this.$confirm('确定删除该数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 3. 发送请求
          deleteResumeById(deleteId).then(res => {
            console.log(res);
            // 4. 判断是否删除成功
            if(res.code === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              // 5. 删除成功之后的操作
              this.$emit('againRendering')
            }else {
              this.$message({
                type: 'warning',
                message: '删除失败!'
              });
            }
          }).catch(err => {
            console.log(err);
            this.$message({
              type: 'warning',
              message: '删除失败!'
            });
          })
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

<style scoped lang="less">
  .recruit-list-container {
    position: relative;
  }

</style>