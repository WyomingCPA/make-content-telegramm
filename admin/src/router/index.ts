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
        name: 'products',
        path: 'products',
        component: RouteViewComponent,
        children: [
          {
            name: 'refrigerator',
            path: 'refrigerator',
            component: () => import('../pages/admin/products/Refrigerator.vue'),
          },
          {
            name: 'washmashine',
            path: 'washmashine',
            component: () => import('../pages/admin/products/Washmasine.vue'),
          },
          {
            name: 'tv32',
            path: 'tv32',
            component: () => import('../pages/admin/products/Tv32.vue'),
          },
          {
            name: 'tv50',
            path: 'tv50',
            component: () => import('../pages/admin/products/Tv50.vue'),
          },
          {
            name: 'smart',
            path: 'smart',
            component: () => import('../pages/admin/products/Smart.vue'),
          },
          {
            name: 'laptop',
            path: 'laptop',
            component: () => import('../pages/admin/products/Laptop.vue'),
          },
          {
            name: 'favorite',
            path: 'favorite',
            component: () => import('../pages/admin/products/Favorite.vue'),
          },
          {
            name: 'product-edit',
            path: 'edit/:id',
            component: () => import('../pages/admin/products/Edit.vue'),
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
