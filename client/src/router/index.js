import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',

      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

// GOOD
// router.beforeEach((to, from) => {
//   if(localStorage.getItem('public_token') && to.name == 'login') {
//     console.log(from)
//     return `${from.fullPath}`
//   }

//   if(!localStorage.getItem('public_token') && to.name == 'bookmark') {
//     console.log(from)
//     return `${from.fullPath}`
    
//   }
//   console.log(from)

  
  
// })


export default router

