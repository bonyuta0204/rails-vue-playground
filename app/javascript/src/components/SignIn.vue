<template>
  <div class="container">
    <button @click="onClickSignIn">ログイン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { googleSignIn } from "@/lib/auth/index";

export default defineComponent({
  setup() {
    async function onClickSignIn() {
      const { idToken } = await googleSignIn();
      console.log("idToken", idToken);
    }

    return {
      onClickSignIn,
    };
  },
});
</script>

<style scoped></style>
