module.exports = function(app){
    app.get('/admin/usuarios', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaUsuarios(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/cargos', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaCargos(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/cargos/incluir', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaIncluirCargo(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/usuarios/incluir', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaIncluirFuncionario(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/usuarios/editar', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaEditarFuncionario(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.get('/admin/cargos/editar', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.administracao.paginaEditarCargo(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
    });
    app.post('/admin/cargos/edicao_cargo', function(request, response){
        app.app.controllers.administracao.editarCargo(app,request,response)
    });
    app.post('/admin/usuarios/salvar', function(request, response){
        app.app.controllers.administracao.incluirCargo(app,request,response)
    });
    app.get('/admin/usuarios/excluir', function(request, response){
        app.app.controllers.administracao.excluir(app,request,response)
    });
    app.get('/admin/cargos/excluir', function(request, response){
        app.app.controllers.administracao.excluirCargo(app,request,response)
    });
    app.post('/admin/usuarios/salvar_edicao', function(request, response){
        app.app.controllers.administracao.editar(app,request,response)
    });
}