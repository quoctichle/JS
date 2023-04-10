const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserViewModelSchema = new Schema({
  follows: [BooksSchema], // Một mảng chứa các đối tượng Books
  histories: [BooksSchema] // Một mảng chứa các đối tượng Books
});

module.exports = mongoose.model('UserViewModel', UserViewModelSchema);
