const express = require("express");
const router = express.Router();

//const Reserva = require("../models/Reserva"); //A partir de Reserva va mos a ahcer todas las consultas a la bse
const { Schema, model } = require("mongoose");

//VAmos a definir como van a guardarse las reservas de las cnchas, no me andaba desde la carpeta MODELS, lo puse acá
const ReservaSchema = new Schema({
  nombreCliente: { type: String, required: true },
  telefonoCliente: { type: String, required: true },
  nombreCancha: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, requiredd: true },
  comentario: { type: String, required: false },
  date: { type: Date, default: Date.now },
});
const Reserva = model("Reserva", ReservaSchema);

console.log("Estoy en la carpeta routes canchas");

router.post("/canchas/nuevaReserva", async (req, res) => {
  console.log("posteo de reserva");
  console.log(req.body);
  // obtener por separada cada unos de los campos del formulario
  const {
    nombreCliente,
    telefonoCliente,
    nombreCancha,
    fecha,
    hora,
    comentario,
  } = req.body;
  // console.log(
  //   nombreCliente,
  //   telefonoCliente,
  //   nombreCancha,
  //   fecha,
  //   hora,
  //   comentario
  // );
  //Validacion de campos
  const errors = [];
  if (!nombreCliente) {
    errors.push({ text: "Por favor ingrese su nombre" });
  }
  if (!nombreCancha) {
    errors.push({ text: "Por favor elija una cancha" });
  }
  if (!fecha || !hora) {
    errors.push({ text: "Por favor elija una fecha y una hora" });
  }
  if (errors.length > 0) {
    console.log("CAMPOS VACIOS");
    // console.log(errors);
    res.render("canchas/nuevaReserva", {
      errors,
      nombreCancha,
      nombreCliente,
      fecha,
      hora,
    });
  } else {
    //instanciamos la "clase" reserva de nuestro modelo
    const nvaReserva = new Reserva({
      nombreCliente,
      telefonoCliente,
      nombreCancha,
      fecha,
      hora,
      comentario,
    });
    console.log(nvaReserva);
    //lo hacemos sincronico porque no sabemos cuanto va a demorar el insert en la base

    await nvaReserva.save();
    res.redirect("/canchas");
    // res.send("OK POST");
  }
});

//consultar los datos de la base
router.get("/canchas", async (req, res) => {
  console.log("Router listado de reservas");
  // res.send("Canchas de la base de datos");
  //Obtngo los datos de la base y los rdeno por fecha de creacion
  // const reservas = await Reserva.find().sort({date:'desc'});
  // console.log("---------------------");
  // console.log(reservas);
  // console.log("---------------------");
  // res.render("canchas/reservas", { reservas });

  await Reserva.find()
    .sort({ date: "desc" })
    .then((documentos) => {
      const contexto = {
        reservas: documentos.map((documento) => {
          return {
            nombreCliente: documento.nombreCliente,
            nombreCancha: documento.nombreCancha,
            fecha: documento.fecha,
            hora: documento.hora,
            comentario: documento.comentario,
            _id: documento._id
          };
        }),
      };
      res.render("canchas/reservas", {
        reservas: contexto.reservas,
      });
    });
});

router.get("/canchas/nuevaReserva", (req, res) => {
  res.render("canchas/nuevaReserva");
});

