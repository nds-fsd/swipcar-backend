const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Brand',
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Model',
    },
    lowerprice: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'LowerPrice',
    },
    fuel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Fuel',
    },
    ecomark: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'EcoMark',
    },
    photocar: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PhotoCar',
      },
    ],
    transmision: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Transmision',
    },
    carprofile: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'CarProfile',
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarCard = mongoose.model('CarCard', schema);

module.exports = CarCard;
