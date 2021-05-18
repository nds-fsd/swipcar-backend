const { Version } = require('../mongo');

exports.findAll = (req, res) => {
  Version.find()
    .then((versions) => {
      res.status(200).json(versions);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
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
