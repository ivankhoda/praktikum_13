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
      validator(v) {
        return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(v);
      },
      message: 'Ссылка на картинку, должна быть валидной.',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
