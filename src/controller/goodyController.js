const { Goody } = require('../mongo');

exports.findAll = (req, res) => {
  Goody.find()
    .then((goodies) => {
      res.status(200).json(goodies);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Goody.findById(id)
    .then((goody) => {
      res.status(200).json(goody);
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
    .then((goody) => {
      res.status(200).json({ goody });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateGoody = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Goody.findByIdAndUpdate(id, data)
    .then((goody) => {
      res.status(200).json(goody);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteGoody = (req, res) => {
  const { id } = req.params;
  Goody.findByIdAndRemove(id)
    .then((goody) => {
      res.status(200).json({ message: `${goody.goody} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchGoody = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  Goody.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
