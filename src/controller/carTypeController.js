const { CarType } = require('../mongo');

exports.findAll = (req, res) => {
  CarType.find()
    .then((CarTypes) => {
      res.status(200).json(CarTypes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarType.findById(id)
    .then((CarType) => {
      res.status(200).json(CarType);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createCarType = (req, res) => {
  const data = req.body;
  const newCarType = new CarType(data);
  newCarType
    .save()
    .then((CarType) => {
      res.status(200).json({ CarType });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateCarType = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  CarType.findByIdAndUpdate(id, data)
    .then((CarType) => {
      res.status(200).json(CarType);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteCarType = (req, res) => {
  const { id } = req.params;
  CarType.findByIdAndRemove(id)
    .then((CarType) => {
      res.status(200).json({ message: `${CarType.carType} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
