import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/publicLayout/Home')
const Personnel = () => import('views/personnel/Personnel')
const UpdateLog = () => import('views/updateLog/UpdateLog')
// const Finance = () => import('views/finance/Finance')
const Sale = () => import('views/sale/Sale')
const Supervise = () => import('views/supervise/Supervise')
const Technical = () => import('views/technical/Technical')
const Statistics = () => import('views/statistics/Statistics')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    /* {
      path: '/',
      redirect: '/personnel'
    }, */
    {
      path: '/personnel',
      component: Personnel
    },
    {
      path: '/updatelog',
      component: UpdateLog
    },
    //  财务管理系统 路由
    {
      path: '/finance',
      component: () => import('views/finance/Finance'),
      children: [
        {
          path: 'company',
          component: () => import('views/finance/companyAccounts/CompanyAccounts')
        },
        {
          path: 'fixed-assets',
          component: () => import('views/finance/fixedAssets/FixedAssets')
        },
        {
          path: 'apply',
          component: () => import('views/finance/apply/Apply')
        },
        {
          path: 'welfare',
          component: () => import('views/finance/welfare/Welfare')
        },
        {
          path: 'wage',
          component: () => import('views/finance/wage/Wage')
        },
        {
          path: 'group',
          component: () => import('views/finance/group/Group')
        }
      ]
    },
    {
      path: '/sale',
      component: Sale
    },
    {
      path: '/supervise',
      component: Supervise
    },
    {
      path: '/technical',
      component: Technical
    },
    {
      path: '/statistics',
      component: Statistics
    }
  ],
  mode: 'history'
})

export default router