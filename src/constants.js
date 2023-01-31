export const NavigationMenu = [
  {
    id: 0,
    icon: 'home',
    name: 'Dashboard',
    link: '/dashboard',
    children: null
  },
  {
    id: 1,
    icon: 'categories',
    name: 'Categories',
    link: '/categories',
    children: null
  },
  {
    id: 2,
    icon: 'collections',
    name: 'Collections',
    link: '/collections',
    children: [
      {
        id: 3,
        icon: 'circle',
        name: 'Overview',
        link: '/collections/overview',
        children: null
      }
    ]
  },
  {
    id: 4,
    icon: 'content',
    name: 'Content',
    link: '/content',
    children: [
      {
        id: 5,
        icon: 'circle',
        name: 'Utils',
        link: '/content/utils',
        children: [
          {
            id: 6,
            icon: null,
            name: 'Colors',
            link: '/content/utils/colors',
            children: null
          },
          {
            id: 7,
            icon: null,
            name: 'Fonts',
            link: '/content/utils/fonts',
            children: null
          },
          {
            id: 8,
            icon: null,
            name: 'Icons',
            link: '/content/utils/icons',
            children: null
          }
        ]
      },
      {
        id: 9,
        icon: 'circle',
        name: 'Components',
        link: '/content/components',
        children: null
      },
      {
        id: 10,
        icon: 'circle',
        name: 'Elements',
        link: '/content/elements',
        children: null
      },
      {
        id: 11,
        icon: 'circle',
        name: 'Layouts',
        link: '/content/layouts',
        children: null
      }
    ]
  },
  {
    id: 12,
    icon: 'media',
    name: 'Media',
    link: '/media',
    children: null
  },
  {
    id: 13,
    icon: 'letter-plane',
    name: 'Emails',
    link: '/emails',
    children: null
  }
]

export const NavigationGeneral = [
  {
    id: 14,
    icon: 'settings',
    name: 'Settings',
    link: '/settings/profile',
    children: null
  },
  {
    id: 15,
    icon: 'circle-info',
    name: 'Support',
    link: '/support',
    children: null
  }
]
