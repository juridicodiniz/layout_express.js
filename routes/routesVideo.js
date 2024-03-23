const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideo");
const ControllerCliente = require("../controllers/ControllerCliente");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("home", { 
        title: 'Página inicial', 
        activePage: 'home',                     
        pageTitle: 'Página inicial',
        bodyContent: 'Conteúdo da página inicial' 
    });
});


router.get("/listar", ControllerVideo.listarVideos);

router.get("/Cadastrar", ControllerVideo.cadastrarVideo);

router.post("/Cadastrar", ControllerVideo.VideoCreate);

router.get("/update/:id_video", ControllerVideo.UpdateVideo);

router.post("/update", ControllerVideo.VideoUpdate);

router.post("/remover", ControllerVideo.removerVideo);

router.get("/grid", ControllerVideo.listarGrid);

router.get("/dados", ControllerVideo.dadosGrid);

router.get("/Cliente", ControllerCliente.cadastrarCliente);

router.get("/estatico", ControllerCliente.dadosEstaticos);





module.exports = router;