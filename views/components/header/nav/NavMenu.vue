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
          text: 'Mental',
          page: '/mental'
        },
        {
          id: 1,
          text: 'Physical',
          page: '/physical'
        },
        {
          id: 2,
          text: 'Activities',
          page: '/home'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
.nav-menu {
  background-color: darkslategray;
}
</style>
