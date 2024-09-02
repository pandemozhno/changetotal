import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../views/Calculator.vue'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/convert',
      name: 'Calculator',
      component: Calculator
    }
  ]
})

export default router
