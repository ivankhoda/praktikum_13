const user = require('../models/user');

module.exports.getUsers = (req, res) => {
  user.find({})
    .then(
      (users) => res.send({ data: users }),
    )
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;

  user.find({ _id: `${id}` }, (err, result) => {
    if (!result) {
      res.status(404).send({ message: `Пользователя с ID ${id} не существует.` });
    } else {
      res.send(result);
    }
  })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  user.create({ name, about, avatar })
    // eslint-disable-next-line no-shadow
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};
