const {
  counterDummy,
  histogramDummy,
  counterOracle,
  histogramOracle,
  counterSql,
  histogramSql,
  counterMysql,
  histogramMysql

} = require('./client');

const clientCase = async (endpoint, time) => {
  if (endpoint == '/dummy') {
    histogramDummy.observe(time / 1000);
    counterDummy.inc();
  }

  if (endpoint == '/oracle') {
    histogramOracle.observe(time / 1000);
    counterOracle.inc();
  }

  if (endpoint == '/mssql') {
    histogramSql.observe(time / 1000);
    counterSql.inc();
  }

  if (endpoint == '/mysql') {
    histogramMysql.observe(time / 1000);
    counterMysql.inc();
  }

  /*--Counter general en app.js--*/


}
module.exports = clientCase;