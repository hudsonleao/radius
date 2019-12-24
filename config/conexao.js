var driver = require('mysql')

var conectar = function(){
    var parametros = {
        host: '192.168.0.47',
        user: 'radius',
        password: 'radius',
        database: 'radius'
    };

    var cnn = driver.createConnection(parametros);
    console.log('Conectou com o MYSQL');
    return cnn;

}

module.exports = function(){
    return conectar;
}
