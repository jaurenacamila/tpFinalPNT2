  
import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue"
import Controles from "./components/Controles.vue"
import Estadisticas from "./components/Estadisticas.vue"
import Navbar from "./components/Navbar.vue"
import Usuarios from "./components/Usuarios.vue"


Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [

      {path: '/formulario', component: Formulario},
      {path: '/Controles', component: Controles},
      {path: '/Estadisticas', component: Estadisticas},
      {path: '/Navbar', component: Navbar},
      {path: '/Usuarios', component: Usuarios}
    ]
  })