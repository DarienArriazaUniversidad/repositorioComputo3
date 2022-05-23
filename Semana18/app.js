const express = require('express');

var app=express();

//definir motor plantillas
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index', 
    {title:"progra Iv", message: "express con jade"}
    );

});

app.route('/test').get(function(req, res){
    res.send("tests page");
});

//informacion
app.route('/perfil').get(function(req, res){
    res.render("darien");
});


const server = app.listen(3000);
