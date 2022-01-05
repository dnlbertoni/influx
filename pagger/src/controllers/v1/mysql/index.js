const { validationResult } = require('express-validator');
const dbmy = require('../../../servicios/dbmy');
const clientCase = require('../../../servicios/prometheus/client/')

const getEmpleado = (req, res) => {
  try {
    validationResult(req).throw()
    var start = new Date()

    dni = req.query.dni;
    params = [dni];

    dbmy.connect(function (err) {
      if (err) throw err;
      const sql = `SELECT nombres nombre, apellidos apellido FROM rrhh_empleados where documento=?`
      dbmy.query(sql, params, function (err, result, fields) {
        if (err) throw err;
        res.contentType('application/json');
        res.send(JSON.stringify(result))
      });
    });
    var end = new Date() - start
    clientCase('/mysql', end);

  } catch (error) {
    const firstError = error.array()[0].msg
    res.status(200).json(firstError)
  }

}

module.exports = getEmpleado;
