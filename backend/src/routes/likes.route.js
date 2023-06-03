const {Router} = require("express");
const route = Router();
const LikesSistem = require("../controllers/likes.controllers")

route.route("/likes/:idtwt")
.get((req, res)=>{
    const {idtwt} = req.params;
    new LikesSistem(null, null,idtwt, req, res).getLikes();
})

route.route("/likes/:ID")
.put((req, res)=>{
    const {len} = req.body;
    const {ID} = req.params;
    new LikesSistem(ID, len, null, req, res).UpdateLikes();
})

module.exports = route;