import Vue from 'vue'
import Antd from 'ant-design-vue';
import VCharts from 'v-charts-v2'
import App from './App.vue'
import router from './route/router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
