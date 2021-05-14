const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  companyname: { type: String, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  web: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  rentingoffers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RentingOffer',
    },
  ],
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservation',
    },
  ],
});

schema.index({
  companyname: 'text',
  rentingoffers: 'text',
  reservations: 'text',
});

const Provider = mongoose.model('Provider', schema);

module.exports = Provider;
