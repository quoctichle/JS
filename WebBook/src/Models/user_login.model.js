const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true
  },
  LoginTime: {
    type: Date,
    required: true
  },
  Id: {
    type: Number,
    required: true
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const User_Login = mongoose.model('User_Login', UserLoginSchema);

module.exports = User_Login;
