import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './views/MainHome.vue';
import MainAbout from './views/MainAbout.vue';

const routes = [
  {
    path: '/',
    component: MainHome,
  },
  {
    path: '/about',
    component: MainAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
