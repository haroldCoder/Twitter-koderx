const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./db/credentials");
const db = require("./db/connect");
const app = express();
const fs = require("fs");
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));



const storage = multer.memoryStorage();
const upload = multer({ storage });


app.get("/apitwt/users", (req, res)=>{
    db.query("SELECT * FROM users", (err, result)=>{
        if(err) throw err;
        const data = result.map(user => {
            const {id, name, perf} = user;
            return {
                id,
                name,
                perf
            }
        });
        res.json(data);
    })
})

app.get("/apitwt/users/login/:user/:password", (req, res)=>{
    const {user, password} = req.params;
    
    db.query(`SELECT * FROM users WHERE name = "${user}" OR email = "${user}" OR tel = "${user}" AND password = "${password}"`, (err, result)=>{
        if(err) throw err, res.json(err);
        if(result.length > 0){
            res.json(result);
        }
        else{
            res.json({"mess": "user not exist"})
        }
    })
})

app.get("/apitwt/userid/:name", (req, res)=>{
    const {name} = req.params;

    db.query(`SELECT id FROM users WHERE name = "${name}"`, (err, resu)=>{
        if(err) throw err;
        res.json(resu);
    })
})

app.get("/apitwt/tweets", (req, res)=>{
    db.query("SELECT * FROM tweets", (err, resu)=>{
        if(err) throw err;
        res.json(resu);
    })
})

app.post("/apitwt/newtwt", (req, res)=>{
    const {content, iduser} = req.body;

    db.query(`INSERT INTO tweets(content, iduser, date) VALUES ("${content}", ${iduser}, NOW())`, (err, resu)=>{
        if(err) throw err;
        res.json({"message": "twt posted"})
    })
})

app.post("/apitwt/users",upload.single('imagen'), (req, res)=>{
    const {name, tel, email, password} = req.body;

    const selectSql = 'SELECT * FROM users WHERE name = ? OR tel = ? OR email = ?';
    db.query(selectSql, [name, tel, email], (err, result) => {
        if (err) throw err, res.send("9"), console.log(err);
        if (result.length > 0) {
            res.send('Error: this data exist in to db');
        } else {
            const insertSql = 'INSERT INTO users (name, tel, email, password, perf) VALUES (?, ?, ?, ?, ?)';
            db.query(insertSql, [name, tel, email, password, req.file.buffer], (err, result) => {
                if (err) throw err, res.send(err);
                res.send('Image uploaded successfully');
            });
        }
    });
})

app.listen(PORT, (err, res)=>{
    if(err) throw err;
    console.log(`server on port ${PORT}`);
})