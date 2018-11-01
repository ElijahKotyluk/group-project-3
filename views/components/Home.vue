<template>
  <div class="container-fluid">
    <app-header></app-header>
    <div class="row">
      <div class="col-5-sm float-left physical">
        <h1>Physical</h1>
        <div id="morphing"> <svg width="140" height="140" viewBox="0 0 140 140">
      <g fill="none" fill-rule="evenodd">
        <g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
          <polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
          <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
          <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
          <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
        </g>
        <polygon class="polymorph" stroke-width="1" stroke="currentColor" points="70 27.18219862061589 119.38681184584613 60.18181184584613 102.20406969569262 120.43882231230813 52.72688154153875 98.44880137938411 6.608198620615889 55.49212892492326 "></polygon>
      </g>
    </svg> </div>
      </div>
      <div class="col-5-sm float-right mental">
        <h1>Mental</h1>
        <div id="morphing"> <svg width="140" height="140" viewBox="0 0 140 140">
      <g fill="none" fill-rule="evenodd">
        <g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
          <polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
          <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
          <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
          <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
        </g>
        <polygon class="polymorph" stroke-width="1" stroke="currentColor" points="70 27.18219862061589 119.38681184584613 60.18181184584613 102.20406969569262 120.43882231230813 52.72688154153875 98.44880137938411 6.608198620615889 55.49212892492326 "></polygon>
      </g>
    </svg> </div>
      </div>
    </div>
    <div class="row">
      <div class="body-mind">
        <h1>Body and Mind Challenges</h1>
      </div>
    </div>
  </div>
</template>


<script>
import AppHeader from './header/AppHeader.vue'

export default {
  name: 'Home',
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    morphing: function () {
      anime({
        targets: ".polymorph",
        points: [
          { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
          { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
          { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
          { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
      });
    }
  },
  components: {
    AppHeader
  }
}
</script>


<style lang="scss">
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .physical {
    color: rgba(152, 22, 37, 1);
    padding: 6em;
    border: 5px solid rgba(112, 108, 108, 1);
    border-radius: 1.25em;
    background-color: rgba(200, 200, 200, 0.24)
  }

  .mental {
    color: rgba(37, 22, 152, 1);
    padding: 6em;
    border: 5px solid rgba(112, 108, 108, 1);
    border-radius: 1.25em;
    background-color: rgba(200, 200, 200, 0.24);
  }
}

.row2 {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .body-mind {
    padding: .85em 2.3em;
    border: 5px solid rgba(112, 108, 108, 1);
    border-radius: 1.25em;
    background-color: rgba(200, 200, 200, 0.24)
  }
}
</style>
