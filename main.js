const path = require('path'); // Si estás usando CommonJS
const { app, BrowserWindow } = require('electron');
const { userHandlers } = require('./src/backend/ipcHandlers/userHandler.js');

//ejecutamos conexion a la bd
require('./src/backend/config/config.js');


require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: `${__dirname}/preload.js`, // Compilado en JS
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  win.loadFile(`${__dirname}/src/renderer/index.html`);
}

app.disableHardwareAcceleration();



app.whenReady().then(() => {
  createWindow()
  userHandlers()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
