<template>
  <div class="container-fluid">
    <add-activity></add-activity>
    <div class="list-group">
      <div class="list-group-item" v-for="activity in activities" :key="activity">
        <h5>{{ activity.category }}</h5>
        <p>{{ activity.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import AddActivity from './AddActivity.vue'
import { http } from '../config/http.js'

export default {
  name: 'Activities',
  data () {
    return {
      activities: [],
      activity: {
        name: '',
        category: '',
        description: ''
      }
    }
  },
  created: function() {
    this.listActivities()
  },
  methods: {
    listActivities() {
      http
      .get("activities")
      .then(response => {
        this.activities = response.data.activities;
      })
      .catch(e => {
        this.errors.push(e);
      });
    }
  },
  components: {
    AddActivity
  }
}
</script>


<style lang="scss">
.container-fluid {
  overflow: scroll;
}
</style>
