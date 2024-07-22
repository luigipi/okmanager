export default [
  // {
  //   title: 'Agents',
  //   icon: 'UsersIcon',
  //   route: 'apps-users-list',
  // },
  {
    title: 'User Managment',
    icon: 'UsersIcon',
    route: 'apps-users-list',
  },
  {
    title: 'Transactions',
    icon: 'GridIcon',
    route: 'apps-transactions',
  },
  {
    title: 'Safelock',
    icon: 'LockIcon',
    route: 'apps-safelock',
  },
  {
    title: 'Rates & Charges',
    icon: 'DollarSignIcon',
    route: 'apps-rate-charges',
  },
  {
    title: 'Service Categories',
    icon: 'BoxIcon',
    route: 'apps-service-category',
  },
  {
    title: 'Services',
    icon: 'PackageIcon',
    route: 'apps-services',
  },
  {
    title: 'Feedback & Complains',
    icon: 'HeadphonesIcon',
    route: 'apps-supports',
  },
  {
    title: 'ePin Requests',
    icon: 'RefreshCwIcon',
    route: 'apps-epin-requests',
  },
  {
    title: 'Refer & Earn',
    icon: 'GitMergeIcon',
    route: 'apps-referrals',
  },
  {
    title: 'OkPay Earning',
    icon: 'BriefcaseIcon',
    route: 'pages-earnings',
  },
  {
    title: 'Settings',
    icon: 'SettingsIcon',
    route: 'apps-settings',
  },
  {
    title: 'Admin',
    icon: 'UserIcon',
    children: [
      {
        title: 'Profile',
        route: 'pages-account-setting',
      },
      {
        title: 'Users',
        route: 'pages-users',
      },
    ],
  },
  
]
