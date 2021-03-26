const { PhotoCar } = require("../mongo");

exports.findAll = (req, res) => {
  PhotoCar.find()
    .then((photoCars) => {
      res.status(200).json(photoCars);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  PhotoCar.findById(id)
    .then((photoCar) => {
      res.status(200).json(photoCar);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newPhotoCar = new PhotoCar(data);
  newPhotoCar
    .save()
    .then(() => {
      res.status(200).json(res);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  PhotoCar.findByIdAndUpdate(id, data)
    .then((photoCar) => {
      res.status(200).json(photoCar);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  PhotoCar.findByIdAndRemove(id)
    .then((photoCar) => {
      res.status(200).json(photoCar);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
