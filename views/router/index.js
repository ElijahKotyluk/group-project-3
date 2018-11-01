import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Mental from '../components/Mental.vue'
import Physical from '../components/Physical.vue'
import Activities from '../components/Activities.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    }
  ]
})
