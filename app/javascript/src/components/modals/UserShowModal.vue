<template>
  <b-modal id="user-show-modal" v-model="value">
    <div>{{modalTitle}}</div>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { BModal } from "bootstrap-vue";

export default defineComponent({
  name: "UserShowModal",
  component: { BModal },
  props: {
    modalTitle: {
      type: String,
    }
  },
  setup(_, { attrs }) {
    const { value } = attrs;
    return { value };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
