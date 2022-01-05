require('dotenv').config()
const client = require('prom-client');

const metrics = async (req, res) => {
    res.set('Content-Type', `text/plain`)
    res.end(await client.register.metrics())
};


module.exports = metrics;
