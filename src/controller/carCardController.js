const { CarCard } = require('../mongo');

exports.findAll = (req, res) => {
  CarCard.find()
    .populate('brand')
    .populate('model')
    .populate('lowerprice')
    .populate('fuel')
    .populate('ecomark')
    .populate('photocar')
    .populate('transmision')
    .populate('carprofile')
    .exec((err, carCard) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carCard);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarCard.findById(id)
    .populate('brand')
    .populate('model')
    .populate('lowerprice')
    .populate('fuel')
    .populate('ecomark')
    .populate('photocar')
    .populate('transmision')
    .populate('carprofile')
    .exec((err, carCard) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carCard);
    });
};

exports.createCarCard = (req, res) => {
  const data = req.body;
  const newCarCard = new CarCard(data);
  newCarCard.save((err, CarCard) => {
    if (err) return res.status(500).json({ error: err.getMessage() });
    return res.status(200).json({ CarCard });
  });
};

exports.updateCarCard = (req, res) => {
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

exports.deleteCarCard = (req, res) => {
  const { id } = req.params;
  CarCard.findByIdAndRemove(id)
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchText = (req, res) => {
  const searchText = Object.keys(req.body).reduce(
    (acc, curr) => `${acc} ${req.body[curr]}`,
    ''
  );

  console.log(searchText);

  const query = { $text: { $search: searchText } };

  CarCard.find(query, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .then((objects) => {
      objects.filter((o) => o.score > 1);
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchNewCars = (req, res) => {
  const { nuevo } = req.query;
  const data = {
    nuevo: true,
  };
  CarCard.find()
    .populate('carprofile')
    .then((carCard) => {
      res.status(200).json(CarCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
