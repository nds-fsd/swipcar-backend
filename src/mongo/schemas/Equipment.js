const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    carequipment: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ carequipment: 'text' });

const Equipment = mongoose.model('Equipment', schema);

module.exports = Equipment;
