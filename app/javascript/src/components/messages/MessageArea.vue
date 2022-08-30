<template>
  <div class="message_area">
    <div class="message_area_header">メッセージ一覧</div>
    <div class="message_area_body">
      <div v-for="message in messages" :key="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useSWRV from "swrv";
import Gateway from "../lib/gateway";

import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MessageArea",
  setup() {
    const messages = ["hoge", "fuga"];

    return {
      messages,
    };
  },
});
</script>

<style scoped>
.message_area {
  height: 100%;
}
.message_area_header {
  align-items: center;
  background-color: #fff;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  border-right: 2px solid #ebebeb;
  color: #545454;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  justify-content: space-between;
  padding: 0 14px;
}

.message_area_body {
  background-color: #fff;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  border-right: 2px solid #ebebeb;
  color: #545454;
  height: calc(100% - 40px);
  font-size: 16px;
  font-weight: 400;
  padding: 0 14px;
}
</style>
