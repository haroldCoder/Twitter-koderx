const tweets = {};

const db = require("../db/connect");
const LikesSistem = require("../controllers/likes.controllers");

tweets.getTweets = (req, res) =>{
    db.query(
        "SELECT tweets.Id, tweets.content, users.name FROM tweets JOIN users ON tweets.iduser = users.id",
        (err, result) => {
          if (err) throw err, console.log("err",err);
          res.json(result);
        }
    );
}

tweets.getTweet = (req, res) =>{
    const {id} = req.params;
    db.query(
        `SELECT tweets.Id, tweets.content, users.name FROM tweets JOIN users ON tweets.iduser = users.id WHERE tweets.Id = ${id}`,
        (err, result) => {
          if (err) throw err, console.log("err",err);
          res.json(result);
        }
    );
}

tweets.addTweet = (req, res) =>{
    const {content, iduser} = req.body;

    db.query(`INSERT INTO tweets(content, iduser, date) VALUES ("${content}", ${iduser}, NOW())`, (err, resu)=>{
        if(err) throw err;
        new LikesSistem(null, null, resu.insertId, req, res).CreateLike();
        res.json({"message": "twt posted"})
    })
}

module.exports = tweets;