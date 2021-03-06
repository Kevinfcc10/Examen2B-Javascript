/**
 * EventoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  crearEvento: async function (req, res) {
    const param = req.allParams();

    var eventoCreado = await Eventos.create(
      {
        nombre_evento: param.nombre,
        fecha_evento: param.fecha,
        latitud_evento: param.latitud,
        longitud_evento: param.longitud
      }
    ).fetch();

    return res.ok(eventoCreado);
  },

  buscarEvento: async function (req, res) {
    const param = req.allParams();

    var eventoEncontrado = await  Eventos.find({
      id: param.id
    }).populate('materiafk');

    console.log(eventoEncontrado.id);
    return res.ok(eventoEncontrado);
  },

  buscarTodosEventos: async function (req, res) {
    const param = req.allParams();

    var eventoEncontrado = await  Eventos.find();

    console.log(eventoEncontrado.id);
    return res.ok(eventoEncontrado);
  }


};

