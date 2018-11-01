<template>
  <div class="app-header">
    <h1 class="header-title" :title="title">{{ title }}</h1>
    <h3 class="header-subtitle">Best Place For Body and Mind Practices</h3>
    <nav-menu></nav-menu>
    <button class="btn btn-primary btn-block" type="submit" @click="logout()">Logout</button>
  </div>
</template>


<script>
import NavMenu from './nav/NavMenu.vue'

export default {
  name: 'AppHeader',
  data () {
    return {
      title: 'PM'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('jwtToken')
      this.$router.push({
        name: 'Login'
      })
    }
  },
  components: {
    NavMenu
  }
}
</script>


<style lang="scss">
.app-header {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 55, 66, 0);
}

.header-title {
  font-family: fantasy;
  color: rgba(242, 241, 241, 1);
  margin: 0;
    animation: color-change 7s infinite;
}
    @keyframes color-change {
        0% { color: rgb(255, 255, 255); }
        50% { color: rgb(132, 132, 255); }
        100% { color: rgb(0, 60, 255); }
    }


.header-subtitle {
  font-family: cursive;
  color: rgba(242, 241, 241, 1);
  margin: 0;
}
</style>
