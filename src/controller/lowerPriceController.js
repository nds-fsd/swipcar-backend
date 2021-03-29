const { LowerPrice } = require("../mongo");

exports.findAll = (req, res) => {
  LowerPrice.find()
    .then((lowerPrices) => {
      res.status(200).json(lowerPrices);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  LowerPrice.findById(id)
    .then((lowerPrice) => {
      res.status(200).json(lowerPrice);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newLowerPrice = new LowerPrice(data);
  newLowerPrice
    .save()
    .then((price) => {
      res.status(200).json(price);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  LowerPrice.findByIdAndUpdate(id, data)
    .then((lowerPrice) => {
      res.status(200).json(lowerPrice);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  LowerPrice.findByIdAndRemove(id)
    .then((lowerPrice) => {
      res.status(200).json(lowerPrice);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
