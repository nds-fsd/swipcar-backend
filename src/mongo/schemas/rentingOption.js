const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    duracion: { type: Number, required: true },
    kmmax: { type: Number, required: true },
    optionprice: { type: Number, required: true },
    carprofile: {type: mongoose.Schema.Types.ObjectId, ref:'CarProfile', required: true}
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);



exports.RentingOptionSchema = schema;
