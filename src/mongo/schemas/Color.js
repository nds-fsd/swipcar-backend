const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    colorname: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ colorname: 'text' });

const Color = mongoose.model('Color', schema);

module.exports = Color;
