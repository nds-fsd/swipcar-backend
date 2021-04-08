const { CarCard } = require('../mongo');

exports.findAll = (req, res) => {
  CarCard.find()
    .then((carCards) => {
      res.status(200).json(carCards);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarCard.findById(id)
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newCarCard = new CarCard(data);
  newCarCard
    .save()
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  CarCard.findByIdAndUpdate(id, data)
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  CarCard.findByIdAndRemove(id)
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
