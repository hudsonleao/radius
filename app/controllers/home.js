module.exports.paginaInicial = function(app,request,response){
    var dados = request.body; 
    //validar se usuario e senha existe
      var conexao = app.config.conexao();
      var model = new app.app.models.homeDAO(conexao);
      var usuarios = request.query;
    model.cont_clientes(dados.id,function(erro, clientes){
        console.log(clientes);
        if(erro !=null)
        response.send(erro);
        else
        {
            console.log(clientes);
            if(clientes.length > 0){
                request.session.autorizado = true;
               nome = request.session.usuario
            }

}
var conexao = app.config.conexao();
      var model = new app.app.models.homeDAO(conexao);
model.cont_planos(dados.id,function(erro, planos){
    console.log(planos);
    if(erro !=null)
    response.send(erro);
    else
    {
        console.log(planos);
        if(planos.length > 0){
            request.session.autorizado = true;
           nome = request.session.usuario
        }

}
var conexao = app.config.conexao();
      var model = new app.app.models.homeDAO(conexao);
model.cont_cargos(dados.id,function(erro, cargos){
    console.log(cargos);
    if(erro !=null)
    response.send(erro);
    else
    {
        console.log(cargos);
        if(cargos.length > 0){
            request.session.autorizado = true;
           nome = request.session.usuario
        }

}
var conexao = app.config.conexao();
      var model = new app.app.models.homeDAO(conexao);
model.cont_usuarios(dados.id,function(erro, usuarios){
    console.log(usuarios);
    if(erro !=null)
    response.send(erro);
    else
    {
        console.log(usuarios);
        if(usuarios.length > 0){
            request.session.autorizado = true;
           nome = request.session.usuario
           response.render('index', {usuarios, nome: nome, clientes, planos, cargos});
           
        }

}
});
});
});
});
}