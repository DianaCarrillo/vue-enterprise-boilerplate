<template>
  <div id="app">
    <Continents />
  </div>
</template>

<script>
import Continents from './components/Continents.vue'

export default {
  name: 'App',
  components: {
    Continents,
  },
}
</script>

<style>
#app {
  padding-bottom: 60px;
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
