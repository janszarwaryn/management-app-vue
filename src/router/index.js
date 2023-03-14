import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Users',
      component: () => import(/* webpackChunkName: "Users" */ '@/views/Users/Index.vue')
    },
    {
      path: '/:userId/edit',
      name: 'EditUser',
      component: () => import(/* webpackChunkName: "Edit" */ '@/views/EditUser/Index.vue')
    },
    {
      path: '/add',
      name: 'AddUser',
      component: () => import(/* webpackChunkName: "Add" */ '@/views/AddUser/Index.vue')
    },
    {
      path: '*',
      name: 'NotFoundComponent',
      component: () => import(/* webpackChunkName: "NotFoundComponent" */ '@/views/NotFoundComponent/Index.vue')
    }
  ]
})
