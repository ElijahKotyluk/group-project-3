import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Register from '../components/user/Register.vue'
import Login from '../components/user/Login.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
