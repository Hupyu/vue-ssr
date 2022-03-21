import { createRouter } from 'vue-router'

const routes = [
    { path: '/user', component: () => import('./components/MyUser.vue') },
    { path: '/setting', component: () => import('./components/MySetting.vue') },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}