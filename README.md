# The Real Color
Una Aplicación Web para generar paletas de colores y exportarlas utilizando el stack MERM

## Descripción
"The Real Color" es una aplicación web diseñada para generar paletas de colores de manera intuitiva y eficiente. La base del programa utiliza el stack MERM, que incluye:

* **React**: Un framework para el frontend que utiliza JSX para generar código HTML.
* **Express**: Un framework backend encargado de gestionar las peticiones del servidor y la conexión con la base de datos, utilizando JavaScript.
* **MongoDB**: Una base de datos no relacional que almacena usuarios, cuentas y paletas de colores.
* **Node.js**: Como entorno de ejecución.
## Librerías Auxiliares
* **React-Router-Dom**: Librería de React que permite la paginación de la Single Page Application (SPA).
* **Framer-motion**: Librería de JavaScript para gestionar animaciones.
* **Color**: Pequeña librería de JavaScript que permite la conversión de tipos de colores entre HSL, RGB, HEX y tagName.
* **TailwindCSS**: Librería externa que crea clases utilitarias para la gestión directa de los estilos de los componentes.
* **UseHooks**: Librería de hooks personalizados listos para usar.
## Estructura de la Web
La aplicación consta de los siguientes componentes:

### Área Inicial
* Genera paletas de colores con un valor inicial aleatorio entre ciertos intervalos.
* Formulario para la gestión de las paletas de colores.
* Uso de Local Storage para guardar la última paleta en la que trabajó el usuario.
* Popover para la gestión de usuarios, incluyendo inicio de sesión, registro y acceso a distintas páginas.
### Área de Usuario
* Gestión de información de usuarios.
* Configuración de privacidad.
* Gestión del plan de usuario.
* Acceso a paletas previamente creadas, con opción de exportarlas tanto para CSS normal como para TailwindCSS.
* Opción para borrar la cuenta o modificar datos específicos de la cuenta.

## Metodologías que se implementan

* UseContex
* UseReducer
* Enrutado dinámico
* Feching de datos a API externa
* Uso de local storage
* Renderizado condinal
* Manejo de formularios controlado
* Gestión de Usuarios