// src/preload/preload.ts
const { contextBridge, ipcRenderer } = require('electron');

// Exponer funciones seguras al frontend
contextBridge.exposeInMainWorld('api', {
  getUsers: () => ipcRenderer.invoke('get-users'),
  createUser: (data) => ipcRenderer.invoke('createUser', data),
});
