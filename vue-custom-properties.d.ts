import { BvModal } from "bootstrap-vue";
import { FirebaseApp } from "firebase/app";

declare module "vue/types/vue" {
  interface Vue {
    readonly $bvModal: BvModal;
    readonly $firebase: FirebaseApp;
  }
}
