import VueRouter, {RouteConfig} from 'vue-router'
import Vue from 'vue'


import UserList from '../components/UserList.vue'

Vue.use(VueRouter)


const routes: RouteConfig[] = [
  {
    path: '/users', component: UserList
  },
  {
    path: '*', component: UserList
  },
]


export default  new VueRouter({
  mode: 'history',
  routes
})
