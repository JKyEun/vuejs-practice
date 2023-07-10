import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './views/MainHome.vue';
import MainAbout from './views/MainAbout.vue';
import MainCounter from './views/MainCounter.vue';

const routes = [
  {
    path: '/',
    component: MainHome,
  },
  {
    path: '/about',
    component: MainAbout,
  },
  { path: '/count', component: MainCounter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
