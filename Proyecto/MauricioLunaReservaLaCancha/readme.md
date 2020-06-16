# ReservaTuCancha

_Vos encargate de dominar el esferico, que nosotros os encargamos de cuidarte la canchita_

## Descripcion 🚀

_En ReservaTuCancha te facilitamos la manera en que encuentres el cuadrilatero que mas se acomode a tus necesitades, podes buscar la cancha que mas te guste, reservarla y dejar disfrutar con tus amigos de ese momento_

### Home y Nosotros 📋

_HOME: En esta seccion describimos brevemente lo que se puede hacer con la aplicacion_

```
Busca la cancha que te quede mas cerca! podes reservarla YA!.
Sos muy pro? utiliza nuestros filtros de busqueda para elegir el suelo que mas se adapte a vos.
Te gusta el asado? Busca en nuestra lista las canchas con PARRILLA!!! mientras convertis goles se encienden las brasas!
```

_NOSOTROS: Presentacion del desarrollador y link hacia la pagina de Comunidad IT_

```
Soy un desarrollador junior que esta incursionando en el mundo del desarrollo Web.
Esta aplicacion se hizo gracias al curso brindado por comunidad IT.
```

### Lista de canchas ⚙️

_En esta seccion podes encontrar todas las canchas registradas en nuestro sitio. Cada cancha posee un nombre y una series de caracteristicas que la describen. Dichas caracteristias pueden ser aplcadas en nuestros filtros, para fecilitar la busqueda de la cancha que mas se acerque a tus necesidades_

- Filtrar por Barrio

```
Villa Crespo
Palermo
Almagro
Belgrano
Entre otros...
```

- Filtrar por Suelo

```
Pasto
Cemento
Sintetico
```

- Filtrar por Parrilla

```
Con parri
Sin parri
```

### Reservar un cancha 🔩

_Para poder reservar una cancha lo podes hacer desde el boton de navecgacion "Rservar" o tambien es posible hacerlo desde la lista de canchas disponibles_
_Una vez acá, te aparecerá un formulario para completar los datos de la reserva_

- Nombre: Nombre del titular de la reserva
- Telefono: Necesario para contactar al cliente
- Cacha: Nombre de la cancha elejida para jugar
- Dia: Dia para realizar la reserva
- Hora: Horario del encuentro
- Comentario: Podes dejaralguna sugerencia o alguna peticion especial para tu reserva

### Ver las reservas realizadas 📋

_Desde el boton "Ver reservas" podes consultar y gestionar las reservas que realizaste_

- En esta seccion veras el listado de las reservas realizadas, desde acá podes eliminar la que desees

### Eliminar una reserv## ⌨️

_A veces e complica para poder asistir a un juego, en este caso, podes eliminar la reserva que realizaste_

- Busca la reserva que queres descartar y dale click al boton ELIMINAR, esto borrara la reserva de tu lista de reservas

## Despliegue 📦

_Para descargar el proyecto_

```
git init
git clone https://github.com/mauriciomonla/comIT.git
```

## Instalación 🔧

_Para iniciar un proyecto node_

```
npm init
```

_Para instalar los modulos node_

```
npm i express
npm i express-handlebars
npm i method-override
npm i mongoose
```

_Para ejecutar el proyecto_

```
npm run dev
```

## Comandos ejecutados en la DB 📋

_Comandos mongo_

- Iniciar mongo

```
mongod
```

- Activar el cliente mongo

```
mongo
```

- Abrir la base de datos. switched to db canchas-db-app

```
use canchas-db-app
```

- Listar las colecciones de mi base

```
show collections
```

- Imprimir en consola los documentos

```
db.reservas.find().pretty()
```

- Elimina los documentos

```
db.dropDatabase()
```

## Construido con 🛠️

_Las tecnologias que se utilizaron para crear el proyecto_

- [nodeJs](https://nodejs.org/es/) - Entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
- [express](https://www.npmjs.com/package/express) - Modulo utilizado para escrbir codigo del servdor de forma sencilla y profesional
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Motor de plantillas dentro de express, es decir, una manera de extender el html. Ya que como el html no tiene ni bucles ni condicionales, con el motor de plantillas vamos a poder hacer esto.
- [method-override](https://www.npmjs.com/package/@whook/method-override) - Libreria para extender la funcionalidad de los formularios. Como los formularios permiten enviar metodos POST y GET. Con esta extension permitiremos a os formularios enviar metodos PUT y DELETE
- [mongoose](https://www.npmjs.com/package/mongoose) - Modulo que permite unir express con una base de datos (mondoDB). Es el modulo de conexion
- [nodemon](https://www.npmjs.com/search?q=nodemon) - tilizado para reiniciar el server automaticamente tra hacer un cambio, para asi no tenesr que estar haciendolo mauelmente en cada cambio, -D=devDependencies
- [mongodb](https://www.mongodb.com/) - La base de datos para
  aplicaciones
- [bootstrap](https://getbootstrap.com/) - Estilado de componentes

## IDEs 📋

_Las herramientas que se utilizaron para crear el proyecto:_

- [Visual Studio Code](https://code.visualstudio.com/) - IDE

## Archivos 🖇️

- index.js: archivo principal de toda la aplicacion
- database.js: archivo principal para conectar con una base de datos

## Carpetas 🖇️

- \*models: Se define como van a lucir los datos que queremos almacenar dentro de mongo. En nuestro caso, los datos de las canchas y de las reservas.
- \*public: insertar todos los archivos estaticos. Imagenes, fuentes, css y cualquier otro archivos que queramos enviar al servidor para que se pinte en pantalla
- \*routes: sirve para crear las URLs o las rutas de nuestro servidor
- \*view: almacena todos los archivos que enviaremos al navegador, es decir todas las vistas HTML

## Wiki 📖

Enlaces consultados
[Colores](https://uigradients.com/#Dawn)
[Imagenes](https://www.infobae.com/2015/11/13/1769482-los-15-mejores-estadios-futbol-del-mundo/)
[stackoverflow](https://es.stackoverflow.com/questions/31753/enviar-un-json-por-post-con-javascript)
[stackoverflow](https://stackoverflow.com/questions/41496571/)
[bootstrap](https://getbootstrap.com/docs/4.0/components/forms/#form-controls)
[bootstrap](https://getbootstrap.com/docs/4.0/components/dropdowns/#single-button-dropdowns)
[bootstrap](https://getbootstrap.com/docs/4.0/components/alerts/)
[bootstrap](https://getbootstrap.com/docs/4.0/content/tables/#striped-rows)
[bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/)
[git](//gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)

## Versionado 📌

Usamos [GIT](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/mauriciomonla/comIT/tree/master/Proyecto/MauricioLunaReservaLaCancha).

## Autor ✒️

- **Mauricio Luna** - _Trabajo Inicial_ - [mauriciomonla](https://github.com/mauriciomonla)
- **Mauricio Luna** - _Documentación_ - [mauriciomonla](https://github.com/mauriciomonla)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia "Sanjuaninos en el software"

## GRACIAS! 🎁

- ComunidadIT 📢
- Profe Richard te debo una cerveza 🍺 por tan grandioso laburo que hiciste con nosotros.
- A pesar de la cuarentena se pudo laburar 🤓.
- Viva la patria!
