const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    carType: { type: String, required: true, unique: true, index: true }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
  );

const CarType = mongoose.model('CarType', schema);

module.exports = CarType;
