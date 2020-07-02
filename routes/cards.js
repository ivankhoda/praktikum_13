const routerToCards = require('express').Router();

const { getCards, createCard, deleteCardById } = require('../controllers/cards');

routerToCards.get('/cards', getCards);

routerToCards.post('/cards', createCard);

routerToCards.delete('/cards/:id', deleteCardById);

module.exports = routerToCards;
