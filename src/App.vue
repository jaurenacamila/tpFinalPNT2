<template>

  <div id="app">
    <div class="jumbotron">
      <div class="container">
        <div class="btn-group">
          <button type="button" class="btn btn-secondary">ABM Usuarios</button>
          <button type="button" class="btn btn-secondary">Consulta Usuarios</button>
          <button type="button" class="btn btn-secondary">Consulta Controles</button>
          <button type="button" class="btn btn-secondary">Estadísticas</button>
        </div>
        <hr>
        <Formulario />
        
      </div>
    </div>
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
    color: whitesmoke;
    background: darkslategray;
    margin-top: 2px;
}
.container {
  background-color: darkslategray;
}
.btn-group{
  margin-top: 10px;
}

</style>
