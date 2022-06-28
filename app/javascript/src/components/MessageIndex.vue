<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import {
  shouldReloadTips,
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

    function reloadTips() {
      console.log("tips reloaded");
    }

    function onSelectAll() {
      const oldCondition = tipFilterCondition.value;
      tipFilterCondition.value = {
        category: "allTip",
        folder_id: undefined,
      };

      if (shouldReloadTips(oldCondition, tipFilterCondition.value)) {
        reloadTips();
      }
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

    function onSelectFolderAndTip(folderId: number, tipId: number) {
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
