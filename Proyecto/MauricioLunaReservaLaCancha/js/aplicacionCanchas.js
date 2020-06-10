var AplicacionCanchas = function (listadoCanchas) {
  console.log("AplicacionCanchas");
  console.log(listadoCanchas);
  this.listado = listadoCanchas;
  this.dibujarListado(listadoCanchas.canchas);
  this.dibujarFiltros();
  this.registrarEventos();
};

//Esta función le asigna al botón "Buscar" la función filtrarcanchas()
AplicacionCanchas.prototype.registrarEventos = function () {
  console.log("registrarEventos");
  $(".buscar").click(this.filtrarCanchas.bind(this));
};
//Esta función llama a las funciones que se encargan de cargar las opciones de los filtros
AplicacionCanchas.prototype.dibujarFiltros = function () {
  console.log("dibujarFiltros");
  this.dibujarHorarios();
  this.dibujarSuelos();
  this.dibujarBarrios();
 this.dibujarParri();
};

//Función que se encarga de dibujar todos las canchas que recibe por parámetro. Cuando hablamos de dibujar, nos referimos a crear
//los elementos HTML que permiten visualizar la canchita.
AplicacionCanchas.prototype.dibujarListado = function (canchas) {
  console.log("dibujarListado");
  var self = this;
  //Se borra el contenedor de canchas
  $(".flex").empty();
  var elementos = [];

  //Si no se recibe ninguna cancha por parámetro (porque los filtros aplicados no retornaron ningún resultado) se crea un elemento
  //que va a mostrar en el HTML el mensaje de "No se encontraron resultados".
  if (canchas.length === 0) {
    elementos.push(
      $("<span/>").attr("class", "alerta").html("No se encontraron resultados")
    );
  } else {
    //Por cada cancha, se ejecuta la función crearTarjetaDeCancha()
    canchas.forEach(function (cancha) {
      console.log(cancha);
      elementos.push(self.crearTarjetaDeCancha(cancha));
    });
  }
  //Se agrega cada elemento al contenedor de canchas
  elementos.forEach(function (elemento) {
    elemento.appendTo(".flex");
  });
};
//Dibujamos cada cancha
AplicacionCanchas.prototype.crearTarjetaDeCancha = function (cancha) {
  var self = this;
  var card = $(`
<div class="flex-item" id=${cancha.id}>
  <img class="imagen" src="${cancha.imagen}">
  <div class="informacion">
    <div class="nombre-puntuacion-container">
      <h4 class="nombre">${cancha.nombre}</h4>
      <div class="puntuacion-container">
        <span class="puntuacion">${cancha.obtenerPuntuacion()}</span>
      </div>
    </div>
    <div class="informacion-container">
      <span class="barrio">${cancha.barrio}</span>
      <span class="suelo">${cancha.suelo}</span>
      <br>
      <span class="tienParri">Tiene Parrilla:</span>
      <span class="parri">${cancha.parrilla}</span>
    </div>
  </div>
  <div class="reservas">
    <span class="reserva">¡Reserva tu lugar!</span>
    <div class="horarios-container">
    </div>
  </div>
</div>
`);

  //Buscamos el elemento que se corresponde con la puntuación y le registramos al evento click, la funcionalidad de calificar una cancha
  card.find(".puntuacion").click(function () {
    self.calificarCancha(cancha);
  });

  //Buscamos el contendor donde se van a cargar los horarios
  var contenedorHorarios = card.find(".horarios-container");

  //Por cada horario de una cancha, creamos el elemento HTML que va a mostrarlo. Además le asignamos la funcionalidad de reservar una cancha.
  cancha.horarios.sort().forEach(function (horario) {
    var nuevoHorario = $("<span/>").attr("class", "horario").html(horario);
    nuevoHorario.click(function () {
      self.reservarUnHorario(cancha, horario);
    });
    nuevoHorario.appendTo(contenedorHorarios);
  });
  return card;
};

//Esta función muestra la alerta para dar la posibilidad de calificar una cancha. La alerta que se utilizó es de la biblioteca "SweetAlert".
//En el caso de que la calificación sea válida, se ejecuta la función de calificarCancha() del listado. Luego, se busca en el HTML la cancha que
//se corresponde con el id que se está calificando y se le actualiza la puntuación
AplicacionCanchas.prototype.calificarCancha = function (cancha) {
  var self = this;
  swal("Ingrese su calificación (valor numérico entre 1 y 10) :", {
    content: "input",
  }).then((calif) => {
    var nuevaCalificacion = parseInt(calif);
    console.log(nuevaCalificacion);
    if (nuevaCalificacion >= 1 && nuevaCalificacion <= 10) {
      self.listado.calificarCancha(cancha.id, nuevaCalificacion);
      var canchaActualizar = $("#" + cancha.id);
      //console.log(canchaActualizar)
      canchaActualizar.find(".puntuacion").html(cancha.obtenerPuntuacion());
      console.log(cancha.obtenerPuntuacion());
    } else {
      swal({
        title: "Error",
        text: "Ingrese una calificación válida",
        icon: "error",
        button: "Continuar",
      });
    }
  });
};

