<template>
  <div class="container-fluid">
    <activities></activities>
  </div>
</template>


<script>
import Activities from './Activities.vue'

export default {
  name: 'Home',
  props: ['title'],
  data () {
    return {}
  },
  components: {
    Activities
  }
}
</script>


<style lang="scss">
.container-fluid {
  background-color: white;
}
</style>
