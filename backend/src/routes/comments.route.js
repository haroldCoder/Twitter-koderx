const {Router} = require("express");
const route = Router();
const {getComments, addComments} = require("../controllers/comments.controllers");

route.route("/comments/:id")
.get(getComments)

route.route("/comments")
.post(addComments)

module.exports = route;