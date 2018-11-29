import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/base.css';
import '@/assets/style.css';

import 'we-vue/lib/style.css'

import { Swipe, SwipeItem, Loadmore, InfiniteScroll, NumberSpinner } from 'we-vue'

Vue.use(NumberSpinner)
Vue.use(Loadmore)
Vue.use(InfiniteScroll)
Vue.use(Swipe).use(SwipeItem)
Vue.use(VueAxios, axios)

// 注册导航守卫（每次加载一个页面时就会自动被执行）
router.beforeEach((to, from, next) => {
  if(to.meta.needLogin)
  {
    let ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
    if(ACCESS_TOKEN)
      next()
    else
      // 重定向到登录页面
      next('/login')
  }
  else
    // 直接加载页面
    next()
})

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8001/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
