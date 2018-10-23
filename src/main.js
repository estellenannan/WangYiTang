import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload';


import router from './router'
import store from './store'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import Split from './components/Split/Split.vue';

import 'swiper/dist/css/swiper.min.css';
import './mock';
import loading from './common/img/loading.gif';

Vue.component('HeaderTop',HeaderTop);
Vue.component('Split', Split);

Vue.use(VueLazyload, {
  loading
});

new Vue ({
  el: '#app',
  render: h => h(App),
  router,
  store
});
