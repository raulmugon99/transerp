import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { ipcMain } from 'electron';

let win: BrowserWindow

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})

// function createWindow() {
//     win = new BrowserWindow({ width: 800, height: 600 });
//     // win = new BrowserWindow({ fullscreen: true });
//   }

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/transerp/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });


    
}

ipcMain.on('REQUEST_CHANNEL', (event: any, arg: any) =>
  console.log('received', event, arg)
);


