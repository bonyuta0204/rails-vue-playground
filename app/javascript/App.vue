<template>
  <div>
      <div class="header_container">
        <router-link class="header_link" :to="{name: 'chart'}">Chart</router-link>
        <router-link class="header_link" :to="{name: 'heavy'}">Heavy</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <global-modal></global-modal>
    </div>
</template>

<script lang="ts">

import {defineComponent, ref} from '@vue/composition-api'
import GlobalModal from "./src/components/modals/GlobalModal.vue"
import {provideModalStore} from "./src/composables/useModalStore"

export default defineComponent({
  components: {
    GlobalModal
  },
  setup(){
    provideModalStore()
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
