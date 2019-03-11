/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: ''
  },
  mutations: {
    changekeyword (state, keyword) {
      state.keyword = keyword
    }
  }
})
