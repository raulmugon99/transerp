"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
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
    win = new electron_1.BrowserWindow({
        width: 1200, height: 800,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false,
            contextIsolation: false
        }
    });
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
electron_1.ipcMain.on('openModal', function (event, arg) {
    openModal(arg);
});
function openModal(ruta) {
    var modal = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        resizable: false,
        frame: true,
        transparent: false
    });
    // Load the page + route
    console.log(ruta);
    console.log("file:///D:/ERP/transerp/dist/transerp/index.html#" + ruta);
    modal.loadURL(__dirname + ("/../../dist/transerp/index.html#" + ruta));
}
//# sourceMappingURL=main.js.map