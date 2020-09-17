import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Maintenance from '../views/404.vue';
import Donation from '../views/Donate.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mt',
    name: 'Maintenance',
    component: Maintenance,
  },
  {
    path: '/donate',
    name: 'Donation',
    component: Donation,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
