import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  
  mode:'history',
  routes: [

    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/login',
      redirect:'/'
    },
    {
      path: '/index',
      name:'index',
      component:index
    },
    {
      path:'/test',
      component :test
    }
  ]
})
