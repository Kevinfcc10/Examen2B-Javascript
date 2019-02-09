/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  login: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Usuario.find({
      correo_usuario: parametros.correo,
      password_usuario: parametros.password,
    }).populate('rolfk');

    const error = usuarioLogeado.length === 0;

    if (!error) {
      return res.ok(usuarioLogeado[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario Invalido'});
    }

  },

  crearUsuario: async function (req,res) {
    const parametros = req.allParams();

    var usuarioCreado = await Usuario.create(
      {
        nombre_usuario: parametros.nombre,
        correo_usuario: parametros.correo,
        password_usuario: parametros.password,
        fecha_nacimiento_usuario: parametros.nacimiento,
        rolfk: parametros.rol,
      }
    ).fetch();

    return res.ok(usuarioCreado);
  },

  borrarRol: async function (req, res) {

    const param = req.allParams();
    var usuario = await Usuario.removeFromCollection(param.idUser, 'rolfk').members([param.idRol]);
    return res.ok('Rol eliminado exitosamente');
  },

  agregarRol: async function (req, res) {

    const param = req.allParams();
    var usuario = await Usuario.addToCollection(param.idUser, 'rolfk').members([param.idRol]);
    return res.ok('Rol agregado exitosamente');
  },

  buscarUsuarioRol: async function (req, res) {
    const param = req.allParams();

    var usuarioEncontrado = await  Usuario.find({
      correo_usuario: {'startsWith': param.correo},
      password_usuario: param.pass
    }).populate('rolfk');

    console.log(usuarioEncontrado);
    return res.ok(usuarioEncontrado);
  },

  buscarUsuarios: async function (req, res){
    const param = req.allParams();
    var usuarioEncontrado = await  Usuario.find({
      nombre_usuario: {'startsWith': param.nombre_usuario},
      correo_usuario: {'startsWith' : param.correo_usuario}
    });
    return res.ok(usuarioEncontrado);
  },

  buscarUserid: async function (req, res){
    const param = req.allParams();
    var usuarioEncontrado = await  Usuario.find({
      id:param.id,
    })
    return res.ok(usuarioEncontrado);
  },

  buscarUsuarioid: async function (req, res){
    const param = req.allParams();
    var usuarioEncontrado = await  Usuario.find({
      id: param.id,
    }).populate('rolfk');
    return res.ok(usuarioEncontrado);
  },

  buscarUsuarioMaterias: async function (req, res) {
    const param = req.allParams();

    var usuarioEncontrado = await  Usuario.find({
      id: param.id
    }).populate('estudiantes');

    console.log(usuarioEncontrado);
    return res.ok(usuarioEncontrado);
  },

  actualizarUsuario: async function (req,res){
    const param = req.allParams();

    var usuarioActualizado = await Usuario.update({id:param.id}).set({
      nombre_usuario: param.nombre,
      correo_usuario: param.correo,
      password_usuario: param.password,
      fecha_nacimiento_usuario: param.nacimiento,
      rolfk: param.rol,
    }).fetch();

    console.log(usuarioActualizado.id)
    return res.ok('usuario actualizado');

  },

  borrarUsuario: async function (req, res){
    const param = req.allParams();

    var usuarioEliminado = await Usuario.destroy({id: param.id}).fetch();
    await Usuario.removeFromCollection(param.id, 'rolfk').members([1,2]);

    console.log(usuarioEliminado)
    return res.ok('usuario eliminado');
  },

};

