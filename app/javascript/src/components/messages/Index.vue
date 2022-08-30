<template>
  <div class="message_layout">
    <div class="channel_side_bar">
      <channel-side-bar> </channel-side-bar>
    </div>
    <div class="message_area">
      <message-area> </message-area>
    </div>
  </div>
</template>

<script lang="ts">
import useSWRV from "swrv";
import ChannelSideBar from "./ChanneSideBar.vue";
import MessageArea from "./MessageArea.vue";

import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MessageIndex",
  components: {
    ChannelSideBar,
    MessageArea,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.message_layout {
  display: grid;
  height: 100%;
  grid-template-columns: 300px 1fr
}

.channel_side_bar{
  grid-row: 1;
  grid-column:1;
}

.message_area{
  grid-row: 1;
  grid-column:2;
}
</style>
