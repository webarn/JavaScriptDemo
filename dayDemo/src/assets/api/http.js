import axios from 'axios';

axios.defaults.baseURL = ' https://easy-mock.com/mock/59c4c7ade0dc663341b4cb6e/ajax';


export default {
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params,
    }).then((response) => {
      return response.data;
      console.log(1)
    }).catch((err) => {
      return err;
    })
  },
}
