const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    sinentrada: { type: Boolean, required: true },
    asistencia: { type: Boolean, required: true },
    mantenimiento: { type: Boolean, required: true },
    averias: { type: Boolean, required: true },
    impuestos: { type: Boolean, required: true },
    neumaticos: { type: Boolean, required: true },
    preentrega: { type: Boolean, required: true },
    sustitucion: { type: Boolean, required: true },
    seguroconfranquicia: { type: Boolean, required: true },
    segurosinfranquicia: { type: Boolean, required: true },
    franquicia: { type: Number, required: true },
    goody: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Goody = mongoose.model('Goody', schema);

module.exports = Goody;
