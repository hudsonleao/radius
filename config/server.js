//Importando os módulos
var express = require('express');
var consign = require('consign');
var body_parser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var app = express();

app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.static('./app/public'));
app.use(body_parser.urlencoded({extended:true}));
app.use(expressValidator());
app.use(expressSession({
    secret: 'v4g4lum3',
    resave: false,
    saveUninitialized: false,
}));
consign()
.include('app/routes')
.then('config/conexao.js')
.then('app/models')
.then('app/controllers')
.into(app);


module.exports = app;
