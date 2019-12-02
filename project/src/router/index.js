import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/home/Home')
const Personnel = () => import('views/personnel/Personnel')
const UpdateLog = () => import('views/updateLog/UpdateLog')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/personnel'
    },
    {
      path: '/personnel',
      component: Personnel
    },
    {
      path: '/updatelog',
      component: UpdateLog
    }
  ],
  mode: 'history'
})

export default router