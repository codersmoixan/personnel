import Vue from 'vue'
import Vuex from 'vuex'

// 导入vuex的属性对象
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  personnelList: [], // 所有员工列表
  recruitPlanList: [] // 招聘计划列表
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store