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
    if ((!result) || (result.length === 0)) {
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

module.exports.updateUserProfile = (req, res) => {
  user.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    { _id: req.params._id },
    {
      $set: {
        // _id: ObjectId,
        name: req.body.name,
        about: req.body.about,
      },
    },
  )
    .then((obj) => {
      res.send(obj);
    })
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};
module.exports.updateUserAvatar = (req, res) => {
  user.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    { _id: req.params._id },
    {
      $set: {
        // _id: ObjectId,
        avatar: req.body.avatar,
      },
    },
  )
    .then((obj) => {
      res.send(obj);
    })
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};
