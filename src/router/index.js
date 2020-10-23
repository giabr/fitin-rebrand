import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Maintenance from '../views/404.vue';
import Donation from '../views/Donate.vue';
import Blog from '../views/Blog.vue';
// Story
import MaskerStory from '../components/BlogComponents/Story/MaskerStory.vue';

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
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/donate',
    name: 'Donation',
    component: Donation,
  },
  {
    path: '/blog/masker-story',
    name: 'MaskerStory',
    component: MaskerStory,
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
