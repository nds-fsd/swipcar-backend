const mongoose = require('mongoose');
const {RentingOptionSchema} = require('./rentingOption');

const schema = new mongoose.Schema(
  {
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
    carVersion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarVersion',
      required: true,
    },
    nuevo: { type: Boolean, required: true },
    seminuevo: { type: Boolean, required: true },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Color',
      required: true,
    },
    puertas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Puertas',
      required: true,
    },
    dimensionesLargo: { type: Number, required: true },
    dimensionesAlto: { type: Number, required: true },
    dimensionesAncho: { type: Number, required: true },
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
      RentingOptionSchema
    ],
    goodies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goody',
        required: true,
      },
    ],
    tecnologia: [{ type: String }],
    confort: [{ type: String }],
    seguridad: [{ type: String }],
    exterior: [{ type: String }],
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarProfile = mongoose.model('CarProfile', schema);

module.exports = CarProfile;
