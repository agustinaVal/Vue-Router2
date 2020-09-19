import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    alias : ['/inicio' , '/home' , '/portada']
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    alias : ['/sobremi' , '/about' , '/aboutme']
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "Administrador" */ "../components/Admin.vue"),
      children: [{
        path: "simple",
        name: "Simple",
        component: () =>
        import(/* webpackChunkName: "simple" */ "../components/Simple.vue"),
      },
      {
        path: "avanzado",
        name: "Avanzado",
        component: () =>
        import(/* webpackChunkName: "avanzado" */ "../components/Avanzado.vue"),
      },
    ],
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue'),
    alias : ['/contact' , '/contacto' , '/help']
  },
  {
    path: '/post/:entrada',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
    children: [
      {
        path: "Mensajes",
        name: "Mensajes",
        component: () =>
          import(
            /* webpackChunkName: "comentarios" */ "../components/Mensaje.vue"
          ),
      },
    ],
  },
  {
    path: '/',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NotFound.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
