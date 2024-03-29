import {
  ComponentInternalInstance,
  getCurrentInstance,
} from "@vue/composition-api";
import VueRouter, { Route } from "vue-router";

/**
 * 現在のインスタンスを取得する
 * setup関数内で呼ばれているかの確認のためにこのメソッドをかませる
 * @returns インスタンス
 */
function getInstance(): ComponentInternalInstance {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error(`Should be used in setup()`);
  }

  return instance;
}

/**
 * setup()関数内でのみ使用可能
 * @returns Routerオブジェクト
 */
export function useRouter(): VueRouter {
  // インスタンスにアクセス
  const instance = getInstance();

  // proxyが従来の`this`にあたるコンポーネントインスタンス
  return instance.proxy.$router;
}

/**
 * 4.x系で使えるuseRouteの代替メソッド
 * setup()関数内のみで使用可能
 * @returns Routeオブジェクト
 */
export function useRoute(): Route {
  // インスタンスにアクセス
  const instance = getInstance();

  // proxyが従来の`this`にあたるコンポーネントインスタンス
  return instance.proxy.$route;
}
