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
      if (err) return res.status(500).json({ error: err.getMessage() });
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
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(Versiones);
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
