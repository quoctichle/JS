const mongoose = require('mongoose');


  const BookViewModelSchema = new Schema({
    Book: [BookSchema],
    Chapter: [ChapterSchema] // Một mảng chứa các đối tượng Books
  });

  module.exports = mongoose.model('BookViewModel', BookViewModelSchema)