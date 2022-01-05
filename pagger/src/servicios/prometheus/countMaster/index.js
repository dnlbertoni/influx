const { counterMaster } = require('../client/client');

const countMaster = (req, res, next) => {
    try {
        counterMaster.inc();
        return next();
    } catch (error) {
        throw new Error('CounterLoginMaster middleware')
    }
}

module.exports = countMaster