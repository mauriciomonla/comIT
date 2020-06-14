const express = require("express"); //requiero express y lo guardo en una constante del mismo nombre
const path = require("path"); //modulo incluido en node para trabajar con las rutas
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");

//--------------------------------Inicializaciones--------------------------------
const app = express(); //express es una funcion, al ejecutarla retorna un objeto que sera almacenado en la constante app

//Setting: Aca configuraremos todo lo que necesitemos para el proyecto
//configuro el puerto 3000 para mi servidor si es que no existe un puerto en mi maquina local
app.set("port", process.env.PORT || 3000);
//EStablecer las vistas(archivos de handlebar). Como queremos mostrar html en la de la carpeta view. Por defecto node buscara esta carpeta.
//Como tengo mi codigo dentro de la carpeta src tengo setearsela directamtne par que no busque en todo el proyecto.
//Usaremos el metodo join de la libreria path, que permite unir directorios.
//La constante de node __dirname devuelve la ruta de donde se esta ejecutando un determinado archivo. POr ejemplo,
//si ejecuto index.js __dirname tendra el valor de /src y a esto lo concateno con views.
app.set("views", path.join(__dirname, "views"));

//Configuracion de handlebar
//primer parametro nombre del archivo de nuestras vistas, le ondremos .hbs, aunque podriamos ponerle .html
//segundo parametro ejecuto express-handelbars y le seteo sus configuraciones a las propiedades defaultLayout(archivo principal)
//layoutDir(idireccion de la carpeta layout utilizando path), partialsDir (pequeñas partes de html que podemos reutilizar en cualquier parte
//por ejemplo un formulario de contacto que queremos que se vea en todas las vistas)
//, extname (determinar que extencion tendran los archivos hbs)
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("view"), "partials"),
    extname: ".hbs",
  })
);
//configurar el motor de plantillas(vistas)
app.set("view engine", ".hbs");

//--------------------------------Middleware--------------------------------
//urlencoded:metodo de express que sirve para que cuando un formulario envie algun dato
//podamos enteneerlo, por enemplo mail y contraseña de un usuario
//extended:false, para no revicir imagnes ni nada complejo, solo datos
app.use(express.urlencoded({ extended: false }));
//methodOvveride para que los formularios envien totos metodos ademas del get y del post, como put y delete
app.use(methodOverride("__method"));
//utiliza el metodo session, con la siguientes propiedades para autenticar al usuario y guardasr sus datos temporalmente
app.use(
  session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true,
  })
);

//--------------------------------Variables globales--------------------------------

//--------------------------------Routes--------------------------------

//--------------------------------Archivos estaticos--------------------------------

//--------------------------------Server escuchando--------------------------------
app.listen(app.get("port"), () => {
  console.log("Server ecsuchando en el puerto ", app.get("port"));
});
