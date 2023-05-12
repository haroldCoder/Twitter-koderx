const users = {}

const { log } = require("console");
const db = require("../db/connect");

users.getUsers = (req, res)=>{
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
}

users.getUser = (req, res) =>{
    const {user, password} = req.params;

    db.query(`SELECT * FROM users WHERE name = "${user}" OR email = "${user}" OR tel = "${user}" AND password = "${password}"`, (err, result)=>{
        if(err) throw err, res.json(err), console.log(err);;
        if(result.length > 0){
            res.json(result);
        }
        else{
            res.json({"mess": "user not exist"})
        }
    })
}

users.getUserByName = (req, res) =>{
    const {name} = req.params;

    db.query(`SELECT id FROM users WHERE name = "${name}"`, (err, resu)=>{
        if(err) throw err;
        res.json(resu);
    })
}

users.getUserById = (req, res) =>{
    const {id} = req.params;

    db.query(`SELECT name FROM users WHERE id = ${id}`, (err, resu)=>{
        if(err) throw err;
        res.json(resu);
    })
}

users.AddUser = (req, res)  =>{
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
}

module.exports = users;