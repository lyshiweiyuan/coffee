import { createRouter, createWebHistory } from 'vue-router'
import Algorithm from '../views/Algorithm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'algorithm'
      }
    },
    {
      path: '/algorithm',
      name: 'algorithm',
      redirect: {
        name: 'recall'
      },
      component: Algorithm,
      children: [
        {
          path: 'recall',
          name: 'recall',
          component: () => import('../views/recall/index.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
