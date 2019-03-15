module.exports.paginaCliente = function(app,request,response){
    var dados = request.body; 
   //validar se usuario e senha existe
     var conexao = app.config.conexao();
     var model = new app.app.models.clienteDAO(conexao);
 
     model.consulta(dados.id,function(erro, resultado){
         console.log(resultado);
         if(erro !=null)
         response.send(erro);
         else
         {
             console.log(resultado);
             if(resultado.length > 0){
                nome = request.session.usuario
                response.render('clientes', {resultado, nome: nome});
             }
 
}
         
 });
 }
module.exports.paginaIncluirCliente = function(app,request,response){
    var dados = request.body; 
   //validar se usuario e senha existe
     var conexao = app.config.conexao();
     var model = new app.app.models.clienteDAO(conexao);
 
     model.consulta_planos(dados.id,function(erro, consulta){
         console.log(consulta);
         if(erro !=null)
         response.send(erro);
         else
         {
             console.log(consulta);
             if(consulta.length > 0){
                nome = request.session.usuario
                response.render('incluir_cliente', {consulta, nome: nome, validacoes: {}});
             }
 
}
         
 });
}
module.exports.paginaEditarCliente = function(app,request,response){
    var dados = request.body; 
    //validar se usuario e senha existe
      var conexao = app.config.conexao();
      var model = new app.app.models.clienteDAO(conexao);
  
      model.consulta_planos(dados.id,function(erro, consulta){
          console.log(consulta);
          if(erro !=null)
          response.send(erro);
          else
          {
              console.log(consulta);
              if(consulta.length > 0){
                 nome = request.session.usuario
              }
  
 }        
  
  var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
    var username = request.query;
        model.paginaAlterar(username,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        else
        {
            console.log(resultado);
            if(resultado.length > 0){
                nome = request.session.usuario
            }

}       
response.render('editar_cliente',{resultado, consulta});
});
});
  }
  
  module.exports.paginaEditarRadcheck = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
    var dados = request.body;
    var editar = {
        username: dados.username,
        senha: dados.senha,
    }
    model.alterar_radcheck(dados.usuario,dados.username,dados.senha,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        
});
}
module.exports.paginaEditarRadreply = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
    var dados = request.body;
    var editar = {
        username: dados.username,
        plano: dados.plano,
    }
    model.alterar_radreply(dados.usuario,dados.username,dados.plano,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        
});
}
module.exports.paginaEditarClientes = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
    var dados = request.body;
    var editar = {
        nome: dados.nome,
        username: dados.username,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        mac: dados.mac
    }
    model.alterar_clientes(dados.usuario,dados.nome,dados.username,dados.logradouro,dados.bairro,dados.mac,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        
});
}

module.exports.paginaExcluirRadcheck = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
   var username = request.query;
    model.excluir_radcheck(username,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        
});
}
module.exports.paginaExcluirRadreply = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
   var username = request.query;
    model.excluir_radreply(username,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        
});
}
module.exports.paginaExcluirClientes = function(app,request,response){
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);
   var username = request.query;
    model.excluir_clientes(username,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        else
        {
           response.redirect('/admin/clientes')

}
        
});
}
module.exports.paginaSelecionarCliente = function(app,request,response){
    response.render('selecionar_cliente');
}
module.exports.paginaIncluirRadcheck = function(app,request,response){
    var dados = request.body; 
    //validar se usuario e senha existe
      var conexao = app.config.conexao();
      var model = new app.app.models.clienteDAO(conexao);
    

    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('logradouro', 'Digite o logradouro').notEmpty();

    request.assert('bairro', 'Digite o bairro').notEmpty();

    request.assert('username', 'Digite o usuario').notEmpty();
    
    request.assert('senha', 'Digite a senha').notEmpty();

    request.assert('mac', 'Digite o MAC').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if(rolouAlgumErro){
        response.render('erro',{consulta,validacoes: rolouAlgumErro});
        console.log(rolouAlgumErro);
        return;
    }

    var incluir_radcheck = {
        username: dados.username,
        senha: dados.senha
    }
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);

    model.incluir_radcheck(dados.username,dados.senha,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
});
}
module.exports.paginaIncluirRadreply = function(app,request,response){
    var dados = request.body; 
    var incluir_radreply = {
        username: dados.username,
        plano: dados.plano
    }
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);

    model.incluir_radreply(dados.username,dados.plano,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
});
}
module.exports.paginaIncluirClientes = function(app,request,response){
    var dados = request.body; 
    var incluir_radreply = {
        nome: dados.nome,
        username: dados.username,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        mac: dados.mac,

    }
    var conexao = app.config.conexao();
    var model = new app.app.models.clienteDAO(conexao);

    model.incluir_clientes(dados.nome,dados.username,dados.logradouro,dados.bairro,dados.mac,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
});
}