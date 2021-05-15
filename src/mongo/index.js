require('./connection');
const User = require('./schemas/User.js');
const CarProfile = require('./schemas/CarProfile.js');
const CarType = require('./schemas/CarType.js');
const Equipment = require('./schemas/Equipment.js');
const Goody = require('./schemas/Goody.js');
const Brand = require('./schemas/Brand.js');
const Model = require('./schemas/Model.js');
const CarVersion = require('./schemas/CarVersion.js');
const Fuel = require('./schemas/Fuel.js');
const EcoMark = require('./schemas/EcoMark.js');
const Transmision = require('./schemas/Transmision.js');
const Color = require('./schemas/Color.js');
const PhotoCar = require('./schemas/PhotoCar.js');
const Location = require('./schemas/Location.js');
const Provider = require('./schemas/Provider.js');
const Reservation = require('./schemas/Reservation.js');
const RentingOffer = require('./schemas/RentingOffer.js');


module.exports = {
  User,
  CarProfile,
  CarType,
  Equipment,
  Goody,
  Brand,
  Model,
  CarVersion,
  Fuel,
  EcoMark,
  Transmision,
  Color,
  PhotoCar,
  Location,
  Provider,
  Reservation,
  RentingOffer,
};
