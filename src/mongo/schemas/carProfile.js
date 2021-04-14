const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    version: { type: String, required: true },
    carCard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarCard',
      required: true,
    },
    carType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarType',
      required: true,
    },
    nuevo: { type: Boolean, required: true },
    seminuevo: { type: Boolean, required: true },
    furgoneta: { type: Boolean, required: true },
    color: { type: String, required: true },
    puertas: { type: Number, required: true },
    dimensiones: { type: String, required: true },
    motor: { type: Number, required: true },
    cilindrada: { type: String, required: true },
    consumo: { type: Number, required: true },
    emision: { type: Number, required: true },
    equipments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment',
        required: true,
      },
    ],
    rentingoptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentingOption',
        required: true,
      },
    ],
    goodies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goody',
        required: true,
      },
    ],
    tecnologia: { type: String, required: true },
    confort: { type: String, required: true },
    seguridad: { type: String, required: true },
    exterior: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarProfile = mongoose.model('CarProfile', schema);

module.exports = CarProfile;
