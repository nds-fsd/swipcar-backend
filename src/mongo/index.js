require("./connection");
const User = require("./schemas/user.js");
const CarProfile = require("./schemas/carProfile.js");
const Equipment = require("./schemas/equipment.js");
const Goody = require("./schemas/goody.js");
const RentingOption = require("./schemas/rentingOption.js");

module.exports = {
  User,
  CarProfile,
  Equipment,
  Goody,
  RentingOption,
};
