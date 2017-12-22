import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
const Home = () =>
  import ('../components/Page_1.vue')
const Desc = () =>
  import ('../components/Page_2.vue')



Vue.use(Router)

export default new Router({
  routes: [
    //主页
    {
      path: '/',
      name: 'PageOne',
      component: Home
    }, {
      path: '/page_1/:id',
      name: 'pageTwo',
      component: Desc
    }
  ]
})
