<template>

  <div id="app">
    <div class="jumbotron">
      <div class="container">
        <br>
        <Navbar/>
        <router-view></router-view>
        <br>
        
      </div>
    </div>
  </div>

</template>

<script>

  import Navbar from './components/Navbar.vue'
 
  export default {
    name: 'App',
    components: {
      Navbar
      
    }
  }

</script>

<style>

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: whitesmoke;
    background: darkslategray;
    margin-top: 2px;
}
.container {
  background-color: rgb(77, 78, 78);
}

</style>
