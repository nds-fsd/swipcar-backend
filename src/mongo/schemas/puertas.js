const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    label: { type: Number, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Puertas = mongoose.model('Puertas', schema);

module.exports = Puertas;
