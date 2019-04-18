/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import Cube from 'cube-ui'
import 'animate.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(Cube)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
