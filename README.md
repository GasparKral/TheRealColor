# The Real Color

Una Aplicación Web para generar paletas de colores y exportarlas, como base del programa se utiliza el stack MERM:

* React: FrameWorks para frontend, es una librería de JavaScript que usa JSX para poder generar código html.
* Express: FrameWork backend que se encargará de gestionar las peticiones del servidor y la conexión con la base de datos, su lenguaje es JavaScript.
* MongoDb: Base de datos no relacional en la que almacenará los usuarios, su cuentas, y las paletas de colores que guarden.
* NodeJS: como entorno de Ejecución

Librerías auxiliares:

* React-Router-Dom: libreria de react, que permite la paginación de la SPA.
* Framer-motion: librería de JavaScript que se encarga de gestionar animaciones.
* Color: pequeña librería de JavaScript que permite la conversión de tipos de colores entre HSL, rgb,hex,tagetName.
* TailwindCSS: Librería externa que crea utility clases para la gestión directa de los estilos de los componentes.
* UseDebounce: librería que hacer debounce a un estado de react, en el caso se usar para la petición de la API de Colors.
* UseHooks: librería de hooks personalizados listos para usar.

# La extructura de la web constará de los siguientes components:

El area inicial estará compuesta por una estructura que genera paletas de colores tomando como valor inicial un color aleatorio generado entre unos intervalos, un formulario que permitirá la gestion de las paletas de colores, la web constará con local storage para guardas la última paleta en la que estuviera trabajando el usuario. También constará con un popover para la gestión de usuario, desde el logeo o registro, al acceso de las distintas páginas.

Area de Usuario donde contará con los distintos espacios de:
- Gestión de la información de usuarios
- Gestion de la privacidad
- Gestión de plan de usuario
- Gestión de las paletas anteriormente creadas[las cuales constarán con la opción de ser exportadas tanto para CSS normal como para TailwindCSS]
- La opcción de borrar la cuenta, o camibiar datos especificos con referencia a la cuenta.

La pestaña About que explica toda la pagina web.