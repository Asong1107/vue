// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import Button from "ant-design-vue/lib/button";
import './plugins/ant-design-vue.js'


import './assets/iconfont/iconfont.js'

Vue.config.productionTip = false
// 全局注册，使用方法为 ；this.$axiosvue add ant-design
Vue.prototype.$axios = axios
//全局注册 ，使用方法为： this.qs
Vue.prototype.qs =qs

Vue.component(Button.name, Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
