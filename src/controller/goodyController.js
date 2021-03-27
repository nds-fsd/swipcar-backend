const { Goody } = require("../mongo");

exports.findAll = (req, res) => {
  Goody.find()
    .then((Goodys) => {
      res.status(200).json(Goodys);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Goody.findById(id)
    .then((Goody) => {
      res.status(200).json(Goody);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createGoody = (req, res) => {
  const data = req.body;
  const newGoody = new Goody(data);
  newGoody
    .save()
    .then((Goody) => {
      res.status(200).json({ Goody });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateGoody = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Goody.findByIdAndUpdate(id, data)
    .then((Goody) => {
      res.status(200).json(Goody);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteGoody = (req, res) => {
  const { id } = req.params;
  Goody.findByIdAndRemove(id)
    .then((Goody) => {
      res.status(200).json({ message: `${Goody.goody} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
