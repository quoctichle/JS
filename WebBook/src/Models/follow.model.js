const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxlength: 50
  },
  bookId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Follow', followSchema);
