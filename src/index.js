// src/index.js
const connectDB = require('./db');
const app = require('./app');

// Conectamos la DB antes de exportar
connectDB().then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch((err) => {
  console.error('Error conectando a MongoDB', err);
});

// ¡No uses app.listen en un serverless!
// Solo exporta el app:
module.exports = app;
