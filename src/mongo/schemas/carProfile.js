const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    version: { type: String, required: true },
    // carcard: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String, required: true },
    puertas: { type: Number, required: true },
    dimensiones: { type: String, required: true },
    transmision: { type: String, required: true },
    motor: { type: Number, required: true },
    cilindrada: { type: String, required: true },
    consumo: { type: Number, required: true },
    distintivo: { type: String, required: true },
    emision: { type: Number, required: true },
    /* destacequips: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    rentingoptions: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    rentinggoodies: [{ type: mongoose.Schema.Types.ObjectId, required: true }], */
    tecnologia: { type: String, required: true },
    confort: { type: String, required: true },
    seguridad: { type: String, required: true },
    exterior: { type: String, required: true }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

const CarProfile = mongoose.model('CarProfile', schema);

module.exports = CarProfile;