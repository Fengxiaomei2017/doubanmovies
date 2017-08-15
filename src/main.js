import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'

import '@/common/stylus/icon.styl'
import '@/common/stylus/variable.styl'

// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  loading: require('@/common/image/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
