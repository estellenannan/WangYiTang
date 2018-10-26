/*
* 所有的配置路由
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

/*import Msite from '../pages/Msite/Msite.vue'
import Things from '../pages/Things/Things.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'*/

/*进行项目的优化
* 单独打包，按需执行咧
* 提高页面展示效率
* */
const Msite = () => import('../pages/Msite/Msite.vue');
const Things = () => import('../pages/Things/Things.vue');
const Classify = () => import('../pages/Classify/Classify.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Profile = () => import('../pages/Profile/Profile.vue');

import PhoneLogin from '../pages/PhoneLogin/PhoneLogin.vue';
import PhoneRegist from '../pages/PhoneRegist/PhoneRegist.vue';
import MailLogin from '../pages/MailLogin/MailLogin.vue';
import MailRegist from '../pages/MailRegist/MailRegist.vue';


Vue.use(VueRouter);

//每一个对象对应一个对应的路由 还得配置默认的根路由为首页
export default new VueRouter({
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
    },
    {
      path: '/phonelogin',
      component: PhoneLogin,
    },
    {
      path: '/phoneregist',
      component: PhoneRegist,
    },
    {
      path: '/maillogin',
      component: MailLogin,
    },
    {
      path: '/mailregist',
      component: MailRegist,
    },
    {//默认的根路由为首页路由
      path: '/',
      redirect: '/msite'
    }
  ]
})
