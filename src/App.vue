<template>
  <div id="app">
    <router-view />
    <Home />
    <CardsCarros />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import CardsCarros from './components/CardsCarros.vue'

  export default {
    name: 'App',
    components:{
      Home
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
