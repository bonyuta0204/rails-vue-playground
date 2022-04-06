<template>
    <p>{{ message }}</p>
</template>

<script lang="ts">

import {defineComponent, ref} from '@vue/composition-api'

export default defineComponent({
  setup(){
    const message = ref('message')
    return{
      message
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
