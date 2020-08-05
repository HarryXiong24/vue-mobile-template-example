import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Login = () => import('../views/Login/Login.vue')

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes
});

export default router;
