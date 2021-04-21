
const express = require('express');
const app = express();

//
const bodyParser = require('body-parser');
//creo nuevas rutas
const rutas = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//RUTAS:
//http://localhost:3000/vinos
app.get('/vinos', rutas.obtenerTodo);
//http://localhost:3000/vinos/:id
app.get('/vinos/:id', rutas.obtenerPorId);
app.post('/vinos', rutas.agregar);
app.put('/vinos/:id', rutas.editar);
app.delete('/vinos/:id', rutas.eliminar);

app.listen(3000);
console.log('Escuchando desde puerto 3000...');