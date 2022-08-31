<template>
  <div class="channel_side_bar">
    <div class="channel_side_bar_header">チャンネル一覧</div>
    <div class="channel_side_bar_body">
      <div
        v-for="channel in channels"
        :key="channel.id"
        class="channel_item"
        @click="onClickChannel(channel.id)"
      >
        {{ channel.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Channel } from "src/types/channel";

export default defineComponent({
  name: "ChannelSideBar",
  props: {
    channels: {
      type: Array as PropType<Channel[]>,
      default: () => [],
    },
  },
  setup(_, { emit }) {
    function onClickChannel(channelId: Channel["id"]) {
      emit("on-select-channel", channelId);
    }
    return {
      onClickChannel,
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
  background-color: #e2f7ff;
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
  overflow: scroll;
  background-color: #fff;
  border: 2px solid #ebebeb;
  color: #545454;
  font-size: 16px;
  font-weight: 400;
  height: calc(100% - 40px);
  padding: 0 14px;
}

.channel_item {
  cursor: pointer;
}
</style>
