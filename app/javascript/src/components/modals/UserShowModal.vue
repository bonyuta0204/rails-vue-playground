<template>
  <b-modal id="user-show-modal" v-model="value" @hide="onHide" @ok="onOk" @cancel="onCancel">
    <div>{{ modalTitle }}</div>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { BModal } from "bootstrap-vue";

export default defineComponent({
  name: "UserShowModal",
  component: { BModal },
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
    onHide: {
      type: Function as PropType<() => void>,
    },
    onOk: {
      type: Function as PropType<() => void>,
    },
    onCancel: {
      type: Function as PropType<() => void>,
    },
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
