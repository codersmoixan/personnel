import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入功能组件
// const Home = () => import('views/publicLayout/Home')

// 登录界面
const LoginModule = () => import('views/loginModule/LoginModule')
const RegisterModule = () => import('views/loginModule/RegisterModule')
const RetrieveModule = () => import('views/loginModule/RetrieveModule')

// 人事路由
const Personnel = () => import('views/personnel/Personnel')
const PublicLayout = () => import('views/publicLayout/PublicLayout')
// 子路由
const PersonnelList = () => import('views/personnel/personnelList/PersonnelList')
const PersonnelCwork = () => import('views/personnel/personnelCwork/PersonnelCwork')
const LeaveManage = () => import('views/personnel/leaveManage/LeaveManage')
const RecruitPlan = () => import('views/personnel/recruitPlan/RecruitPlan')
const RecruitManage = () => import('views/personnel/recruitManage/RecruitManage')
const DepartmentManage = () => import('views/personnel/departmentManage/DepartmentManage')
const TrainManage = () => import('views/personnel/trainManage/TrainManage')
const SalaryDay = () => import('views/personnel/salaryManage/salaryDay/SalaryDay')
const SalaryMonth = () => import('views/personnel/salaryManage/salaryMonth/SalaryMonth')
const StaffActivity = () => import('views/personnel/staffactivity/StaffActivity')
const GroupList = () => import('views/personnel/groupManage/groupList/GroupList')
const MemberList = () => import('views/personnel/groupManage/memberList/MemberList')
const MemberManage = () => import('views/personnel/groupManage/manage/MemberManage')
const NoticeManage = () => import('views/personnel/noticeManage/NoticeManage')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 人事路径默认访问
    { path: '/personnel', redirect: '/personnel/list' },
    // 登录
    { path: '/login', component: LoginModule, meta: { keepAlive: false } },
    // 注册
    { path: '/register', component: RegisterModule, meta: { keepAlive: false } },
    // 找回密码
    { path: '/retrieve', component: RetrieveModule, meta: { keepAlive: false } },
    /**
     *  人事管理系统
     * */
    {
      path: '/personnel',
      component: PublicLayout,
      children: [
        // 人事列表
        { path: '/personnel/list', component: PersonnelList },
        // 打卡记录
        { path: '/personnel/record', component: PersonnelCwork },
        // 请假管理
        { path: '/personnel/leave', component: LeaveManage, },
        // 招聘计划
        { path: '/personnel/recruit', component: RecruitPlan },
        // 招聘管理
        { path: '/personnel/recruitmanage', component: RecruitManage },
        // 部门管理
        { path: '/personnel/departmentmanage', component: DepartmentManage },
        // 培训管理
        { path: '/personnel/train', component: TrainManage },
        // 员工活动
        { path: '/personnel/activity', component: StaffActivity },
        // 公告管理
        { path: '/personnel/notice', component: NoticeManage },
        // 薪资管理默认跳转
        { path: '/personnel/salary', redirect: '/personnel/salary/salaryday'},
        { path: '/personnel/salary/salaryday', component: SalaryDay },
        { path: '/personnel/salary/salarymonth', component: SalaryMonth },
        // 小组管理
        { path: '/personnel/group', redirect: '/personnel/group/grouplist' },
        { path: '/personnel/group/grouplist', component: GroupList },
        { path: '/personnel/group/memberlist', component: MemberList },
        { path: '/personnel/group/manage', component: MemberManage }
      ]
    }
  ],
  mode: 'history'
})

/**
 * 导航守卫
 * */
router.beforeEach((to, from, next) => {
  // 1. 如果用户访问登录界面直接放行
  if(to.path === '/login') return next()
  // 2. 如果用户要注册账号直接放行
  if(to.path === '/register') return next()
  // 3. 如果用户要找回密码直接放行
  if(to.path === '/retrieve') return next()

  // 4. 从 sessionStorage 中获取保存的 token 值
  let tokenStr = window.sessionStorage.getItem('token')
  // 5. 如果token值强制跳转到登录页
  if(!tokenStr) return next('/login')
  next()
})

export default router