//Esta función se encarga de enviarle un mensaje al listado para que reserve un horario de una determinada cancha
AplicacionCanchas.prototype.reservarUnHorario = function (cancha, horario) {
  this.listado.reservarUnHorario(cancha.id, horario);
  console.log(horario);

  //Se obtiene elemento que se corresponde con el id dela canhca al que se va a reservar el horario
  var canchaActualizar = $("#" + cancha.id);
  //Se busca el elemento HTML que contiene el horario que se va a sacar
  var horarioASacar = canchaActualizar.find("span:contains(" + horario + ")");
  //Se verifica si quedó algún horario disponible. En el caso de que no, se agrega el mensajde de "No hay mas horarios disponibles"
  var cantidadHorarios = canchaActualizar.find(".horario").length;
  if (cantidadHorarios === 1) {
    canchaActualizar
      .find(".reserva")
      .html("No hay más horarios disponibles 😪");
  }
  horarioASacar.remove();

  swal({
    title: "!Felicitaciones!",
    text: "Has reservado una cancha en " + cancha.nombre + " a las " + horario,
    icon: "success",
    button: "Continuar",
  });
};

//Esta función se encarga de generar las opciones del filtro de las barrioes.
AplicacionCanchas.prototype.dibujarBarrios = function () {
  console.log("dibujarBarrios");
  $("#filtro-barrio").empty();
  this.cargarOpcionDefault("filtro-barrio", "Barrio");
  this.cargarOpcionTodos("filtro-barrio");

  this.listado.obtenerBarrios().forEach(function (barrio) {
    var nuevaOpcion = $("<option/>").text(barrio).val(barrio);
    nuevaOpcion.appendTo("#filtro-barrio");
  });
};
//Esta función se encarga de generar las opciones del filtro de parrilla.
AplicacionCanchas.prototype.dibujarParri = function () {
  console.log("dibujarParri");
  $("#filtro-parri").empty();
  this.cargarOpcionDefault("filtro-parri", "Parrilla");
  this.cargarOpcionTodos("filtro-parri");

  this.listado.obtenerParri().forEach(function (parri) {
    var nuevaOpcion = $("<option/>").text(parri).val(parri);
    nuevaOpcion.appendTo("#filtro-parri");
  });
};

//Esta función se encarga de generar las opciones del filtro de suelos.
AplicacionCanchas.prototype.dibujarSuelos = function () {
  console.log("dibujarSuelos");
  $("#filtro-suelo").empty();
  this.cargarOpcionDefault("filtro-suelo", "Suelo");
  this.cargarOpcionTodos("filtro-suelo");

  this.listado.obtenerSuelos().forEach(function (suelo) {
    var nuevaOpcion = $("<option/>").text(suelo).val(suelo);
    nuevaOpcion.appendTo("#filtro-suelo");
  });
};

//Esta función se encarga de generar las opciones del filtro de horarios.
AplicacionCanchas.prototype.dibujarHorarios = function () {
  console.log("dibujarHorarios");
  $("#filtro-horario").empty();
  this.cargarOpcionDefault("filtro-horario", "Horario");
  this.cargarOpcionTodos("filtro-horario");

  this.listado.obtenerHorarios().forEach(function (horario) {
    var nuevaOpcion = $("<option/>").text(horario).val(horario);
    nuevaOpcion.appendTo("#filtro-horario");
  });
};

//Función que crea la opción default de los filtros
AplicacionCanchas.prototype.cargarOpcionDefault = function (idFiltro, defecto) {
  var opcionDefault = $("<option/>")
    .text(defecto)
    .val(0)
    .prop("disabled", true)
    .prop("selected", true);
  opcionDefault.appendTo("#" + idFiltro);
};

//Función que crea la opción "Todos" de los filtros
AplicacionCanchas.prototype.cargarOpcionTodos = function (idFiltro) {
  var opcionTodos = $("<option/>").text("Todos").val(1);
  opcionTodos.appendTo("#" + idFiltro);
};

//Función que se encarga de pedirle al listado que filtre las canchas y de actualizar el HTML con ls canchass de la búsqueda.
//Las opciones "Default" y "Todos" de los filtros, tienen como propiedad val un 1 y un 0. En el caso de que el la propiedad val de alguno
//de los filtros sea 0 o 1, se envía como filtro el valor null, para que el listado sepa que no tiene que filtrar por ese campo.
AplicacionCanchas.prototype.filtrarCanchas = function () {
  console.log("filtrarCanchas");
  if (
    $("#filtro-suelo option:selected").val() === "1" ||
    $("#filtro-suelo option:selected").val() === "0"
  ) {
    var filtroSuelo = null;
  } else {
    var filtroSuelo = $("#filtro-suelo option:selected").val();
  }

  if (
    $("#filtro-barrio option:selected").val() === "1" ||
    $("#filtro-barrio option:selected").val() === "0"
  ) {
    var filtroBarrio = null;
  } else {
    var filtroBarrio = $("#filtro-barrio option:selected").val();
  }

  if (
    $("#filtro-horario option:selected").val() === "1" ||
    $("#filtro-horario option:selected").val() === "0"
  ) {
    var filtroHorario = null;
  } else {
    var filtroHorario = $("#filtro-horario option:selected").val();
  }

  if (
    $("#filtro-parri option:selected").val() === "1" ||
    $("#filtro-parri option:selected").val() === "0"
  ) {
    var filtroParri = null;
  } else {
    var filtroParri = $("#filtro-parri option:selected").val();
  }

  var canchasFiltradas = this.listado.obtenerCanchas(
    filtroSuelo,
    filtroBarrio,
    filtroHorario,
    filtroParri
  );

  console.log(canchasFiltradas);
  this.dibujarListado(canchasFiltradas);
};

var aplicacion = new AplicacionCanchas(listadoCanchas);
