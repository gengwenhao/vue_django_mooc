import Vue from 'vue'
import App from './App.vue'
import Bus from './lib/bus'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = Bus


const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
