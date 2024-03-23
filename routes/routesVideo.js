const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideo");
const ControllerCliente = require("../controllers/ControllerCliente");
const router = express.Router();


router.get("/", ControllerVideo.listarVideos);

router.get("/Cadastrar", ControllerVideo.cadastrarVideo);

router.post("/Cadastrar", ControllerVideo.VideoCreate);

router.get("/update/:id_video", ControllerVideo.UpdateVideo);

router.post("/update", ControllerVideo.VideoUpdate);

router.post("/remover", ControllerVideo.removerVideo);

router.get("/Cliente", ControllerCliente.cadastrarCliente);





module.exports = router;