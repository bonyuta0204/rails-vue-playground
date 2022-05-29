import VueRouter, {RouteConfig} from 'vue-router'
import Vue from 'vue'


import UserList from '../components/UserList.vue'
import Chart from '../components/Chart.vue'

Vue.use(VueRouter)


const routes: RouteConfig[] = [
  {
    path: '/users', component: UserList
  },
  {
    path: '/chart', component: Chart, name: "chart"
  },
  {
    path: '*', component: UserList
  },
]


export default  new VueRouter({
  mode: 'history',
  routes
})
