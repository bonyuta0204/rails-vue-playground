<template>
    <div>
      <router-view></router-view>
    </div>
</template>

<script lang="ts">

import {defineComponent, ref, onMounted} from '@vue/composition-api'

export default defineComponent({
  setup(){
    const message = ref('message')
    const users = ref([])


    onMounted(async ()=>{
      const response = await fetch('ajax/users').then((response)=>response.json())
      users.value = response

    })

    return{
      message,
      users
    }
  }
})
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
