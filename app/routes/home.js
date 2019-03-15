module.exports = function(app){

    app.get('/admin/home', function(request, response){
        if(request.session.autorizado){
        app.app.controllers.home.paginaInicial(app,request,response)
    }else{
        response.render('acesso_restrito');
    }
});
}