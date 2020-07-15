<template>

  <section class="src-components-formulario">

    <div class="jumbotron mt-3">

      <h2>Formulario</h2>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" class="form-control" autocomplete="off" name="nombre" 
                v-model.trim="formData.nombre" required :minlength="nombreChrMin" :maxlength="nombreChrMax">
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} 
                caracteres</div>
            <div v-if="formData.nombre.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres 
                alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input type="text" id="apellido" class="form-control" autocomplete="off" name="apellido" 
                v-model.trim="formData.apellido" required :minlength="apellidoMin" :maxlength="apellidoMax">
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{apellidoMin}} 
                caracteres</div>
            <div v-if="formData.apellido.length == apellidoMax" class="alert alert-danger my-1">Máximo de caracteres 
                alcanzados ({{apellidoMax}})</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="dni">DNI</label>
          <input type="number" id="dni" class="form-control" autocomplete="off" name="dni" 
          v-model.number="formData.dni" required>
          <field-messages name="dni" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo DNI requerido</div>
          </field-messages>
        </validate>        
        <br>

        <validate tag="div">
          <label for="fechaNacimiento">Fecha de Nacimiento</label>
          <input type="date" id="fechaNacimiento" class="form-control" autocomplete="off" name="fechaNacimiento"
            v-model="formData.date" required>
          <field-messages name="fechaNacimiento" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Fecha de Nacimiento requerido</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="rol">Rol</label>
          <input type="text" id="rol" class="form-control" autocomplete="off" name="rol" v-model.trim="formData.rol"
                required :minlength="minRol" :maxlength="maxRol">
          <field-messages name="rol" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo rol requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minRol}} 
                caracteres</div>
            <div v-if="formData.rol.length == maxRol" class="alert alert-danger my-1">Máximo de caracteres alcanzados 
                ({{maxRol}})</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" autocomplete="off" name="email" v-model="formData.email"
                required>
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
            <div slot="email" class="alert alert-danger my-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-dark my-4" :disabled="formState.$invalid || enviando" type="submit">Ingresar</button>
        <br>

      </vue-form>

    </div>

  </section>

</template>

<script lang="js">

import { urlUsuarios } from '../urls'


  export default  {
    name: 'src-components-formulario',
    components: {},
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        enviando: false,
        nombreChrMin:3,
        nombreChrMax:20,
        apellidoMin:3,
        apellidoMax:30,
        minRol:3,
        maxRol: 40
      }
    },
    methods: {

      enviar(){
        this.enviando = true
        console.log(this.formData)
        this.axios.post(urlUsuarios, this.formData, {
        'content-type' : 'application/json'
      })
      .then( res => {
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
      })
      .catch(error => {
        console.log('ERROR POST', error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
      },

      getInitialData(){
        return {
          nombre: '',
          apellido: '',
          dni: '',
          fechaNacimiento: '',
          rol: '',
          email: ''
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
    background-color:rgb(25, 66, 66);
  }
  hr {
    background-color: white;
  }

</style>
