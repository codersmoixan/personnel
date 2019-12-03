import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/publicLayout/Home')
const Personnel = () => import('views/personnel/Personnel')
const UpdateLog = () => import('views/updateLog/UpdateLog')
const Finance = () => import('views/finance/Finance')
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
    {
      path: '/finance',
      component: Finance
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