<template>

  <div id="app">
    <button type="button" class="btn btn-secondary m-3">ABM Usuarios</button>
    <hr>
    <Formulario />
  </div>

</template>

<script>

  import Formulario from './components/Formulario.vue'
 
  export default {
    name: 'App',
    components: {
      Formulario,
      
    }
  }

</script>

<style>

  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background: darkslategray;
    margin-top: 2px;
}

</style>
