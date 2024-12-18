const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    _id: { type: String }, // Usamos _id como el facturapiId
    cliente : { type: String, required: true },
    habitacion: { type: String, required: true },
    dtartDate: { type: String, required: true },
    endDate: { type: String, required: true },
    nights : { type: String, required: true },
    totalPrice: { type: String, required: true },
    status: { type: String, required: true },
}, { _id: false }); // Desactiva la generación automática de _id

const User = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;