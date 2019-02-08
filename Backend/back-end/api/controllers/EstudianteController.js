/**
 * EstudianteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  crearEstudiante: async function (req,res) {
    const parametros = req.allParams();

    var estudianteCreado = await Estudiante.create(
      {
        nombres_estudiante: parametros.nombres,
          apellidos_estudiante: parametros.apellidos,
        fecha_nacimiento_estudiante: parametros.nacimiento,
        semestre_actual_estudiante: parametros.semestre,
        graduado: parametros.graduado,
        usuariofk: parametros.usuario,
      }
    ).fetch();

    return res.ok(estudianteCreado);
  },


  buscarEstudianteMateria: async function (req, res) {
    const param = req.allParams();

    var estudianteEncontrado = await  Estudiante.find({
      id: param.id
    }).populate('materiasFk');

    console.log(estudianteEncontrado.id)
    return res.ok(estudianteEncontrado);
  },


  actualizarEstudiante: async function (req,res){
    const param = req.allParams();

    var estudianteActualizado = await Estudiante.update({id:param.id}).set({
      nombres_estudiante: param.nombres,
      apellidos_estudiante: param.apellidos,
      fecha_nacimiento_estudiante: param.nacimiento,
      semestre_actual_estudiante: param.semestre,
      graduado: param.graduado,
      usuariofk: param.usuario,
    }).fetch();

    console.log(estudianteActualizado.id)
    return res.ok('estudiante actualizado');

  },

  borrarEstudiante: async function (req, res){
    const param = req.allParams();

    var estudianteEliminado = await Estudiante.destroy({id: param.id}).fetch();
    //await Estudiante.removeFromCollection(param.id, 'materiasFk').members([1,2]);

    console.log(estudianteEliminado)
    return res.ok('estudiante eliminado');
  },


};

