const { CarProfile } = require('../mongo');

exports.findAll = (req, res) => {
    CarProfile.find().then((CarProfiles) => {
        res.status(200).json(CarProfiles);
    }).catch(error => {
        res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    CarProfile.findById(id).then((CarProfile) => {
        res.status(200).json(CarProfile);
    }).catch(error => {
        res.status(500).json(error);
    });
};

exports.createCarProfile = (req, res) => {
    const data = req.body;
    const newCarProfile = new CarProfile(data);
    newCarProfile.save().then((CarProfile) => {
        res.status(200).json({ CarProfile });
    }).catch(error => {
        res.status(500).json(error);
    });
};

exports.updateCarProfile = (req, res) => {
    const {id} = req.params;
    const data = req.body;
    CarProfile.findByIdAndUpdate(id, data).then((CarProfile) => {
        res.status(200).json(CarProfile);
    }).catch(error => {
        res.status(500).json(error);
    });
};

exports.deleteCarProfile = (req, res) => {
    const {id} = req.params;
    CarProfile.findByIdAndRemove(id)
        .then((CarProfile) => {
            res.status(200).json({ message: `${CarProfile.version} has been deleted` });
        })
        .catch(error => {
            res.status(500).json(error);
        });
};
