const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
  keplerName: {
    name: String,
    required: true,
  }
});
