require('./connection');
const User = require('./schemas/User');
const CarProfile = require('./schemas/CarProfile.js');
const CarType = require('./schemas/CarType.js');
const Equipment = require('./schemas/Equipment');
const Goody = require('./schemas/Goody');
const Brand = require('./schemas/Brand.js');
const Model = require('./schemas/Model.js');
const Version = require('./schemas/Version.js');
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
  Version,
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
