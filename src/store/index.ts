import Vue from "vue";
import Vuex from "vuex";
import getters from './getters';
import user from './modules/user';
import captcha from './modules/captcha';
import register from './modules/register';
import movieInfo from './modules/movieList';
import movieComment from './modules/movieComment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    captcha,
    user,
    register,
    movieInfo,
    movieComment,
  },
  getters
});
