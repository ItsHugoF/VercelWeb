// src/models/Alumno.js
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  apellido: String,
  telefono: String,
});

module.exports = mongoose.model('Alumno', alumnoSchema);
