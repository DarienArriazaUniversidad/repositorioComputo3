var express = require('express');
var router = express.Router();
// const data = require('../userData');
const methods = require('../methods');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const User = require("../models/user")


//constates para rutas de paginas, ligin y register
const loginPage = "../views/pages/login";
const registerPage = "../views/pages/register";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//registro rutas
router.get('/home', async (req, res) => {
  // res.render(home);
  if(req.user) {
    res.render('home', {
      userName: req.user.fullName
    });
  } else {
    res.render
  }
});
router.get('/login', (req, res) => {
  res.render(loginPage);
});
router.get('/register', (req, res) => {
  res.render(registerPage);
});

router.post('/register', async (req, res) => {
  const { fullName, email, password, confirmPasword } = req.body;
  //validations
if (password === confirmPasword){
//validar si el correo esta gegistrado
  user = await User.findOne({ email: email})
  .then(user => {
    if(user) {
      res.render(registerPage, {
        message: "usuario ya registrado",
        messageClass: "alert-ganfer"
      });
    } else {
      const hashedPassword = methods.getHashedPassword(password);
      const userDb = new User({
        'fullName': fullName,
        'email': email,
        "password": password
      });
      userDb.save();

      res.render(loginPage, {
        message: "registro exitodo. iniciar scecion",
        messageClass: "alert-danger"
      });
    }

  });
/*

// 
// 
    if (data.data.find(u => u.email === email)) {
      res.render(registerPage, {
        message: "usuario ya registado",
        messageClass: "alert-danger",
      });
    }
    //encriptar passw
    const pHash = methods.getHashedPassword(password);
    //almacenar datos
    data.data.push({
      fullName,
      email,
      password: pHash,
    });*/
    res.render(loginPage, {
      message: "regiistro exitodo",
      message: "alert-success",
    });


  } else{

    res.render(registerPage, {
      message: "contraseñas no coinciden",
      messageClass: "alert-danger",
    });
  }





});
router.post('/login', (req, res) => {

  const { email, password } = req.body;
  const pHash = methods.getHashedPassword(password);

//   const data = data.data.find(u => {
//     return u.email === email && pHash === u.password;
//   });
// });

user = await User.findOne({ email: email, password: pHash})
.then(user => {
  if(user) {
    const authToken = methods.generateAuthToken();
    methods.authTokens[authToken] = user; //guardar tokens
    res.cookie('AuthToken', authToken);
    res.redirect('/home');
    // //////////////////////////////////////////////
  } else {
    res.render(loginPage, {
      message: "usuario o clave invalido",
      messageClass: "alert-danger"
    });
    }
  })
});

router.get('/logout', (req, res) => {
  res.clearCookie("AuthToken");
  return res.redirect('/');
});





// el login me generaba el error 404,  despues me daba este error "Cannot access 'data' before initialization
// ReferenceError: Cannot access 'data' before initialization"



module.exports = router;
