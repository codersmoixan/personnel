<template>
  <div class="zj-person-list" v-if="Object.keys(tabelData.length !== 0 )">
    <el-table :data="tabList" border style="width: 100%" class="base-font-size">
      <el-table-column fixed prop="id" label="员工ID" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="gender" label="性别" width="80">
        <template slot-scope="scope">
          <div>{{scope.row.gender ? '男' : '女'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="80"></el-table-column>
      <el-table-column prop="entryPosition" label="职位" width="120"></el-table-column>
      <el-table-column prop="" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="entryPosition" label="部门" width="120"></el-table-column>
      <el-table-column prop="province" label="籍贯" width="120"></el-table-column>
      <el-table-column prop="entryDate" label="入职日期" width="180"></el-table-column>
      <el-table-column prop="" label="在职情况" width="120">
        <template slot-scope="scope">
          <div>
            {{scope.row.status ? '在职' : '离职'}}
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="checkData(scope.row)" icon="el-icon-view"></el-button>
          <el-button type="text" size="small" @click="editData(scope.row)" icon="el-icon-edit"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "PersonnelList",
    props: {
      tabList: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        tabelData: this.tabList,
        checkListIndex: 0, // 查看员工详情的index值
        checkIsClose: true,
        showId: 'edit'
      }
    },
    methods: {
      checkData(data) {
        let personnelData = data
        let checkClose = this.checkIsClose
        this.$bus.$emit('zj_checkData', {
          personnelData,
          checkClose
        })

      },
      editData(data) {
        let editData = data
        let editClose = this.checkIsClose
        let showId = this.showId
        this.$bus.$emit('zj_editData', {
          editData,
          editClose,
          showId
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .zj-person-list {
    width: 100%;

    .tab-list {
      width: 100%;
      border-bottom: 1px solid #ccc;

      tr {
        display: flex;
        height: 40px;

        td {
          width: 150px;
          padding-left: 5px;
          line-height: 40px;
          border-right: 1px solid #ccc;
          box-sizing: border-box;
        }
      }
    }
  }
</style>