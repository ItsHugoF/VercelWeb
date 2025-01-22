// src/app.js

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const middlewares = require("./middlewares");

// Rutas
const listarUsuarios = require("./routes/listarUsuarios");
const listarUsuarioId = require("./routes/listarUsuarioId");
const crearUsuario = require("./routes/crearUsuario");

const app = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
      },
    },
  })
);
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde src/web
app.use(express.static(path.join(__dirname, "web")));

// Rutas principales con prefijo /api
app.use("/api/alumnos", listarUsuarios);
app.use("/api/alumnos", listarUsuarioId);
app.use("/api/agregarAlumno", crearUsuario);

app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de VercelWeb!');
});

// Middlewares de error
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
