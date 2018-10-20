<template>
 <app-header :title="title"></app-header>
</template>

<script>
import AppHeader from './components/header/AppHeader.vue'
import Home from './components/Home.vue'

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
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
