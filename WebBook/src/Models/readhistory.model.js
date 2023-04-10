const mongoose = require('mongoose');

const readHistorySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 50
    },
    bookId: {
        type: Number,
        required: true
    },
    chapId: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    },
    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('ReadHistory', readHistorySchema);