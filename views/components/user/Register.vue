<template>
  <div class="container-fluid" id="register">
    <form class="form-signin" @submit="register">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="regName" class="sr-only">Username</label>
      <input type="text" id="regName" v-model="user.name" class="form-control" placeholder="Username" require="" />
      <label for="regEmail" class="sr-only">email register</label>
      <input type="email" id="regEmail" v-model="user.email" class="form-control" placeholder="Email register">
      <label for="regPassword" class="sr-only">Password</label>
      <input type="password" id="regPassword" v-model="user.password" class="form-control" placeholder="Password" required="">
      <button class="btn btn-lg btn-primary btn-block" id="regist" type="submit">Register</button>
    </form>
    <button class="btn btn-primary btn-block" type="submit" @click.stop="loginPage">Login</button>
  </div>
</template>


<script>
  import { http } from '../../config/http.js'

  export default {
    name: 'Register',
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          activities: []
        },
        submitDone: true
      }
    },
    props: {
      rules: {
        type: Object
      }
    },
    methods: {
      register(event) {
        event.preventDefault()
        this.submitDone = false
        http
        .post("/auth/register", this.user)
        .then(response => {
          this.submitDone = true
          this.alert(true, 'Create', 'User')
          this.$router.push({
            name: 'Login'
          })
        }).catch(error => {
          this.submitDone = true
          this.alert(false, 'Create', 'User')
        })
      },
      checkForm() {
        if (this.user.age <= 0 || this.user.name == '' || this.user.email == '') {
          return true
        } else {
          return false
        }
      },
      alert(success, callName, resource) {
        console.log('Add Alerting')
        this.$emit('alert', success, callName, resource)
      },
      loginPage() {
        this.$router.push({
          name: 'Login'
        })
      }
    }
  }
</script>

<style lang="scss">
#register {
  width: 400px;
  height: 300px;

}

#regist {
  color: lightgreen;
}
</style>
