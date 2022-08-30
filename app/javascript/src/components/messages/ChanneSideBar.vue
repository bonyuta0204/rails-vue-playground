<template>
  <div class="channel_side_bar">
    <div class="channel_side_bar_header">チャンネル一覧</div>
    <div class="channel_side_bar_body">
      <div v-for="channel in channels" :key="channel">
        {{ channel }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useSWRV from "swrv";
import Gateway from "../lib/gateway";

import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ChannelSideBar",
  setup() {
    const channels = ["hoge", "fuga"];

    return {
      channels,
    };
  },
});
</script>

<style scoped>
.channel_side_bar {
  height: 100%;
}
.channel_side_bar_header {
  align-items: center;
  background-color: #fff;
  border: 2px solid #ebebeb;
  color: #545454;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  justify-content: space-between;
  padding: 0 14px;
}

.channel_side_bar_body {
  background-color: #fff;
  border: 2px solid #ebebeb;
  color: #545454;
  font-size: 16px;
  font-weight: 400;
  height: calc(100% - 40px);
  padding: 0 14px;
}
</style>
