<template>
  <div class="app-header">
    <h1 class="header-title">{{ title }}</h1>
    <h3 class="header-subtitle">Best Place For Body and Mind Practices</h3>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['title']
}
</script>

<style lang="scss">
.app-header {
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 55, 66, 1);
}

.header-title {
  font-family: fantasy;
  color: rgba(242, 241, 241, 1);
  margin: 0;
}

.header-subtitle {
  font-family: cursive;
  color: rgba(242, 241, 241, 1);
  margin: 0;
}
</style>
