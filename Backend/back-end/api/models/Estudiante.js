/**
 * Estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres_estudiante: {
      type: 'string',
      required: true
    },

    apellidos_estudiante: {
      type: 'string',
      required: true
    },

    fecha_nacimiento_estudiante: {
      type: 'string',
      required: true
    },

    semestre_actual_estudiante: {
      type: 'number',
      required: true
    },

    graduado: {
      type: 'boolean',
      required: true
    },

    //Relation con tabla materia
    materiasFk: {
      collection: 'materia',
      via: 'estudiantefk'
    },

    //Relation con tabla usuarios
    usuariofk: {
      model: 'usuario'
    },

  },

};

