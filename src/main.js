import Vue from 'vue'
import App from './App.vue'

import { router } from './routes'
import store from './store'
import './axiosCli'
import './form'
import './usuarios'
import './bootstrap'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')