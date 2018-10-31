<template>
  <div id="app">
    <app-header></app-header>
    <sign-in></sign-in>
    <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>


<script>
import AppHeader from './components/header/AppHeader.vue'
import SignIn from './components/SignIn.vue'
import anime from 'animejs'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM',
      authenticated: false,
      mockAccount: {
        email: 'email@email.com',
        password: 'securepassword'
      }
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" })
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  },
  components: {
    AppHeader,
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
