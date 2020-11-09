import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Maintenance from '../views/404.vue';
import Donation from '../views/Donate.vue';
import Blog from '../views/Blog.vue';
// Story
import KaryaDisabilitas from '../views/Story/KaryaDisabilitas.vue';

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
    path: '/story',
    name: 'Story',
    component: Blog,
  },
  {
    path: '/donate',
    name: 'Donation',
    component: Donation,
  },
  {
    path: '/story/karya-disabilitas',
    name: 'KaryaDisabilitas',
    component: KaryaDisabilitas,
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
