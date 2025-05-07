const { userProvider } = require("../providers");



const getUsers = async () => {
    try {
        const users = await userProvider.getAllUser();
        return users;
    } catch (error) {
        console.log(error);
    }
};

const createNewUser = async (data) => {
   try {
     const newUser = await userProvider.createUser(data);
     return newUser;
   } catch (error) {
    console.log(error);
   }
}

module.exports = {getUsers, createNewUser};