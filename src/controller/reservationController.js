const { Reservation } = require('../mongo');

exports.findAll = (req, res) => {
  Reservation.find()
    .populate('rentingoffer')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'brand' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'model' } }
    })
    .populate('user')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'provider' }
    })
    .exec((err, reservations) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(reservations);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Reservation.findById(id)
    .populate('rentingoffer')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'brand' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'model' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'provider' }
    })
    .populate('user')
    .exec((err, reservation) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(reservation);
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
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }]
  };

  Reservation.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findByUser = async (req, res) => {
  const { id } = req.params;
  const page = Math.max(0, req.body.skip);
  const limit = req.body.limit ? Math.max(1, req.body.limit) : 10;
  const { sort } = req.body;
  const sortDirection = req.body.dir || 'asc';
  let sortObject = {};
  if (sort && sortDirection) {
    sortObject[sort] = sortDirection === 'asc' ? 1 : -1;
  }
  const totalElements = await Reservation.find({ user: id }).count();
  Reservation.find({ provider: id })
    .sort(sortObject)
    .limit(limit)
    .skip(page)
    .populate('rentingoffer')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'brand' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'model' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'provider' }
    })
    .populate('user')
    .exec((err, userReservations) => {
      if (err) return res.status(500).json({ error: err });
      const result = { elements: userReservations, totalElements };
      return res.status(200).json(result);
    });
};

exports.findByProvider = async (req, res) => {
  const { id } = req.params;
  const page = Math.max(0, req.body.skip);
  const limit = req.body.limit ? Math.max(1, req.body.limit) : 10;
  const { sort } = req.body;
  const sortDirection = req.body.dir || 'asc';
  let sortObject = {};
  if (sort && sortDirection) {
    sortObject[sort] = sortDirection === 'asc' ? 1 : -1;
  }
  const totalElements = await Reservation.find({
    rentingOffer: { provider: id }
  })
    .populate('rentingoffer')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'brand' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'model' } }
    })
    // .populate({
    //   path: 'rentingoffer',
    //   populate: { path: 'provider' }
    // })
    .populate('user')
    .count();

  Reservation.find({ rentingOffer: { provider: id } })
    .sort(sortObject)
    .limit(limit)
    .skip(page)
    .populate('rentingoffer')
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'brand' } }
    })
    .populate({
      path: 'rentingoffer',
      populate: { path: 'version', populate: { path: 'model' } }
    })
    // .populate({
    //   path: 'rentingoffer',
    //   populate: { path: 'provider' }
    // })
    .populate('user')
    .exec((err, reservations) => {
      if (err) return res.status(500).json({ error: err });
      const result = { elements: reservations, totalElements };
      return res.status(200).json(result);
    });
};
