const tweets = {};

const db = require("../db/connect");

tweets.getTweets = (req, res) =>{
    db.query("SELECT * FROM tweets", (err, resu)=>{
        if(err) throw err;
        res.json(resu);
    })
}

tweets.addTweet = (req, res) =>{
    const {content, iduser} = req.body;
    console.log(iduser);
    db.query(`INSERT INTO tweets(content, iduser, date) VALUES ("${content}", ${iduser}, NOW())`, (err, resu)=>{
        if(err) throw err;
        res.json({"message": "twt posted"})
    })
}

module.exports = tweets;