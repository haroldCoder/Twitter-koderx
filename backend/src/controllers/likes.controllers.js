const db = require("../db/connect");

class LikesSistem{
    constructor(id, len, idtwt, req, res){
        this.id = id;
        this.len = len;
        this.idtwt = idtwt
        this.req = req;
        this.res = res;
    }

    getLikes = () =>{
        try{
            db.query(`SELECT ID, len FROM likes WHERE idtwt = ${this.idtwt}`, (err, result)=>{
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
            db.query(`INSERT INTO likes(idtwt) VALUES(${this.idtwt});`, (err, res)=>{
                if(err) throw err, this.res.status(500).send(err)
                this.res.status(200)
            })
        }
        catch(err){
            this.res.status(500).send(err);
        }
    }

    UpdateLikes = async() =>{
        try{
            db.query(`UPDATE likes SET len = ${this.len} WHERE ID = ${this.id}`, (err)=>{
                if(err) throw err, this.res.status(500).send(err);
                else
                    this.res.status(200);
            })
        }
        catch(err){
            this.res.status(500).send(err);
        }
    }
}

module.exports = LikesSistem;