const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const verificacion = express.Router();
const key = process.env.JWT_KEY

verificacion.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    //console.log(token)

    if (token == 'Bearer' || !token) {
        res.status(401).send({
            error: 'Es necesario el token para la autorizacion'
        });

        return
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
        //console.log(token)
    }

    if (token) {
        jwt.verify(token, key, (error, decoded) => {
            if (error) {
                res.json({
                    message: "token invalido"

                })

            }
            else {
                req.decoded = decoded;
                next();
            }
        })
    }
});


module.exports = verificacion
