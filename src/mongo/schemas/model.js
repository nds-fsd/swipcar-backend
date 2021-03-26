const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    modelname: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Model = mongoose.model("Model", schema);

module.exports = Model;
