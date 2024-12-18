const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: String }, // Usamos _id como el facturapiId
    Name: { type: String, required: true },
    email: { type: String, required: true },
    Phone: { type: String, required: true },
}, { _id: false }); // Desactiva la generación automática de _id

const User = mongoose.model('User', userSchema);
module.exports = User;