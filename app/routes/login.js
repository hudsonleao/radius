module.exports = function(app){

    app.get('/', function(request, response){
        app.app.controllers.login.paginaLogin(app,request,response)
    });
    app.post('/admin/auth', function(request, response){
        app.app.controllers.login.paginaAdmin(app,request,response)
    });
    app.get('/admin/auth', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.login.paginaAdmin(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
});   
    app.get('/admin/logout', function(request, response){
        app.app.controllers.login.sair(app,request,response)
    });
}