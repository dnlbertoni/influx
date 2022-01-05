require('dotenv').config()

/*
    Mac, Linux: NODE_ENV=production node /bin/wwww
    Windows: set NODE_ENV=production node /bin/wwww

*/

module.exports = {
    //App
    server: {
        port: process.env.APP_PORT || 3030,
        domain: process.env.APP_DOMAIN || 'localhost'
    },
    app: {
        version: process.env.APP_VERSION || '0.0',
        dateRelease: process.env.APP_RELEASE || 'N/D',
        ambiente: process.env.APP_ENTORNO || 'HOMOLOGACION'
    },
    sender: {
        host: process.env.SMS_HOST_1 || '0.0.0.0',
        user: process.env.SMS_USER_1 || 'N/D',
        pass: process.env.SMS_PASS_1 || 'xxxx',
        port: process.env.SMS_PORT_1.split(';')
    },

    destination: process.env.CELLS.split(';'),

    logger: 'dev',
}