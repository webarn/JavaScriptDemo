import axios from 'axios'

export function get(url, data) {
  let params;
  params = data;
  return axios({
    url,
    data
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    return err;
  })
}
