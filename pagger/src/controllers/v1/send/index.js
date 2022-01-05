const fsp = require('fs').promises;
const fs = require('fs');
const config = require('config');
const sendSmsTelnet = require('../../../servicios/sendSms/sendSmsTelnet/sendSmsTelnet');
const send = async (req, res) => {
const grupo = req.params['grupo'];
const evento = req.params['evento'];
const server = req.params['server'];
const info = req.params['info'];
const address = req.params['address'];
const date =  new Date().toLocaleString();
const mensaje = `
EVENTO:   ${evento}
GRUPO:  ${grupo} 
SERVER: ${server} 
ADDR:   ${address} 
FECHA:  ${date} 
INFO:   ${info} `

const sender = config.get('sender');
    var port = sender.port[0];
    var uri = `/tmp/${port}.log`;

    if (fs.existsSync(uri)) {
        fs.unlinkSync(uri);
    }
    const celular= config.get('destination');
    var request1 = await sendSmsTelnet(sender.host, port, sender.user, sender.pass, celular[0], mensaje)

    let cant = 0 //control de tiempo
    while (fs.existsSync(uri) == false && cant <= 30) {
        console.log(fs.existsSync(uri) == false)
        await sleep(1000)
        cant++
    }

    if (cant <= 30) {
        const data = fs.readFileSync(uri,{encoding: "utf8"})
        console.log(data)
        return res.json(data);
    } else {
        return res.json("err");
    }

}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = send;
