const mongoose = require("mongoose");


const schema = new mongoose.Schema(
  {
    equipment: { type: String, required: true },
    carprofile: {type: mongoose.Schema.Types.ObjectId, ref:'CarProfile', required: true}
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Equipment = mongoose.model("Equipment", schema);

module.exports = Equipment;
