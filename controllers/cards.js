const card = require('../models/card');

module.exports.getCards = (req, res) => {
  card.find({})
    .then(
      (cards) => res.send({ data: cards }),
    )
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.user._id;

  card.create({ name, link, owner: userId })
    // eslint-disable-next-line no-shadow
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

module.exports.deleteCardById = (req, res) => {
  const { id } = req.params;

  card.findOneAndDelete({ _id: `${id}` }, ((err, result) => {
    if ((!result) || (result.length === 0)) {
      res.status(404).send({ message: `Картинки с ID ${id} не существует.` });
    } else {
      res.send({ message: 'Картинка успешно удалена' });
    }
  }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};
