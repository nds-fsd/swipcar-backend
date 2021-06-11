const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  rentingoffer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RentingOffer',
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Reservation = mongoose.model('Reservation', schema);

module.exports = Reservation;
