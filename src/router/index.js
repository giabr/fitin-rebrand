import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Maintenance from '../views/404.vue';
import Nota from '../views/Nota.vue';
import Feedback from '../views/Feedback.vue';
import Member from '../views/Member.vue';

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
    path: '/nota/:id',
    name: 'Nota',
    component: Nota,
  },
  {
    path: '/thank-you',
    name: 'Feedback',
    component: Feedback,
  },
  {
    path: '/member/:id',
    name: 'Member',
    component: Member,
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
