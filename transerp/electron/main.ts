import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

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
  win = new BrowserWindow({ 
    width: 1200, height: 800,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false,
      contextIsolation : false
    }
  });
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

ipcMain.on('openModal', (event, arg) => {
  openModal(arg)
})

function openModal(ruta: string){
  var modal = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    resizable: false,
    frame: true,
    transparent: false
  });
  // Load the page + route
  console.log(ruta)
  console.log(`file:///D:/ERP/transerp/dist/transerp/index.html#${ruta}`)
  modal.loadURL(__dirname + `/../../dist/transerp/index.html#${ruta}`)
}

