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
        {
          name: 'vk-mir-tlen-mai',
          displayName: 'menu.vk-mir-tlen-mai',
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
        {
          name: 'vk-esteticvibes-publish',
          displayName: 'menu.vk-esteticvibes-publish',
        },
      ],
    },
    {
      name: 'tumblr-reblog',
      displayName: 'menu.tumblr-reblog',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'tumblr-reblog-anime',
          displayName: 'menu.tumblr-reblog-anime',
        },
        {
          name: 'tumblr-reblog-estetic-vibes',
          displayName: 'menu.tumblr-reblog-estetic-vibes',
        },
        {
          name: 'tumblr-reblog-sexy',
          displayName: 'menu.tumblr-reblog-sexy',
        },
      ],
    },
    {
      name: 'telegramm-reblog',
      displayName: 'menu.telegramm-reblog',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'telegramm-reblog-anime',
          displayName: 'menu.telegramm-reblog-anime',
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
          displayName: 'menu.queue-sexy',
        },
        {
          name: 'queue-estetic',
          displayName: 'menu.queue-estetic',
        },
        {
          name: 'queue-mir-tlen-mai',
          displayName: 'menu.queue-mir-tlen-mai',
        },
      ],
    },
    {
      name: 'queue',
      displayName: 'menu.group',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'group-index',
          displayName: 'menu.group-index',
        },
        {
          name: 'group-create',
          displayName: 'menu.group-create',
        },
      ],
    },
  ] as INavigationRoute[],
}
