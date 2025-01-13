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
          name: 'vk-cats',
          displayName: 'menu.vk-cats',
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
        {
          name: 'tumblr-reblog-all',
          displayName: 'menu.tumblr-reblog-all',
        },
        {
          name: 'tumblr-cats-video',
          displayName: 'menu.tumblr-cats-video',
        },
        {
          name: 'tumblr-sexy-video',
          displayName: 'menu.tumblr-sexy-video',
        },
        {
          name: 'tumblr-sexy-photo',
          displayName: 'menu.tumblr-sexy-photo',
        },
      ],
    },
    {
      name: 'post-mass-create',
      displayName: 'menu.post-mass-create',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'post-mass-create-anime',
          displayName: 'menu.post-mass-create-anime',
        },
        {
          name: 'post-mass-create-sexy',
          displayName: 'menu.post-mass-create-sexy',
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
          name: 'queue-cats',
          displayName: 'menu.queue-cats',
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
