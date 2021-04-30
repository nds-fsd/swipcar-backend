const { Puertas } = require('../mongo');

exports.findAll = (req, res) => {
  Puertas.find()
    .then((puertas) => {
      res.status(200).json(puertas);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Puertas.findById(id)
    .then((puerta) => {
      res.status(200).json(puerta);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newPuertas = new Puertas(data);
  newPuertas
    .save()
    .then((puerta) => {
      res.status(200).json(puerta);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Puertas.findByIdAndUpdate(id, data)
    .then((puerta) => {
      res.status(200).json(puerta);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Puertas.findByIdAndRemove(id)
    .then((puerta) => {
      res.status(200).json(puerta);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
