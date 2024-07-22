export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/home/dashboard',
    name: 'home-dashboard',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
]
