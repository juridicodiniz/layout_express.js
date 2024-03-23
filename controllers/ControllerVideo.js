const Video = require("../models/Video");
module.exports = class VideoController {

    static cadastrarVideo(req, res) {
        res.render("videos/Cadastrar", { 
                                            title: 'Cadastrar Videos', 
                                            activePage: 'cadastrar',                      
                                            pageTitle: 'Cadastrar Videos',
                                            bodyContent: 'Pagina para Castrar vdieos' 
                                        }
        );
    }

    static async VideoCreate(req, res) {

        const video = {
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }

        await Video.create(video);           
        res.redirect("/");

    }



    //LISTAR VIDEOS
    static async listarVideos(req, res) {
        const video = await Video.findAll({ raw: true })
        res.render("videos/listar", 
                                    {   video,
                                        title: 'Listar Videos', 
                                        activePage: 'listar',                      
                                        pageTitle: 'Listar os Videos',
                                        bodyContent: 'Pagina para Listar' 
                                    }
        );     
    }




    //UPDATE
    static async UpdateVideo(req, res) {
        const id_video = req.params.id_video;
        const video = await Video.findOne({ where: { id_video: id_video }, raw: true })
        res.render("videos/update", { video })
    }


    //Listar Videos
    static async VideoUpdate(req, res) {
        const id_video = req.body.id_video
        const video = {
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }

        await Video.update(video, { where: { id_video: id_video } })
        res.redirect("/")

    }

    static async removerVideo(req, res) {
        const id_video = req.body.id_video;
        await Video.destroy({ where: { id_video: id_video } })
        res.redirect("/")
    }

      //LISTAR VIDEOS no grid
    static async listarGrid(req, res) {        
        res.render("videos/grid", { 
            title: 'Grids', 
            activePage: 'grid',                      
            pageTitle: 'Listar os Vídeos no Grid',
            bodyContent: 'Pagina para Listar' 
        })
    }


//Dados Grid
static async dadosGrid(req, res) {
    const video = await Video.findAll({ raw: true })       
    res.json(video);        
}  
   
}