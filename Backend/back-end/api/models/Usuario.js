/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_usuario: {
      type: 'string',
      required: true
    },

    correo_usuario: {
      type: 'string',
      isEmail: true
    },

    password_usuario: {
      type: 'string',
      required: true
    },

    fecha_nacimiento_usuario: {
      type: 'string',
      required: true
    },

    //Relacion con la tabla estudiante
    estudiantes: {
      collection: 'estudiante',
      via: 'usuariofk'
    },

    //Relacion con la tabla rol
    rolfk: {
      collection: 'rol',
      via: 'usuariofk',
    },

  },

};

