import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import './assets/css/base.css'
import './plugins/vant'
//导入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import echarts from './plugins/echarts'

Vue.use(echarts)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");