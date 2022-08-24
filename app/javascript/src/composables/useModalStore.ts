import { inject, InjectionKey, provide, ref } from "@vue/composition-api";
import { VueConstructor} from "vue";
import UserShowModal from "../components/modals/UserShowModal.vue";

type storeStateType = ReturnType<typeof useModal>;

const injectionKey: InjectionKey<storeStateType> = Symbol("modalStoreKey");

export function useModal() {
  const modalShow = ref(false);
  const modalComponent = ref<VueConstructor>();
  const modalProps = ref();

  function openModal(component: VueConstructor, props: any) {
    modalComponent.value = component;
    modalProps.value = props;
    modalShow.value = true;
  }

  return {
    openModal,
    modalShow,
    modalComponent,
    modalProps,
  };
}

export function provideModalStore() {
  provide<storeStateType>(injectionKey, useModal());
}

export function useModalStore() {
  return inject(injectionKey);
}
