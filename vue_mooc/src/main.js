import Vue from 'vue'
import App from './App.vue'
import Bus from './lib/bus'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = Bus

// 解决跳转后滚动条位置不正确的bug
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
