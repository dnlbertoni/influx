const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });
const prefix = 'Skeleton';
collectDefaultMetrics({ prefix });

//EndPoint:APP
const counterMaster = new client.Counter({
    name: 'counterMaster',
    help: 'counterMasterhelp'
});

const histogramMaster = new client.Histogram({
    name: 'histogramMaster',
    help: 'histogramMasterghelp',
    buckets: [1, 2, 5, 6, 10]
});


//EndPoint:Dummy
const counterDummy = new client.Counter({
    name: 'counterDummy',
    help: 'counterDummyhelp'
});

const histogramDummy = new client.Histogram({
    name: 'histogramDummy',
    help: 'histogramDummyhelp',
    buckets: [1, 2, 5, 6, 10]
});

//EndPoint:Oracle
const counterOracle = new client.Counter({
    name: 'counterOracle',
    help: 'counterOraclehelp'
});

const histogramOracle = new client.Histogram({
    name: 'histogramOracle',
    help: 'histogramOraclehelp',
    buckets: [1, 2, 5, 6, 10]
});

//EndPoint:Sql
const counterSql = new client.Counter({
    name: 'counterSql',
    help: 'counterSqlhelp'
});

const histogramSql = new client.Histogram({
    name: 'histogramSql',
    help: 'histogramSqlhelp',
    buckets: [1, 2, 5, 6, 10]
});

//EndPoint:mysql
const counterMysql = new client.Counter({
    name: 'counterMysql',
    help: 'counterMysqlhelp'
});

const histogramMysql = new client.Histogram({
    name: 'histogramMysql',
    help: 'histogramMysqlHelp',
    buckets: [1, 2, 5, 6, 10]
});

module.exports = {
    counterMaster,
    histogramMaster,
    counterDummy,
    histogramDummy,
    counterOracle,
    histogramOracle,
    counterSql,
    histogramSql,
    counterMysql,
    histogramMysql

}