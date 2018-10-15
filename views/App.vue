<template>
 <home :title="title"></home>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM'
    }
  },
  components: {
    Home
  }
};
</script>

<style lang="scss">
</style>
