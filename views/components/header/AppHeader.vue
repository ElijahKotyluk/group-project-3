<template>
  <div class="app-header">
    <h1 class="header-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['title']
}
</script>

<style lang="scss">
.app-header {
  width: 100%;
  height: 5em;
  background-color: rgba(20, 55, 66, 1);

  .header-title {
    font-family: fantasy;
    color: rgba(120, 100, 90, 1);
  }
}
</style>
