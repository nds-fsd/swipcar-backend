const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    carGoodie: { type: String, required: true, unique: true },
    iconGoodie: { type: String, required: true, default: 'check' }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Goody = mongoose.model('Goody', schema);

module.exports = Goody;
