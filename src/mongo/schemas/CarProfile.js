const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
      required: true,
    },
    version: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Version',
        required: true,
      },
    ],
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);
schema.index({
  brand: 'text',
  model: 'text',
  version: 'text',
});
const CarProfile = mongoose.model('CarProfile', schema);

module.exports = CarProfile;
