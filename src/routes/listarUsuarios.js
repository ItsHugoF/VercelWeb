// src/routes/listarUsuarios.js
const express = require('express');
const router = express.Router();

// Reemplaza la importación del array
// const alumnos = require('../data/alumnos');
const Alumno = require('../models/Alumno');

router.get('/', async (req, res) => {
  try {
    // Usamos Mongoose
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error obteniendo alumnos de la BD' });
  }
});

module.exports = router;
