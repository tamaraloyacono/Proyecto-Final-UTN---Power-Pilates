var express = require('express');
var router = express.Router();
var usuarios = require ('./../../bin/models/usuarios');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("login test")
  res.render('admin/login',{
      layout:'admin/layout'
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
    });
  });

router.post('/', async  (req, res, next)=> {
  
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuarios.getUserByUsernameAndPassword(usuario, password);
    if (data != undefined) {  
      console.log(data.id)
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      console.log("sucess")

      res.redirect('/admin/novedades');
    } else {
      console.log("unsuccessful")
      res.render ('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    } 
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

