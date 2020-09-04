<template>
  <div id="app">
    <Header></Header>
    <HomePage></HomePage>
    <BeersPage></BeersPage>
  </div>
</template>

<script>
import Header from './components/Header';
import HomePage from './components/HomePage';
import BeersPage from './components/BeersPage';
export default {
  name: 'App',
  components: {
    Header,
    HomePage,
    BeersPage
  }
}
</script>

<style>
#app {
  font-family: 'Playfair Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
