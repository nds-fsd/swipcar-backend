const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

schema.index({ type: 'text', coordinates: 'text' });

const Location = mongoose.model('Location', schema);

module.exports = Location;
