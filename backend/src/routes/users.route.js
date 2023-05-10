const {Router} = require("express");
const {getUsers, AddUser, getUser, getUserByName} = require("../controllers/users.controllers");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const route = Router();

route.route("/users/")
.get(getUsers)
.post(upload.single('imagen'), AddUser);

route.route("/users/login/:user/:password")
.get(getUser)

route.route("/userid/:name")
.get(getUserByName)

module.exports = route;