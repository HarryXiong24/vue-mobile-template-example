import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
const Login = () => import('../views/Login/Login.vue')
const Init = () => import('../views/Init/Init.vue')
const PageA = () => import('../views/PageA/PageA.vue')
const PageB = () => import('../views/PageB/PageB.vue')
const PageC = () => import('../views/PageC/PageC.vue')
const PageD = () => import('../views/PageD/PageD.vue')
const Setting = () => import('../views/Setting/Setting.vue')
const MovieDetail = () => import('../views/MovieDetail/MovieDetail.vue')

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: 'Login', requiresAuth: true },
  },
  {
    path: '/Init',
    redirect: '/Init/PageA',
    meta: { title: 'Main', requiresAuth: true }
  },
  {
    path: "/Init",
    name: "Init",
    component: Init,
    meta: { title: 'Init', requiresAuth: true },
    children: [
      {
        path: "/Init/PageA",
        name: "PageA",
        component: PageA,
        meta: { title: 'PageA', requiresAuth: true },
      },
      {
        path: "/Init/PageB",
        name: "PageB",
        component: PageB,
        meta: { title: 'PageB', requiresAuth: true },
      },
      {
        path: "/Init/PageC",
        name: "PageC",
        component: PageC,
        meta: { title: 'PageC', requiresAuth: true },
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
    meta: { title: 'Setting', requiresAuth: true }
  },
  {
    path: '/MovieDetail',
    component: MovieDetail,
    meta: { title: 'MovieDetail', requiresAuth: true }
  },
];

const router = new VueRouter({
  routes
});

export default router;
