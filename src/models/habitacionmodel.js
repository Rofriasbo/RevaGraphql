const mongoose = require('mongoose');

const habitacionSchema = new mongoose.Schema({
    _id: { type: String }, // Usamos _id como el facturapiId
    Name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    features: { type: String, required: true },
    availability: { type: boolean, required: true },
}, { _id: false }); // Desactiva la generación automática de _id

const User = mongoose.model('Habitacion', habitacionSchema);
module.exports = Habitacion;