import About from '@/app/About.vue'
import Main from '@/app/Main.vue'
import PostId from '@/app/posts/PostId.vue'
import Posts from '@/app/posts/Posts.vue'
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
  {
    path: '/posts/:id',
    component: PostId,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
