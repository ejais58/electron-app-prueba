const { ipcMain } = require('electron');
const { userService } = require('../services');


const userHandlers = () => {
  //get all users
  ipcMain.handle('get-users', async () => {
    const users = await userService.getUsers();
    return users.map(user => user.get({ plain: true })); // Transformamos a objetos planos
  });

  //create user
  ipcMain.handle('createUser', async (event, data) => {
    try {
      const newUser = await userService.createNewUser(data);
      return { success: true, user: newUser };  
    } catch (error) {
      return { success: false, error: error.message }; 
    }
  })
}

module.exports = { userHandlers };