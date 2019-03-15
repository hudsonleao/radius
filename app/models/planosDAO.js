function planoDAO(connection){
    this._connection = connection;
}
planoDAO.prototype.consulta = function(id,callback){
    this._connection.query('SELECT * FROM radgroupreply ORDER BY groupname ASC', callback);
}
planoDAO.prototype.incluir = function(nome,velocidade,callback){
    this._connection.query("INSERT INTO `radgroupreply` (`groupname`, `attribute`, `op`, `value`) VALUES ('" + nome + "','Mikrotik-Rate-Limit',':=', '" + velocidade +"'); ",callback);
}
planoDAO.prototype.alterar = function(id,editar,callback){
    this._connection.query('UPDATE radgroupreply SET ? WHERE id = '+ id.id +'',editar, callback);
}
planoDAO.prototype.paginaAlterar = function(id,callback){
    this._connection.query("SELECT * FROM radgroupreply WHERE id = '" + id.id + "'",callback);
}
planoDAO.prototype.excluir = function(id,callback){
    this._connection.query('DELETE FROM radgroupreply WHERE id = '+ id.id +'', callback);
}
planoDAO.prototype.pesquisar = function(nome,callback){
    this._connection.query("SELECT * FROM radgroupreply WHERE groupname = '" + nome + "'",callback);
}
module.exports = function(){
    return planoDAO;
}