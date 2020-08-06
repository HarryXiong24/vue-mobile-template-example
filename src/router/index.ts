import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Login = () => import('../views/Login/Login.vue')
const Init = () => import('../views/Init/Init.vue')

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: 'Login', requiresAuth: true },
  },
  {
    path: "/Init",
    name: "Init",
    component: Init,
    meta: { title: 'Init', requiresAuth: true },
  }
];

const router = new VueRouter({
  routes
});

export default router;
