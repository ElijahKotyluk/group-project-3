import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Register from '../components/user/Register.vue'
import Login from '../components/user/Login.vue'
import Activities from '../components/Activities.vue'
import Mental from '../components/Mental.vue'
import Physical from '../components/Physical.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      default: true
    },
    {
      path: '/mental',
      name: 'Mental',
      component: Mental
    },
    {
      path: '/physical',
      name: 'Physical',
      component: Physical
    }
  ]
})
