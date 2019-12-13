import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/publicLayout/Home')

// 人事路由
const Personnel = () => import('views/personnel/Personnel')
// 子路由
const PersonnelList = () => import('views/personnel/personnelList/childComps/PersonnelList')
const PersonnelCwork = () => import('views/personnel/personnelCwork/PersonnelCwork')
const LeaveManage = () => import('views/personnel/leaveManage/LeaveManage')
const RecruitPlan = () => import('views/personnel/recruitPlan/RecruitPlan')
const RecruitManage = () => import('views/personnel/recruitManage/RecruitManage')


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
     {
      path: '/',
      redirect: '/personnel/list'
    },
    {
      // 人事路由
      path: '/personnel',
      component: Personnel,
      children: [
        {
          path: 'list',
          component: PersonnelList
        },
        {
          path: 'record',
          component: PersonnelCwork
        },
        {
          path: 'leave',
          component: LeaveManage
        },
        {
          path: 'recruit',
          component: RecruitPlan
        },
        {
          path: 'recruitmanage',
          component: RecruitManage
        }
      ]
    }
  ],
  mode: 'history'
})

export default router