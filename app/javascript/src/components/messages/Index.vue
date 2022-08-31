<template>
  <div class="message_layout">
    <div class="channel_side_bar">
      <channel-side-bar
        :channels="channels"
        @on-select-channel="onSelectChannel"
      >
      </channel-side-bar>
    </div>
    <div class="message_area">
      <message-area :channel="channel" :messages="messages"> </message-area>
    </div>
  </div>
</template>

<script lang="ts">
import useSWRV from "swrv";
import ChannelSideBar from "./ChanneSideBar.vue";
import MessageArea from "./MessageArea.vue";
import Gateway from "../../lib/gateway/index";
import type { Channel } from "../../types/channel";
import type { Message } from "../../types/message";

import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "MessageIndex",
  components: {
    ChannelSideBar,
    MessageArea,
  },
  setup() {
    const gateway = new Gateway();

    const selectedChannelId = ref<Channel["id"]>();

    const channelId = computed<Channel["id"] | undefined>(() => {
      if (selectedChannelId.value) return selectedChannelId.value;
      if (channels.value && channels.value.length > 0)
        return channels.value[0].id;
    });

    const channel = computed(() =>
      channels.value?.find((channel) => channel.id === channelId.value)
    );

    const { data: channels } = useSWRV<Channel[]>(
      "/ajax/channels",
      gateway.get
    );

    const { data: messages } = useSWRV<Message[]>(
      () => channelId.value && `/ajax/channels/${channelId.value}/messages`,
      gateway.get
    );

    function onSelectChannel(channelId: Channel["id"]) {
      selectedChannelId.value = channelId;
    }

    return { channel, channels, messages, onSelectChannel };
  },
});
</script>

<style scoped>
.message_layout {
  display: grid;
  height: 100%;
  grid-template-columns: 300px 1fr;
}

.channel_side_bar {
  grid-row: 1;
  grid-column: 1;
}

.message_area {
  grid-row: 1;
  grid-column: 2;
}
</style>
