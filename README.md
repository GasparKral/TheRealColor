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

