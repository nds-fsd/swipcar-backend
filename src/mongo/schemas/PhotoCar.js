const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    modelname: { type: String, required: true },
    photourl: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const PhotoCar = mongoose.model('PhotoCar', schema);

module.exports = PhotoCar;
