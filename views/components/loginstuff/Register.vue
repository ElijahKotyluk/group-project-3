<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
    <label for="inputEmail" class="sr-only">email register</label>
    <input type="email" id="inputEmail" v-model="input.email" class="form-control" placeholder="Email register" required="" autofocus="">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" v-model="input.password" class="form-control" placeholder="Password" required="">
    <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="register()">Sign in</button>
  </form>
</template>


<script>
  import { http } from '../config/http.js'
  import axios from 'axios'

  export default {
    name: 'Register',
    data () {
      return {
        input: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
       register(event) {
        axios.post("http://localhost:8080/api/auth/register", this.input)
        .then(response => {
          console.log("Registered Successfully.")
          this.$router.push({
            name: 'SignIn'
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
