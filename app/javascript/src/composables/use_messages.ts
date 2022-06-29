import { ref } from "@vue/composition-api";

export type TipFilterCondition = {
  category: "allTip" | "bookmarked" | "folder";
  folder_id: number | undefined;
};

export function useMessages() {
  const selectedTipId = ref<number>();
  const tipIds = ref<number[]>([]);
  const tipDisplayCondition = ref<TipFilterCondition>({
    category: "allTip",
    folder_id: undefined,
  });

  async function changeCondition(
    newCondition: TipFilterCondition,
    callback: () => Promise<any>
  ) {
    if (shouldReloadTips(tipDisplayCondition.value, newCondition)) {
      await callback();
      if (tipIds.value.indexOf(selectedTipId.value) < 0) {
        selectedTipId.value = tipIds.value[0];
      }
    }
  }

  return { selectedTipId, tipIds, tipDisplayCondition, changeCondition };
}

function shouldReloadTips(
  oldCondition: TipFilterCondition,
  newCondition: TipFilterCondition
) {
  if (oldCondition.category !== newCondition.category) {
    return true;
  } else if (
    oldCondition.category === "folder" &&
    newCondition.category === "folder" &&
    oldCondition.folder_id !== newCondition.folder_id
  ) {
    return true;
  } else {
    return false;
  }
}
