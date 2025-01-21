// src/routes/listarUsuarioId.js
const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.get('/:id', async (req, res) => {
  try {
    // Ojo: tu 'id' en Mongoose lo guardas como Number
    // conviértelo a Number antes de buscar
    const idBuscado = Number(req.params.id);
    const alumno = await Alumno.findOne({ id: idBuscado });

    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }

    res.json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el alumno' });
  }
});

module.exports = router;
