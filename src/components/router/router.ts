import About from '@/app/About.vue'
import Main from '@/app/Main.vue'
import Posts from '@/app/Posts.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts',
    component: Posts,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
