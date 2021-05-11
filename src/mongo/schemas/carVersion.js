const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    carVersion: { type: String, required: true, unique: true, index: true },
    carModel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
      required: true,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarVersion = mongoose.model('CarVersion', schema);

module.exports = CarVersion;
