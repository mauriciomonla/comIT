const { Schema, model } = require("mongoose");

//VAmos a definir como van a guardarse las reservas de las cnchas
const ReservaSchema = new Schema({
  nombreCliente: { type: String, required: true },
  telefonoCliente: { type: String, required: true },
  nombreCancha: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, requiredd: true },
  comentario: { type: String, required: false }
});
//Nombre del modelo y esquema
module.export = model("Reserva", ReservaSchema);
