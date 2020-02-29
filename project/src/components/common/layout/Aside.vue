<template>
  <div class="aside-container scrollbar">
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
    <el-scrollbar>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex.toString()"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="select"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="isUniqueOpened"
          v-for="(systems, index) in systemsGroup" :key="index">
          <el-submenu :index="systems.systemIndex + index.toString()" class="aside-submenu">
            <template slot="title">
              <i :class="systems.iconClassName"></i>
              <span class="base-font-size">{{ systems.systemName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item class="aside-item"
                            v-for="(item, index) in systems.children"
                            :key="index"
                            @click="routerJump(item, index)" ref="aaa"
                            :index="index.toString()">
                <i :class="item.iconClassName" :index="index"></i>
                {{ item.name }}
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu :index="systemItem.systemIndex.toString()"
                        v-for="(systemItem, itemIndex) in systemsMenu" :key="itemIndex">
              <template slot="title">
                <i :class="systemItem.iconClassName"></i>
                <span class="base-font-size">{{systemItem.systemName}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="systemItem.systemIndex + index.toString()"
                              v-for="(item, index) in systemItem.children"
                              :key="index" @click="routerJump(item, index)">
                  <i :class="item.iconClassName"></i>
                  {{item.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: 'Jack',
        isUniqueOpened: true,
        systemsGroup: [
          {
            systemName: '人事管理系统',
            systemsId: 3,
            iconClassName: 'el-icon-service',
            systemIndex: '1',
            children: [
              {
                name: '员工列表',
                path: '/personnel/list',
                iconClassName: 'el-icon-notebook-2'
              },
              {
                name: '考勤管理',
                path: '/personnel/record',
                iconClassName: 'el-icon-finished'
              },
              {
                name: '请假管理',
                path: '/personnel/leave',
                iconClassName: 'el-icon-water-cup'
              },
              {
                name: '招聘计划',
                path: '/personnel/recruit',
                iconClassName: 'el-icon-notebook-1'
              },
              {
                name: '招聘管理',
                path: '/personnel/recruitmanage',
                iconClassName: 'el-icon-notebook-2'
              },
              {
                name: '培训管理',
                path: '/personnel/train',
                iconClassName: 'el-icon-reading'
              },
              {
                name: '部门管理',
                path: '/personnel/departmentmanage',
                iconClassName: 'el-icon-monitor'
              },
              {
                name: '员工活动',
                path: '/personnel/activity',
                iconClassName: 'el-icon-s-flag'
              },
              {
                name: '公告管理',
                path: '/personnel/notice',
                iconClassName: 'el-icon-bell'
              }
            ]
          }
        ],
        systemsMenu: [
          {
            systemName: '小组管理',
            systemsId: 3,
            iconClassName: 'el-icon-menu',
            systemIndex: '2',
            children: [
              {
                name: '小组列表',
                path: '/personnel/group/grouplist',
                iconClassName: 'el-icon-s-operation'
              },
              {
                name: '成员列表',
                path: '/personnel/group/memberlist',
                iconClassName: 'el-icon-user-solid'
              },
              {
                name: '组成员管理',
                path: '/personnel/group/manage',
                iconClassName: 'el-icon-s-management'
              }
            ]
          },
          {
            systemName: '薪资管理',
            systemsId: 3,
            iconClassName: 'el-icon-coin',
            systemIndex: '3',
            children: [
              {
                name: '日工资',
                path: '/personnel/salary/salaryday',
                iconClassName: 'el-icon-sunny'
              },
              {
                name: '月工资',
                path: '/personnel/salary/salarymonth',
                iconClassName: 'el-icon-moon'
              }
            ]
          }
        ],
        isActive: false,
        activeIndex: 0
      }
    },
    computed: {
      activeStyle() {
        return this.isActive ? "'background-color': '#4e5465 !important;'" : "'background-color': '#000f1d'"
        // return this.isActive ? console.log(1) : console.log(2)
      }
    },
    methods: {
      // 路由跳转
      routerJump(item, index) {
        if(item.path === this.$route.path) {
          this.isActive = true
        }else {
          this.$router.push(item.path)
        }
        // this.$el.style.background = '#4e5465'
        // console.log(this);
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
        // console.log(key, keyPath);
      },
      handleClose() {
        // console.log(key, keyPath);
      },
      select(index, indexPath) {
        // console.log(index, indexPath);
      }
    }
  }
</script>

<style lang="less" scoped>
  .aside-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 220px;
    height: 100vh;
    background-color: #001529;
    text-align: center;
    color: #fff;
    z-index: 99;

    .el-scrollbar {
      height: calc(100% - 145px);
    }

    .user {
      .user-avatar {
        padding-top: 30px;
        width: 80px;
        margin-left: 70px;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .user-name {
        p {
          margin: 16px 0;
          font-size: 12px;
        }
      }
    }

    .el-col {
      width: 100%;

      .el-submenu.aside-submenu {
        &:hover {
          background-color: rgb(78, 84, 101);
        }
      }

      .el-menu-item-group__title {
        padding: 0;
      }

      .el-menu-item.aside-item {
        background-color: rgb(0, 15, 29);
        font-size: 12px;
        display: flex;
        align-items: center;
        padding-left: 80px;

        &:hover {
          background-color: rgb(78, 84, 101);
        }

        &:active {
          background-color: rgb(34, 86, 231);
        }

        i {
          color: #fff;
          font-size: 12px;
        }
      }
    }

    .el-col .el-menu-item.aside-item.is-active,
    .el-menu-item.is-active{
      background-color: #4e5465 !important;
    }
    /deep/.el-submenu__title {
      font-size: 13px;
    }
    /deep/.el-menu-item {
      font-size: 13px;
      padding-left: 100px !important;
    }
  }
</style>