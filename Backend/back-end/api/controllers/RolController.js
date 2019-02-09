/**
 * RolController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // registrar un nuevo rol
  crearRol: async function (req, res) {
    const parametros = req.allParams();

    var rolCreado = await Rol.create({nombre_rol:parametros.nombre_rol}).fetch();
    sails.log('Find id is:', rolCreado.id);
    return res.ok(rolCreado.id);
  },

  //obtener un rol
  getRol: async function (req, res){
    const parametros = req.allParams();

    var obtenerRol = await Rol.find({
      nombre_rol: {'startsWith': parametros.nombre_rol}
    });

    return res.ok(obtenerRol);
  },

  getAllRol: async function (req, res){

    var obtenerRol = await Rol.find();

    return res.ok(obtenerRol);
  }


};

