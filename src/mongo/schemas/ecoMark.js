const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ecomarktype: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const EcoMark = mongoose.model("EcoMark", schema);

module.exports = EcoMark;
