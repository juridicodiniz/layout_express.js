
module.exports = class ClienteController {



    static cadastrarCliente(req, res) {
        res.render("clientes/Cliente", { 
            title: 'Página Clientes', 
            activePage: 'cliente',                     
            pageTitle: 'Página Clientes',
            bodyContent: 'Conteúdo da página inicial' 
        });
    }
}