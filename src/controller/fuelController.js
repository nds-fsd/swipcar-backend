const { Fuel } = require("../mongo");

exports.findAll = (req, res) => {
  Fuel.find()
    .then((fuels) => {
      res.status(200).json(fuels);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Fuel.findById(id)
    .then((fuel) => {
      res.status(200).json(fuel);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newFuel = new Fuel(data);
  newFuel
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
  Fuel.findByIdAndUpdate(id, data)
    .then((fuel) => {
      res.status(200).json(fuel);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Fuel.findByIdAndRemove(id)
    .then((fuel) => {
      res.status(200).json(fuel);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
