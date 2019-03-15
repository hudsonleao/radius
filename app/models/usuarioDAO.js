function usuarioDAO(connection){
    this._connection = connection;
}

usuarioDAO.prototype.login = function(login,senhaHash,callback){
    this._connection.query("SELECT * FROM usuarios WHERE login = '" + login + "'and senha = '" + senhaHash +"'",callback);
}
usuarioDAO.prototype.cont_clientes = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM clientes;",callback);
}
usuarioDAO.prototype.cont_usuarios = function(id,callback){
    this._connection.query("SELECT COUNT(*) as total FROM usuarios;",callback);
}
module.exports = function(){
    return usuarioDAO;
}
