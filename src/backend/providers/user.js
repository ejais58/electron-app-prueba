const { User } = require("../models");


const getAllUser = async () => {
    const users = await User.findAll();
    return users;
};

const createUser = async (data) => {
    const newUser = await User.create(data);
    return newUser;
};

module.exports = {getAllUser, createUser}