const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
  },
  carProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarProfile',
  },
  version: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Version',
  },
  newcar: { type: Boolean, required: true },
  price: { type: String, required: true },
  km: { type: String, required: true },
  time: { type: String, required: true },
  fuel: { type: String, required: true },
  transmision: { type: String, required: true },
  color: { type: String, required: true },
  goodies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Goody',
    },
  ],
  equipments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
});

schema.index({
  version: 'text',
  newcar: 'text',
  price: 'text',
  km: 'text',
  time: 'text',
  fuel: 'text',
  transmision: 'text',
  color: 'text',
  carProfile: 'text',
  goodies: 'text',
  equipments: 'text',
});

const RentingOffer = mongoose.model('RentingOffer', schema);

module.exports = RentingOffer;
