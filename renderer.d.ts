import { NotificationConstructorOptions } from "electron";

export interface Notification {
  notify: (notification: NotificationConstructorOptions) => Promise<void>;
}

declare global {
  interface Window {
    notifier: Notification;
  }
}
