const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    transmisiontype: { type: String, required: true, unique: true }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ transmisiontype: 'text' });

const Transmision = mongoose.model('Transmision', schema);

module.exports = Transmision;
