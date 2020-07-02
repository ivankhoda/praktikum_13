/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
/* eslint array-callback-return: ["off"] */
const routerToUsers = require('express').Router();
const {getUsers, getUserById, createUser} = require('../controllers/users');

routerToUsers.get('/users',getUsers);

routerToUsers.get('/users/:id', getUserById);

routerToUsers.post('/users', createUser);

module.exports = routerToUsers;
