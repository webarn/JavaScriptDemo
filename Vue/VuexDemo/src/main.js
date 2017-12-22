// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex'
import APlayer from 'vue-aplayer-plugin'
import 'vue-aplayer-plugin/dist/APlayer.min.css'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(APlayer)

axios.interceptors.request.use(function (config) {
  store.commit('LOADING', true);
  return config;
}, function (err) {
  return Promise.reject(err);
})

axios.interceptors.response.use(function (response) {
  store.commit('LOADING', false);
  return response;
}, function (err) {
  return Promise.reject(err);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

new Vue({
  el: 'title',
  created() {

  },
  computed: {
    title() {
      return store.state.title;
    },
  }
})
