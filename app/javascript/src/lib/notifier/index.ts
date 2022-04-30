import { NotificationConstructorOptions } from "electron";

export function buildNotifier(type: "electron" | "browser") {
  if (type === "electron") {
    return (params: NotificationConstructorOptions) => {
      window.notifier.notify(params);
    };
  } else if (type === "browser") {
    // ブラウザが通知をサポートしているか確認する
    if (!("Notification" in window)) {
      alert("未対応のブラウザです");
      return (_: NotificationConstructorOptions) => {
        console.error("通知を受け取りましたがブラウザが非対応です");
      };
    } else {
      // 許可を求める
      Notification.requestPermission();
      return (params: NotificationConstructorOptions) => {
        new Notification(params.title, {
          body: params.body,
          icon: typeof params.icon === "string" ? params.icon : "",
        });
      };
    }
  }
}
