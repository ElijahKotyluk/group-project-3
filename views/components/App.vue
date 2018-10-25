<template>
  <div class="app">
     <app-header :title="title"></app-header>
     <div class="app-body">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
import AppHeader from './header/AppHeader.vue'
import Home from './Home.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM'
    }
  },
  components: {
    Home,
    AppHeader
  }
};
</script>

<style lang="scss">

</style>
