/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

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


  agregarRol: async function (req, res) {

    const param = req.allParams();

    var usuario = await Usuario.addToCollection(param.idUser, 'rolfk').members([param.idRol]);

    return res.ok('Rol agregado exitosamente');
  },

  buscarUsuarioRol: async function (req, res) {
    const param = req.allParams();

    var usuarioEncontrado = await  Usuario.find({
      nombre_usuario: {'startsWith': param.nombre}
    }).populate('rolfk');

    console.log(usuarioEncontrado);
    return res.ok(usuarioEncontrado);
  },

  buscarUsuarioMaterias: async function (req, res) {
    const param = req.allParams();

    var usuarioEncontrado = await  Usuario.find({
      nombre_usuario: {'startsWith': param.nombre}
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

