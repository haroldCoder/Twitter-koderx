const {Router} = require("express");
const route = Router();
const LikesSistem = require("../controllers/likes.controllers")

route.route("/likes/:idtwt")
.get((req, res)=>{
    const {idtwt} = req.params;
    new LikesSistem(null, null,idtwt, req, res).getLikes();
})

route.route("/likes/:iduser/:idtwt")
.delete((req, res)=>{
    const {idtwt, iduser} = req.params;
    new LikesSistem(null, 0, idtwt, req, res, iduser).DeleteLike()
})

module.exports = route;