const { Transmision } = require("../mongo");

exports.findAll = (req, res) => {
  Transmision.find()
    .then((transmisiones) => {
      res.status(200).json(transmisiones);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Transmision.findById(id)
    .then((transmision) => {
      res.status(200).json(transmision);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newTransmision = new Transmision(data);
  newTransmision
    .save()
    .then((transmision) => {
      res.status(200).json(transmision);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Transmision.findByIdAndUpdate(id, data)
    .then((transmision) => {
      res.status(200).json(transmision);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Transmision.findByIdAndRemove(id)
    .then((transmision) => {
      res.status(200).json(transmision);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
