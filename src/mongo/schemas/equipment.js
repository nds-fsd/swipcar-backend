const mongoose = require("mongoose");


const schema = new mongoose.Schema(
  {
    carEquipment: { type: String, required: true, unique: true }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Equipment = mongoose.model("Equipment", schema);

module.exports = Equipment;
