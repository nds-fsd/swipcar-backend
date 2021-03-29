const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Model",
    },
    price: { type: Number, required: true },
    fuel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Fuel",
    },
    ecomark: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "EcoMark",
    },
    photocar: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const CarCard = mongoose.model("CarCard", schema);

module.exports = CarCard;
