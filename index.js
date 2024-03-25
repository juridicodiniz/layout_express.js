//npm install express handlebars hbs

//BIBLIOTECAS/MODULOS UTILIZADOS
const database = require("./db/db");
const express = require("express");

const hand = require("express-handlebars");


//impotando os Helps
const helpers = require('./handlebars-helpers');

//impotando Middleware  para visualziar o spinner
const spinnerMiddleware = require('./middleware/spinnerMiddleware');

//MODELS
const Video = require("./models/Video");

///Rotas
const VideoRoutes = require("./routes/routesVideo");

//CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");

const app = express();



// Configurar o Express para usar Handlebars como mecanismo de visualização
app.engine('handlebars', hand({
    defaultLayout: 'main', // Opcional, você pode ter um layout principal para todas as páginas
    partialsDir: ['views/layouts/partials'], // Caminho para os partials 
    helpers: helpers
}));

app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());
// Adicione o middleware de spinner a todas as rotas
app.use(spinnerMiddleware);

// Servir arquivos estáticos
app.use(express.static("public"));

//ROTAS
app.use("/", VideoRoutes);


//SINCRONISMO COM O BANCO DE DADOS
try {
    database.sync().then(() => {

        // Iniciar o servidor
        const port = process.env.PORT || 9443;
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
}
catch (erro) {
    console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};


