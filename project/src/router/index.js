import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/publicLayout/Home')

// 人事路由
const Personnel = () => import('views/personnel/personnelList/Personnel')
const List = () => import('views/personnel/personnelList/childComps/PersonnelList')


const UpdateLog = () => import('views/updateLog/UpdateLog')
// const Finance = () => import('views/finance/Finance')
const Sale = () => import('views/sale/Sale')
const Supervise = () => import('views/supervise/Supervise')
const Technical = () => import('views/technical/Technical')
const Statistics = () => import('views/statistics/Statistics')

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
          component: List
        }
      ]
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
      component: Technical,
      children:[
      {
        path:'ProjectPhaseList',
        component:()=>import('views/technical/projectPhaseList/ProjectPhaseList')
      },
      {
        path:'ProductList',
        component:()=>import('views/technical/productList/ProductList')
      },   
      {
        path:'MeetingList',
        component:()=>import('views/technical/meetingList/MeetingList')
      },
      {
        path:'KnowledgeSharing',
        component:()=>import('views/technical/knowledgeSharing/KnowledgeSharing')
      },
      {
        path:'ItemsList',
        component:()=>import('views/technical/itemsList/ItemsList'),
      },
      {
        path:'Group',
        component:()=>import('views/technical/group/Group')
      },
      {
        path:'DemandList',
        component:()=>import('views/technical/demandList/DemandList')
      },
      {
        path:'SalesDepartmentList',
        component:()=>import('views/technical/salesDepartmentList/SalesDepartmentList')
      }
    ]
    },
    {
      path: '/statistics',
      component: Statistics
    }
  ],
  mode: 'history'
})

export default router