"use strict";
// var router = require('./routes')
var express = require("express");
var app = express();
var characters = require("./routes/index.js");
// Acuérdense de agregar su router o cualquier middleware que necesiten acá.
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(characters);
// app.use(router)

// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent)
  app.listen(PORT, () => console.log("Servidor levantado en el puerto", PORT));

// Esto es solo para testear mas fácil
module.exports = app;
