<template>
  <div class="message_area">
    <div class="message_area_header">{{ channel && channel.name }}</div>
    <div class="message_area_body">
      <div v-for="message in messages" :key="message.id">
        <div>{{ message.sender.name }}:</div>
        <div>
          {{ message.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Channel } from "@/types/channel";
import { Message } from "@/types/message";

export default defineComponent({
  name: "MessageArea",
  props: {
    channel: {
      type: Object as PropType<Channel | undefined>,
      required: true,
    },
    messages: {
      type: Array as PropType<Message[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.message_area {
  height: 100%;
}
.message_area_header {
  align-items: center;
  background-color: #e2f7ff;
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
  overflow: scroll;
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
