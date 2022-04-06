import Vue from 'vue'
import App from '../App.vue'


 document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    components: { App },
    template: '<App/>',
    render: (h) => h(App),
  }).$mount('#app');
 })
