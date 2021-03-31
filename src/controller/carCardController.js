const { CarCard } = require("../mongo");

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
  const id = req.params.id;
  CarCard.findById(id)
  .populate('Brand')
  .populate('Model')
  .populate('Fuel')
  .populate('EcoMark')
  .exec((err, carCard) => {        
      if(err) return res.status(500).json({error: err.getMessage()});
      return res.status(200).json(carCard);
  });
};
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   CarCard.findById(id)
//         .populate('carCard')
//     .then((carCard) => {
//       res.status(200).json(carCard);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// };

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
  const id = req.params.id;
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
  const id = req.params.id;
  CarCard.findByIdAndRemove(id)
    .then((carCard) => {
      res.status(200).json(carCard);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
