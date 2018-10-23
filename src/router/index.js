/*
* 所有的配置路由
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Things from '../pages/Things/Things.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter);

//每一个对象对应一个对应的路由 还得配置默认的根路由为首页
export default new VueRouter ({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/things',
      component: Things,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      // meta: {
      //   showFooter: true
      // }
    },
    {
      path: '/login',
      component: Login
    },
    {//默认的根路由为首页路由
      path: '/',
      redirect: '/msite'
    }
  ]
})