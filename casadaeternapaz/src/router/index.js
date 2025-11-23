import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contato from '@/views/contato.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contato',
    component: contato
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
