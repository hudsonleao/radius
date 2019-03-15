module.exports.paginaPlano = function(app,request,response){
    var dados = request.body; 
   //validar se usuario e senha existe
     var conexao = app.config.conexao();
     var model = new app.app.models.planosDAO(conexao);
 
     model.consulta(dados.id,function(erro, resultado){
         console.log(resultado);
         if(erro !=null)
         response.send(erro);
         else
         {
             console.log(resultado);
             if(resultado.length > 0){
                nome = request.session.usuario
                response.render('planos', {resultado, nome: nome});
             }
 
}
         
 });
 }
module.exports.paginaIncluirPlano = function(app,request,response){
    response.render('incluir_plano',{validacoes: {}});
}
module.exports.paginaEditarPlano = function(app,request,response){
    //validar se usuario e senha existe
      var conexao = app.config.conexao();
      var model = new app.app.models.planosDAO(conexao);
      var id = request.query;
      model.paginaAlterar(id,function(erro, resultado){
          console.log(resultado);
          if(erro !=null)
          response.send(erro);
          else
          {
              console.log(resultado);
              if(resultado.length > 0){
                nome = request.session.usuario
                 response.render('editar_plano',{resultado, nome: nome});
              }
  
 }
          
  });
 }
module.exports.salvarPlano = function(app,request,response){
    var dados = request.body; 

    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('velocidade', 'Digite a velocidade').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if(rolouAlgumErro){
        response.render('erro',{validacoes: rolouAlgumErro});
        console.log(rolouAlgumErro);
        return;
    }

    var incluir_funcionario = {
        nome: dados.nome,
        velocidade: dados.velocidade,
    }

    var conexao = app.config.conexao();
    var model = new app.app.models.planosDAO(conexao);

    model.incluir(dados.nome,dados.velocidade,function(erro, resultado){
        console.log(resultado);
        if(erro !=null)
        response.send(erro);
        else
        {
            console.log(resultado);
            if(resultado.length > 0){
                
                request.session.autorizado = true;
                request.usuario = resultado[0].nome;

                response.redirect('/admin/home')
            }
        }
});
}
module.exports.excluir = function(app,request,response){
    //validar se usuario e senha existe
      var conexao = app.config.conexao();
      var model = new app.app.models.planosDAO(conexao);
  var id = request.query;
      model.excluir(id,function(erro, resultado){
          console.log(resultado);
          if(erro !=null)
          response.send(erro);
          else
          {
             response.redirect('/admin/planos')
  
 }
          
  });
  }
         
   module.exports.editar = function(app,request,response){
     var dados = request.body; 

     request.assert('groupname', 'Digite o nome').notEmpty();
 
     request.assert('value', 'Digite a velocidade').notEmpty();
     
 
     var rolouAlgumErro = request.validationErrors();
     if(rolouAlgumErro){
         response.render('erro',{validacoes: rolouAlgumErro});
         console.log(rolouAlgumErro);
         return;
     }
     var editar = {
         groupname: dados.groupname,
         value: dados.value,
     }
       var conexao = app.config.conexao();
       var model = new app.app.models.planosDAO(conexao);
       var id = request.query;
       model.alterar(id,editar,function(erro, resultado){
           console.log(resultado);
           if(erro !=null)
           response.send(erro);
           
   });
   }
   module.exports.pesquisar = function(app,request,response){
    var dados = request.body; 

    var rolouAlgumErro = request.validationErrors();
    if(rolouAlgumErro){
        response.render('login',{validacoes: rolouAlgumErro});
        console.log(rolouAlgumErro);
        return;
    }
     //validar se usuario e senha existe
     var conexao = app.config.conexao();
     var model = new app.app.models.planosDAO(conexao);
 
     model.pesquisar(dados.login,dados.senha,function(erro, resultado){
         console.log(resultado);
         if(erro !=null)
         response.send(erro);
         else
         {
             console.log(resultado);
             if(resultado.length > 0){
                 response.render('planos', {nome: resultado[0].nome});
             }
         }
         
 });
 }