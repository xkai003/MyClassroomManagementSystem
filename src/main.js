import Vue from 'vue'
import App from './App.vue'
// 导入仓库
import store from './store/index'
// 导入路由
import router from './router'
// 2、获取并打印数据
// console.log(store.state.count)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载仓库
  store,
  router
}).$mount('#app')
