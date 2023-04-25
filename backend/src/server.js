const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./db/credentials");
const db = require("./db/connect");
const app = express();
const fs = require("fs");
const multer = require("multer");

app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.post("/",upload.single('image'), (req, res)=>{
    const {name} = req.body;
    const image = req.file;
    const buffer = fs.readFileSync(image.path);
    const query = "INSERT INTO users (name, perf) VALUES (?, ?)";
    const params = [name, buffer];

    db.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error al insertar usuario.");
        } else {
            console.log("Usuario insertado correctamente.");
            res.send("Usuario insertado correctamente.");
        }
        });
    })

app.listen(PORT, (err, res)=>{
    if(err) throw err;
    console.log(`server on port ${PORT}`);
})