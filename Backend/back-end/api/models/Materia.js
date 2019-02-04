/**
 * Materia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {



    nombre_materia: {
      type: 'string',
      required: true
    },

    código_materia: {
      type: 'string',
      required: true
    },

    descripcion_materia: {
      type: 'string',
      required: true
    },

    activo_materia: {
      type: 'boolean',
      required: true
    },

    fecha_creacion_materia: {
      type: 'string',
      required: true
    },

    numero_horas_por_semana: {
      type: 'number',
      required: true
    },

    //Relation con tabla estudiante
    estudiantefk: {
      model: 'estudiante'
    },

    //Relation tabla Eventos
    eventofk: {
      collection: 'eventos',
      via: 'materiafk'
    },

  },

};

