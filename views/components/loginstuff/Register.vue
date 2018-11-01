<template>
  <form class="form-signin" @submit="register">
    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
    <label for="regEmail" class="sr-only">email register</label>
    <input type="email" id="regEmail" v-model="user.email" class="form-control" placeholder="Email register">
    <label for="regPassword" class="sr-only">Password</label>
    <input type="password" id="regPassword" v-model="user.password" class="form-control" placeholder="Password" required="">
    <label for="inputAge" class="sr-only">Age</label>
    <input type="number" id="inputAge" v-model="user.age" class="form-control" required="" />
    <label for="inputName" class="sr-only">Name</label>
    <input type="text" id="inputName" v-model="user.name" class="form-control" require="" />
    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    <button type="button" class="close" aria-label="Close" v-on:click="close()">
      <span aria-hidden="true">&times;</span>
    </button>
  </form>
</template>


<script>
  import { http } from '../../config/http.js'

  export default {
    name: 'Register',
    data () {
      return {
        user: {
          name: '',
          age: 0,
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
        http
        .post("/auth/register", this.user)
        .then(response => {
          this.submitDone = true
          this.alert(true, 'Create', 'User')
          this.close()
        }).catch(error => {
          this.submitDone = true
          this.alert(false, 'Create', 'User')
        })
      },
      load() {
        this.user = {
          age: 0,
          email: '',
          name: ''
        }
        this.submitDone = true
      },
      close() {
        this.load()
        this.$emit('closeAdd')
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
      }
    }
  }
</script>
