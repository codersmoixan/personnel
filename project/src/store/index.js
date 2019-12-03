import Vue from 'vue'
import Vuex from 'vuex'

// 导入vuex的属性对象
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  list: []
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
