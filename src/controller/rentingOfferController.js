const { RentingOffer } = require('../mongo');

exports.findAll = (req, res) => {
  RentingOffer.find()
    .populate('carprofile')
    .populate('goodies')
    .populate('equipments')
    .exec((err, rentingOffers) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(rentingOffers);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  RentingOffer.findById(id)
    .populate('carprofile')
    .populate('goodies')
    .populate('equipments')
    .exec((err, rentingOffer) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(rentingOffer);
    });
};

exports.createProvider = (req, res) => {
  const data = req.body;
  const newRentingOffer = new RentingOffer(data);
  newRentingOffer
    .save()
    .then((rentingOffer) => {
      res.status(200).json(rentingOffer);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateRentingOffer = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  RentingOffer.findByIdAndUpdate(id, data)
    .then((rentingOffer) => {
      res.status(200).json(rentingOffer);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteRentingOffer = (req, res) => {
  const { id } = req.params;
  RentingOffer.findByIdAndRemove(id)
    .then((rentingOffer) => {
      res.status(200).json(rentingOffer);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchRentingOffer = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  RentingOffer.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

/*
exports.search = (req, res) => {
  const query = {};

  Object.keys(req.query).forEach((key) => {
    query[key] = req.query[key];
  });

  console.log(query);

  RentingOffer.find(query)
    .populate('goodies')
    .populate('equipments')
    .exec((err, objects) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(objects);
    });
}; */
