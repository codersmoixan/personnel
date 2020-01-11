const mutations = {
  addPersonnelList(state, payload) {
    state.personnelList.push(...payload)
  },
}

export default mutations