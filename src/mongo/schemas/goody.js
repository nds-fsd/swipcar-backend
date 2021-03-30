const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    goody: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Goody = mongoose.model("Goody", schema);

module.exports = Goody;
