/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
/* eslint array-callback-return: ["off"] */
const routerToUsers = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

routerToUsers.get('/users', getUsers);

routerToUsers.get('/users/:id', getUserById);

routerToUsers.post('/users', createUser);

routerToUsers.patch('/users/me', updateUserProfile);

routerToUsers.patch('/users/me/avatar', updateUserAvatar);

module.exports = routerToUsers;
