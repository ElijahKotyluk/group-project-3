<template>
  <div class="container-fluid">
    <div v-for="error of errors">
      <p>{{error.message}}</p>
    </div>
    <form class="form-signin" @submit="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" v-model="user.email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" v-model="user.password" class="form-control" placeholder="Password" required="">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>


<script>
import { http } from '../../config/http.js'

  export default {
    name: 'SignIn',
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        errors: []
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        http
          .post("/auth/login", this.user)
          .then(response => {
            localStorage.setItem('jwtToken', response.data.token)
            console.log('log in successful')
          })
          .catch(error => {
            console.log(error)
            this.errors.push(error)
          })
        }
      }
    }
</script>


<style lang="scss">
</style>
