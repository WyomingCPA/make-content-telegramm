export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'source',
      displayName: 'menu.source',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'rss-habr',
          displayName: 'menu.habr',
        },
        {
          name: 'vk-anime',
          displayName: 'menu.vk-anime',
        },
        {
          name: 'vk-sexy',
          displayName: 'menu.vk-sexy',
        },
      ],
    },
    {
      name: 'publish',
      displayName: 'menu.publish',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'rss-it-publish',
          displayName: 'menu.it-publish',
        },
      ],
    },
  ] as INavigationRoute[],
}
