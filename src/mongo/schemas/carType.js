const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    urbanita: { type: Boolean, required: true },
    suv: { type: Boolean, required: true },
    suvsmall: { type: Boolean, required: true },
    compacto: { type: Boolean, required: true },
    berlina: { type: Boolean, required: true },
    _7plazas: { type: Boolean, required: true },
    _4x4: { type: Boolean, required: true },
    furgoneta: { type: Boolean, required: true },


    // typeName: { type: String, required: true, unique: true }

  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const CarType = mongoose.model('CarType', schema);

module.exports = CarType;
