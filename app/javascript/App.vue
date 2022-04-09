<template>
    <div>
      <router-view></router-view>
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
p {
  font-size: 2em;
  text-align: center;
}
</style>
