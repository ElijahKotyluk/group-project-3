<template>
  <div id="app">
    <div class="sidebar-container">
      <slide-menu></slide-menu>
    </div>
    <div class="content-container">
      <app-header :title="title"></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import AppHeader from './components/header/AppHeader.vue'
import Home from './components/Home.vue'
import SlideMenu from './components/sidebar/SlideMenu.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM'
    }
  },
  components: {
    AppHeader,
    Home,
    SlideMenu
  }
};
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  background-image: url('../public/images/landscape.jpg');
  background-size: 100% 100%;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content-container {
  width: 80%;
  height: 100%;
  top: 0;
  left: 0;
}

</style>
