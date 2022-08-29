var express = require('express');
var router = express.Router();
var novedadesModel = require('./../bin/models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                // width: 960,
                // height: 960,
                // crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    })

    res.json(novedades);
});


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'tamaraloyacono@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó en la web y quiere más información a este correo: ${req.body.email} y prefiere clases por la ${req.body.preferencias} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} </br> Su teléfono es: ${req.body.telefono}`
    } // aca podriamos agregar la pref horaria //
    const transport = nodemailer.createTransport ({
        host: process.env.STMP_HOST,
        port: process.env.STMP_PORT,
        auth: {
            user: process.env.STMP_USER,
            pass: process.env.STMP_PASS
        }
    });
    
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: '¡Mensaje enviado! ¡Te contactaremos a la brevedad!'

    });
}); 

module.exports = router