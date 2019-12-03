<template>
  <div class="aside-container">

    <!-- 用户登录信息 -->
    <div class="user">
      <div class="user-avatar">
        <img src="@/assets/images/publicLayout/aside/user-avatar.jpg" alt="">
      </div>
      <div class="user-name">
        <p>你好！{{userName}}，欢迎登录！</p>
      </div>
    </div>
    <!-- 管理系统列表 -->
    <el-col :span="12">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened="isUniqueOpened"
        v-for="(systems, index) in systems" :key="index">
        <el-submenu :index="'+index+1+'" class="aside-submenu">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ systems.systemName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item class="aside-item" v-for="(item, index) in systems.children" :key="index">{{ item }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Jack',
      isUniqueOpened: true,
      systems: [
        {
          systemName: '超级管理系统',
          systemsId: 1,
          children: [
            '子项目一',
            '子项目二',
            '子项目三',
            '子项目四',
            '子项目五',
            '子项目六',
          ]
        },
        {
          systemName: '财务管理系统',
          systemsId: 2,
          children: [
            '公司账目列表',
            '固定资产管理',
            '报销管理',
            '福利保险管理',
            '工资管理',
            '组管理'
          ]
        },
        {
          systemName: '人事管理系统',
          systemsId: 3,
          children: [
            '子项目一',
            '子项目二',
            '子项目三',
            '子项目四',
            '子项目五',
            '子项目六',
          ]
        },
        {
          systemName: '技术管理系统',
          systemsId: 4,
          children: [
            '子项目一',
            '子项目二',
            '子项目三',
            '子项目四',
            '子项目五',
            '子项目六',
          ]
        },
        {
          systemName: '销售管理系统',
          systemsId: 5,
          children: [
            '子项目一',
            '子项目二',
            '子项目三',
            '子项目四',
            '子项目五',
            '子项目六',
          ]
        },
        {
          systemName: '统计管理系统',
          systemsId: 6,
          children: [
            '子项目一',
            '子项目二',
            '子项目三',
            '子项目四',
            '子项目五',
            '子项目六',
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
.aside-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 200px;
  background-color: #001529;
  color: #333;
  text-align: center;
  color: #fff;
  .user {
    .user-avatar {
      margin-top: 30px;
      width: 80px;
      height: 80px;
      margin-left: 70px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      p {
        margin: 16px 0;
        font-size: 14px;
      }
    }
  }
  .el-col {
    width: 100%;
    .el-submenu.aside-submenu {
      &:hover {
        background-color: rgb(78,84,101)!important;
      }
    }
    .el-menu-item-group__title {
      padding: 0;
    }
    .el-menu-item.aside-item {
      background-color: rgb(0,15,29)!important;
      &:hover {
        background-color: rgb(78,84,101)!important;
      }
    }
  }
}
</style>