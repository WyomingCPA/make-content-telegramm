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
          {
            name: 'vk-cats',
            path: 'vk-cats',
            component: () => import('../pages/admin/source/VkCats.vue'),
          },
          {
            name: 'vk-mir-tlen-mai',
            path: 'vk-mir-tlen-mai',
            component: () => import('../pages/admin/source/VkMirTlenMai.vue'),
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
          {
            name: 'vk-esteticvibes-publish',
            path: 'vk-esteticvibes-publish',
            component: () => import('../pages/admin/source/VkEsteticVibesPublish.vue'),
          },
        ],
      },
      {
        name: 'reblogtumblr',
        path: 'reblogtumblr',
        component: RouteViewComponent,
        children: [
          {
            name: 'tumblr-reblog-anime',
            path: 'tumblr-reblog-anime',
            component: () => import('../pages/admin/tumblr/Reblog.vue'),
          },
          {
            name: 'tumblr-reblog-estetic-vibes',
            path: 'tumblr-reblog-estetic-vibes',
            component: () => import('../pages/admin/tumblr/EsteticVibes.vue'),
          },
          {
            name: 'tumblr-reblog-sexy',
            path: 'tumblr-reblog-sexy',
            component: () => import('../pages/admin/tumblr/SexyReblog.vue'),
          },
          {
            name: 'tumblr-reblog-all',
            path: 'tumblr-reblog-all',
            component: () => import('../pages/admin/tumblr/AllGroups.vue'),
          },
          {
            name: 'tumblr-cats-video',
            path: 'tumblr-cats-video',
            component: () => import('../pages/admin/tumblr/TumblrCatsVideo.vue'),
          },
          {
            name: 'tumblr-cats-photo',
            path: 'tumblr-cats-photo',
            component: () => import('../pages/admin/tumblr/TumblrCatsPhoto.vue'),
          },
          {
            name: 'tumblr-sexy-video',
            path: 'tumblr-sexy-video',
            component: () => import('../pages/admin/tumblr/TumblrSexyVideo.vue'),
          },
          {
            name: 'tumblr-sexy-photo',
            path: 'tumblr-sexy-photo',
            component: () => import('../pages/admin/tumblr/TumblrSexyPhoto.vue'),
          },
          {
            name: 'tumblr-anime-photo',
            path: 'tumblr-anime-photo',
            component: () => import('../pages/admin/tumblr/TumblrAnimePhoto.vue'),
          },
          {
            name: 'tumblr-anime-video',
            path: 'tumblr-anime-video',
            component: () => import('../pages/admin/tumblr/TumblrAnimeVideo.vue'),
          },
          {
            name: 'tumblr-nature-photo',
            path: 'tumblr-nature-photo',
            component: () => import('../pages/admin/tumblr/TumblrNaturePhoto.vue'),
          },
        ],
      },
      {
        name: 'post-mass-create',
        path: 'post-mass-create',
        component: RouteViewComponent,
        children: [
          {
            name: 'post-mass-create-anime',
            path: 'post-mass-create-anime',
            component: () => import('../pages/admin/mass/Anime.vue'),
          },
          {
            name: 'post-mass-create-sexy',
            path: 'post-mass-create-sexy',
            component: () => import('../pages/admin/mass/Sexy.vue'),
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
            name: 'queue-estetic',
            path: 'queue-estetic',
            component: () => import('../pages/admin/queue/EsteticVibes.vue'),
          },
          {
            name: 'queue-cats',
            path: 'queue-cats',
            component: () => import('../pages/admin/queue/Cats.vue'),
          },
          {
            name: 'queue-mir-tlen-mai',
            path: 'queue-mir-tlen-mai',
            component: () => import('../pages/admin/queue/VkMirTlenMai.vue'),
          },
        ],
      },
      {
        name: 'groups',
        path: 'groups',
        component: RouteViewComponent,
        children: [
          {
            name: 'group-index',
            path: 'group-index',
            component: () => import('../pages/admin/groups/Index.vue'),
          },
          {
            name: 'group-create',
            path: 'group-create',
            component: () => import('../pages/admin/groups/Create.vue'),
          },
          {
            name: 'group-edit',
            path: 'edit/:id',
            component: () => import('../pages/admin/groups/Edit.vue'),
          },
          {
            name: 'source-edit',
            path: 'source-edit/:id',
            component: () => import('../pages/admin/groups/SourceManager.vue'),
          },
          {
            name: 'source-edit-edit',
            path: 'source-edit/edit/:id',
            component: () => import('../pages/admin/groups/SourceEdit.vue'),
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
