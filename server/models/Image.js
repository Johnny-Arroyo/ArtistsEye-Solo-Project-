const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: {type: String, required: true},
  medium: {type: String, required: true},
  file: {data: Buffer, contentType: String}
});

module.exports = mongoose.model('Image', imageSchema);