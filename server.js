const express = require('express');
const app = express();
const PORT = 3130;

app.use(express.json());
app.use('/', require('./rutas/cuenta.rutas'));
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});