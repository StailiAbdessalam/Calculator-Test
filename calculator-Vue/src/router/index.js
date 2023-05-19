import { createRouter, createWebHistory } from 'vue-router'
import {HomeView,CalculatorView,EquationB,EquationA} from '../views/'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: CalculatorView
    },
    {
      path: '/Equation1',
      name: 'Equation1',
      component: EquationA
    },
    {
      path: '/Equation2',
      name: 'Equation2',
      component: EquationB
    },
   
  ]
})

export default router
