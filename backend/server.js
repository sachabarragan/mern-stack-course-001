const express = require('express');
const app = express();
const archivoDB = require('./connection'); 

app.get('/', (req, res) => {
  res.send('¡Hola, perro!');
});

app.listen(5000, () => {
  console.log('Servidor piola Express iniciado en el puerto 5000');
});
