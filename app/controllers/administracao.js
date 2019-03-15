var crypto = require('crypto');

module.exports.paginaUsuarios = function (app, request, response) {

    var dados = request.body;
    //validar se usuario e senha existe
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);

    model.consulta(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                request.session.autorizado = true;
                nome = request.session.usuario
                response.render('usuarios', { resultado });
            }

        }

    });
}
module.exports.paginaCargos = function (app, request, response) {

    var dados = request.body;
    //validar se usuario e senha existe
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);

    model.consultaCargos(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                request.session.autorizado = true;
                nome = request.session.usuario
                response.render('cargos', { resultado });
            }

        }

    });
}
module.exports.paginaIncluirCargo = function (app, request, response) {
    response.render('incluir_cargo', { validacoes: {} });
}
module.exports.paginaEditarCargo = function (app, request, response) {
    //validar se usuario e senha existe
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    model.paginaEditarCargo(id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                response.render('editar_cargo', { resultado });
            }

        }

    });
}
module.exports.editarCargo = function (app, request, response) {
    var dados = request.body;

    request.assert('cargo', 'Digite o nome').notEmpty();


    var rolouAlgumErro = request.validationErrors();
    if (rolouAlgumErro) {
        response.render('erro', { validacoes: rolouAlgumErro });
        console.log(rolouAlgumErro);
        return;
    }
    var editar = {
        cargo: dados.cargo,
    }
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    model.editarCargo(id, editar, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);

    });
}
module.exports.paginaIncluirFuncionario = function (app, request, response) {
    response.render('incluir_funcionario', { validacoes: {} });
}
module.exports.paginaEditarFuncionario = function (app, request, response) {
    var dados = request.body;
    //validar se usuario e senha existe
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    model.paginaAlterar(id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                response.render('editar_funcionario', { resultado });
            }

        }

    });
}
module.exports.paginaExcluirFuncionario = function (app, request, response) {
    response.render('excluir_funcionario');
}

module.exports.paginaIncluirFun = function (app, request, response) {
    var dados = request.body;

    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('login', 'Digite o usuário').notEmpty();

    request.assert('senha', 'Digite a senha').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if (rolouAlgumErro) {
        response.render('incluir_funcionario', { validacoes: rolouAlgumErro });
        console.log(rolouAlgumErro);
        return;
    }



    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var senha = dados.senha;
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");

    model.incluir(dados.nome, dados.login, senhaHash, dados.cargo, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {

                request.session.autorizado = true;
                request.session.usuario = resultado[0].nome;

                response.redirect('/')
            }
        }
    });
}
module.exports.excluir = function (app, request, response) {
    //validar se usuario e senha existe
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    model.excluir(id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            response.redirect('/admin/usuarios')

        }

    });
}

module.exports.editar = function (app, request, response) {
    var dados = request.body;

    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('login', 'Digite o usuário').notEmpty();

    request.assert('senha', 'Digite a senha').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if (rolouAlgumErro) {
        response.render('editar_funcionario', { validacoes: rolouAlgumErro });
        console.log(rolouAlgumErro);
        return;
    }
    var editar = {
        nome: dados.nome,
        login: dados.login,
        senha: dados.senha,
        cargo: dados.cargo,
    }

    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    var senha = dados.senha;
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");
    model.alterar(dados.nome, dados.login, senhaHash, dados.cargo, id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);

    });

}

//Função do botão salvar na página incluir_cargo
module.exports.incluirCargo = function (app, request, response) {
    var dados = request.body;
    request.assert('cargo', 'Digite o cargo').notEmpty();

    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);


    model.incluirCargo(dados.cargo, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {

                request.session.autorizado = true;
                request.session.usuario = resultado[0].nome;

                response.redirect('/')
            }
        }
    });
}

//Função do botão excluir na página cargos
module.exports.excluirCargo = function (app, request, response) {
    var conexao = app.config.conexao();
    var model = new app.app.models.administracaoDAO(conexao);
    var id = request.query;
    model.excluirCargo(id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            response.redirect('/admin/cargos')

        }

    });
}

