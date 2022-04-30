import { contextBridge, ipcRenderer, NotificationConstructorOptions } from "electron";

contextBridge.exposeInMainWorld("notifier", {
  notify: (notification: NotificationConstructorOptions) => {
    ipcRenderer.invoke("notify", notification);
  },
});
