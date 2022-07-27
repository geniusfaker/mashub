import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/home', component: () => import('src/pages/HomePage.vue') },
      { path: '/agents', component: () => import('src/pages/AgentsPage.vue'), },
      { path: '/frameworks', component: () => import('src/pages/FrameworksPage.vue'),},
      {path: '/extensions', component: () => import('src/pages/ExtensionsPage.vue'),},
      {path: '/about', component: () => import('src/pages/AboutPage.vue'),},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
