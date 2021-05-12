const { User } = require('../mongo');

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
  const { id } = req.params;
  User.findById(id)
    .populate('cars')
    .exec((err, user) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(user);
    });
};
exports.createUser = (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: 'user created' });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
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
  const { id } = req.params;
  User.findByIdAndRemove(id)
    .then((user) => {
      res.status(200).json({ message: `${user.name} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
