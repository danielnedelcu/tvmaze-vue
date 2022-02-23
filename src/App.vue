<template>
  <div>
    <Shows />
  </div>
</template>

<script>
import Shows from './pages/Shows.vue'

export default {
  name: 'App',
  components: {
    Shows
  }
}
</script>

<style>
#app {
  font-family: Nunito Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3e46;
  margin-top: 60px;
}
</style>
