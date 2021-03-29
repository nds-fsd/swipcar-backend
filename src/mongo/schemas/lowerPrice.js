const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    lowerprice: { type: Number, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const LowerPrice = mongoose.model("LowerPrice", schema);

module.exports = LowerPrice;
