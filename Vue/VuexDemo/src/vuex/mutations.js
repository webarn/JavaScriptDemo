const GET_PARAM = 'GET_PARAM'
const PLAY_ICON = 'PLAY_ICON'
const GET_DATA = 'GET_DATA'
const LOADING = 'LOADING'
const GET_LIST = 'GET_LIST'

export default {
  [GET_PARAM](state, Object) {
    state.param = Object
  },
  [PLAY_ICON](state, Object) {
    state.icon = Object
  },
  [GET_DATA](state, Object) {
    state.name = Object
  },
  [LOADING](state, bol) {
    state.lodaing = bol
  },
  [GET_LIST](state, Object) {
    state.datas = Object
  }
}
