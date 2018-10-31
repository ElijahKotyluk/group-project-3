<template>
  <div class="container">
    <div class="list-group">
      <div class="list-group-item" v-for="activity in activities">

      </div>
    </div>
  </div>
</template>


<script>
import { http } from '../config/http.js'

export default {
  name: 'Challenges',
  data () {
    return {
      activities: []
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
  }
}
</script>


<style lang="scss">
</style>
