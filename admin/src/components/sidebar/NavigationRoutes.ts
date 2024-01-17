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
        {
          name: 'vk-estetic-vibes',
          displayName: 'menu.vk-estetic-vibes',
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
        {
          name: 'vk-anime-publish',
          displayName: 'menu.vk-anime',
        },
        {
          name: 'vk-sexy-publish',
          displayName: 'menu.vk-sexy-publish',
        },
      ],
    },
    {
      name: 'queue',
      displayName: 'menu.queue',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'queue-anime',
          displayName: 'menu.queue-anime',
        },
        {
          name: 'queue-sexy',
          displayName: 'menu.queue-anime',
        },
        {
          name: 'queue-estetic',
          displayName: 'menu.queue-estetic',
        },
      ],
    },
  ] as INavigationRoute[],
}
