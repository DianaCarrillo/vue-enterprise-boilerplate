<template>
  <div id="app">
    <!-- <Speakers/> -->
    <Movies />
  </div>
</template>

<script>
// import Speakers from "./components/Speakers"
import Movies from './components/Movies'

export default {
  name: 'App',
  components: {
    // Speakers
    Movies,
  },
}
</script>

<style>
#app {
  padding-bottom: 60px;
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
