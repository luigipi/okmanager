export default [
    // {
    //   title: 'Agents',
    //   icon: 'UsersIcon',
    //   route: 'apps-users-list',
    // },
    {
        title: "Customer Managment",
        icon: "UsersIcon",
        route: "apps-users-list",
        user: false,
    },
    {
        title: "Transactions",
        icon: "GridIcon",
        route: "apps-transactions",
        user: false,
    },
    // {
    //   title: 'Safelock',
    //   icon: 'LockIcon',
    //   route: 'apps-safelock',
    //   user: false
    // },
    {
        title: "Rates & Charges",
        icon: "DollarSignIcon",
        route: "apps-rate-charges",
        user: false,
    },
    // {
    //   title: 'Tasks',
    //   icon: 'BoxIcon',
    //   route: 'apps-service-category',
    //   user: false
    // },
    // {
    //     title: "Task Templates",
    //     icon: "BoxIcon",
    //     route: "apps-service-category",
    //     user: false,
    // },
    // {
    //     title: "Tasks",
    //     icon: "PackageIcon",
    //     route: "apps-tasks",
    //     user: false,
    // },
    // {
    //   title: 'Feedback & Complains',
    //   icon: 'HeadphonesIcon',
    //   route: 'apps-supports',
    //   user: true
    // },
    // {
    //   title: 'Refer & Earn',
    //   icon: 'GitMergeIcon',
    //   route: 'apps-referrals',
    //   user: false
    // },
    // {
    //   title: 'OkPay Earning',
    //   icon: 'BriefcaseIcon',
    //   route: 'pages-earnings',
    //   user: false
    // },
    {
        title: "Settings",
        icon: "SettingsIcon",
        route: "apps-settings",
        user: false,
    },
    {
        title: "Email",
        icon: "InboxIcon",
        route: "apps-email",
        user: true,
    },
    // {
    //     title: "Blogs",
    //     icon: "TagIcon",
    //     route: "apps-blogs",
    //     user: true,
    // },
    {
        title: "Support",
        icon: "MessageSquareIcon",
        route: "apps-supports",
        user: true,
    },
    {
        title: "Admin",
        icon: "UserIcon",
        user: false,
        children: [
            {
                title: "Profile",
                route: "pages-account-setting",
                user: false,
            },
            {
                title: "Users",
                route: "pages-users",
                user: false,
            },
        ],
    },
];
