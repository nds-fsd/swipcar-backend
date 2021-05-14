const { Location } = require('../mongo');

exports.findAll = (req, res) => {
  Location.find()
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Location.findById(id)
    .then((location) => {
      res.status(200).json(location);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createLocation = (req, res) => {
  const data = req.body;
  const newLocation = new Location(data);
  newLocation
    .save()
    .then((location) => {
      res.status(200).json(location);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateLocation = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Location.findByIdAndUpdate(id, data)
    .then((location) => {
      res.status(200).json(location);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteLocation = (req, res) => {
  const { id } = req.params;
  Location.findByIdAndRemove(id)
    .then((location) => {
      res.status(200).json(location);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchLocation = (req, res) => {
  const searchTextReg = req.body.search
    .split(' ')
    .reduce((acc, curr) => `${acc}.*${curr}`, '');

  const reg = new RegExp(searchTextReg);
  console.log(searchTextReg);
  const query = {
    $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
  };

  Location.find(query)
    .then((objects) => {
      res.status(200).json(objects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
