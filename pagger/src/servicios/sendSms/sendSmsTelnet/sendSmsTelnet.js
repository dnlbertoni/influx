//https://npm.io/package/expect-telnet

var et = require("expect-telnet");
const fsp = require('fs').promises;
const fs = require('fs');


const sendSmsTelnet = async (host, port, usuario, password, cel, msj, fnTelnet) => {
    const uri = `/tmp/${port}.log`
    //fsp.writeFile(__dirname + "/sms2.json", "asd")
    console.log(__dirname)
    const hostAndPort = `${host}:${port}`
    console.log("Enviando sms ...")
    console.log("Host: " + hostAndPort)
    console.log("Celular: " + cel)
    console.log("Mensaje: " + msj)
    var respuesta = 0
    et(hostAndPort, [
        {
            expect: "username", send: `${usuario}\r`,
            out: function (output) {
                respuesta = 1
                console.log(output);

            }

        },

        {
            expect: "password", send: `${password}\r`,
            out: function (output) {
                respuesta = 2
                console.log(output);

            }
        },
        {
            expect: "admin.",
            send: "state1\r",
            out: function (output) {
                respuesta = 3
                console.log(output);

            }
        },

        {
            expect: " free.",
            send: "module1\r",
            out: function (output) {
                respuesta = 4
                console.log(output);

            }
        },
        {
            expect: 'module1',
            send: "AT+CMGF=1\r",
            out: function (output) {
                respuesta = 5
                console.log(output);

            }
        }
        ,
        {
            expect: '0',
            //no importa el + o el +549 al momento de escribir el numero
            send: `AT+CMGS="${cel}"\r`,// `AT+CMGS="+5493454094918"\r` //`AT+CMGS="+5493772406593"\r`//`AT+CMGS="+549354343501"\r`//`AT+CMGS="3454094918"\r`

            out: function (output) {
                respuesta = 6
                console.log(output);

            }
        },
        {
            expect: '\n',//salto de linea
            send: `${msj} ${String.fromCharCode(26)}`,//codigo ASCII 26 , SIMULA CTRL+Z Necesario para enviar el sms al final del msj

            out: function (output) {
                respuesta = 7
                console.log(output);

            }
        }
        ,
        {
            expect: '\n',
            send: `${String.fromCharCode(24)}`,

            out: function (output) {
                const req = output.slice(0, 5).toString()
                if (req == "+CMGS") {
                    console.log("mensaje enviado")
                    respuesta = 8
                }
                console.log(output);
            }, send: "exit\r"
        }

    ], { timeout: 10000, exit: true }, function (err) {
        console.log(respuesta)
        //si respuesta 
        if (err) {
            // respuesta = 9

        } else {
            console.log("flujo correcto")
            //fsp.unlink(__dirname + "/asdasd.json")

        }
        const reString = respuesta.toString();
        try {
            fs.writeFileSync(uri, reString)
            console.log(`Se escribio el archivo ${uri}`)

        } catch (error) {

        }


    })

}




//sendSmsTelnet("192.168.5.38", 8223, "voip", 1234, "+5493454094918", "index");

module.exports = sendSmsTelnet;



