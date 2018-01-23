// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import './mock'

import Axios from 'axios';
Vue.prototype.$Axios = Axios

// import ECharts from 'vue-echarts/components/ECharts.vue'

// import ECharts modules manually to reduce bundle size
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

//直接引用
import ElementUI from 'element-ui'
Vue.use(ElementUI)
//插件引用 修改引用模式时要修改.babelrc文件
// import { Button, Dialog, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
// Vue.use(Button)
// Vue.use(Dialog)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
