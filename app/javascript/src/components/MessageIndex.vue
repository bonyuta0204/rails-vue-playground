<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import {
  MessageFilterCondition,
  TipFilterCondition,
} from "../lib/helpers/message_index_helper";

export default defineComponent({
  setup() {
    const tipFilterCondition = ref<TipFilterCondition>({
      category: "allTip",
      folder_id: undefined,
    });
    const messageFilterCondition = ref<MessageFilterCondition>("tip");

    function onSelectAll() {
      tipFilterCondition.value = {
        category: "allTip",
        folder_id: undefined,
      };
    }

    function onSelectBookmark() {
      tipFilterCondition.value = {
        category: "bookmarked",
        folder_id: undefined,
      };
    }

    function onSelectFolder(folderId: number) {
      if (
        tipFilterCondition.value.category === "folder" &&
        tipFilterCondition.value.folder_id === folderId
      ) {
        return;
      }
      tipFilterCondition.value = {
        category: "folder",
        folder_id: folderId,
      };
    }

    function onSelectFolderAndTip(folderId: number) {
      tipFilterCondition.value = {
        category: "folder",
        folder_id: folderId,
      };
    }

    return {
      onSelectAll,
      onSelectBookmark,
      onSelectFolder,
      onSelectFolderAndTip,
      tipFilterCondition,
      messageFilterCondition,
    };
  },
});
</script>

<style scoped></style>
