"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var electron_2 = require("electron");
var win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
// function createWindow() {
//     win = new BrowserWindow({ width: 800, height: 600 });
//     // win = new BrowserWindow({ fullscreen: true });
//   }
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/transerp/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_2.ipcMain.on('REQUEST_CHANNEL', function (event, arg) {
    return console.log('received', event, arg);
});
//# sourceMappingURL=main.js.map