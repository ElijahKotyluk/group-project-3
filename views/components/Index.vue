<template>
  <div class="container-fluid">
    <div class="row">
      <app-header :title="title"></app-header>
    </div>
    <div class="row">
      <div class="col-5-sm">
        <slide-menu></slide-menu>
      </div>
      <div class="col-5-sm">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import AppHeader from './header/AppHeader.vue'
import Home from './Home.vue'
import SlideMenu from './sidebar/SlideMenu.vue'

  export default {
    name: 'Index',
    data () {
      return {}
    },
    components: {
      AppHeader,
      SlideMenu,
      Home
    }
  }
</script>


<style lang="scss">
</style>
