import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import App from './App.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
  ],
});