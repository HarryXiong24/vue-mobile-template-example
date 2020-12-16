import Vue from "vue";
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import echarts from 'echarts';
import vueEcharts from 'vue-echarts';

import App from "./App.vue";
import router from "./router";
import store from "./store";

import '../mock/mockServer'

Vue.use(MuseUI)
Vue.use(echarts as any)
Vue.component('v-chart', vueEcharts)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
