<template>
  <div class="container">
    <div class="row1">
      <div class="physical">
        <h1>Physical</h1>
      </div>
      <div class="mental">
        <h1>Mental</h1>
      </div>
    </div>
    <div class="row2">
      <div class="body-mind">
        <h1>Body and Mind Challenges</h1>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  props: ['title']
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.row1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.row2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
