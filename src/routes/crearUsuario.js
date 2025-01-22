// src/routes/crearUsuario.js
const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, telefono } = req.body;
    if (!nombre || !apellido || !telefono) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios: nombre, apellido, telefono",
      });
    }

    // obtener el último ID para continuar
    const ultimoAlumno = await Alumno.findOne().sort({ id: -1 }).exec();
    const proximoId = ultimoAlumno ? ultimoAlumno.id + 1 : 1;

    const nuevoAlumno = new Alumno({
      id: proximoId,
      nombre,
      apellido,
      telefono,
    });

    const alumnoGuardado = await nuevoAlumno.save();
    res.status(201).json(alumnoGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el alumno en la BD' });
  }
});

module.exports = router;
