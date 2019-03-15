module.exports = function(app){
    app.get('/admin/clientes', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.cliente.paginaCliente(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/clientes/incluir', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.cliente.paginaIncluirCliente(app,request,response)
       
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/clientes/editar', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.cliente.paginaEditarCliente(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/clientes/excluir', function(request, response){
        app.app.controllers.cliente.paginaExcluirRadcheck(app,request,response)
        app.app.controllers.cliente.paginaExcluirRadreply(app,request,response)
        app.app.controllers.cliente.paginaExcluirClientes(app,request,response)
    });
    app.get('/admin/clientes/selecionar', function(request, response){
        app.app.controllers.cliente.paginaSelecionarCliente(app,request,response)
    });
    app.post('/admin/clientes/salvar', function(request, response){
        app.app.controllers.cliente.paginaIncluirRadcheck(app,request,response)
            app.app.controllers.cliente.paginaIncluirRadreply(app,request,response)
            app.app.controllers.cliente.paginaIncluirClientes(app,request,response)                
    });
    app.post('/admin/clientes/salvar_edicao', function(request, response){
        app.app.controllers.cliente.paginaEditarRadcheck(app,request,response)
        app.app.controllers.cliente.paginaEditarRadreply(app,request,response)
        app.app.controllers.cliente.paginaEditarClientes(app,request,response)              
    });
}