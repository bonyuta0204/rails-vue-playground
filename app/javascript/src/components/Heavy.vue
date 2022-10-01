<template>
  <div class="page">
    <div class="container_wrap">
      <div class="container">
        <button @click="onClickFirst">toggle</button>
        <template v-for="n in 300">
          <div v-if="firstVisible" :key="n" class="item_wrapper">
            <heavy-item v-if="firstDefer(n)"></heavy-item>
          </div>
        </template>
      </div>
      <div class="container">
        <button @click="onClickSecond">toggle</button>
        <template v-if="secondVisible">
          <div v-for="n in 300" :key="n" class="item_wrapper">
            <heavy-item v-if="secondDefer(n)"></heavy-item>
          </div>
        </template>
      </div>
      <div class="container">
        <button @click="onClickThird">toggle</button>
        <defer v-if="thirdVisible" v-slot="{ defer }">
          <div v-for="n in 300" :key="n" class="item_wrapper">
            <heavy-item v-if="defer(n)"></heavy-item>
          </div>
        </defer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import HeavyItem from "./Heavy/HeavyItem.vue";
import Defer from "./Defer.vue";
import { useDefer } from "@/composables/useDefer";

export default defineComponent({
  components: {
    HeavyItem,
    Defer,
  },
  setup() {
    const firstVisible = ref(true);
    const secondVisible = ref(true);
    const thirdVisible = ref(true);

    const { defer: firstDefer, resetFrame: resetFirstFrame } = useDefer();

    const { defer: secondDefer, resetFrame: resetSecondFrame } = useDefer();

    function onClickFirst() {
      resetFirstFrame();
      firstVisible.value = !firstVisible.value;
    }

    function onClickSecond() {
      resetSecondFrame();
      secondVisible.value = !secondVisible.value;
    }

    function onClickThird() {
      thirdVisible.value = !thirdVisible.value;
    }

    return {
      onClickFirst,
      onClickSecond,
      onClickThird,
      firstVisible,
      secondVisible,
      thirdVisible,
      firstDefer,
      secondDefer,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

.container_wrap {
  display: flex;
}

.container {
  width: 50%;
  flex-direction: row;
}
</style>
