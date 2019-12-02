import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
const Home = () => import('views/home/Home')
const Personnel = () => import('views/personnel/Personnel')


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home', // 首页下的子组件
      component: Home,
      children: [
        {
          path:'personnel',
          component: Personnel
        }
      ]
    }
  ],
  mode: 'history'
})

export default router