const mongoose = require("mongoose");

//Para el funcionamiento de la libreria
mongoose
  .connect("mongodb://localhost/canchas-db-app", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Base de datos conectada'))
  .catch((err) => console.log(err));
