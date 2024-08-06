export default [
    {
        path: "/apps/users/list",
        name: "apps-users-list",
        component: () => import("@/views/apps/user/users-list/UsersList.vue"),
    },
    {
        path: "/apps/users/view/:id",
        name: "apps-users-view",
        component: () => import("@/views/apps/user/users-view/UsersView.vue"),
    },
    {
        path: "/apps/users/edit/:id",
        name: "apps-users-edit",
        component: () => import("@/views/apps/user/users-edit/UsersEdit.vue"),
    },

    // Invoice
    {
        path: "/apps/invoice/list",
        name: "apps-invoice-list",
        component: () =>
            import("@/views/apps/invoice/invoice-list/InvoiceList.vue"),
    },
    {
        path: "/apps/invoice/preview/:id",
        name: "apps-invoice-preview",
        component: () =>
            import("@/views/apps/invoice/invoice-preview/InvoicePreview.vue"),
    },
    {
        path: "/apps/invoice/add/",
        name: "apps-invoice-add",
        component: () =>
            import("@/views/apps/invoice/invoice-add/InvoiceAdd.vue"),
    },
    {
        path: "/apps/invoice/edit/:id",
        name: "apps-invoice-edit",
        component: () =>
            import("@/views/apps/invoice/invoice-edit/InvoiceEdit.vue"),
    },

    // Transactions
    {
        path: "/apps/transactions/",
        name: "apps-transactions",
        component: () => import("@/views/apps/transactions/Transactions.vue"),
    },
    // {
    //     path: "/apps/safelock/",
    //     name: "apps-safelock",
    //     component: () => import("@/views/apps/safelock/Safelock.vue"),
    // },
    {
        path: "/apps/rate-charges/",
        name: "apps-rate-charges",
        component: () => import("@/views/apps/rates/RateCharges.vue"),
    },

    // Categories
    // {
    //     path: "/apps/service-category/",
    //     name: "apps-service-category",
    //     component: () => import("@/views/apps/category/Categories.vue"),
    // },
    // {
    //     path: "/apps/service-category/edit/:id",
    //     name: "apps-category-edit",
    //     component: () => import("@/views/apps/category/EditCategory.vue"),
    // },

    // Services
    // {
    //     path: "/apps/services/",
    //     name: "apps-services",
    //     component: () => import("@/views/apps/category/Services.vue"),
    // },
    // {
    //     path: "/apps/services/edit/:id",
    //     name: "apps-services-edit",
    //     component: () => import("@/views/apps/category/EditService.vue"),
    // },

    // Tasks
    // {
    //     path: "/apps/tasks/",
    //     name: "apps-tasks",
    //     component: () => import("@/views/apps/category/Tasks.vue"),
    // },
    // {
    //     path: "/apps/tasks/edit/:id",
    //     name: "apps-tasks-edit",
    //     component: () => import("@/views/apps/category/EditTask.vue"),
    // },

    // Support
    {
        path: "/apps/supports",
        name: "apps-supports",
        component: () => import("@/views/apps/support/Tickets.vue"),
    },
    {
        path: "/apps/supports/edit/:id",
        name: "apps-ticket-edit",
        component: () => import("@/views/apps/support/EditTicket.vue"),
    },
    {
        path: "/apps/referrals/",
        name: "apps-referrals",
        component: () => import("@/views/apps/referrals/Referrals.vue"),
    },
    {
        path: "/apps/Settings/",
        name: "apps-settings",
        component: () => import("@/views/apps/settings/Settings.vue"),
    },
    {
        path: "/apps/email/",
        name: "apps-email",
        component: () => import("@/views/apps/settings/Email.vue"),
    },
    // {
    //     path: "/apps/blogs/",
    //     name: "apps-blogs",
    //     component: () => import("@/views/apps/blog/Blogs.vue"),
    // },
    // {
    //     path: "/apps/blogs/create/",
    //     name: "apps-blogs-create",
    //     component: () => import("@/views/apps/blog/BlogsCreate.vue"),
    // },
    // {
    //     path: "/apps/blogs/:id",
    //     name: "apps-blogs-view",
    //     component: () => import("@/views/apps/blog/BlogsView.vue"),
    // },
    // {
    //     path: "/apps/blogs/update/:id",
    //     name: "apps-blogs-update",
    //     component: () => import("@/views/apps/blog/BlogsUpdate.vue"),
    // },
    // {
    //     path: "/merchants-all",
    //     name: "merchants-all",
    //     component: () => import("@/views/apps/user/MerchantManagement.vue"),
    //     meta: {
    //         layout: "full",
    //         resource: "Auth",
    //         redirectIfLoggedIn: true,
    //     },
    // },
];
