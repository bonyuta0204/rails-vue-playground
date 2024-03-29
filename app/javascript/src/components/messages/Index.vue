<template>
  <div class="message_layout">
    <div class="channel_side_bar_wrap">
      <channel-side-bar
        :channels="channels"
        @on-select-channel="onSelectChannel"
      >
      </channel-side-bar>
    </div>
    <div class="message_area_wrap">
      <message-area :channel="channel" :messages="messages"> </message-area>
    </div>
  </div>
</template>

<script lang="ts">
import useSWRV from "swrv";
import { computed, defineComponent, ref } from "@vue/composition-api";
import ChannelSideBar from "./ChanneSideBar.vue";
import MessageArea from "./MessageArea.vue";
import Gateway from "@/lib/gateway";
import type { Channel } from "@/types/channel";
import type { Message } from "@/types/message";

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
      if (channels.value && channels.value.length > 0) {
        return channels.value[0].id;
      } else {
        return undefined;
      }
    });

    const channel = computed(() =>
      channels.value?.find((channel) => channel.id === channelId.value)
    );

    const { data: channels } = useSWRV<Channel[]>(
      "/ajax/channels",
      gateway.get
    );

    const { data: messages } = useSWRV<Message[]>(
      "/ajax/message_lists",
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
  grid-template-rows: 100%;
}

.channel_side_bar_wrap {
  height: 100%;
  grid-row: 1;
  grid-column: 1;
}

.message_area_wrap {
  height: 100%;
  grid-row: 1;
  grid-column: 2;
}
</style>
