const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Это обязательное поле'],
    minlength: [2, 'Не меньше 2 знаков, пожалуйста'],
    maxlength: [30, 'Не больше 30 знаков, пожалуйста'],
  },
  about: {
    type: String,
    required: [true, 'Это обязательное поле'],
    minlength: [2, 'Не меньше 2 знаков, пожалуйста'],
    maxlength: [30, 'Не больше 30 знаков, пожалуйста'],
  },
  avatar: {
    type: String,
    required: [true, 'Введите валидную ссылку, пожалуйста'],
    validate: {
      validator() {
        // return
      },
      message: 'URL в формате: http://mysite.ru',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
