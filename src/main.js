import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/Router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'
import storeOption from './util/Store';

Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCookies);

const store = new Vuex.Store(storeOption);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
