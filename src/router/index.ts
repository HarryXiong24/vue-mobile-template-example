import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
const Login = () => import('../views/Login/Login.vue')
const Init = () => import('../views/Init/Init.vue')
const PageB = () => import('../views/PageB/PageB.vue')
const PageD = () => import('../views/PageD/PageD.vue')
const Setting = () => import('../views/Setting/Setting.vue')
const MovieDetail = () => import('../views/MovieDetail/MovieDetail.vue')
const Comment = () => import('../views/Comment/Comment.vue')
const Register = () => import('../views/Register/Register.vue')
const LaunchMovie = () => import('../views/LaunchMovie/LaunchMovie.vue')
const UserInfo = () => import('../views/UserInfo/UserInfo.vue')

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: 'Login', requiresAuth: true },
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: { title: 'Register', requiresAuth: true },
  },
  {
    path: "/UserInfo",
    name: "UserInfo",
    component: UserInfo,
    meta: { title: 'UserInfo', requiresAuth: true },
  },
  {
    path: '/Init',
    redirect: '/Init/PageB',
    meta: { title: 'Main', requiresAuth: true }
  },
  {
    path: "/Init",
    name: "Init",
    component: Init,
    meta: { title: 'Init', requiresAuth: true },
    children: [
      {
        path: "/Init/PageB",
        name: "PageB",
        component: PageB,
        meta: { title: 'PageB', requiresAuth: true },
      },
      {
        path: "/Init/PageD",
        name: "PageD",
        component: PageD,
        meta: { title: 'PageD', requiresAuth: true },
      }
    ]
  },
  {
    path: '/Setting',
    name: "Setting",
    component: Setting,
    meta: { title: 'Setting', requiresAuth: true, keepAlive: true }
  },
  {
    path: '/MovieDetail',
    component: MovieDetail,
    meta: { title: 'MovieDetail', requiresAuth: true, keepAlive: true }
  },
  {
    path: '/Comment',
    component: Comment,
    meta: { title: 'Comment', requiresAuth: true, keepAlive: true }
  },
  {
    path: "/LaunchMovie",
    name: "LaunchMovie",
    component: LaunchMovie,
    meta: { title: 'LaunchMovie', requiresAuth: true },
  },
];

const router = new VueRouter({
  routes
});

export default router;
