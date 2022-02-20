import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '../views/FormView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formView',
    component: FormView
  },
  {
    path: '/listProjects',
    name: 'listProjects',
    component: () => import(/* webpackChunkName: "listProjects" */ '../views/ListProjectsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
