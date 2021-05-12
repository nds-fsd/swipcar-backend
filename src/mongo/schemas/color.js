const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Color = mongoose.model('Color', schema);

module.exports = Color;
