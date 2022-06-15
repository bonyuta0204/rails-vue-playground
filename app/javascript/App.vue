<template>
  <div>
      <div class="header_container">
        <router-link class="header_link" :to="{name: 'chart'}">Chart</router-link>
        <router-link class="header_link" :to="{name: 'heavy'}">Heavy</router-link>
        <router-link class="header_link" :to="{name: 'sortable'}">Sortable</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script lang="ts">

import {defineComponent, ref} from '@vue/composition-api'

export default defineComponent({
  setup(){
    const message = ref('message')
    const users = ref([])


    return{
      message,
      users
    }
  }
})
</script>

<style scoped>
.header_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.header_link {
  font-size: 20px
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
