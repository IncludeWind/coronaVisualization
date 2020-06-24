import Vue from 'vue'
import App from './App.vue'
//import puppeteer from 'puppeteer'
import axios from 'axios'
axios.defaults.baseURL = 'https://localhost:8090/'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
