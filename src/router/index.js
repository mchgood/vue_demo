/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

Vue.use(VueRouter)

//向外暴露路由对象
export default new VueRouter({
  //n个路由
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})

