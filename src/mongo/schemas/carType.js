const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    brandname: { type: String, required: true, unique: true },
    logotype: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarType = mongoose.model('CarType', schema);

module.exports = CarType;
