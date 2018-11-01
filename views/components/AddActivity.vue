<template>
  <div class="container-fluid">
    <form class="form-signin" @submit="createActivity">
      <h1 class="h3 mb-3 font-weight-normal">Add Activity</h1>
      <label for="activityName" class="sr-only">Category</label>
      <input type="text" id="activityName" v-model="activity.category" class="form-control" placeholder="Mental/Physical" required="" autofocus="">
      <label for="activityDescription" class="sr-only">Description</label>
      <input type="" id="activityDescription" v-model="activity.description" class="form-control" placeholder="Description" required="">
      <button class="btn btn-primary btn-block" type="submit">Create</button>
    </form>
  </div>
</template>


<script>
import { http } from '../config/http.js'

export default {
  name: 'AddActivity',
  data () {
    return {
      activity: {
        name: '',
        category: '',
        description: ''
      },
      submitDone: true
    }
  },
  methods: {
    createActivity(event) {
      event.preventDefault()
      http
      .post("/activities", this.activity)
      .then(response => {
        this.submitDone = true
        this.alert(true, 'Create', 'Activity')
      }).catch(error => {
        this.submitDone = true
        this.alert(false, 'Create', 'Activity')
      })
    },
    alert(success, callName, resource) {
      console.log('Add Alerting')
      this.$emit('alert', success, callName, resource)
    }
  }
}
</script>


<style lang="scss">
</style>
