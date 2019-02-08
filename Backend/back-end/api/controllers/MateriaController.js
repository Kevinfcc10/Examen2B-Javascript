/**
 * MateriaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  crearMateria: async function (req,res) {
    const parametros = req.allParams();

    var materiaCreada = await Materia.create(
      {
        nombre_materia: parametros.nombre,
        código_materia: parametros.codigo,
        descripcion_materia: parametros.descripcion,
        activo_materia: parametros.activo,
        fecha_creacion_materia: parametros.creacion,
        numero_horas_por_semana: parametros.horas,
        estudiantefk: parametros.estudiante,
      }
    ).fetch();

    return res.ok(materiaCreada);
  },


  agregarEvento: async function (req, res) {

    const param = req.allParams();
    await Materia.addToCollection(param.idMateria, 'eventofk').members([param.idEvento]);
    return res.ok('Evento agregado exitosamente');
  },


  buscarMateria: async function (req, res) {
    const param = req.allParams();

    var materiaEncontrada = await  Materia.find({
      id: param.id
    }).populate('eventofk');

    console.log(materiaEncontrada.id)
    return res.ok(materiaEncontrada);
  },

  buscarMateriaId: async function (req, res) {
    const param = req.allParams();

    var materiaEncontrada = await  Materia.find({
      id: param.id
    })

    return res.ok(materiaEncontrada);
  },

  actualizarMateria: async function (req,res){
    const param = req.allParams();

    var materiaActualizada = await Materia.update({id:param.id}).set({
      nombre_materia: param.nombre,
      código_materia: param.codigo,
      descripcion_materia: param.descripcion,
      activo_materia: param.activo,
      fecha_creacion_materia: param.creacion,
      numero_horas_por_semana: param.horas,
      estudiantefk: param.estudiante,
    }).fetch();

    console.log(materiaActualizada.id)
    return res.ok('estudiante actualizado');

  },

  borrarMateria: async function (req, res){
    const param = req.allParams();

    var materiaEliminada = await Materia.destroy({id: param.id}).fetch();
    await Materia.removeFromCollection(param.id, 'eventofk').members([1,2,3,4,5,6]);

    console.log(materiaEliminada)
    return res.ok('materia eliminado');
  },


};

