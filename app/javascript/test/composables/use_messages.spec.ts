import { createLocalVue } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

import {
  useMessages,
  TipFilterCondition,
} from "../../src/composables/use_messages";

const { selectedTipId, tipIds, tipDisplayCondition, changeCondition } =
  useMessages();

describe("on folder side bar changed", () => {
  selectedTipId.value = 3;
  const loadTips = jest.fn(() => {
    tipIds.value = [1, 2, 3];
    return Promise.resolve();
  });

  describe("allTips to allTips", () => {
    tipDisplayCondition.value = {
      category: "allTip",
      folder_id: undefined,
    };

    const newTipCondition: TipFilterCondition = {
      category: "allTip",
      folder_id: undefined,
    };
    it("loadTips is not called", () => {
      changeCondition(newTipCondition, loadTips).then(() => {
        expect(loadTips.mock.calls.length).toEqual(0);
        expect(selectedTipId.value).toBe(3);
      });
    });
  });
  describe("allTips to bookmark", () => {
    tipDisplayCondition.value = {
      category: "allTip",
      folder_id: undefined,
    };

    const newTipCondition: TipFilterCondition = {
      category: "bookmarked",
      folder_id: undefined,
    };
    describe("when selected tip is in bookmark", () => {
      const loadTips = jest.fn(() => {
        tipIds.value = [1, 2, 3];
        return Promise.resolve();
      });
      it("loadTips is called", () => {
        changeCondition(newTipCondition, loadTips).then(() => {
          expect(loadTips.mock.calls.length).toEqual(1);
          expect(selectedTipId.value).toEqual(3);
        });
      });
    });

    describe("when selected tip is not in bookmark", () => {
      const loadTips = jest.fn(() => {
        tipIds.value = [1, 2];
        return Promise.resolve();
      });
      it("loadTips is called", () => {
        changeCondition(newTipCondition, loadTips).then(() => {
          expect(loadTips.mock.calls.length).toEqual(1);
          expect(selectedTipId.value).toEqual(1);
        });
      });
    });
  });
});
