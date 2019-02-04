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
  'GET /Usuario/buscar' : 'UsuarioController.buscarUsuario',
  'GET /Usuario/buscarRol' : 'UsuarioController.buscarUsuarioRol',
  'GET /Usuario/buscarEstudiante' : 'UsuarioController.buscarUsuarioMaterias',
  'PUT /Usuario/actualizar/:id': 'UsuarioController.actualizarUsuario',
  'DELETE /Usuario/borrar/:id': 'UsuarioController.borrarUsuario',

  /*Rutas para Estudiante*/
  'GET /Estudiante/buscar/:id': 'EstudianteController.buscarEstudianteMateria',
  'POST /Estudiante/crear': 'EstudianteController.crearEstudiante',
  'PUT /Estudiante/actualizar/:id': 'EstudianteController.actualizarEstudiante',
  'DELETE /Estudiante/borrar/:id': 'EstudianteController.borrarEstudiante',

  /*Rutas para Materia*/

  /*Rutas para Eventos*/
};
