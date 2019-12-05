<template>
  <div class="zj-person-list" v-if="Object.keys(tabelData.length !== 0 )">
<!--    <table class="tab-list" cellspacing="0" cellpadding="0">-->
<!--      <tr>-->
<!--        <td v-for="tabitem in tabList.tab" class="tab-item">{{tabitem}}</td>-->
<!--      </tr>-->
<!--      <tr v-for="listitem in tabList.list">-->
<!--        <td>{{listitem.id}}</td>-->
<!--        <td>{{listitem.name}}</td>-->
<!--        <td>{{listitem.sex}}</td>-->
<!--        <td>{{listitem.age}}</td>-->
<!--        <td>{{listitem.department}}</td>-->
<!--        <td>{{listitem.email}}</td>-->
<!--        <td>{{listitem.native}}</td>-->
<!--        <td>{{listitem.entryTime}}</td>-->
<!--        <td>{{listitem.state}}</td>-->
<!--      </tr>-->
<!--    </table>-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="text" size="small">查看</el-button>-->
<!--          <el-button type="text" size="small">编辑</el-button>-->
<!--        </template>-->
    <el-table
      :data="tabelData"
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="personnelNum"
        label="ID"
        width="220">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="100">
      </el-table-column>
      <el-table-column
        prop="roleTitle"
        label="职位"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="250">
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="籍贯"
        width="120">
      </el-table-column>
      <el-table-column
        prop="entryTime"
        label="入职日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="state"
        label="在职情况"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="checkData(scope.row)">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.row)">删除</el-button>
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
              type: Object,
              default () {
                return {}
              }
            },
          },
          data() {
            return {
              tabelData: this.tabList.list,
              checkListIndex: 0, // 查看员工详情的index值
              checkIsClose: true
            }
          },
          methods: {
            checkData(data) {
              let checkListId = data.id
              let checkClose = this.checkIsClose
              this.$bus.$emit('zj_checkData', {
                checkListId,
                checkClose
              })
            },
            deleteRow(data) {
              let listIndex = data.id
              this.$store.commit('removeList', listIndex)
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