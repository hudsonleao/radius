var app = require('./config/server');
/*var rotaHome = require('./app/routes/home');
var rotaNoticias = require('./app/routes/noticias');

rotaHome(app);
rotaNoticias(app);
*/
app.listen(80,function(){
console.log('Radius - Online');
});
