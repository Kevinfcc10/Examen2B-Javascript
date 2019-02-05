/**
 * Eventos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_evento: {
      type: 'string',
      required: true
    },

    fecha_evento: {
      type: 'string',
      required: true
    },

    latitud_evento: {
      type: 'number',
      required: true
    },

    longitud_evento: {
      type: 'number',
      required: true
    },

    //Relation tabla Materia
  materiafk: {
      collection: 'materia',
      via: 'eventofk'
    }
  },

};

