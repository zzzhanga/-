import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '1949'
  },
  mutations: {
    changekeyword (state, keyword) {
      state.keyword = keyword
    }
  }
})
