import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/base.css';
import '@/assets/style.css';

import 'we-vue/lib/style.css'


Vue.use(VueAxios, axios)

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8001/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
