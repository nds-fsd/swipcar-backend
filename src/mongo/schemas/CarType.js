const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    cartype: { type: String, required: true, unique: true, index: true }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ cartype: 'text' });

const CarType = mongoose.model('CarType', schema);

module.exports = CarType;