router.get("/canchasInsertarListado", (req, res) => {
  console.log("Router listado de canchasssssssss");
  ////ELIMINAR DESDE ACAAAAAAAAAAA
  var Cancha = function (
    id,
    nombre,
    suelo,
    barrio,
    horarios,
    reservas,
    parrilla,
    imagen,
    calificaciones
  ) {
    this.id = id;
    this.nombre = nombre;
    this.suelo = suelo;
    this.barrio = barrio;
    this.horarios = horarios;
    this.reservas = reservas;
    this.parrilla = parrilla;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
  };

  Cancha.prototype.reservarHorario = function (horarioReservado) {
    console.log("reservarHorario");
    this.horarios = this.horarios.filter(
      (horario) => horario != horarioReservado
    );
    this.reservas.push(horarioReservado);
  };

  Cancha.prototype.calificar = function (nuevaCalificacion) {
    console.log("calificar");
    if (
      Number.isInteger(nuevaCalificacion) &&
      nuevaCalificacion > 0 &&
      nuevaCalificacion <= 10
    ) {
      this.calificaciones.push(nuevaCalificacion);
    }
  };

  Cancha.prototype.obtenerPuntuacion = function () {
    console.log("obtenerPuntuacion");
    if (this.calificaciones.length === 0) {
      return 0;
    } else {
      return parseFloat(promedio(this.calificaciones));
    }
  };

  var sumatoria = function (arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  };

  var promedio = function (arreglo) {
    return (sumatoria(arreglo) / arreglo.length).toFixed(2);
  };

  //******************************************************** */

  var ListadoCanchas = function (canchas) {
    console.log("ListadoCanchas");
    this.canchas = canchas;
  };

  ListadoCanchas.prototype.reservarUnHorario = function (id, horario) {
    console.log("reservarUnHorario");
    let cancha = this.buscarCancha(id);
    cancha.reservarHorario(horario);
  };

  ListadoCanchas.prototype.calificarCancha = function (id, calificacion) {
    console.log("calificarCancha");
    let cancha = this.buscarCancha(id);
    console.log(cancha);
    cancha.calificar(calificacion);
  };

  ListadoCanchas.prototype.buscarCancha = function (id) {
    console.log("buscarCancha");
    let canchaEncontrada = this.canchas.find((element) => element.id === id);
    if (canchaEncontrada) {
      return canchaEncontrada;
    } else {
      return "No se ha encontrado ningún Cancha";
    }
  };

  ListadoCanchas.prototype.obtenerBarrios = function () {
    console.log("obtenerBarrios");
    let barrios = this.canchas.map((element) => element.barrio);
    let barriosFiltrados = filtroRepetidos(barrios);
    return barriosFiltrados.sort();
  };

  ListadoCanchas.prototype.obtenerParri = function () {
    console.log("obtenerParri");
    let parrilla = this.canchas.map((element) => element.parrilla);
    let parrillaFiltrados = filtroRepetidos(parrilla);
    return parrillaFiltrados.sort();
  };

  ListadoCanchas.prototype.obtenerSuelos = function () {
    console.log("obtenerSuelos");
    let suelos = this.canchas.map((element) => element.suelo);
    let suelosFiltrados = filtroRepetidos(suelos);
    return suelosFiltrados;
  };

  ListadoCanchas.prototype.obtenerHorarios = function () {
    console.log("obtenerHorarios");
    let arregloHorarios = this.canchas.map((element) => element.horarios);
    let horarios = [];
    arregloHorarios.forEach((element) =>
      element.forEach((hora) => horarios.push(hora))
    );
    let horariosFiltrados = filtroRepetidos(horarios);
    return horariosFiltrados;
  };

  ListadoCanchas.prototype.obtenerCanchas = function (
    filtroSuelo,
    filtroBarrio,
    filtrHorario,
    filtroParri
  ) {
    console.log("obtenerCanchas");
    console.log(`Filtro Barrio ${filtroBarrio}`);
    console.log(`Filtro Suelo ${filtroSuelo}`);
    console.log(`Filtro Horario ${filtrHorario}`);
    console.log(`Filtro Parri ${filtroParri}`);
    console.log(this.canchas);
    let canchasFiltradas = this.canchas;
    if (filtroSuelo !== null) {
      console.log("Filtro por Suelo");
      canchasFiltradas = canchasFiltradas.filter(
        (cancha) => cancha.suelo == filtroSuelo
      );
    }
    if (filtroBarrio !== null) {
      console.log("Filtro por Barrio");
      canchasFiltradas = canchasFiltradas.filter(
        (cancha) => cancha.barrio == filtroBarrio
      );
    }
    if (filtrHorario !== null) {
      console.log("Filtro por Horario");
      canchasFiltradas = canchasFiltradas.filter((cancha) =>
        cancha.horarios.some((horario) => horario == filtrHorario)
      );
    }
    if (filtroParri !== null) {
      console.log("Filtro por Parrilla");
      canchasFiltradas = canchasFiltradas.filter(
        (cancha) => cancha.parrilla == filtroParri
      );
    }
    return canchasFiltradas;
  };

  var filtroRepetidos = function (arreglo) {
    var arregloFiltrado = arreglo.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    return arregloFiltrado;
  };

  var listadoDeCanchas = [
    new Cancha(
      1,
      "La Bombonera",
      "Pasto",
      "Villa Crespo",
      ["13:00", "15:30", "18:00"],
      [],
      "NO",
      "../img/Bombonera.jpg",
      [6, 7, 9, 10, 5]
    ),
    new Cancha(
      2,
      "Camp Nou",
      "Pasto",
      "Palermo",
      ["15:00", "14:30", "12:30"],
      [],
      "NO",
      "../img/CampNou.jpg",
      [7, 7, 3, 9, 7]
    ),
    new Cancha(
      3,
      "Wembley",
      "Pasto",
      "Almagro",
      ["11:30", "12:00", "22:30"],
      [],
      "NO",
      "../img/Wembley.jpg",
      [5, 8, 4, 9, 9]
    ),
    new Cancha(
      4,
      "Estadio Azteca",
      "Pasto",
      "Villa Crespo",
      ["12:00", "15:00", "17:30"],
      [],
      "NO",
      "../img/EstadioAzteca.jpg",
      [8, 9, 9, 4, 6, 7]
    ),
    new Cancha(
      5,
      "San Siro",
      "Cemento",
      "Almagro",
      ["12:00", "13:30", "16:00"],
      [],
      "NO",
      "../img/SanSiro.jpg",
      [8, 3, 9, 5, 6, 7]
    ),
    new Cancha(
      6,
      "Maracaná",
      "Cemento",
      "Almagro",
      ["17:00", "19:00", "20:30"],
      [],
      "SI",
      "../img/Maracana.jpg",
      [8, 3, 2, 1, 8, 7]
    ),
    new Cancha(
      7,
      "Signal Iduna Park",
      "Cemento",
      "Boedo",
      ["13:00", "15:30", "18:00"],
      [],
      "SI",
      "../img/SignalIdunaPark.jpg",
      [7, 7, 7, 7, 3, 9]
    ),
    new Cancha(
      8,
      "Santiago Bernabéu",
      "Cemento",
      "Belgrano",
      ["14:30", "15:30", "19:00"],
      [],
      "SI",
      "../img/SantiagoBernabeu.jpg",
      [4, 7, 9, 8, 10]
    ),
    new Cancha(
      9,
      "Old Trafford",
      "Sintetico",
      "Belgrano",
      ["16:00", "18:00", "21:30"],
      [],
      "NO",
      "../img/OldTrafford.jpg",
      [8, 8, 7, 7, 7, 7]
    ),
    new Cancha(
      10,
      "Allianz Arena",
      "Sintetico",
      "Palermo",
      ["12:00", "13:00", "14:30"],
      [],
      "NO",
      "../img/AllianzArena.jpg",
      [9, 4, 6, 5, 6]
    ),
    new Cancha(
      11,
      "Celtic Park",
      "Sintetico",
      "Belgrano",
      ["12:00", "15:00", "17:30"],
      [],
      "SI",
      "../img/CelticPark.jpg",
      [9, 8, 5, 2, 9]
    ),
    new Cancha(
      12,
      "Estadio Da Luz",
      "Sintetico",
      "Villa Crespo",
      ["12:00", "15:00", "17:30"],
      [],
      "NO",
      "../img/EstadioDaLuz.jpg",
      [8, 1, 4, 5, 5, 7]
    ),
    new Cancha(
      13,
      "Amsterdam Arena",
      "Pasto",
      "Villa Crespo",
      ["17:00", "18:00", "19:30"],
      [],
      "SI",
      "../img/AmsterdamArena.jpg",
      [6, 9, 7, 6, 7]
    ),
    new Cancha(
      14,
      "Stade Velodrome",
      "Sintetico",
      "Villa Crespo",
      ["17:00", "19:00", "22:30"],
      [],
      "NO",
      "../img/StadeVelodrome.jpg",
      [8, 8, 8, 8, 5, 7]
    ),
    new Cancha(
      15,
      "Azadi Stadium",
      "Cemento",
      "Villa Crespo",
      ["14:30", "16:30", "19:00"],
      [],
      "SI",
      "../img/AzadiStadium.jpg",
      [9, 8, 5, 5, 9]
    ),
  ];

  var listadoCanchas = new ListadoCanchas(listadoDeCanchas);

  const { Schema, model } = require("mongoose");
  const CanchaSchema = new Schema({
    barrio: { type: String, required: true },
    calificaciones: { type: Array, required: true },
    horarios: { type: Array, required: true },
    id: { type: String, required: true },
    imagen: { type: String, requiredd: true },
    nombre: { type: String, required: false },
    parrilla: { type: String, required: false },
    reservas: { type: Array, required: false },
    suelo: { type: String, required: false },
    date: { type: Date, default: Date.now },
  });
  const DocCancha = model("DocCancha", CanchaSchema);

  //const guardarDB = function
  //()=>(listadoCanchas) {
  //console.log(element);
  listadoCanchas.canchas.forEach((element) => {
    // console.log(element);
    var barrio = element.barrio;
    var calificaciones = element.calificaciones;
    var horarios = element.horarios;
    var id = element.id;
    var imagen = element.imagen;
    var nombre = element.nombre;
    var parrilla = element.parrilla;
    var reservas = element.reservas;
    var suelo = element.suelo;

    const nvaCancha = new DocCancha({
      barrio,
      calificaciones,
      horarios,
      id,
      imagen,
      nombre,
      parrilla,
      reservas,
      suelo,
    });

    console.log(nvaCancha);
    nvaCancha.save();
  });
  res.send("Insert OK");
  //};////ELIMINAR HASTA ACAAAAAAAAAAA
});

router.get("/canchas/listaCanchas", (req, res) => {
  res.render("canchas/listaCanchas");
});

router.post("/canchas/eliminar/:id", async(req, res) => {
  console.log(req.params.id);
  await Reserva.findByIdAndDelete(req.params.id);
  //res.send("OK delete");
  res.redirect("/canchas");
});

module.exports = router;
