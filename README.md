# Code Challenge - Origin Software

## Frontend

La aplicacion se divide en dos repositorios, uno para el frontend y otra para el backend.

Ambos repositorios se encuentran en esta cuenta de github.

La aplicacion de frontend fue desarrollada con:

- React Js
- Redux Toolkit
- Ant Design

[Frontend](https://github.com/VoskanGrigoryan/origin_software_frontend) y [Backend](https://github.com/VoskanGrigoryan/origin_software_backend)

## Paso a paso para correr la aplicaion desde el lado del frontend

1. Descargar el repositorio como zip o clonarlo en una maquina local.
2. Abrir la aplicacion con algun editor de codigo, se recomiendo Visual Studio Code.
3. Abrir la terminal y escribir el comando _npm install_, esto instalara las dependencias necesarias para correr la aplicacion.
4. Escribir el comando _npm start_, esto ejecutara un script que correra la aplicacion automaticamente.

## Una vez dentro de la aplicacion:

La app redirige automaticamente a la ruta de (http://localhost:3000/login)

<sub>Tener en cuenta que la app no avanzara sin que el backend este corriendo en paralelo</sub>

1. Llenar datos de login con las siguientes credenciales:

- usuario = demo@gmail.com
- contraseña = 123123

2.  Esto nos redirigira a la ruta de acciones. Aqui podemos agregar alguna de las acciones disponibles en el input en la parte superior de la vista. (http://localhost:3000/actions)

3.  En caso de querer eliminar alguna accion de la tabla del usuario hacer click en el boton de "delete".

4.  Cualquier ruta fuera de las previamente mencionadas redirige a una pagina generica con un error y un boton para volver a la vista principal.

## Notas:

**Del lado del frontend falta la vista de detalles de las acciones, se puede acceder mediante la ruta de (http://localhost:3000/details)**
Por complicaciones de tiempo no llegue a terminar la parte de los graficos

- Desde el lado del frontend no esta implementada la autentificacion con JWT
- Por cuestiones de tiempo la aplicacion fue armada usando la libreria Ant Design, ya que los componentes son mas completos y mas rapidos de integrar, comparado con otras opciones como Material-UI o TailwindCSS
