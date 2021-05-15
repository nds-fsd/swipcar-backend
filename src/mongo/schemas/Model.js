const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    modelname: { type: String, required: true, unique: true, index: true },
    cartype: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'CarType',
    },
    photocar: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'PhotoCar',
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Brand',
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ modelname: 'text'});

const Model = mongoose.model('Model', schema);

module.exports = Model;
