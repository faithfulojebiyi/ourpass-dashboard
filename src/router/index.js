import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Cards from '../views/Cards.vue'
import Transactions from '../views/Transactions.vue'
import Profile from '../views/Profile.vue'
import Support from '../views/Support.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/cards',
        name: 'Cards',
        component: Cards
      },
      {
        path: '/transactions',
        name: 'Transctions',
        component: Transactions
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/support',
        name: 'Support',
        component: Support
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
