<template>

  <section class="src-components-usuarios">

    <div class="jumbotron mt-3">

      <h2>Usuarios</h2>
      <hr>

      <button class="btn btn-dark mx-3" @click="getUsuarios()">Ver Usuarios</button>

      <div class="media alert alert-info mt-4" v-for="(usuario, index) in usuarios" :key="index">
        <div class="media-body ml-3">
          <h4><u>USUARIO ID: {{ usuario.id }}</u></h4>
          <br>
          <p>Email: {{ usuario.email }}</p>
          <p>Password: {{ usuario.password }}</p>
          <p>Nombre: {{ usuario.nombre }}</p>
          <p>Apellido: {{ usuario.apellido }}</p>
          <p>Perfil: {{ usuario.perfil }}</p>
          <p>Habilitado: {{ usuario.habilitado }}</p>
          <p>HorasTrabajadas: {{ usuario.hstrabajadas }}></p>
          <button class="btn btn-dark m-3" @click="deleteUsuario(usuario.id)">DAR DE BAJA</button>
        </div>
      </div>

    </div>

  </section>

</template>

<script lang="js">

  import { urlUsuarios } from '../urls'

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios : []
      }
    },
    methods: {

      getUsuarios() {
        this.axios(urlUsuarios)
        .then( res => {
          console.log(res.data)
          this.usuarios = res.data
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      },
    
      deleteUsuario(id) {
        this.axios.delete(urlUsuarios+ "/" +id)
        .then(res => {
          console.log(res.data)
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)
          this.usuarios.splice(offset, 1)
        })
        .catch(error => {
          console.log('ERROR DELETE HTTP', error)
        })
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {
  }

  .jumbotron {
    background-color: rgb(25, 66, 66);
    color: white;
  }

  hr {
    background-color: white;
  }

  .media-body{
     background-color: rgb(77, 78, 78);
     color: whitesmoke
  }

  .media {
    background-color: rgb(77, 78, 78);
  }

</style>
