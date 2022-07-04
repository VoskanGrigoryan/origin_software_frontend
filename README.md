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
4. La aplicacion requiere de un archivo .env con variables de entormo que se adjutara junto con el proyecto.
5. Escribir el comando _npm start_, esto ejecutara un script que correra la aplicacion automaticamente.

## Una vez dentro de la aplicacion:

La app redirige automaticamente a la ruta de (http://localhost:3000/login)

<sub>Tener en cuenta que la app no avanzara sin que el backend este corriendo en paralelo</sub>

1. Llenar datos de login con las siguientes credenciales:

- usuario = demo@gmail.com
- contraseña = 123123

2.  Esto nos redirigira a la ruta de acciones. Aqui podemos agregar alguna de las acciones disponibles en el input en la parte superior de la vista. (http://localhost:3000/actions)

3.  En la tabla de acciones hay dos botones, uno para visualizar la accion en particular a fondo y otro para eliminar la accion.

4.  En caso de querer eliminar alguna accion de la tabla hacer click en el boton de "delete".

5.  Cualquier ruta fuera de las previamente mencionadas redirige a una pagina generica con un error y un boton para volver a la vista principal.

6.  Para ver una accion en detalle hacer click en botton "More" deseado, esto llevara a la vista de detalles (http://localhost:3000/details)

7.  Seleccionar la opcion de ver datos en tiempo real o de forma historica.
    <sub>No es posible seleccionar ambas opciones, la busqueda se realiza mediante un solo parametro.</sub>

8.  Para generar el grafico presionar boton "Graph", el cual realizara un llamado a un servicio en el archivo (/services/detail.services.js) el cual recibe como parametro una fecha inicial, final y un intervalo.

9.  Si se selecciona la opcion historica la aplicacion setea un intervalo automaticamente de 5 minutos.

## Notas:
