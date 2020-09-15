<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar';



export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import "./assets/css/style.css";
#app {
  font-family: 'Playfair Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
