function clienteDAO(connection){
    this._connection = connection;
}
clienteDAO.prototype.consulta = function(id,callback){
    this._connection.query('SELECT * FROM radcheck INNER JOIN radreply ON radcheck.username=radreply.username INNER JOIN clientes ON radreply.username=clientes.username ORDER BY nome ASC', callback);
}
clienteDAO.prototype.consulta_planos = function(id,callback){
    this._connection.query('SELECT * FROM radgroupreply ORDER BY groupname ASC', callback);
}
clienteDAO.prototype.incluir_radcheck = function(username,senha,callback){
    this._connection.query("INSERT INTO `radcheck` (`username`, `attribute`, `op`, `value`) VALUES ('" + username + "','Cleartext-Password',':=', '" + senha +"');",callback);
}
clienteDAO.prototype.incluir_radreply = function(username,plano,callback){
this._connection.query("INSERT INTO `radreply` (`username`, `attribute`, `op`, `value`) VALUES ('" + username + "','Mikrotik-Rate-Limit',':=', '" + plano +"');",callback);
}
clienteDAO.prototype.incluir_clientes = function(nome,username,logradouro,bairro,mac,callback){    
this._connection.query("INSERT INTO `clientes` (`nome`, `username`, `logradouro`, `bairro`, `mac`) VALUES ('" + nome + "','"+ username +"','"+ logradouro + "', '" + bairro +"','" + mac +"'); ",callback);
}
clienteDAO.prototype.alterar_radcheck = function(usuario,username,senha,callback){
    this._connection.query("UPDATE radcheck SET `username` = '"+username+"', `value` = '"+senha+"' WHERE username = '"+ usuario +"'", callback);
}
clienteDAO.prototype.alterar_radreply = function(usuario,username,plano,callback){
    this._connection.query("UPDATE radreply SET `username` = '"+username+"', `value` = '"+plano+"' WHERE username = '"+ usuario +"'", callback);
}
clienteDAO.prototype.alterar_clientes = function(usuario,nome,username,logradouro,bairro,mac,callback){
    this._connection.query("UPDATE clientes SET `nome` = '"+nome+"', `username` = '"+username+"', `logradouro` = '"+logradouro+"',`bairro` = '"+bairro+"',`mac` = '"+mac+"'  WHERE username = '"+ usuario +"'", callback);
}
clienteDAO.prototype.paginaAlterar = function(username,callback){
    this._connection.query("SELECT * FROM radcheck INNER JOIN radreply ON radcheck.username=radreply.username INNER JOIN clientes ON radcheck.username=clientes.username WHERE radcheck.username = '"+ username.username +"';", callback);
}
clienteDAO.prototype.excluir_radcheck = function(username,callback){
    this._connection.query("DELETE FROM radcheck WHERE username = '"+ username.username +"'",callback);
}
clienteDAO.prototype.excluir_radreply = function(username,callback){
    this._connection.query("DELETE FROM radreply WHERE username = '"+ username.username +"'",callback);
}
clienteDAO.prototype.excluir_clientes = function(username,callback){
    this._connection.query("DELETE FROM clientes WHERE username = '"+ username.username +"'",callback);
}
module.exports = function(){
    return clienteDAO;
}