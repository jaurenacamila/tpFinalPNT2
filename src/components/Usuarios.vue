<template>

  <section class="src-components-usuarios">

    <div class="jumbotron mt-3">

      <h2>Usuarios</h2>
      <hr>

      <button class="btn btn-dark mx-3" @click="getUsuarios()">Ver Usuarios</button>

      <div class="media alert alert-info mt-4" v-for="(usuario, index) in usuarios" :key="index">
        <div class="media-body ml-3">
          <h4><u>Usuario ID: {{ usuario.id }}</u></h4>
          <br>
          <p>Email: <b>{{ usuario.email }}</b></p>
          <p>Password: <b>{{ usuario.password }}</b></p>
          <p>Nombre: <b>{{ usuario.nombre }}</b></p>
          <p>Apellido: <b>{{ usuario.apellido }}</b></p>
          <p>Perfil: <b>{{ usuario.perfil }}</b></p>
          <p>Habilitado: <b>{{ usuario.habilitado }}</b></p>
          <p>HorasTrabajadas: <b>{{ usuario.hstrabajadas }}</b></p>
          <button class="btn btn-dark m-3" @click="deleteUsuario(usuario.id)">Dar de Baja</button>
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

</style>
