const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    version: { type: String, required: true, unique: true },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
      required: true
    },
    color: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color',
        required: true
      }
    ],
    fuel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fuel',
        required: true
      }
    ],
    transmision: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transmision',
        required: true
      }
    ],
    motor: { type: Number, required: true },
    displacement: { type: Number, required: true },
    ecomark: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EcoMark',
      required: true
    },
    emission: { type: Number, required: true },
    comsumption: { type: Number, required: true },
    doors: { type: Number, required: true },
    dimensionsheight: { type: Number, required: true },
    dimensionswidth: { type: Number, required: true },
    dimensionslength: { type: Number, required: true },
    trunk: { type: Number, required: true },
    technologies: [{ type: String }],
    conforts: [{ type: String }],
    securities: [{ type: String }],
    exteriors: [{ type: String }]
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

schema.index({ version: 'text' });

const CarVersion = mongoose.model('CarVersion', schema);

module.exports = CarVersion;
