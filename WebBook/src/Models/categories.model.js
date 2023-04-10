const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    Category_Id: {
        type: Number,
        required: true
    },
    Category_Name: {
        type: String,
        required: true,
        maxlength: 250
    },
    Content: {
        type: String
    },
    Books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    }]
});

module.exports = mongoose.model('Categories', categorySchema);