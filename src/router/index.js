import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: () => import('../views/Rankings.vue'),
    },
    {
      path: '/newReview',
      name: 'newReview',
      component: () => import('../views/NewReview.vue'), 
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: () => import('../views/LogIn.vue'),
    }
  ]
})

export default router