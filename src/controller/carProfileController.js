const { CarProfile } = require('../mongo');

exports.findAll = (req, res) => {
  CarProfile.find()
    .populate({
      path: 'carCard',
      populate: { path: 'brand' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'model' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'lowerprice' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'fuel' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'ecomark' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'photocar' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'transmision' },
    })
    .populate('carType')
    .populate('equipments')
    .populate('rentingoptions')
    .populate('goodies')
    .exec((err, carProfile) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carProfile);
    });
};
exports.findOne = (req, res) => {
  const { id } = req.params;
  CarProfile.findById(id)
    .populate({
      path: 'carCard',
      populate: { path: 'brand' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'model' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'lowerprice' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'fuel' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'ecomark' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'photocar' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'transmision' },
    })
    .populate('carType')
    .populate('equipments')
    .populate('rentingoptions')
    .populate('goodies')
    .exec((err, carProfile) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carProfile);
    });
};

exports.createCarProfile = (req, res) => {
  const data = req.body;
  const newCarProfile = new CarProfile(data);
  newCarProfile.save((err, CarProfile) => {
    if (err) return res.status(500).json({ error: err.getMessage() });
    return res.status(200).json({ CarProfile });
  });
};

exports.updateCarProfile = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  CarProfile.findByIdAndUpdate(id, data)
    .then((CarProfile) => {
      res.status(200).json(CarProfile);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteCarProfile = (req, res) => {
  const { id } = req.params;
  CarProfile.findByIdAndRemove(id)
    .then((CarProfile) => {
      res
        .status(200)
        .json({ message: `${CarProfile.version} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
exports.findNewCars = (req, res) => {
  const { nuevo } = req.query;
  const data = {
    nuevo: true,
  };
  CarProfile.find(data)
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findUsedCars = (req, res) => {
  const { seminuevo } = req.query;
  const data = {
    seminuevo: true,
  };
  CarProfile.find(data)
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findVanCars = (req, res) => {
  const { furgoneta } = req.query;
  const data = {
    furgoneta: true,
  };
  CarProfile.find(data)
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.search = (req, res) => {
  const query = {};

  Object.keys(req.query).forEach((key) => {
    query[key] = req.query[key];
  });

  console.log(query);

  CarProfile.find(query)
    .populate({
      path: 'carCard',
      populate: { path: 'brand' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'model' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'lowerprice' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'fuel' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'ecomark' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'photocar' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'transmision' },
    })
    .populate('carType')
    .populate('equipments')
    .populate('rentingoptions')
    .populate('goodies')
    .exec((err, objects) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(objects);
    });
};
exports.findDieselCars = (req, res) => {
  CarProfile.find({ puertas: 3 })
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
