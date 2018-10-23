import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import Split from './components/Split/Split.vue';

import 'swiper/dist/css/swiper.min.css';

Vue.component('HeaderTop',HeaderTop);
Vue.component('Split', Split);
new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
});
