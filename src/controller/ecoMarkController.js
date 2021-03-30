const { EcoMark } = require("../mongo");

exports.findAll = (req, res) => {
  EcoMark.find()
    .then((ecoMarks) => {
      res.status(200).json(ecoMarks);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  EcoMark.findById(id)
    .then((ecoMark) => {
      res.status(200).json(ecoMark);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newEcoMark = new EcoMark(data);
  newEcoMark
    .save()
    .then((mark) => {
      res.status(200).json(mark);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  EcoMark.findByIdAndUpdate(id, data)
    .then((ecoMark) => {
      res.status(200).json(ecoMark);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  EcoMark.findByIdAndRemove(id)
    .then((ecoMark) => {
      res.status(200).json(ecoMark);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
