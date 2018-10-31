import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Mental from '../components/Mental.vue'
import Physical from '../components/Physical.vue'
import Activities from '../components/Activities.vue'
import SignIn from '../components/SignIn.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn,
      default: true,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mental',
      name: 'Mental',
      component: Mental,
    },
    {
      path: '/physical',
      name: 'Physical',
      component: Physical
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    }
  ]
})
