require('./connection');
const User = require('./schemas/User.js');
const CarProfile = require('./schemas/carProfile.js');
const CarType = require('./schemas/carType.js');
const Equipment = require('./schemas/Equipment.js');
const Goody = require('./schemas/Goody.js');
const RentingOption = require('./schemas/rentingOption.js');
const CarCard = require('./schemas/carCard.js');
const Brand = require('./schemas/brand.js');
const Model = require('./schemas/model.js');
const CarVersion = require('./schemas/carVersion.js');
const Fuel = require('./schemas/fuel.js');
const EcoMark = require('./schemas/ecoMark.js');
const Transmision = require('./schemas/transmision');
const Puertas = require('./schemas/puertas');
const Color = require('./schemas/color');
const LowerPrice = require('./schemas/lowerPrice.js');
const PhotoCar = require('./schemas/photoCar.js');
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
  RentingOption,
  CarCard,
  Brand,
  Model,
  CarVersion,
  Fuel,
  EcoMark,
  Transmision,
  Puertas,
  Color,
  LowerPrice,
  PhotoCar,
  Location,
  Provider,
  Reservation,
  RentingOffer,
};
