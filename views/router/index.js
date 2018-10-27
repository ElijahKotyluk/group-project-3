import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Mental from './components/Mental.vue'
import Physical from './components/Physical.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      default: true
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
    }
  ]
})
