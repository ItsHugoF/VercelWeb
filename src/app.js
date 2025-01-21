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

app.get("/", (req, res) => {
  // Esta ruta devolverá el index.html automáticamente por el static si existe
  // Si quieres devolver un JSON, puedes hacerlo, pero el index.html está en la carpeta web.
  // Para asegurar que index.html se sirva desde el static, puedes comentarlo o quitarlo.
  // Por ahora, lo dejamos para mostrar el mensaje JSON.
  res.json({ mensaje: "🦄 🌈✨👋🌎🌍🌏✨🌈🦄" });
});

// Rutas principales
app.use("/alumnos", listarUsuarios);
app.use("/alumnos", listarUsuarioId);
app.use("/agregarAlumno", crearUsuario);

// Middlewares de error
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
