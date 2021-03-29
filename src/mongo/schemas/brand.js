const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    brandname: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Brand = mongoose.model("Brand", schema);

module.exports = Brand;
