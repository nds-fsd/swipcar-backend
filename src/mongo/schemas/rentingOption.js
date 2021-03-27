const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    duracion: { type: Number, required: true },
    kmmax: { type: Number, required: true },
    optionprice: { type: Number, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const RentingOption = mongoose.model("RentingOption", schema);

module.exports = RentingOption;
