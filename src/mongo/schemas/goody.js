const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    cargoodie: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ cargoodie: 'text' });

const Goody = mongoose.model('Goody', schema);

module.exports = Goody;
