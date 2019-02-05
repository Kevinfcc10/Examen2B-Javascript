/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  '/': { view: 'pages/homepage' },


  /*Rutas para roles*/
  'POST /Rol/crear' : 'RolController.crearRol',
  'GET /Rol/buscar' : 'RolController.getRol',

  /*Rutas para Usuario*/
  'POST /Usuario/crear': 'UsuarioController.crearUsuario',
  'POST /Usuario/crearUsuarioRol': 'UsuarioController.agregarRol',
  'GET /Usuario/buscarRol' : 'UsuarioController.buscarUsuarioRol',
  'GET /Usuario/buscarEstudiante' : 'UsuarioController.buscarUsuarioMaterias',
  'PUT /Usuario/:id': 'UsuarioController.actualizarUsuario',
  'DELETE /Usuario/:id': 'UsuarioController.borrarUsuario',

  /*Rutas para Estudiante*/
  'GET /Estudiante/:id': 'EstudianteController.buscarEstudianteMateria',
  'POST /Estudiante/': 'EstudianteController.crearEstudiante',
  'PUT /Estudiante/:id': 'EstudianteController.actualizarEstudiante',
  'DELETE /Estudiante/:id': 'EstudianteController.borrarEstudiante',

  /*Rutas para Materia*/
  'GET /Materia/:id': 'MateriaController.buscarMateria',
  'POST /Materia/': 'MateriaController.crearMateria',
  'POST /Materia/agregarEvento': 'MateriaController.agregarEvento',
  'PUT /Materia/:id': 'MateriaController.actualizarMateria',
  'DELETE /Materia/:id': 'MateriaController.borrarMateria',

  /*Rutas para Eventos*/
  'GET /Evento/:id':'EventoController.buscarEvento',
  'POST /Evento/':'EventoController.crearEvento',


};
