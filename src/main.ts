// Modules to control application life and create native browser window
import {
  app,
  protocol,
  BrowserWindow,
  ipcMain,
  Notification,
  NotificationConstructorOptions,
  IpcMainInvokeEvent,
} from "electron";
import { resolve } from "path";

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: resolve("./dist", "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  mainWindow.webContents.openDevTools();
};

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

// This method will be called when Electron has finished
// initialization and is ready to  reate browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  protocol.registerFileProtocol("app", (request, callback) => {
    const url = request.url.substr(10);
    callback({ path: resolve("./dist", url) });
  });
  createWindow();

  ipcMain.handle("notify", (event:IpcMainInvokeEvent ,notification: NotificationConstructorOptions) => {
    notify(notification);
  });

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

function notify(notification: NotificationConstructorOptions) {
  console.log('notification', notification)
  const noti = new Notification(notification);
  noti.show()
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
