<template>
  <div class="container-fluid">
    <form class="form-signin" @submit="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" v-model="user.email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" v-model="user.password" class="form-control" placeholder="Password" required="">
      <button class="btn btn-primary btn-block" type="submit">Sign in</button>
    </form>
    <button class="btn btn-primary btn-block" type="submit" @click.stop="register">Register</button>
  </div>
</template>


<script>
import { http } from '../../config/http.js'

  export default {
    name: 'Login',
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
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
            this.$router.push({
              name: 'Home'
            })
          })
          .catch(error => {
            console.log(error)
          })
        },
        register () {
          this.$router.push({
            name: 'Register'
          })
        }
      }
    }
</script>


<style lang="scss">
</style>
