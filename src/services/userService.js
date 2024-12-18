const User = require('../models/clienteModel');

const getAllUsers = async () => {
    return User.find({});
}

const getUserById = async (id) => {
    const user = await User.findById(id);
    //console.log("Usuario recuperado:", user);
    return user;
}

const createUser = async (user) => {
    return User.create(user);
}

const updateUser = async (_id, user) => {
    const userDB = await getUserById(_id);
    return User.findByIdAndUpdate(_id, user, { new: true });
}

const deleteUser = async (_id) => {
    const userDB = await getUserById(_id);
    return User.findByIdAndDelete(_id);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}