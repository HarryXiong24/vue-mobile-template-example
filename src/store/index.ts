import Vue from "vue";
import Vuex from "vuex";
import getters from './getters';
import user from './modules/user';
import captcha from './modules/captcha';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    captcha,
    user
  },
  getters
});
