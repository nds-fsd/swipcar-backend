const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brands",
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Models",
    },
    price: { type: Number, required: true },
    fuel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "FuelType",
    },
    ecomark: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "EcoMark",
    },
    photocar: { type: File, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const CarCard = mongoose.model("CarCard", schema);

module.exports = CarCard;
