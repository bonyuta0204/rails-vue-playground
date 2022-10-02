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
import { useOperator } from "@/composables/useOperator";

export default defineComponent({
  setup() {
    const router = useRouter();

    const { mutateOperator } = useOperator();

    async function onClickSignIn() {
      const { idToken } = await googleSignIn();
      await signIn(idToken);
      mutateOperator();

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
