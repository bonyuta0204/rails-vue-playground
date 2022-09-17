<template>
  <div>
    <component :is="modalComponent" v-bind="modalProps" v-model="modalShow">
    </component
    >>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useModalStore } from "@/composables/useModalStore";

export default defineComponent({
  name: "GlobalModal",
  setup() {
    const { modalComponent, modalProps, modalShow } = useModalStore();

    return { modalComponent, modalProps, modalShow };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
