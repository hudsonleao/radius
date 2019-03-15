function homeDAO(connection){
    this._connection = connection;
}

homeDAO.prototype.login = function(login,senha,callback){
    this._connection.query("SELECT * FROM usuarios WHERE login = '" + login + "'and senha = '" + senha +"'",callback);
}
homeDAO.prototype.cont_clientes = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM clientes;",callback);
}
homeDAO.prototype.cont_usuarios = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM usuarios;",callback);
}
homeDAO.prototype.cont_planos = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM radgroupreply;",callback);
}
homeDAO.prototype.cont_cargos = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM cargos;",callback);
}
module.exports = function(){
    return homeDAO;
}
