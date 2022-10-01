<template>
  <div class="container">
    <img :src="googleSinInImage" @click="onClickSignIn" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { googleSignIn, signIn } from "@/lib/auth/index";
import googleSinInImage from "@/assets/google_signin.png";
import { useRouter } from "@/composables/useRouter";

export default defineComponent({
  setup() {
    const router = useRouter();

    async function onClickSignIn() {
      const { idToken } = await googleSignIn();
      await signIn(idToken);
      router.push({ name: "message" });
    }

    return {
      googleSinInImage,
      onClickSignIn,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
