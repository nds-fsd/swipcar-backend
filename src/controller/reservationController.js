const { Reservation } = require('../mongo');

exports.findAll = (req, res) => {
  Reservation.find()
    .then((reservations) => {
      res.status(200).json(reservations);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Reservation.findById(id)
    .then((reservation) => {
      res.status(200).json(reservation);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createReservation = (req, res) => {
  const data = req.body;
  const newReservation = new Reservation(data);
  newReservation
    .save()
    .then((reservation) => {
      res.status(200).json(reservation);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateReservation = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Reservation.findByIdAndUpdate(id, data)
    .then((reservation) => {
      res.status(200).json(reservation);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteReservation = (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndRemove(id)
    .then((reservation) => {
      res.status(200).json(reservation);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchReservation = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  Reservation.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
