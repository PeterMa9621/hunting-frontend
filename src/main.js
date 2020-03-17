import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/Router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
