const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  rentingoffer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RentingOffer',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

schema.index({
  rentingoffer: 'text',
  user: 'text',
});

const Reservation = mongoose.model('Reservation', schema);

module.exports = Reservation;
