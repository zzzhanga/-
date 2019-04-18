import * as types from './mutation-types'

const mutations = {
    [types.SET_KEY_WORD](state, keyword) {
      state.keyword = keyword
    }
  }
  
  export default mutations