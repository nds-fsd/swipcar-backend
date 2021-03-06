const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    fueltype: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ fueltype: 'text'});

const Fuel = mongoose.model('Fuel', schema);

module.exports = Fuel;
