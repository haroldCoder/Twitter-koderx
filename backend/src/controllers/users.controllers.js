const users = {}
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

    db.query(`SELECT * FROM users WHERE (name = "${user}" OR email = "${user}" OR tel = "${user}") AND password = "${password}"`, (err, result)=>{
        if(err) throw err, res.json(err), console.log(err);;
        if(result.length > 0){
            res.json(result);
        }
        else{
            console.log(user, password);
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
    try{
        const {name, tel, email, password} = req.body;
        console.log(`tel: ${tel} y email: ${email}`);
        db.query(`SELECT 'tel' AS type, COUNT(*) AS count FROM users WHERE tel = ${db.escape(tel)}
        UNION
        SELECT 'email' AS type, COUNT(*) AS count FROM users WHERE email = ${db.escape(email)}`, (err, result)=>{
            if (err) throw err, res.status(500).send(err);
            const countTel = result.find(row => row.type === 'tel').count;
            const countEmail = result.find(row => row.type === 'email').count;

            if (countTel > 0 && tel) {
                res.status(400).send('this tel is exist');
            } 
            else if (countEmail > 0 && email) {
                res.status(400).send(`this email is exist`);
            }
            else{
                const insertSql = 'INSERT INTO users (name, tel, email, password, perf) VALUES (?, ?, ?, ?, ?)';
                db.query(insertSql, [name, tel, email, password, req.file.buffer], (err, result) => {
                    if (err) throw err, res.status(500).send(err);
                    res.send('Image uploaded successfully');
                });
            }
        })
    }
    catch(err){
        res.status(500).send(err);
        throw err;
    }
}

module.exports = users;