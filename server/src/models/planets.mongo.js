const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  keplerName: {
    name: String,
    required: true,
  }
});

module.exports = mongoose.model('Planet', planetSchema);
