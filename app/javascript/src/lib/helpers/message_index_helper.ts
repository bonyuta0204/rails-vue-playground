import { Ref } from "@vue/composition-api";

export interface TipFilterCondition {
  category: "allTip" | "bookmarked" | "folder";
  folder_id: number | undefined;
}

export type MessageFilterCondition =
  | "tip"
  | "keyword"
  | "allMessages"
  | "mentions";

export function shouldReloadTips(
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

export function changeCondition(
  oldCondition: TipFilterCondition,
  newCondition: TipFilterCondition,
  callback: () => any,
  tipIds: Ref<number[]>
) {
  if (shouldReloadTips(oldCondition, newCondition)) {
    callback();
    return tipIds;
  }
}
