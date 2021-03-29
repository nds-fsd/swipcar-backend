const { User } = require("../mongo");

exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createUser = (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  User.findByIdAndUpdate(id, data)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then((user) => {
      res.status(200).json({ message: `${user.name} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
