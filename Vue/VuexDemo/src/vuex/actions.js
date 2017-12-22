// const GET_SYNC = 'GET_SYNC'
import axios from 'axios'
export default {
  getData({
    commit,
    state
  }) {
    axios({
      url: 'http://nc.zongxueguan.com/v1/books?online=1&page=1&num=5',
      headers: {
        'api_key': 'mingjiazongxueguan'
      },
    }).then(res => {
      commit('GET_DATA', {
        res
      })
    })
  }
}
