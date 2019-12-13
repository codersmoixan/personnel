<template>
  <div class="aside-container">

    <!-- 用户登录信息 -->
    <div class="user">
      <div class="user-avatar">
        <img src="~assets/images/publicLayout/aside/user-avatar.jpg" alt="">
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
            <i :class="systems.iconClassName"></i>
            <span>{{ systems.systemName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item class="aside-item" v-for="(item, index) in systems.children" :key="index" @click="item.path !== $route.path &&$router.push(item.path)" ref="aaa"><i class="el-icon-arrow-right"></i>{{ item.name }}</el-menu-item>
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
          systemName: '人事管理系统',
          systemsId: 3,
          iconClassName: 'el-icon-service',
          children: [
            {
              name: '员工列表',
              path: '/personnel/list'
            },
            {
              name: '考勤管理',
              path: '/personnel/record'
            },
            {
              name: '请假管理',
              path: '/personnel/leave'
            },
            {
              name: '招聘计划',
              path: '/personnel/recruit'
            },
            {
              name: '招聘管理',
              path: '/personnel/recruitmanage'
            },
            {
              name: '培训管理',
              path: '/'
            },
            {
              name: '部门管理',
              path: '/'
            },
            {
              name: '小组管理',
              path: '/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    click() {
      console.log(this.$refs.aaa.item)
    },
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    },
  }
}
</script>

<style lang="less">
.aside-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  background-color: #001529;
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
      font-size: 12px;
      display: flex;
      align-items: center;
      padding-left: 60px!important;
      &:hover {
        background-color: rgb(78,84,101)!important;
      }
      &:active {
        background-color: rgb(34, 86, 231)!important;
      }
      i {
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>