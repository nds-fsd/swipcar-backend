const { Provider } = require('../mongo');

exports.findAll = (req, res) => {
  Provider.find()
    .populate('rentingOffers')
    .populate('reservations')
    .exec((err, carProfile) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carProfile);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Provider.findById(id)
    .populate('rentingOffers')
    .populate('reservations')
    .exec((err, carProfile) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carProfile);
    });
};

exports.createProvider = (req, res) => {
  const data = req.body;
  const newProvider = new Provider(data);
  newProvider
    .save()
    .then((provider) => {
      res.status(200).json(provider);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateProvider = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Provider.findByIdAndUpdate(id, data)
    .then((provider) => {
      res.status(200).json(provider);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteProvider = (req, res) => {
  const { id } = req.params;
  Provider.findByIdAndRemove(id)
    .then((provider) => {
      res.status(200).json(provider);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchProvider = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  Provider.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
