<template>
  <div id="app">
    <app-header></app-header>
    <register></register>
    <sign-in></sign-in>
    <router-view />
  </div>
</template>


<script>
import AppHeader from './components/header/AppHeader.vue'
import Register from './components/loginstuff/Register.vue'
import SignIn from './components/loginstuff/SignIn.vue'
import anime from 'animejs'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM'
    }
  },
  methods: {},
  components: {
    AppHeader,
    Register,
    SignIn
  }
};
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  //background-image: url('../public/images/landscape.jpg');
  background-color: rgba(38, 41, 41, 1);
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
