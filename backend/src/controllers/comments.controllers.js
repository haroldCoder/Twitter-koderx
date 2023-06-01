let comments = {};
const db = require("../db/connect");

comments.getComments = (req, res) => {
    try{
        const { id } = req.params;
        db.query(
            `SELECT DATE_FORMAT(date, '%d/%m/%Y') AS date, Author, response FROM comments WHERE idtweet = ${id}`,
            (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            }
        );
    }
    catch(err){
        res.status(500).send("Ocurred error in the server");
        throw err;
    }
  };

comments.addComments = (req, res) =>{
    try{
        const {idtwt, response, author} = req.body;

        db.query(`INSERT INTO comments(response, idtweet, Author, date) VALUES("${response}", ${idtwt}, "${author}", NOW())`, (err, result)=>{
            if(err) throw err, res.status(404).send(err);
            res.status(200).send("comment send");
        })
    }
    catch(err){
        res.status(404).send(err);
    }
}

module.exports = comments;