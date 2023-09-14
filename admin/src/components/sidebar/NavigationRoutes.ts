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
      name: 'products',
      displayName: 'menu.products',
      meta: {
        icon: 'vuestic-iconset-components',
      },
      disabled: true,
      children: [
        {
          name: 'refrigerator',
          displayName: 'menu.refrigerator',
        },
        {
          name: 'washmashine',
          displayName: 'menu.washmashine',
        },
        {
          name: 'tv32',
          displayName: 'menu.tv32',
        },
        {
          name: 'tv50',
          displayName: 'menu.tv50',
        },
        {
          name: 'smart',
          displayName: 'menu.smart',
        },
        {
          name: 'laptop',
          displayName: 'menu.laptop',
        },
        {
          name: 'favorite',
          displayName: 'menu.favorite',
        },
      ],
    },
  ] as INavigationRoute[],
}
