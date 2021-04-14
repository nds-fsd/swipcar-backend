const { CarProfile } = require('../mongo');

exports.findAll = (req, res) => {
  CarProfile.find()
    .then((CarProfiles) => {
      res.status(200).json(CarProfiles);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  CarProfile.findById(id)
    .populate({
      path: 'carCard',
      populate: { path: 'brand' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'model' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'lowerprice' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'fuel' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'ecomark' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'photocar' },
    })
    .populate({
      path: 'carCard',
      populate: { path: 'transmision' },
    })
    .populate('carType')
    .populate('equipments')
    .populate('rentingoptions')
    .populate('goodies')
    .exec((err, carProfile) => {
      if (err) return res.status(500).json({ error: err.getMessage() });
      return res.status(200).json(carProfile);
    });
};

exports.createCarProfile = (req, res) => {
  const data = req.body;
  const newCarProfile = new CarProfile(data);
  newCarProfile.save((err, CarProfile) => {
    if (err) return res.status(500).json({ error: err.getMessage() });
    return res.status(200).json({ CarProfile });
  });
};
/* Prueba result.ops for each
exports.createCarProfile = (req, res) => {
    const data = req.body;
    const newCarProfile = new CarProfile(data);
    newCarProfile.save((err, carProfilePersisted) => {
        if(err) return res.status(500).json({error: err.getMessage()});
        
        const equipments = [1,2,3].map((num) => {
            const newEquipment = new Equipment({
              equipment: `equipment${num}`,
              carprofile: carProfilePersisted._id
            });
            return newEquipment;
        });
    
        Equipment.collection.insertMany(equipments, (err, result) => {
            if(err) return res.status(500).json({error: err.getMessage()});
            result.ops.forEach(equipment => {
                carProfilePersisted.equipments.push(equipment._id);
            });
            carProfilePersisted.save((err, carProfileWithEquipment) =>{
                return res.status(200).json({
                  carprofile: carProfileWithEquipment,
                  equipments: result.ops
                });
            });
        });
    });
}; */

exports.updateCarProfile = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  CarProfile.findByIdAndUpdate(id, data)
    .then((CarProfile) => {
      res.status(200).json(CarProfile);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteCarProfile = (req, res) => {
  const { id } = req.params;
  CarProfile.findByIdAndRemove(id)
    .then((CarProfile) => {
      res
        .status(200)
        .json({ message: `${CarProfile.version} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
