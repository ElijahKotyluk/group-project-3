<template>
  <div class="app-header">
    <div class="container-fuild">
    
    <h1 class="header-title" :title="title">{{ title }}</h1>
    <h3 class="header-subtitle">Best Place For Body and Mind Practices</h3>
    <br>
    <nav-menu class="nav-menu"></nav-menu>
    <br>
    
    <button class="btn btn-md btn-primary btn-block" id="Sbutton" type="submit" @click="logout()">Logout</button>


    </div>
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
  margin-top: 50px;
}

.header-title {
  font-family: fantasy;
  color: rgba(242, 241, 241, 1);
  margin: 0;
  text-align: center;
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
  text-align: center;
}

#Sbutton {
  width: 100px;
  height: 30px;
  margin-right: 700px;
}

</style>
