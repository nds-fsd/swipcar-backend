const { User } = require('../mongo');

exports.findAll = (req, res) => {
  User.find()
    .populate('location')
    .populate('provider')
    .populate('reservations')
    .exec((err, Users) => {
      if (err) return res.status(500).json({ error: err });
      // if (err) return res.status(500).json(err);
      return res.status(200).json(Users);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate('location')
    .populate('provider')
    .populate('reservations')
    .exec((err, user) => {
      if (err) return res.status(500).json({ error: err });
      // if (err) return res.status(500).json(err);
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

exports.searchUser = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  User.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
