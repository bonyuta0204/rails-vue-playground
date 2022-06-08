import { onMounted, ref } from "@vue/composition-api";

export function useDefer(maxFrame = 120) {
  onMounted(() => {
    window.requestAnimationFrame(step);
  });

  const frame = ref(0);

  function defer(n: number) {
    return n < frame.value
  }

  function step() {
    if (frame.value > maxFrame) {
      return;
    } else {
      frame.value++;
      window.requestAnimationFrame(step);
    }
  }

  return {defer}
}
