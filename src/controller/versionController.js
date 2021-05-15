const { CarVersion } = require('../mongo');

exports.findAll = (req, res) => {
  CarVersion.find()
    .then((versiones) => {
      res.status(200).json(versiones);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarVersion.findById(id)
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newCarVersion = new CarVersion(data);
  newCarVersion
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
  CarVersion.findByIdAndUpdate(id, data)
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  CarVersion.findByIdAndRemove(id)
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
  CarVersion.find({model: id})
    .then((version) => {
      res.status(200).json(version);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};