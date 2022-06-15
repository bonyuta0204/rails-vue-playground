import VueRouter, {RouteConfig} from 'vue-router'
import Vue from 'vue'


import UserList from '../components/UserList.vue'
import Chart from '../components/Chart.vue'
import Heavy from '../components/Heavy.vue'
import Sortable from '../components/Sortable.vue'

Vue.use(VueRouter)


const routes: RouteConfig[] = [
  {
    path: '/users', component: UserList
  },
  {
    path: '/chart', component: Chart, name: "chart"
  },
  {
    path: '/heavy', component: Heavy, name: "heavy"
  },
  {
    path: '/sortable', component: Sortable, name: "sortable"
  },
  {
    path: '*', component: UserList
  },
]


export default  new VueRouter({
  mode: 'history',
  routes
})
