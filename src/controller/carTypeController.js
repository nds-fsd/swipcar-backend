const { CarType } = require('../mongo');

exports.findAll = (req, res) => {
  CarType.find()
    .then((carTypes) => {
      res.status(200).json(carTypes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarType.findById(id)
    .then((carType) => {
      res.status(200).json(carType);
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
    .then((carType) => {
      res.status(200).json({ carType });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateCarType = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  CarType.findByIdAndUpdate(id, data)
    .then((carType) => {
      res.status(200).json(carType);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteCarType = (req, res) => {
  const { id } = req.params;
  CarType.findByIdAndRemove(id)
    .then((carType) => {
      res.status(200).json({ message: `${carType.carType} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
