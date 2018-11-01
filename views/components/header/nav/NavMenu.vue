<template>
  <div class="container-fluid">
    <ul class="nav-menu">
      <router-link class="nav-menu-item" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Mental',
          page: '/mental'
        },
        {
          id: 2,
          text: 'Physical',
          page: '/physical'
        },
        {
          id: 3,
          text: 'Activities',
          page: '/Activities'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
</style>
