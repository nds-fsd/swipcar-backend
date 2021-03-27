const { Equipment } = require("../mongo");

exports.findAll = (req, res) => {
  Equipment.find()
    .then((Equipments) => {
      res.status(200).json(Equipments);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Equipment.findById(id)
    .then((Equipment) => {
      res.status(200).json(Equipment);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createEquipment = (req, res) => {
  const data = req.body;
  const newEquipment = new Equipment(data);
  newEquipment
    .save()
    .then((Equipment) => {
      res.status(200).json({ Equipment });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateEquipment = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Equipment.findByIdAndUpdate(id, data)
    .then((Equipment) => {
      res.status(200).json(Equipment);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteEquipment = (req, res) => {
  const { id } = req.params;
  Equipment.findByIdAndRemove(id)
    .then((Equipment) => {
      res
        .status(200)
        .json({ message: `${Equipment.equipment} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
