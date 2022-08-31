<template>
  <div class="app_container">
    <div class="header_container">
      <router-link class="header_link" :to="{ name: 'chart' }"
        >Chart</router-link
      >
      <router-link class="header_link" :to="{ name: 'message' }"
        >Message</router-link
      >
      <router-link class="header_link" :to="{ name: 'heavy' }"
        >Heavy</router-link
      >
    </div>
    <div class="page_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const message = ref("message");
    const users = ref([]);

    return {
      message,
      users,
    };
  },
});
</script>

<style>
.header_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.header_link {
  font-size: 20px;
}

.app_container {
  height: 100%;
}

.page_container {
  height: calc(100% - 40px)
}

html {
  height: 100%;
}

body {
  height: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
