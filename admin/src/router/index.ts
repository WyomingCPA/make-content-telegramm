import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'

import { useUserStore } from '../stores/user'

import authMiddleware from './middleware/auth-middleware'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        meta: {
          authRequired: true,
        },
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'source',
        path: 'source',
        component: RouteViewComponent,
        children: [
          {
            name: 'rss-habr',
            path: 'rss-habr',
            component: () => import('../pages/admin/source/Habr.vue'),
          },
          {
            name: 'vk-anime',
            path: 'vk-anime',
            component: () => import('../pages/admin/source/VkAnime.vue'),
          },
          {
            name: 'vk-sexy',
            path: 'vk-sexy',
            component: () => import('../pages/admin/source/VkSexy.vue'),
          },
          {
            name: 'vk-estetic-vibes',
            path: 'vk-estetic-vibes',
            component: () => import('../pages/admin/source/VkEsteticVibes.vue'),
          },
        ],
      },
      {
        name: 'publish',
        path: 'publish',
        component: RouteViewComponent,
        children: [
          {
            name: 'rss-it-publish',
            path: 'rss-it-publish',
            component: () => import('../pages/admin/source/Publish.vue'),
          },
          {
            name: 'vk-anime-publish',
            path: 'vk-anime-publish',
            component: () => import('../pages/admin/source/VkAnimePublish.vue'),
          },
          {
            name: 'vk-sexy-publish',
            path: 'vk-sexy-publish',
            component: () => import('../pages/admin/source/VkSexyPublish.vue'),
          },
        ],
      },
      {
        name: 'queue',
        path: 'queue',
        component: RouteViewComponent,
        children: [
          {
            name: 'queue-anime',
            path: 'queue-anime',
            component: () => import('../pages/admin/queue/Anime.vue'),
          },
          {
            name: 'queue-sexy',
            path: 'queue-sexy',
            component: () => import('../pages/admin/queue/Sexy.vue'),
          },
          {
            name: 'vk-sexy-publish',
            path: 'vk-sexy-publish',
            component: () => import('../pages/admin/source/VkSexyPublish.vue'),
          },
        ],
      },
      UIRoute,
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/login/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/signup/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    path: '/404',
    component: Page404Layout,
    children: [
      {
        name: 'not-found-advanced',
        path: 'not-found-advanced',
        component: () => import('../pages/404-pages/VaPageNotFoundSearch.vue'),
      },
      {
        name: 'not-found-simple',
        path: 'not-found-simple',
        component: () => import('../pages/404-pages/VaPageNotFoundSimple.vue'),
      },
      {
        name: 'not-found-custom',
        path: 'not-found-custom',
        component: () => import('../pages/404-pages/VaPageNotFoundCustom.vue'),
      },
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () => import('../pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
})

router.beforeEach(authMiddleware)

export default router
