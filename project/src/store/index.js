import Vue from 'vue'
import Vuex from 'vuex'

// 导入vuex的属性对象
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  list: {
    tab: ['ID', '姓名', '性别', '年龄', '职位', '邮箱', '部门', '籍贯', '入职日期', '在职情况'],
    list: [
      {
        id: '1',
        personnelNum: '2019120510010',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: 800, // 餐补
        fareSubsidy: 300, // 车费补贴
      },
      {
        id: '2',
        personnelNum: '2019120510011',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '3',
        personnelNum: '2019120510012',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '4',
        personnelNum: '2019120510013',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '5',
        personnelNum: '2019120510014',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '6',
        personnelNum: '2019120510015',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '7',
        personnelNum: '2019120510016',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '8',
        personnelNum: '2019120510017',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '9',
        personnelNum: '2019120510018',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      },
      {
        id: '10',
        personnelNum: '2019120510019',
        name: '丁刚',
        sex: '男',
        age: 20,
        eduction: '本科',
        state: '在职',
        role: false, // 员工状态
        school: '五道口职业学院',
        nationality: '中国',
        province: '江苏省',
        city: '苏州',
        dress: '横井镇某个不知名街道',
        nation: '汉',
        IDCard: '511902199803059526',
        workHistory: '*************************',
        entryTime: '2018-08-08',
        interviewResults: '*********************',
        department: '销售部',
        probation: 3,
        roleTitle: '普通员工',
        email: 'y.ykqhwk@rgpwubyg.ye',
        qq: '1340134215',
        mealAllowance: false, // 餐补
        fareSubsidy: false, // 车费补贴
      }

    ]
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store