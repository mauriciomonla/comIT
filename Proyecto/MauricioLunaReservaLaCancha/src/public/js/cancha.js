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
  console.log("obtenerPuntuacion")
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
