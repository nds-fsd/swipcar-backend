const { CarProfile } = require('../mongo');

/* exports.findAll = (req, res) => {
  CarProfile.find()
    .then((carProfiles) => {
      res.status(200).json(carProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}; */
exports.findAll = (req, res) => {
  CarProfile.find()
    .populate('brand')
    .populate('model')
    .populate({
      path: 'model',
      populate: { path: 'cartype' }
    })
    .populate({
      path: 'model',
      populate: { path: 'photocar' }
    })
    .populate('version')
    .populate({
      path: 'version',
      populate: { path: 'brand' }
    })
    .populate({
      path: 'version',
      populate: { path: 'model' }
    })
    .populate({
      path: 'version',
      populate: { path: 'color' }
    })
    .populate({
      path: 'version',
      populate: { path: 'fuel' }
    })
    .populate({
      path: 'version',
      populate: { path: 'transmision' }
    })
    .populate({
      path: 'version',
      populate: { path: 'ecomark' }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers' }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'provider' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'equipments' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'goodies' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'version' } }
    })
    .exec((err, CarProfiles) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(CarProfiles);
    });
};

exports.findAllLength = (req, res) => {
  CarProfile.find()
    .count()
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.getDataCarProfiles = async (req, res) => {
  const page = Math.max(0, req.body.skip);
  const limit = req.body.limit ? Math.max(1, req.body.limit) : 10;
  const { sort } = req.body;
  const sortDirection = req.body.dir || 'asc';
  let sortObject = {};
  if (sort && sortDirection) {
    sortObject[sort] = sortDirection === 'asc' ? 1 : -1;
  }

  const totalElements = await CarProfile.find().count();

  CarProfile.find()
    // CarProfile.find({ brandname: 'Kia' }) //! queryy de busqueda
    .sort(sortObject)
    .limit(limit)
    .skip(page)
    .populate('brand')
    .populate('model')
    .populate('version')
    .exec((err, carProfiles) => {
      if (err) return res.status(500).json(err);
      const result = { elements: carProfiles, totalElements };
      return res.status(200).json(result);
    });
};

exports.findByModel = async (req, res) => {
  const { id } = req.params;
  CarProfile.findOne({ model: id })
    .populate('brand')
    .populate('model')
    .exec((err, carProfiles) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(carProfiles);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarProfile.findById(id)
    .populate('brand')
    .populate('model')
    .populate({
      path: 'model',
      populate: { path: 'cartype' }
    })
    .populate({
      path: 'model',
      populate: { path: 'photocar' }
    })
    .populate('version')
    .populate({
      path: 'version',
      populate: { path: 'brand' }
    })
    .populate({
      path: 'version',
      populate: { path: 'model' }
    })
    .populate({
      path: 'version',
      populate: { path: 'color' }
    })
    .populate({
      path: 'version',
      populate: { path: 'fuel' }
    })
    .populate({
      path: 'version',
      populate: { path: 'transmision' }
    })
    .populate({
      path: 'version',
      populate: { path: 'ecomark' }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers' }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'provider' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'equipments' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'goodies' } }
    })
    .populate({
      path: 'version',
      populate: { path: 'rentingoffers', populate: { path: 'version' } }
    })
    .exec((err, CarProfiles) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(CarProfiles);
    });
};

exports.createCarProfile = (req, res) => {
  const data = req.body;
  const newCarProfile = new CarProfile(data);
  newCarProfile
  .save()
  .then((carProfile) => {
    res.status(200).json(carProfile);
  })
  .catch((error) => {
    res.status(500).json(error);
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

exports.search = (req, res) => {
  const searchText = Object.keys(req.body).reduce(
    (acc, curr) => `${acc} ${req.body[curr]}`,
    ''
  );

  console.log(searchText);

  const query = { $text: { $search: searchText } };

  CarProfile.find(query, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .then((objects) => {
      objects.filter((o) => o.score > 1);
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
