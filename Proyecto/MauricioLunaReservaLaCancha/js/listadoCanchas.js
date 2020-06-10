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
