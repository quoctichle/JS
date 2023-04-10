const mongoose = require('mongoose');


const WebBookDb = mongoose.Schema('WebBookDb', {
  Books: bookSchema,
  Categories: categorySchema,
  Chapter: chapterSchema,
  Follow: followSchema,
  ReadHistory: readHistorySchema,
  User: userSchema,
  User_Login: userLoginSchema,
});

module.exports = WebBookDb;
