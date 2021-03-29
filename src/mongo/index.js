require("./connection");
const User = require("./schemas/user.js");
const CarCard = require("./schemas/carCard.js");
const Brand = require("./schemas/brand.js");
const Model = require("./schemas/model.js");
const Fuel = require("./schemas/fuel.js");
const EcoMark = require("./schemas/ecoMark.js");
const Transmision = require("./schemas/transmision");
const LowerPrice = require("./schemas/lowerPrice.js");
const PhotoCar = require("./schemas/photoCar.js");


module.exports = {
    User,
    CarCard,
    Brand,
    Model,
    Fuel,
    EcoMark,
    Transmision,
    LowerPrice,
    PhotoCar
}
