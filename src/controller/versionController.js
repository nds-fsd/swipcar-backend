const { Version } = require('../mongo');

exports.findAll = (req, res) => {
  Version.find()
    .populate('brand')
    .populate('model')
    .populate('ecomark')
    .populate('model')
    .populate('rentingoffers')
    .populate({
      path: 'rentingoffers',
      populate: { path: 'goodies' },
    })
    .populate({
      path: 'rentingoffers',
      populate: { path: 'equipments' },
    })
    .exec((err, Versiones) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json(Versiones);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Version.findById(id)
    .populate('brand')
    .populate('model')
    .populate('ecomark')
    .populate('model')
    //! spring04
    .populate({
      path: 'model',
      populate: { path: 'cartype' }
    })
    //! spring04
    .populate('rentingoffers')
    .populate({
      path: 'rentingoffers',
      populate: { path: 'goodies' },
    })
    .populate({
      path: 'rentingoffers',
      populate: { path: 'equipments' },
    })
    .exec((err, Versiones) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json(Versiones);
    });
};

exports.getDataOptionsVersions = (req, res) => {
  const { id } = req.params;
  Version.findById(id)
  .then((version) => {
    res.status(200).json(version);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
};

exports.create = (req, res) => {
  const data = req.body;
  const newVersion = new Version(data);
  newVersion
    .save()
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Version.findByIdAndUpdate(id, data)
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Version.findByIdAndRemove(id)
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
//*---------------------

exports.findByModel = (req, res) => {
  const { id } = req.params;
  Version.find({ model: id })
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.getDataVersions = async (req, res) => {
  const page = Math.max(0, req.body.skip);
  const limit = req.body.limit ? Math.max(1, req.body.limit) : 10;
  const { sort } = req.body;
  const sortDirection = req.body.dir || 'asc';
  let sortObject = {};
  if (sort && sortDirection) {
    sortObject[sort] = sortDirection === 'asc' ? 1 : -1;
  }

  const totalElements = await Version.find().count();

  Version.find()
    // Version.find({ brandname: 'Kia' }) //! queryy de busqueda
    .sort(sortObject)
    .limit(limit)
    .skip(page)
    .populate('brand')
    .populate('model')
    .exec((err, versions) => {
      if (err) return res.status(500).json({ err });
      const result = { elements: versions, totalElements };
      return res.status(200).json(result);
    });
};