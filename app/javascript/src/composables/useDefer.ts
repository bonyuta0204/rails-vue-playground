import { ref, Ref } from "@vue/composition-api";

export function useDefer(maxFrame = 120) {
  const frame = ref(0);

  progressAnimationFrame(frame, maxFrame);

  function defer(n: number) {
    return n < frame.value;
  }

  function resetFrame() {
    if (frame.value < maxFrame) {
      frame.value = 0;
    } else {
      frame.value = 0;
      progressAnimationFrame(frame, maxFrame);
    }
  }

  return { defer, resetFrame };
}

/**
 * 引数に渡された数値をmaxFrameに達するまで
 * アニメーションフレーム毎にインクリメントする
 */
function progressAnimationFrame(counter: Ref<number>, maxFrame: number) {
  function step() {
    if (counter.value > maxFrame) {
      return;
    } else {
      counter.value++;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
