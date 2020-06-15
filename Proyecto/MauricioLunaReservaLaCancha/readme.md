EXTENSIONES NODE:
*express: modulo utilizado para escrbir codigo del servdor de forma sencilla y profesional
*express-handlebars: motor de plantillas dentro de express, es decir, una manera de extender el html. Ya que como el html no tiene ni bucles ni condicionales, con el motor de plantillas vamos a poder hacer esto
*express-session: para crear sesiones dentro del servidor. Al ingresar el usuario se autenquique colocara su nombre y password pero al entrar en otras paginas no queremos que se vuelva a logear,con express-session podemos almacenar temporalmente sus datos en una sesion
*method-override: para extender la funcionalidad de los formularios. Como los formularios permiten enviar metodos POST y GET. Con esta extension permitiremos a os formularios enviar metodos PUT y DELETE
*mongoose: modulo que permite unir express con una base de datos (mondoDB). Es el modulo de conexion
*passport: para autenticar el usuario
*bcryptjs: modulo que aplica algoritmo a determinado string y convertirlo en un hash. Para que quede la contraseña quece difrada.
*connect-flash: enviar mensajes entre las diferentes vistas. Por ejemplo, cuando el usuario se equivoque mandariamos un msj o cuando su contraseña no cumpla con los parametros mandariamos un mensaje (tu contraseña no es segura) o cualquier mensaje que querramos en realidad
*nodemon: para reiniciar el server automaticamente tra hacer un cambio, para asi no tenesr que estar haciendolo mauelmente en cada cambio, -D=devDependencies

ARCHIVOS JS
index.js: archivo principal de toda la aplicacion
database.js: archivo principal para conectar con una base de datos

CARPETAS
*config: almacena distintos archivos. podria ir el conector a la base. Podria poner la configuracion de autenticacion.
*helpers: funciones que el servidor puede utilizar, funciones reutilizables desdes cuelquier parte, por ejemplo, generar un numero aleatorio
*models: definiremos como van a lucir los datos que queremos almacenar dentro de mongo. Los en nuestro caso, los deatos de las canchas y de las reservas. TAmben definimos el usuario con sus datos(nombre, correo, contraseña, etc)
*public: insertar todos los archivos estaticos. Imagenes, fuentes, css y cualquier otro archivos que queramos enviar al servidor que se pinte en pantalla
*routes: sirve para crear las URLs o las rutas de nuestro servidor
*view: almacena todos los archivos que enviaremos al navegador, es decir todas las vistas HTML


En las vistas usamos
bootstrap
https://getbootstrap.com/
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
