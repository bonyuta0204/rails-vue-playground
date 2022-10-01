import { createLocalVue } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

import {
  changeCondition,
  TipFilterCondition,
} from "../../src/lib/helpers/message_index_helper";

import { ref } from "@vue/composition-api";

const tipIds = ref<number[]>([]);
const loadTips = jest.fn(() => (tipIds.value = [1, 2, 3]));

describe("on folder side bar changed", () => {
  describe("allTips to allTips", () => {
    const oldTipCondition: TipFilterCondition = {
      category: "allTip",
      folder_id: undefined,
    };

    const newTipCondition: TipFilterCondition = {
      category: "allTip",
      folder_id: undefined,
    };
    it("loadTips is not called", () => {
      const result = changeCondition(
        oldTipCondition,
        newTipCondition,
        loadTips,
        tipIds
      );
      expect(loadTips.mock.calls.length).toEqual(0);
      expect(result).toBe(undefined);
    });
  });
  describe("allTips to bookmark", () => {
    const oldTipCondition: TipFilterCondition = {
      category: "allTip",
      folder_id: undefined,
    };

    const newTipCondition: TipFilterCondition = {
      category: "bookmarked",
      folder_id: undefined,
    };
    describe("when selected tip is in bookmark", () => {
      it("loadTips is called", () => {
        const result = changeCondition(
          oldTipCondition,
          newTipCondition,
          loadTips,
          tipIds
        );
        expect(loadTips.mock.calls.length).toEqual(1);
        expect(result?.value).toEqual([1, 2, 3]);
      });
    });

    describe("when selected tip is not in bookmark", () => {
      it("loadTips is called", () => {
        const result = changeCondition(
          oldTipCondition,
          newTipCondition,
          loadTips,
          tipIds
        );
        expect(loadTips.mock.calls.length).toEqual(1);
        expect(result?.value).toEqual([1, 2, 3]);
      });
    });
  });
});
