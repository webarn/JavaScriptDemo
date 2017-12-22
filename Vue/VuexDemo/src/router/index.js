import Vue from 'vue'
import Router from 'vue-router'
import Audio from '@/components/Audio'
import Statu from '@/components/Statu'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Audio
    },
    {
      path: '/statu',
      name: 'statu',
      component: Statu
    }
  ]
})
