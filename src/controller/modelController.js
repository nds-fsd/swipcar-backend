const { Model } = require('../mongo');

/* exports.findAll = (req, res) => {
  Model.find()
    .then((models) => {
      res.status(200).json(models);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}; */
exports.findAll = (req, res) => {
  Model.find()
    .populate('brand')
    .populate('cartype')
    .populate('photocar')
    .exec((err, Models) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(Models);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Model.findById(id)
    .populate('brand')
    .populate('cartype')
    .populate('photocar')
    .exec((err, Models) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(Models);
    });
};

exports.findByBrand = (req, res) => {
  const { id } = req.params;
  Model.find({ brand: id })
    .then((model) => {
      res.status(200).json(model);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newModel = new Model(data);
  newModel
    .save()
    .then((model) => {
      res.status(200).json(model);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Model.findByIdAndUpdate(id, data)
    .then((model) => {
      res.status(200).json(model);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Model.findByIdAndRemove(id)
    .then((model) => {
      res.status(200).json(model);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
