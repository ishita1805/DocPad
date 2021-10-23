const electron = require('electron');

require('../src/api/ipcmain');

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        minWidth : 1200,
        minHeight: 800,
        title:"Doc Pad",
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.removeMenu();

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.once("ready-to-show", () => {
        mainWindow.maximize(); 
        mainWindow.show();
    })

    mainWindow.on('closed', () => {
       app.quit();
    });
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')  app.quit();
});

