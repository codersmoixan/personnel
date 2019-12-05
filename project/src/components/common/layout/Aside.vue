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
            <i :class="systems.iconClassName"></i>
            <span>{{ systems.systemName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item class="aside-item" v-for="(item, index) in systems.children" :key="index" @click="$router.push(item.path)"><i class="el-icon-arrow-right"></i>{{ item.name }}</el-menu-item>
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
          iconClassName: 'el-icon-edit-outline',
          children: [
            {
              name: '子项目一',
              path: '/'
            },
            {
              name: '子项目二',
              path: '/'
            },
            {
              name: '子项目三',
              path: '/'
            },
            {
              name: '子项目四',
              path: '/'
            },
            {
              name: '子项目五',
              path: '/'
            },
            {
              name: '子项目六',
              path: '/'
            }
          ]
        },
        {
          systemName: '财务管理系统',
          systemsId: 2,
          iconClassName: 'el-icon-news',
          children: [
            {
              name: '公司账目列表',
              path: '/finance/company'
            },
            {
              name: '固定资产管理',
              path: '/finance/fixed-assets'
            },
            {
              name: '报销管理',
              path: '/finance/apply'
            },
            {
              name: '福利保险管理',
              path: '/finance/welfare'
            },
            {
              name: '工资管理',
              path: '/finance/wage'
            },
            {
              name: '组管理',
              path: '/finance/group'
            }
          ]
        },
        {
          systemName: '人事管理系统',
          systemsId: 3,
          iconClassName: 'el-icon-service',
          children: [
            {
              name: '子项目一',
              path: '/'
            },
            {
              name: '子项目二',
              path: '/'
            },
            {
              name: '子项目三',
              path: '/'
            },
            {
              name: '子项目四',
              path: '/'
            },
            {
              name: '子项目五',
              path: '/'
            },
            {
              name: '子项目六',
              path: '/'
            }
          ]
        },
        {
          systemName: '技术管理系统',
          systemsId: 4,
          iconClassName: 'el-icon-edit',
          children: [
            {
              name: '项目列表',
              path: '/technical/ItemsList',
            },
            {
              name: '需求列表',
              path: '/technical/DemandList'
            },
            {
              name: '销售部需求列表',
              path: '/technical/SalesDepartmentList'
            },
            {
              name: '组管理',
              path: '/technical/Group'
            },
            {
              name: '产品列表',
              path: '/technical/ProductList'
            },
            {
              name: '会议列表',
              path: '/technical/MeetingList'
            },
            {
              name: '知识分享',
              path: '/technical/KnowledgeSharing'
            },
            {
              name: '项目阶段列表',
              path: '/technical/ProjectPhaseList'
            }
          ]
        },
        {
          systemName: '销售管理系统',
          systemsId: 5,
          iconClassName: 'el-icon-edit',
          children: [
            {
              name: '子项目一',
              path: '/'
            },
            {
              name: '子项目二',
              path: '/'
            },
            {
              name: '子项目三',
              path: '/'
            },
            {
              name: '子项目四',
              path: '/'
            },
            {
              name: '子项目五',
              path: '/'
            },
            {
              name: '子项目六',
              path: '/'
            }
          ]
        },
        {
          systemName: '统计管理系统',
          systemsId: 6,
          iconClassName: 'el-icon-edit',
          children: [
            {
              name: '子项目一',
              path: '/'
            },
            {
              name: '子项目二',
              path: '/'
            },
            {
              name: '子项目三',
              path: '/'
            },
            {
              name: '子项目四',
              path: '/'
            },
            {
              name: '子项目五',
              path: '/'
            },
            {
              name: '子项目六',
              path: '/'
            }
          ]
        },
        {
          systemName: '日志管理系统',
          systemsId: 7,
          iconClassName: 'el-icon-edit',
          children: [
            {
              name: '子项目一',
              path: '/'
            },
            {
              name: '子项目二',
              path: '/'
            },
            {
              name: '子项目三',
              path: '/'
            },
            {
              name: '子项目四',
              path: '/'
            },
            {
              name: '子项目五',
              path: '/'
            },
            {
              name: '子项目六',
              path: '/'
            }
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