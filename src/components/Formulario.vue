<template>

  <section class="src-components-formulario">

    <div class="jumbotron mt-3">

      <h4>Alta de usuarios</h4>
      <hr>

      <form :state="formState" @submit.prevent="enviar()">

          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre" autocomplete="off" 
                   name="nombre" v-model.trim="formData.nombre" required :minlength="nombreMin" :maxlength="nombreMax">
          </div>
          
          <div v-if="formData.nombre.length == nombreMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreMax}})</div>
     

        <div class="form-group">
          <label for="apellido">Apellido</label>
          <input type="text" class="form-control" id="apellido" placeholder="Ingrese el apellido">
          
        </div>
        <div class="form-group">
          <label for="dni">Dni</label>
          <input type="number" class="form-control" id="dni"  placeholder="Ingrese el dni">
        </div>
        
        <div class="form-group">
          <label for="fechaNacimiento">Fecha de Nacimiento</label>
          <input type="date" class="form-control" id="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento">
        </div>

        <div class="form-group">
          <label for="rol">Rol</label>
          <input type="text" class="form-control" id="rol" placeholder="Ingrese el rol">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Ingrese el email">
        </div>

        <hr>
  
        <button type="submit" class="btn btn-secondary"  >Ingresar</button>

      </form>

    </div>

  </section>

</template>

<script lang="js">



  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        nombreMin:10,
        nombreMax:30

      }
    },
    methods: {
      eviar(){

      },
      getInitialData(){
        return {
          nombre: '',
        }

      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {
    font-family: Arial, Helvetica, sans-serif;

  }
  .form-group {
   
    margin-left: 10px;
    margin-right: 10px;
  }
  h4 {
    text-align: center;
     text-decoration: underline;
  }
  button {
    position:absolute;
    margin: 10px;
  }
  .jumbotron {
    background-color: darkslategrey;
  }
  
</style>
