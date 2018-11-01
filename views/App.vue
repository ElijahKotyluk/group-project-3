<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import anime from 'animejs'

export default {
  name: 'App',
  data () {
    return {
      title: 'PM'
    }
  }
};
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  //background-image: url('../public/images/landscape.jpg');
  background-color: rgba(38, 41, 41, 1);
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
