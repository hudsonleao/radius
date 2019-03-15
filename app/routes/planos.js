module.exports = function(app){
    app.get('/admin/planos', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.planos.paginaPlano(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
});
    app.get('/admin/planos/incluir', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.planos.paginaIncluirPlano(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
});
    app.get('/admin/planos/editar', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.planos.paginaEditarPlano(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
});
    app.get('/admin/planos/excluir', function(request, response){
        app.app.controllers.planos.excluir(app,request,response)
    });
    app.post('/admin/planos/salvar', function(request, response){
        app.app.controllers.planos.salvarPlano(app,request,response)
    });
    app.post('/admin/planos/salvar_edicao', function(request, response){
        app.app.controllers.planos.editar(app,request,response)
    });
    app.post('/admin/planos/pesquisar', function(request, response){
        app.app.controllers.planos.pesquisar(app,request,response)
    });
}