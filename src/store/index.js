/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultkeyword = ' '
try {
  if (localStorage.keyword) {
    defaultkeyword = localStorage.keyword
  }
} catch (e) {
}
export default new Vuex.Store({
  state: {
    keyword: defaultkeyword
  },
  mutations: {
    changekeyword (state, keyword) {
      state.keyword = keyword
      try {
        localStorage.keyword = keyword
      } catch (error) {
      }
    }
  }
})
