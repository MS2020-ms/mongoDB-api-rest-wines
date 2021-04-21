### Abrir:
>npm install
>mongod
>node app.js
navegador: http://localhost:3000/vinos
Postman como gestor de peticiones

REST API:
REST -> Operaciones o metodos GET, POST, PUT, DELETE. REST siempre se manipulan a partir de una URI
### Inicio
- instalar NodeJs, MongoDB, Robo3T (Robomongo), Postman
- si ERROR editar path en variables de entorno
- primero: >mongod (diablo de mongo) !!!
- segundo: abrir robo3T
  connect (port 27017)
  create database (collections = tablas - documentos = filas)
  crear nueva coleccion
  crear nuevo documento
# sobre directorio de proyecto
- >npm init (crea archivo package.json)
- >npm install express --save (framework para node)
- >npm install mongoose --save (xa usar mongodb desde node)
- creo nuevo archivo app.js
- ir app.js
- >node app.js
- ir navegado localhost:3000
- >npm install body-parser
- >node app.js

- creo nueva carpeta: routes y nuevo archivo: routes.js

- ir Postman
  crear ruta: getAll, getById, delete