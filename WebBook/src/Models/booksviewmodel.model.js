const mongoose = require('mongoose');

const Book = mongoose.model('Books', bookSchema);
const Chapter = mongoose.model('Chapters', chapterSchema);

module.exports = {
  Book,
  Chapter
};