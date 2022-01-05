const dbmy = require('../dbmy/');
const clientCase = require('../prometheus/client');
const fsp = require('fs').promises;
const fs = require('fs');
const config = require('config');


 const dummy = async (req, res) => {
     var start = new Date();

     let connect = 0;
     let value = 100;

     var version = config.get('app.version');
     var dateRelease = config.get('app.dateRelease');
     var ambiente = config.get('app.ambiente');

     const jsonResponse = {
         "Aplicacion": "Skeleton V2",
         "Version": version,
         "Fecha Release": dateRelease,
         "EstadoDB": `${connect}%`,
         "Ambiente": ambiente
     }
     res.json(jsonResponse);

     var end = new Date() - start;
     clientCase('/dummy', end);
     
 }








module.exports = dummy;
