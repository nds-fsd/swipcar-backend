require('./connection');
const User = require('./schemas/user.js');
const CarProfile = require('./schemas/CarProfile.js');
const CarType = require('./schemas/CarType.js');
const Equipment = require('./schemas/equipment.js');
const Goody = require('./schemas/goody.js');
const RentingOption = require('./schemas/rentingOption.js');
const Brand = require('./schemas/Brand.js');
const Model = require('./schemas/Model.js');
const CarVersion = require('./schemas/CarVersion.js');
const Fuel = require('./schemas/Fuel.js');
const EcoMark = require('./schemas/EcoMark.js');
const Transmision = require('./schemas/Transmision.js');
const Color = require('./schemas/Color.js');
const PhotoCar = require('./schemas/PhotoCar.js');

module.exports = {
  User,
  CarProfile,
  CarType,
  Equipment,
  Goody,
  RentingOption,
  Brand,
  Model,
  CarVersion,
  Fuel,
  EcoMark,
  Transmision,
  Color,
  PhotoCar,
};
