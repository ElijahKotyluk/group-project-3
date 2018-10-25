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
  justify-content: space-between;
  height: 70%;
}

.row1 {
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
    background-color: rgba(200, 200, 200, 0.24)
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
