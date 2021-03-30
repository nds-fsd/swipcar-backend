const { Brand } = require("../mongo");

exports.findAll = (req, res) => {
  Brand.find()
    .then((brands) => {
      res.status(200).json(brands);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Brand.findById(id)
    .then((brand) => {
      res.status(200).json(brand);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newBrand = new Brand(data);
  newBrand
    .save()
    .then((brand) => {
      res.status(200).json(brand);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Brand.findByIdAndUpdate(id, data)
    .then((brand) => {
      res.status(200).json(brand);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Brand.findByIdAndRemove(id)
    .then((brand) => {
      res.status(200).json(brand);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
