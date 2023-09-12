const db = require("../db/connect");

class LikesSistem{
    constructor(id, len, idtwt, req, res, iduser){
        this.id = id;
        this.len = len;
        this.idtwt = idtwt
        this.req = req;
        this.res = res;
        this.iduser = iduser
    }

    getLikes = () =>{
        try{
            db.query(`SELECT ID, COUNT(iduser) as likes FROM likes WHERE idtwt = ${this.idtwt} GROUP BY ID`, (err, result)=>{
                if(err) throw err, this.res.status(500).send(err);
                this.res.status(200).json(result)
            });
        }
        catch(err){
            this.res.status(500).send(err);
        }
    }

    CreateLike = () =>{
        try{
            db.query(`INSERT INTO likes(idtwt, iduser) VALUES(${this.idtwt}, ${this.iduser});`, (err, res)=>{
                if(err) throw err, this.res.status(500).send(err)
                this.res.status(200)
            })
        }
        catch(err){
            this.res.status(500).send(err);
        }
    }

    DeleteLike = () =>{
        try{
            db.query(`SELECT id FROM likes WHERE idtwt = ${this.idtwt} AND iduser = ${this.iduser}`, (err, res)=>{console.log(res);
                if(res.length < 1){
                    this.CreateLike();
                }
                
                else{
                    db.query(`DELETE FROM likes WHERE idtwt = ${this.idtwt} AND iduser = ${this.iduser}`, (err, res)=>{
                        this.res.status(200).send("delete like");
                    })
                }
            })
        }
        catch(err){
            this.res.status(500).send(err);
        }
    }
}

module.exports = LikesSistem;