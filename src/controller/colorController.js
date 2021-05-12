const { Color } = require('../mongo');

exports.findAll = (req, res) => {
  Color.find()
    .then((colores) => {
      res.status(200).json(colores);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Color.findById(id)
    .then((color) => {
      res.status(200).json(color);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.create = (req, res) => {
  const data = req.body;
  const newColor = new Color(data);
  newColor
    .save()
    .then((color) => {
      res.status(200).json(color);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Color.findByIdAndUpdate(id, data)
    .then((color) => {
      res.status(200).json(color);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Color.findByIdAndRemove(id)
    .then((color) => {
      res.status(200).json(color);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
