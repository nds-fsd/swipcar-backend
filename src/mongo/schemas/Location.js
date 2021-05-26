const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
  },
  coordinates: {
    type: [Number],
  },
});

schema.index({ type: 'text', coordinates: 'text' });

const Location = mongoose.model('Location', schema);

module.exports = Location;
