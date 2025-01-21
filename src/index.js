// src/index.js
const app = require('./app');
const connectDB = require('./db'); // <-- el archivo que creamos

const port = process.env.PORT || 5000;

// 1. Primero conectar a Mongo
connectDB().then(() => {
  // 2. Luego arrancar el server
  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
});
