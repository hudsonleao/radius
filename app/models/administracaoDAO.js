function administracaoDAO(connection){
    this._connection = connection;
}

administracaoDAO.prototype.consulta = function(login,callback){
    this._connection.query('SELECT * FROM usuarios ORDER BY nome ASC', callback);
}
administracaoDAO.prototype.consultaCargos = function(login,callback){
    this._connection.query('SELECT * FROM cargos ORDER BY cargo ASC', callback);
}

administracaoDAO.prototype.incluir = function(nome,login,senhaHash,cargo,callback){
    this._connection.query("INSERT INTO `usuarios` (`id`, `nome`, `login`, `senha`, `cargo`) VALUES (NULL, '" + nome + "', '" + login + "', '" + senhaHash + "', '" + cargo + "'); ",callback);
}
administracaoDAO.prototype.incluirCargo = function(cargo, callback){
    this._connection.query("INSERT INTO `cargos` (`id`, `cargo`) VALUES (NULL, '" + cargo + "'); ",callback);
}
administracaoDAO.prototype.excluir = function(id,callback){
    this._connection.query('DELETE FROM usuarios WHERE id = '+ id.id +'', callback);
}
administracaoDAO.prototype.excluirCargo = function(id,callback){
    this._connection.query('DELETE FROM cargos WHERE id = '+ id.id +'', callback);
}
administracaoDAO.prototype.alterar = function(nome, login, senhaHash, cargo, id, callback){
    this._connection.query("UPDATE usuarios SET `nome` = '"+nome+"', `login` = '"+login+"',`senha` = '"+senhaHash+"',`cargo` = '"+cargo+"' WHERE id = '"+ id.id +"'", callback);
}
administracaoDAO.prototype.paginaEditarCargo = function(id,callback){
    this._connection.query("SELECT * FROM cargos WHERE id = '" + id.id + "'",callback);
}
administracaoDAO.prototype.editarCargo = function(id,editar,callback){
    this._connection.query('UPDATE cargos SET ? WHERE id = '+ id.id +'',editar, callback);
}
administracaoDAO.prototype.paginaAlterar = function(id,callback){
    this._connection.query("SELECT * FROM usuarios WHERE id = '" + id.id + "'",callback);
}
module.exports = function(){
    return administracaoDAO;
}
