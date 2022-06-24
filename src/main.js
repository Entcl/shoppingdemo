import Vue from 'vue'

import './assets/css/style.css';
import router from './router';
import store from './store';


import App from './App.vue'


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});



new Vue({
  render: h => h(App),
  el: '#app',
  store,
  router
}).$mount('#app')
