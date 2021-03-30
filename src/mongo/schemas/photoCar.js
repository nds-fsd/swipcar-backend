const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    model: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Models",
    },
    photourl: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const PhotoCar = mongoose.model("PhotoCar", schema);

module.exports = PhotoCar;
