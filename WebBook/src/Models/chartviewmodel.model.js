const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true
  },
  registrations: {
    type: Number,
    required: true
  }
});

const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;
