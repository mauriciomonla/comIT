EXTENSIONES NODE:
*express: modulo utilizado para escrbir codigo del servdor de forma sencilla y profesional
*express-handlebars: motor de plantillas dentro de express, es decir, una manera de extender el html. Ya que como el html no tiene ni bucles ni condicionales, con el motor de plantillas vamos a poder hacer esto
*express-session: para crear sesiones dentro del servidor. Al ingresar el usuario se autenquique colocara su nombre y password pero al entrar en otras paginas no queremos que se vuelva a logear,con express-session podemos almacenar temporalmente sus datos en una sesion
*method-override: para extender la funcionalidad de los formularios. Como los formularios permiten enviar metodos POST y GET. Con esta extension permitiremos a os formularios enviar metodos PUT y DELETE
*mongoose: modulo que permite unir express con una base de datos (mondoDB). Es el modulo de conexion
*passport: para autenticar el usuario
*bcryptjs: modulo que aplica algoritmo a determinado string y convertirlo en un hash. Para que quede la contraseña quece difrada.
*connect-flash: enviar mensajes entre las diferentes vistas. Por ejemplo, cuando el usuario se equivoque mandariamos un msj o cuando su contraseña no cumpla con los parametros mandariamos un mensaje (tu contraseña no es segura) o cualquier mensaje que querramos en realidad


ARCHIVOS JS
index.js
