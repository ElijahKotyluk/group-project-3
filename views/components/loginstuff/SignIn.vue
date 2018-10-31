<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" v-model="input.email" class="form-control" placeholder="Email address" required="" autofocus="">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" v-model="input.password" class="form-control" placeholder="Password" required="">
    <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">Sign in</button>
  </form>
</template>


<script>
import { http } from '../config/http.js'
import axios from 'axios'

  export default {
    name: 'SignIn',
    data () {
      return {
        input: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login(event) {
          axios.post("http://localhost:8080/api/auth/login", this.input)
          .then(response => {
            localStorage.setItem('jwtToken', response.data.token)
            console.log("Logged in successfully")
            this.$router.push({
              name: 'Home'
            })
          })
          .catch(error => {
            console.log(error)
          })
        }
      }
    }
</script>


<style lang="scss">
</style>
