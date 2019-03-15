var crypto = require('crypto');
module.exports.paginaLogin = function(app,request,response){
    response.render('login',{validacoes: {}});
}
module.exports.paginaAdmin = function(app,request,response){
    var dados = request.body; 

    request.assert('login', 'Digite o usuario').notEmpty();
    
    request.assert('senha', 'Digite a senha').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if(rolouAlgumErro){
        response.render('login',{validacoes: rolouAlgumErro});
        console.log(rolouAlgumErro);
        return;
    }
     //validar se usuario e senha existe
     var conexao = app.config.conexao();
     var model = new app.app.models.usuarioDAO(conexao);
     var senha = dados.senha;
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");
 
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
    model.login(dados.login,senhaHash,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        else
        {
            console.log(resultado);
            if(resultado.length > 0){
               request.session.autorizado = true;
               request.session.usuario = resultado[0].nome;

                response.render('index', {nome: resultado[0].nome, usuarios, clientes, planos, cargos});
            }else
            {
                response.redirect('/')
            }
        }   
 });
});
});
});
});
 }
 module.exports.sair = function(app,request,response){
    request.session.destroy(function(erro){
        response.redirect('/');
    });
}
