/* eslint-disable no-shadow */
const { RentingOption } = require('../mongo');

exports.findAll = (req, res) => {
  RentingOption.find()
    .then((RentingOptions) => {
      res.status(200).json(RentingOptions);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  RentingOption.findById(id)
    .then((RentingOption) => {
      res.status(200).json(RentingOption);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createRentingOption = (req, res) => {
  const data = req.body;
  const newRentingOption = new RentingOption(data);
  newRentingOption
    .save()
    .then((RentingOption) => {
      res.status(200).json({ RentingOption });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateRentingOption = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  RentingOption.findByIdAndUpdate(id, data)
    .then((RentingOption) => {
      res.status(200).json(RentingOption);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteRentingOption = (req, res) => {
  const { id } = req.params;
  RentingOption.findByIdAndRemove(id)
    .then((RentingOption) => {
      res
        .status(200)
        .json({ message: `${RentingOption.duracion} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
