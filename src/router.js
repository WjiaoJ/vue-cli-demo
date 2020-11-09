import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
