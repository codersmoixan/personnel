const mutations = {
  addData(state, payload) {
    state.list.list.push(payload)
  },
  removeList(state, payload) { // 传入id删除数组中的元素
    let perList = state.list.list
    for(let item in perList) {
      if(payload === perList[item].id) {
        perList.splice(item, 1)
      }
    }
  }
}

export default mutations