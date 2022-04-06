import Vue from 'vue'
import App from '../App.vue'


import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

 document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    components: { App },
    template: '<App/>',
    render: (h) => h(App),
  }).$mount('#app');
 })